# Integración con Bookeo

Sustituye a Cal.com desde octubre de 2026. Este documento recoge lo que hay que
saber para tocar el flujo de reservas sin romperlo.

## Datos de la cuenta

| Dato | Valor |
|------|-------|
| Account ID (`a=`) | `2234KCCH71A100914E4A` |
| Panel | Settings → Integrate into your website |
| Modo | "incrustar una aplicación en mi sitio web" |

En el panel hay que rellenar además:

- **Dirección de la página donde se incrusta el widget**: `https://<dominio>/reservas`.
  Bookeo la usa para los enlaces de "volver a la web" de sus emails.
- **Floating menu height**: puede quedarse en `0`. El código fija
  `bookeo_topOffsetDesktop` / `bookeo_topOffsetMobile` midiendo la navbar en
  vivo, y esos globals mandan sobre el valor del panel.

## Cómo está montado

```
src/data/booking.ts           BOOKEO_ACCOUNT_ID, bookingHref(), bookeoProductIdFor()
src/components/BookeoWidget   Monta el widget; absorbe las rarezas de widget.js
src/pages/Reservas.tsx        Única página con widget; lee ?actividad=<slug>
src/data/activities.ts        bookeoProductId por actividad (el `type=` de Bookeo)
scripts/check-booking-ids.mjs Aviso en build si falta algún producto
```

Flujo: cada CTA "Reservar" de una experiencia apunta a
`/reservas?actividad=<slug>`. `/reservas` traduce el slug a su
`bookeoProductId` y se lo pasa al widget como `type=`, que abre ya con esa
actividad preseleccionada.

**Los enlaces de reserva usan `<a href>`, nunca `<Link>`.** No es un descuido:
el widget hornea el producto al cargar su script y no sabe cambiar de producto
en caliente, así que cambiar de actividad exige una carga completa de
documento. Los enlaces genéricos a `/reservas` (navbar, hero, footer) sí pueden
seguir siendo `<Link>`: abren el catálogo completo, sin preselección.

## Las tres trampas de widget.js

Todo esto está verificado leyendo el `widget.js` real de la cuenta y encapsulado
en `BookeoWidget.tsx`. Si algún día el widget deja de aparecer, empieza por aquí.

1. **No arranca solo en una SPA.** `widget.js` llama a `$bookeo.documentReady()`,
   que únicamente engancha `DOMContentLoaded` y `load` — no mira
   `document.readyState`. Inyectado desde React, esos eventos ya han pasado y el
   callback no se dispara nunca. Hay que llamar a `window.bookeo_start()` a mano
   tras el `onload` del script.
2. **El iframe va en un div con id fijo: `bookeo_position`.** Si lo creamos
   nosotros, el widget se monta ahí; si no, se cuela junto al `<script>`.
3. **Solo admite una instancia por documento.** Un segundo `bookeo_start()` sin
   limpiar antes lanza un `alert("Multiple copies of the Bookeo booking widget
   are present on the page")`. Al desmontar hay que destruir el socket y devolver
   a `null` los globals `axiomct_project`, `axiomct_socket`, `axiomct_div`,
   `axiomct_iframe` y `axiomct_spinner`.

   Con un matiz: `bookeo_start()` hace `easyXDM.noConflict(...)`, que deja
   `window.easyXDM` en `undefined`. Sin restaurarlo desde
   `axiomct_project.easyXDM`, el segundo arranque revienta.

   Y con una trampa dentro de la trampa: **widget.js también se arranca a sí
   mismo**. Al ejecutarse se registra en `DOMContentLoaded` y en `load`
   (`$bookeo.documentReady`), así que puede llamar a `bookeo_start()` por
   segunda vez después del nuestro. Quién gana la carrera depende de cuánto
   tarde `load`, o sea de la red y la caché de cada visitante — por eso el
   alert aparece de forma intermitente. No se arregla ordenando nuestra
   llamada: `BookeoWidget` envuelve `bookeo_start` para que ignore todo
   arranque que no proceda.

Esos globals son internos y minificados: pueden cambiar sin aviso. Por eso el
teardown va en `try/catch` y el componente tiene un estado de fallo visible en
lugar de quedarse en blanco.

## Añadir el producto de una actividad

1. Crea el producto en Bookeo.
2. Panel → ese producto → "Integrate into your website" → copia el código del
   enlace directo (`...?type=XXXXX`).
3. Pégalo en el `bookeoProductId` de la actividad en `src/data/activities.ts`.
4. `npm run check:booking` debe quedar en verde.

Mientras `bookeoProductId` esté vacío, el CTA sigue funcionando: abre el widget
con el catálogo completo y `/reservas` muestra una nota pidiendo al visitante
que elija esa actividad en el calendario.

## Comprobación en build

`npm run build` ejecuta `scripts/check-booking-ids.mjs` (`prebuild`), que avisa de:

- actividades sin `bookeoProductId`,
- slugs de `tariffs.ts` o `services.ts` que no existen en `ACTIVITIES`.

Avisa pero **no rompe el build**: una actividad pendiente de crear en Bookeo no
puede bloquear un deploy. Para que falle (CI de QA, pre-release):
`BOOKING_IDS_STRICT=1 npm run build`.

No consulta la API de Bookeo: esa API exige clave + secreto de servidor y no
queremos esa credencial en el build.

## Probar en local

El sitio está tras la pantalla de countdown hasta su apertura: en la consola del
navegador, `localStorage.setItem('dev', 'true')` y recarga.

**No automatices pruebas contra Bookeo.** Su anti-bot detecta navegadores
headless y bloquea la IP unas 2 horas; el widget se queda entonces girando para
siempre sin ningún error en consola. Verifica el flujo de reserva a mano.

## Pendiente

- [ ] Crear los 8 productos en Bookeo y rellenar sus `bookeoProductId`.
- [ ] Registrar `https://<dominio>/reservas` en el panel de Bookeo.
- [ ] Configurar pasarela de pago en Bookeo y revisar el texto de pago de la FAQ.
- [ ] Revisar política de cancelación en `/terminos` contra la que configure Bookeo.
