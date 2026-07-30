import type { Block, LegalSection } from "./terminos";

export const COOKIES_SECTIONS: LegalSection[] = [
  {
    id: "intro",
    title: "",
    blocks: [
      { kind: "p", text: "En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), el Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018 (LOPDGDD) y las directrices publicadas por la Agencia Española de Protección de Datos (AEPD), KAITEN informa a los usuarios sobre el uso de cookies y tecnologías similares en el presente sitio web." },
      { kind: "p", text: "La presente Política de Cookies tiene como finalidad explicar de forma clara qué son las cookies, qué tipos utilizamos, con qué finalidad se emplean y cómo puede el usuario configurarlas o deshabilitarlas." },
    ],
  },
  {
    id: "que-son",
    title: "1. ¿Qué son las cookies?",
    blocks: [
      { kind: "p", text: "Las cookies son pequeños archivos de texto que se descargan en el dispositivo del usuario (ordenador, móvil o tablet) cuando visita una página web." },
      { kind: "p", text: "Su función principal es reconocer al usuario durante futuras visitas, recordar determinadas preferencias de navegación y recopilar información estadística que permita mejorar el funcionamiento y la experiencia del sitio web." },
      { kind: "p", text: "Las cookies no dañan el dispositivo del usuario y, utilizadas correctamente, permiten ofrecer un servicio más seguro, rápido y personalizado." },
      { kind: "p", text: "Además de las cookies, este sitio web puede utilizar otras tecnologías similares de almacenamiento local cuando resulte técnicamente necesario para el correcto funcionamiento de determinados servicios." },
    ],
  },
  {
    id: "para-que",
    title: "2. ¿Para qué utilizamos las cookies?",
    blocks: [
      { kind: "p", text: "En KAITEN utilizamos cookies para diferentes finalidades:" },
      { kind: "ul", items: [
        "Garantizar el correcto funcionamiento de la página web.",
        "Recordar las preferencias de navegación del usuario.",
        "Analizar de forma anónima el uso que los visitantes realizan del sitio web.",
        "Mejorar continuamente la experiencia de navegación.",
        "Facilitar la reserva de clases y el uso de formularios.",
        "Integrar servicios externos como Google Maps, Instagram, YouTube o WhatsApp cuando proceda.",
        "Medir la eficacia de nuestras campañas de marketing digital.",
      ]},
      { kind: "p", text: "Nunca utilizaremos cookies para recoger información personal sin el consentimiento del usuario cuando éste sea legalmente exigible." },
    ],
  },
  {
    id: "tipos",
    title: "3. Tipos de cookies",
    blocks: [
      { kind: "h3", text: "Según su titularidad" },
      { kind: "p", text: "Cookies propias: Son aquellas enviadas al dispositivo del usuario desde un dominio gestionado directamente por KAITEN." },
      { kind: "p", text: "Cookies de terceros: Son aquellas gestionadas por entidades externas que prestan servicios necesarios para el funcionamiento del sitio web, como Google, Meta o plataformas tecnológicas similares." },
      { kind: "h3", text: "Según su duración" },
      { kind: "p", text: "Cookies de sesión: Se eliminan automáticamente cuando el usuario cierra el navegador." },
      { kind: "p", text: "Cookies persistentes: Permanecen almacenadas durante un periodo determinado y permiten recordar preferencias en futuras visitas." },
      { kind: "h3", text: "Según su finalidad" },
      { kind: "p", text: "Cookies técnicas: Son imprescindibles para el funcionamiento del sitio web. Permiten:" },
      { kind: "ul", items: [
        "Navegar por la página.",
        "Acceder a áreas seguras.",
        "Enviar formularios.",
        "Gestionar reservas.",
        "Recordar el consentimiento sobre cookies.",
        "Garantizar la seguridad del sitio.",
      ]},
      { kind: "p", text: "Estas cookies no requieren consentimiento." },
      { kind: "p", text: "Cookies de preferencias: Permiten recordar configuraciones elegidas por el usuario, como idioma o preferencias de navegación." },
      { kind: "p", text: "Cookies analíticas: Nos permiten conocer cómo utilizan los usuarios la página web con el objetivo de mejorar continuamente nuestros contenidos y servicios. Estas cookies únicamente se instalarán cuando el usuario las acepte expresamente." },
      { kind: "p", text: "Cookies de marketing: Pueden utilizarse para medir la eficacia de campañas publicitarias o mostrar contenidos más relevantes para el usuario. Estas cookies solo se instalarán previo consentimiento." },
    ],
  },
  {
    id: "tabla",
    title: "4. Cookies utilizadas en este sitio web",
    blocks: [
      { kind: "p", text: "Actualmente KAITEN puede utilizar las siguientes cookies. La información detallada sobre cada cookie (nombre, proveedor, duración y finalidad) se mantiene actualizada y puede consultarse a través del panel de configuración de cookies disponible en el sitio web." },
    ],
  },
  {
    id: "base-juridica",
    title: "5. Base jurídica",
    blocks: [
      { kind: "p", text: "La utilización de cookies técnicas se basa en el interés legítimo de garantizar el correcto funcionamiento del sitio web." },
      { kind: "p", text: "La utilización de cookies analíticas, de personalización o marketing se basa exclusivamente en el consentimiento otorgado por el usuario mediante el panel de configuración de cookies." },
      { kind: "p", text: "El usuario podrá modificar o retirar dicho consentimiento en cualquier momento." },
    ],
  },
  {
    id: "consentimiento",
    title: "6. Gestión del consentimiento",
    blocks: [
      { kind: "p", text: "Cuando el usuario accede por primera vez al sitio web aparece un panel de configuración desde el que puede:" },
      { kind: "ul", items: [
        "Aceptar todas las cookies.",
        "Rechazarlas.",
        "Configurar individualmente cada categoría.",
      ]},
      { kind: "p", text: 'La elección realizada podrá modificarse posteriormente mediante el enlace "Configurar cookies" disponible en el sitio web.' },
    ],
  },
  {
    id: "desactivar",
    title: "7. Cómo desactivar o eliminar las cookies",
    blocks: [
      { kind: "p", text: "El usuario puede permitir, bloquear o eliminar las cookies mediante la configuración de su navegador. Los principales navegadores ofrecen esta posibilidad:" },
      { kind: "ul", items: ["Google Chrome", "Mozilla Firefox", "Microsoft Edge", "Safari", "Opera"] },
      { kind: "p", text: "Debe tenerse en cuenta que la desactivación de determinadas cookies puede afectar al correcto funcionamiento de algunas funcionalidades del sitio web, especialmente aquellas relacionadas con formularios de contacto, reservas online o contenido multimedia." },
    ],
  },
  {
    id: "terceros",
    title: "8. Cookies de terceros",
    blocks: [
      { kind: "p", text: "Este sitio web puede integrar servicios proporcionados por terceros, entre ellos:" },
      { kind: "ul", items: ["Google Analytics 4", "Google Maps", "YouTube", "Google Fonts", "Instagram", "WhatsApp"] },
      { kind: "p", text: "Cada uno de estos proveedores dispone de su propia política de privacidad y de cookies, siendo responsable del tratamiento de la información obtenida mediante sus servicios. KAITEN no controla las cookies gestionadas directamente por dichos terceros." },
    ],
  },
  {
    id: "transferencias",
    title: "9. Transferencias internacionales de datos",
    blocks: [
      { kind: "p", text: "Algunos de los proveedores tecnológicos utilizados por este sitio web pueden encontrarse fuera del Espacio Económico Europeo." },
      { kind: "p", text: "Cuando exista una transferencia internacional de datos, ésta se realizará con las garantías previstas por el Reglamento General de Protección de Datos, utilizando, cuando resulte necesario, las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea u otros mecanismos legalmente válidos." },
    ],
  },
  {
    id: "responsabilidades",
    title: "10. Responsabilidades",
    blocks: [
      { kind: "p", text: "Ni la presente página web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad o políticas de cookies que puedan tener los terceros mencionados en la presente política de cookies." },
      { kind: "p", text: "Los navegadores web son las herramientas encargadas de almacenar las cookies y desde este lugar debe efectuar su derecho a eliminación o desactivación de las mismas. Ni la presente página web ni sus representantes legales pueden garantizar la correcta o incorrecta manipulación de las cookies por parte de los mencionados navegadores." },
      { kind: "p", text: "En el caso de bloquear o eliminar las cookies, la página web no podrá mantener las preferencias del usuario y es posible que algunas características de la página web no estén operativas, o haya que solicitarle de nuevo al usuario autorización para su uso." },
    ],
  },
  {
    id: "modificaciones",
    title: "11. Modificaciones de esta política",
    blocks: [
      { kind: "p", text: "KAITEN podrá actualizar la presente Política de Cookies cuando resulte necesario por cambios legislativos, técnicos o derivados de la incorporación de nuevos servicios." },
      { kind: "p", text: "Se recomienda revisar periódicamente esta política para conocer cualquier modificación." },
    ],
  },
  {
    id: "contacto",
    title: "12. Contacto",
    blocks: [
      { kind: "p", text: "Si tiene cualquier duda relacionada con el uso de cookies en este sitio web puede ponerse en contacto con nosotros a través de los datos de contacto publicados en el apartado de Aviso Legal o mediante el correo electrónico: kaitenski@gmail.com" },
    ],
  },
];
