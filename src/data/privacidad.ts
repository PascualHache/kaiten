import type { Block, LegalSection } from "./terminos";

export const PRIVACIDAD_SECTIONS: LegalSection[] = [
  {
    id: "intro",
    title: "",
    blocks: [
      { kind: "p", text: "En KAITEN nos comprometemos a proteger la privacidad de todas las personas que utilizan nuestros servicios o visitan nuestra página web." },
      { kind: "p", text: "La presente Política de Privacidad tiene como finalidad informarle, de forma clara, transparente y detallada, sobre cómo recopilamos, utilizamos, conservamos y protegemos sus datos personales, de conformidad con el Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018 (LOPDGDD) y el resto de normativa aplicable en materia de protección de datos." },
      { kind: "p", text: "Le recomendamos leer detenidamente esta política antes de utilizar nuestros servicios o facilitarnos cualquier dato personal." },
    ],
  },
  {
    id: "responsable",
    title: "1. Responsable del tratamiento",
    blocks: [
      { kind: "p", text: "El responsable del tratamiento de sus datos personales es Kaiten con NIF 53027264M y domicilio social Avenida Pas d'Arro, 52 29 B – 25530, Vielha (Lleida)." },
      { kind: "ul", items: [
        "Correo electrónico: kaitenski@gmail.com",
        "Página web: https://kaitenski.com/",
      ]},
      { kind: "p", text: "Para cualquier consulta relacionada con el tratamiento de sus datos personales puede escribirnos a través del correo electrónico indicado anteriormente." },
    ],
  },
  {
    id: "aplicacion",
    title: "2. ¿A quién se aplica esta política?",
    blocks: [
      { kind: "p", text: "La presente Política de Privacidad es aplicable a todas aquellas personas que mantengan cualquier tipo de relación con Kaiten a través de este sitio web o de los servicios ofrecidos por la escuela. En particular, será de aplicación a los clientes que contraten cualquiera de nuestras actividades, a las personas que soliciten información o presupuestos, a los usuarios que naveguen por nuestra página web, a quienes realicen reservas de forma presencial o a través de medios electrónicos, a los participantes en cursos, clases o cualquier otra actividad organizada por Kaiten, así como a los padres, madres o tutores legales de los menores inscritos en nuestros servicios." },
      { kind: "p", text: "Igualmente, esta política resultará aplicable a las personas que se comuniquen con Kaiten mediante correo electrónico, teléfono, WhatsApp Business, formularios de contacto o a través de nuestros perfiles oficiales en redes sociales, siempre que dicha comunicación implique el tratamiento de datos personales." },
      { kind: "p", text: "La presente Política de Privacidad no será de aplicación a los tratamientos de datos realizados por terceros cuyos servicios o páginas web puedan estar enlazados desde este sitio web, siendo dichos tratamientos responsabilidad exclusiva de sus respectivos titulares y rigiéndose por sus propias políticas de privacidad." },
    ],
  },
  {
    id: "datos",
    title: "3. ¿Qué datos personales recopilamos?",
    blocks: [
      { kind: "p", text: "Los datos personales que Kaiten trata dependen del servicio solicitado por el usuario y de la relación que mantenga con nuestra escuela. En todo caso, únicamente recopilaremos aquellos datos que resulten adecuados, pertinentes y necesarios para gestionar correctamente nuestros servicios, cumplir con las obligaciones legales aplicables y ofrecer una experiencia segura y personalizada." },
      { kind: "p", text: "Con carácter general, podremos tratar datos identificativos como el nombre y los apellidos, el documento nacional de identidad, NIE o pasaporte cuando resulte necesario, la fecha de nacimiento y la nacionalidad. Asimismo, podremos solicitar datos de contacto, entre los que se incluyen el número de teléfono, la dirección de correo electrónico y la dirección postal." },
      { kind: "p", text: "Cuando el usuario realice una reserva o contrate cualquiera de las actividades organizadas por Kaiten, podremos tratar la información necesaria para gestionar correctamente dicha contratación, incluyendo las fechas de la actividad, el tipo de clase o curso contratado, el nivel técnico del alumno, el número de participantes, el idioma en el que desea recibir las clases y cualquier otra preferencia comunicada por el cliente." },
      { kind: "p", text: "Del mismo modo, podremos tratar los datos necesarios para la gestión administrativa, contable y fiscal derivada de la contratación de nuestros servicios, incluyendo la información de facturación, el método de pago utilizado y el historial de reservas realizadas. En ningún caso Kaiten almacenará los datos completos de las tarjetas bancarias de sus clientes, ya que los pagos serán procesados a través de plataformas de pago seguras gestionadas por proveedores especializados." },
      { kind: "p", text: "Cuando el participante en la actividad sea menor de edad, también podremos tratar los datos personales estrictamente necesarios para organizar correctamente el servicio contratado, incluyendo el nombre y la edad del menor, su nivel de esquí o snowboard, los datos identificativos y de contacto de su padre, madre o tutor legal y cualquier otra información imprescindible para garantizar la seguridad del participante." },
      { kind: "p", text: "Asimismo, podremos conservar las comunicaciones mantenidas con nuestros usuarios a través de los diferentes canales habilitados por Kaiten, incluyendo el correo electrónico, el teléfono, WhatsApp Business, los formularios de contacto disponibles en el sitio web o las comunicaciones realizadas mediante nuestros perfiles oficiales en redes sociales." },
      { kind: "p", text: "Cuando el usuario navegue por nuestro sitio web, podremos recopilar determinada información relacionada con su navegación mediante el uso de cookies y otras tecnologías similares, de conformidad con lo establecido en nuestra Política de Cookies." },
    ],
  },
  {
    id: "finalidad",
    title: "4. ¿Con qué finalidad tratamos sus datos?",
    blocks: [
      { kind: "p", text: "Los datos personales facilitados por los usuarios serán tratados por Kaiten únicamente para aquellas finalidades que resulten necesarias para la correcta prestación de nuestros servicios, la gestión de la relación con nuestros clientes y el cumplimiento de las obligaciones legales que resulten de aplicación." },
      { kind: "p", text: "Cuando un usuario solicite información a través del formulario de contacto, por correo electrónico, teléfono, WhatsApp Business o cualquier otro canal de comunicación, trataremos sus datos personales con la finalidad de atender su solicitud, responder a sus consultas, facilitar la información requerida, elaborar presupuestos personalizados y realizar el seguimiento de la petición hasta su completa resolución." },
      { kind: "p", text: "En caso de que el usuario formalice una reserva o contrate cualquiera de los servicios ofrecidos por Kaiten, utilizaremos los datos personales necesarios para gestionar correctamente la contratación, confirmar la disponibilidad de plazas y profesores, organizar horarios, asignar el monitor más adecuado según el nivel técnico del alumno y coordinar las actividades contratadas." },
      { kind: "p", text: "Asimismo, trataremos la información necesaria para gestionar todos los procesos administrativos derivados de la contratación, incluyendo la elaboración de presupuestos, la emisión de facturas, la gestión de cobros y pagos y el cumplimiento de las obligaciones contables, fiscales y administrativas." },
      { kind: "p", text: "Los datos personales también podrán ser utilizados para atender consultas, resolver incidencias, gestionar modificaciones o cancelaciones de reservas, tramitar reclamaciones y ofrecer un servicio de atención al cliente eficaz." },
      { kind: "p", text: "Con el fin de garantizar la seguridad durante el desarrollo de las actividades deportivas, Kaiten podrá tratar aquella información estrictamente necesaria relacionada con la edad del participante, su nivel técnico, los datos de contacto en caso de emergencia y cualquier otra información facilitada voluntariamente que resulte imprescindible para adaptar la actividad a sus necesidades." },
      { kind: "p", text: "Cuando exista el consentimiento expreso del usuario o una relación contractual previa que lo permita, Kaiten podrá remitir comunicaciones comerciales relacionadas con sus propios servicios, incluyendo información sobre nuevos cursos, promociones, actividades especiales o novedades vinculadas a la escuela. El usuario podrá revocar su consentimiento en cualquier momento." },
    ],
  },
  {
    id: "base-juridica",
    title: "5. ¿Cuál es la base jurídica del tratamiento?",
    blocks: [
      { kind: "p", text: "Kaiten tratará los datos personales de los usuarios únicamente cuando exista una base jurídica que legitime dicho tratamiento, de conformidad con lo establecido en el Reglamento (UE) 2016/679 y el resto de la normativa aplicable en materia de protección de datos." },
      { kind: "p", text: "Con carácter general, el tratamiento de los datos personales será necesario para la ejecución del contrato o para la aplicación de medidas precontractuales solicitadas por el propio usuario, como sucede cuando se solicita información, se elabora un presupuesto o se realiza la reserva y contratación de cualquiera de los servicios ofrecidos por Kaiten." },
      { kind: "p", text: "En aquellos supuestos en los que la normativa lo exija, el tratamiento de los datos se basará en el consentimiento libre, específico, informado e inequívoco del usuario. El consentimiento podrá retirarse en cualquier momento sin que ello afecte a la licitud del tratamiento realizado con anterioridad a dicha retirada." },
      { kind: "p", text: "Asimismo, Kaiten podrá tratar los datos personales cuando resulte necesario para el cumplimiento de obligaciones legales derivadas de la normativa fiscal, contable, administrativa o de cualquier otra disposición que resulte de aplicación a la actividad desarrollada por la escuela." },
      { kind: "p", text: "Del mismo modo, determinados tratamientos podrán fundamentarse en el interés legítimo de Kaiten, siempre que dicho interés no prevalezca sobre los derechos y libertades de los usuarios." },
    ],
  },
  {
    id: "obtencion",
    title: "6. ¿Cómo obtenemos sus datos?",
    blocks: [
      { kind: "p", text: "Kaiten obtiene los datos personales directamente de los propios usuarios a través de los distintos canales de comunicación y contratación habilitados para la prestación de sus servicios. En todo momento, los datos serán facilitados de forma voluntaria por el interesado o, cuando proceda, por su padre, madre o tutor legal." },
      { kind: "p", text: "Los datos personales podrán recopilarse cuando el usuario solicite información a través de los formularios de contacto disponibles en el sitio web, realice una reserva o contrate cualquiera de los servicios ofrecidos por KAITEN, contacte con nosotros mediante correo electrónico, teléfono o WhatsApp Business, interactúe con nuestros perfiles oficiales en redes sociales o facilite su información de forma presencial durante la prestación de la actividad." },
      { kind: "p", text: "Asimismo, determinados datos relacionados con la navegación podrán obtenerse automáticamente mediante el uso de cookies y otras tecnologías similares, de conformidad con lo establecido en nuestra Política de Cookies." },
      { kind: "p", text: "El usuario garantiza que todos los datos personales facilitados a Kaiten son veraces, exactos, completos y se encuentran debidamente actualizados, siendo el único responsable de los daños o perjuicios que pudieran derivarse de la comunicación de datos falsos, inexactos, incompletos o no actualizados." },
    ],
  },
  {
    id: "menores",
    title: "7. Tratamiento de datos de menores",
    blocks: [
      { kind: "p", text: "KAITEN presta servicios dirigidos a menores de edad." },
      { kind: "p", text: "Cuando el alumno sea menor de 14 años, los datos personales únicamente serán tratados con el consentimiento de su padre, madre o tutor legal, quien declara disponer de la capacidad suficiente para autorizar el tratamiento de dichos datos." },
      { kind: "p", text: "Los datos de los menores serán utilizados exclusivamente para la correcta organización y prestación de la actividad contratada." },
    ],
  },
  {
    id: "redes-sociales",
    title: "8. Redes sociales",
    blocks: [
      { kind: "p", text: "Kaiten dispone de perfiles oficiales en distintas redes sociales con la finalidad de informar sobre sus servicios, compartir contenidos relacionados con la escuela y mantener una comunicación directa con sus usuarios y clientes." },
      { kind: "p", text: "Cuando el usuario interactúe con nuestros perfiles mediante acciones como seguir nuestras cuentas, indicar que le gusta una publicación, realizar comentarios, enviar mensajes o compartir contenidos, podremos tratar aquella información de su perfil que la propia red social permita compartir, como su nombre, fotografía de perfil, nombre de usuario o dirección de correo electrónico." },
      { kind: "p", text: "Las interacciones realizadas a través de redes sociales estarán sujetas tanto a la presente Política de Privacidad como a las condiciones de uso y políticas de privacidad establecidas por cada plataforma. Kaiten no es responsable del tratamiento de los datos personales efectuado directamente por dichas redes sociales." },
    ],
  },
  {
    id: "conservacion",
    title: "9. ¿Durante cuánto tiempo conservamos sus datos?",
    blocks: [
      { kind: "p", text: "Kaiten conservará los datos personales de los usuarios únicamente durante el tiempo necesario para cumplir las finalidades para las que fueron recogidos y para atender las obligaciones legales derivadas de la prestación de sus servicios." },
      { kind: "p", text: "Con carácter general, los datos se conservarán mientras exista una relación contractual o comercial entre el usuario y Kaiten, durante los plazos de conservación exigidos por la normativa fiscal, contable, mercantil o cualquier otra disposición legal que resulte de aplicación, mientras el usuario no retire el consentimiento otorgado para aquellos tratamientos basados en el mismo, y durante el tiempo necesario para atender posibles reclamaciones o responsabilidades que pudieran derivarse de la prestación de los servicios." },
      { kind: "p", text: "Una vez finalizados los plazos de conservación aplicables, los datos personales serán suprimidos de forma definitiva o, cuando la normativa así lo exija, permanecerán debidamente bloqueados durante el tiempo estrictamente necesario para atender posibles responsabilidades legales." },
    ],
  },
  {
    id: "compartir",
    title: "10. ¿Con quién compartimos sus datos?",
    blocks: [
      { kind: "p", text: "KAITEN únicamente comunicará datos personales cuando sea necesario para la prestación del servicio o exista obligación legal. Entre otros:" },
      { kind: "ul", items: [
        "Administración Tributaria.",
        "Entidades bancarias.",
        "Plataformas de pago.",
        "Proveedores tecnológicos.",
        "Empresas de alojamiento web.",
        "Gestoría.",
        "Aseguradoras vinculadas a la actividad, cuando resulte necesario para la correcta prestación del servicio contratado.",
      ]},
      { kind: "p", text: "Todos ellos actuarán como encargados del tratamiento cuando corresponda y estarán sujetos a las obligaciones previstas en el RGPD." },
    ],
  },
  {
    id: "transferencias",
    title: "11. Transferencias internacionales",
    blocks: [
      { kind: "p", text: "Algunos proveedores tecnológicos utilizados por Kaiten (por ejemplo, servicios de correo electrónico, almacenamiento en la nube o herramientas analíticas) pueden encontrarse fuera del Espacio Económico Europeo." },
      { kind: "p", text: "Cuando exista una transferencia internacional de datos, esta se realizará únicamente con proveedores que ofrezcan garantías adecuadas conforme al RGPD, incluyendo, cuando proceda, las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea." },
    ],
  },
  {
    id: "derechos",
    title: "12. Derechos de los usuarios",
    blocks: [
      { kind: "p", text: "Puede ejercer en cualquier momento los siguientes derechos:" },
      { kind: "ul", items: [
        "Acceso a sus datos personales.",
        "Rectificación de datos inexactos o incompletos.",
        "Supresión de los datos cuando ya no sean necesarios.",
        "Oposición al tratamiento de sus datos.",
        "Limitación del tratamiento.",
        "Portabilidad de sus datos.",
        "Retirada del consentimiento en cualquier momento.",
      ]},
      { kind: "p", text: "Para ello deberá enviar una solicitud junto con un documento acreditativo de identidad al correo electrónico: kaitenski@gmail.com" },
      { kind: "p", text: "Asimismo, si considera que el tratamiento de sus datos no se ajusta a la normativa vigente, podrá presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es)." },
    ],
  },
  {
    id: "seguridad",
    title: "13. Seguridad de la información",
    blocks: [
      { kind: "p", text: "Kaiten adopta las medidas técnicas y organizativas necesarias para proteger los datos personales frente a la pérdida, alteración, acceso no autorizado o cualquier otro tratamiento ilícito." },
      { kind: "p", text: "Nuestro personal y colaboradores que puedan acceder a datos personales están sujetos al deber de confidencialidad y reciben las instrucciones necesarias para garantizar el cumplimiento de la normativa vigente." },
    ],
  },
  {
    id: "modificaciones",
    title: "14. Modificaciones de la presente política",
    blocks: [
      { kind: "p", text: "Kaiten podrá actualizar esta Política de Privacidad cuando resulte necesario para adaptarla a cambios legislativos, tecnológicos o derivados de la evolución de nuestros servicios." },
      { kind: "p", text: "Las modificaciones serán publicadas en esta misma página con indicación de la fecha de actualización." },
    ],
  },
  {
    id: "contacto",
    title: "15. Contacto",
    blocks: [
      { kind: "p", text: "Para cualquier consulta relacionada con esta Política de Privacidad o con el tratamiento de sus datos personales puede contactar con nosotros a través de:" },
      { kind: "ul", items: ["KAITEN — kaitenski@gmail.com"] },
    ],
  },
];
