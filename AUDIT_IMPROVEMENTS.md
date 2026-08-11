# Instrucciones de corrección — Web Kaiten

Contexto: la web aún no está publicada. Los precios "XX €" y "-€" NO son un
problema (se completarán en desarrollo). La reserva se resuelve abriendo un
widget/enlace de Cal.com (no hay que construir un flujo de reserva propio).
Todo lo demás del audit sigue aplicando.

1. **Botones de reserva → Cal.com**
   - Todos los CTA "Reservar" (header, hero, tarjetas, banda final, tarifas)
     deben abrir el mismo widget/popup de Cal.com (o enlazar a la página de
     Cal.com), pasando el nombre de la experiencia como parámetro si Cal.com
     lo soporta (para prellenar el tipo de evento).
   - Unificar el texto del botón: "Reservar" en todas partes (hoy hay
     "RESERVA", "Reservar ahora", "Reserva tu clase particular", "Reserva tu
     Full Day / Half Day"...). Puede variar el contexto pero no la palabra
     raíz.

2. **Widget flotante duplicado**
   - Dejar una sola instancia del botón circular flotante en todas las
     páginas. Revisar el componente — probablemente se está montando más de
     una vez por página. Añadir `aria-label` describiendo su función.

3. **Barra promocional → enlace directo de WhatsApp**
   - Sustituir "Escribe DESCUENTOS EXCLUSIVOS al 699 820 954" por un `<a>`
     con `href="https://wa.me/34699820954?text=DESCUENTOS%20EXCLUSIVOS"`.
   - Persistir el cierre de la barra en `localStorage` durante la sesión.

4. **Consentimiento RGPD en el formulario de newsletter**
   - Añadir checkbox de consentimiento + enlace a política de privacidad
     junto al campo de email. Mostrar estado de éxito/error tras enviar.

5. **Contraste de texto**
   - Oscurecer el lavanda usado en texto (etiquetas, subtítulos) — el actual
     está entre 3:1, por debajo de AA para texto pequeño. Mantener el
     lavanda claro solo para fondos/botones.
   - Añadir velo/gradiente de contraste en las tarjetas con texto blanco
     sobre foto (carrusel de experiencias, tarjeta "Todo comenzó en el
     Valle de Arán").

6. **Sistema de nombres único**
   Usar exactamente estos 9 nombres en menú, tarjetas, tarifas y pie:
   - Clases Privadas
   - Full Day
   - Half Day
   - Kaiten Programs
   - Safari
   - Freeride
   - Kids & Friends & Family
   - Tardeo (-15%)
   - Asesoramiento de Material (Equipment Consultancy)

7. **Página Equipo (nueva)**
   - Crear sección/página con ficha por instructor: foto, titulación,
     idiomas, niveles que enseña, especialidad.
   - Enlazar desde el menú principal y desde el flujo de reserva (aunque el
     flujo en sí sea Cal.com, se puede pasar el profesor elegido como nota
     o parámetro del evento).

8. **Página Reservas → tabla comparativa**
   - Sustituir el acordeón puro por: tabla comparativa arriba (duración,
     personas, nivel, precio desde) + acordeón debajo solo para detalle
     extendido. Cada fila/producto con su botón "Reservar" → Cal.com.
   - Quitar "en Baqueira" repetido en cada título (decirlo una vez en la
     cabecera de la página).

9. **Página Tarifas**
   - Igualar alturas de tarjeta entre las dos columnas ("Privadas" /
     "Especiales") con la misma cuadrícula.
   - Sacar "Instructor titulado · Seguro de RC · Atención personalizada" de
     cada tarjeta a una línea común arriba ("Todas las experiencias
     incluyen…").
   - Añadir botón "Reservar" en cada tarjeta → Cal.com.
   - Foto distinta por producto (Full Day y Half Day comparten imagen hoy).

10. **FAQ**
    - Añadir sección/página con: punto de encuentro, forfait y material
      incluido o no, qué pasa con mal tiempo, política de
      cancelación/reembolso, seguro, idiomas, edad mínima niños, forma de
      pago, qué llevar.

11. **Reseñas**
    - Añadir franja de reseñas verificadas (Google/Trustpilot) en Home y en
      cada página de experiencia.

12. **Nivel → acción**
    - En la página Niveles, cada fila debe enlazar a las experiencias
      adecuadas para ese nivel (botón o link "Ver clases para este nivel").

13. **Sistema de diseño único**
    - Una sola escala tipográfica y un único estilo de titular (hoy Home/
      Reservas usan lavanda + minúsculas geométricas, Historia/Valores usan
      negro extra-bold en mayúsculas).
    - Un único acento de color (lavanda). Retirar el verde lima y el verde
      oliva o limitarlos a un uso puntual y coherente.
    - Ancho máximo de contenido único (~1280–1440px) en todas las páginas —
      hoy Tarifas/Niveles quedan en columna estrecha con márgenes enormes.

14. **Fusionar Historia + Valores**
    - Considerar unir en una sola página "Nosotros", reduciendo el texto a
      la mitad. Historia es un muro de texto en primera persona sin
      imágenes intercaladas.

15. **Accesibilidad**
    - Revisar jerarquía de encabezados (un solo H1 por página).
    - Foco visible (`:focus-visible`) en todos los elementos interactivos.
    - Alt descriptivo en imágenes con contenido informativo.
    - Numeraciones decorativas ("01/02/03") marcadas como `aria-hidden`.

16. **Idioma**
    - Verificar que el selector ES/EN traduce realmente todas las páginas.
    - Revisar términos mixtos (Kids & Friends & Family, Tardeo, Full o
      half day) y decidir un idioma consistente por versión.

## Fuera de alcance de este pase

- Precios "XX €" / "-€": pendientes de definición de negocio, no tocar.
- Flujo de reserva propio (calendario, pago): sustituido por Cal.com.
