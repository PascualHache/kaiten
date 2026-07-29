export type Block =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "h3"; text: string };

export interface LegalSection {
  id: string;
  title: string;
  blocks: Block[];
}

export const MAIN_SECTIONS: LegalSection[] = [
  {
    id: "objeto",
    title: "1. Objeto y ámbito de aplicación",
    blocks: [
      { kind: "p", text: "Las presentes Condiciones Generales de Contratación (en adelante, las «Condiciones») regulan la contratación de clases de esquí, snowboard, actividades de montaña, experiencias deportivas y demás servicios ofrecidos por Kaiten a través de su página web, canales digitales, correo electrónico, teléfono, WhatsApp o cualquier otro medio habilitado para la contratación." },
      { kind: "p", text: "Estas Condiciones serán de aplicación a todas las reservas realizadas por clientes particulares, empresas, clubes, agencias de viaje, entidades deportivas o cualquier otra persona física o jurídica que contrate alguno de los servicios ofrecidos por Kaiten." },
      { kind: "p", text: "La realización de una reserva implica la lectura, comprensión y aceptación expresa de las presentes Condiciones Generales, así como de la Política de Privacidad, Política de Cookies y Aviso Legal publicados en la página web." },
      { kind: "p", text: "Kaiten se reserva el derecho de modificar las presentes Condiciones para adaptarlas a cambios legislativos, organizativos o comerciales. En todo caso, serán aplicables las condiciones vigentes en el momento de formalizar la reserva." },
    ],
  },
  {
    id: "identificacion",
    title: "2. Identificación del titular",
    blocks: [
      { kind: "p", text: "De conformidad con la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa que el titular de los servicios es:" },
      { kind: "p", text: "Es Kaiten con NIF 53027264M y domicilio social Avenida Pas d'Arro, 52 29 B – 25530, Vielha (Lleida)." },
      { kind: "ul", items: [
        "Correo electrónico: kaitenski@gmail.com",
        "Página web: https://kaitenski.com/",
        "Dominio web: www.kaitenski.com",
      ]},
    ],
  },
  {
    id: "definiciones",
    title: "3. Definiciones",
    blocks: [
      { kind: "p", text: "A efectos de estas Condiciones se entenderá por:" },
      { kind: "ul", items: [
        "Cliente: Persona física o jurídica que realiza una reserva.",
        "Alumno: Persona que participa efectivamente en la actividad contratada.",
        "Reserva: Contratación de cualquiera de los servicios ofrecidos por Kaiten.",
        "Servicios: Clases particulares, clases compartidas, cursos colectivos, cursos infantiles, actividades de perfeccionamiento técnico, Safari de Esquí, programas de varios días, experiencias personalizadas y cualquier otra actividad ofrecida por Kaiten.",
        "Instructor: Técnico Deportivo o profesional asignado por Kaiten para la prestación del servicio.",
      ]},
    ],
  },
  {
    id: "procedimiento",
    title: "4. Procedimiento de reserva",
    blocks: [
      { kind: "p", text: "Las reservas podrán realizarse mediante:" },
      { kind: "ul", items: ["Página web.", "Correo electrónico.", "Teléfono.", "WhatsApp.", "Plataformas autorizadas.", "Agencias colaboradoras.", "Cualquier otro canal oficial habilitado por KAITEN."] },
      { kind: "p", text: "Toda reserva estará sujeta a disponibilidad de profesores, horarios, condiciones meteorológicas y disponibilidad de la estación de esquí." },
      { kind: "p", text: "La reserva únicamente se considerará formalizada cuando concurran conjuntamente las siguientes circunstancias:" },
      { kind: "ul", items: ["Aceptación expresa por parte de Kaiten.", "Recepción del pago correspondiente o del depósito establecido.", "Envío de la confirmación al cliente."] },
      { kind: "p", text: "Hasta ese momento, cualquier solicitud tendrá únicamente carácter de petición de reserva." },
      { kind: "p", text: "KAITEN podrá rechazar solicitudes cuando existan causas organizativas, técnicas, de seguridad o de disponibilidad." },
    ],
  },
  {
    id: "confirmacion",
    title: "5. Confirmación de la reserva",
    blocks: [
      { kind: "p", text: "Una vez confirmado el pago, Kaiten remitirá al cliente una confirmación por correo electrónico o por el medio utilizado durante la contratación." },
      { kind: "p", text: "La confirmación incluirá, siempre que resulte posible:" },
      { kind: "ul", items: ["Fecha.", "Horario.", "Duración.", "Número de participantes.", "Modalidad contratada.", "Punto de encuentro.", "Importe abonado.", "Importe pendiente, en su caso.", "Condiciones específicas aplicables."] },
      { kind: "p", text: "El cliente deberá revisar la información facilitada y comunicar cualquier error en un plazo máximo de 24 horas desde su recepción." },
    ],
  },
  {
    id: "requisitos",
    title: "6. Requisitos para contratar",
    blocks: [
      { kind: "p", text: "Podrán contratar los servicios únicamente las personas mayores de 18 años con plena capacidad legal para contratar." },
      { kind: "p", text: "Las personas que efectúen una reserva en representación de terceros garantizan disponer de la autorización necesaria para ello y asumirán la responsabilidad derivada de dicha representación." },
      { kind: "p", text: "Kaiten podrá solicitar documentación acreditativa cuando resulte razonablemente necesario para verificar la identidad del contratante o de los participantes." },
    ],
  },
  {
    id: "menores",
    title: "7. Reservas para menores de edad",
    blocks: [
      { kind: "p", text: "Los menores únicamente podrán participar en las actividades cuando la reserva haya sido realizada o autorizada por quien ostente su patria potestad, tutela o representación legal." },
      { kind: "p", text: "La persona que efectúe la reserva declara expresamente que dispone de dicha autorización y asume toda responsabilidad derivada de la misma." },
      { kind: "p", text: "Los representantes legales deberán facilitar a Kaiten toda aquella información relevante relativa al menor que pueda afectar al correcto desarrollo de la actividad, incluyendo, entre otros:" },
      { kind: "ul", items: ["Alergias.", "Enfermedades.", "Lesiones.", "Necesidades especiales.", "Medicación.", "Limitaciones físicas.", "Cualquier circunstancia médica relevante."] },
      { kind: "p", text: "La omisión de dicha información podrá comprometer la seguridad del alumno, exonerando a Kaiten de las responsabilidades que legalmente pudieran derivarse de dicho incumplimiento." },
    ],
  },
  {
    id: "aptitud",
    title: "8. Declaración de aptitud física y responsabilidad del alumno",
    blocks: [
      { kind: "p", text: "El cliente declara, bajo su responsabilidad, que tanto él como las personas incluidas en la reserva reúnen las condiciones físicas, técnicas y psicológicas adecuadas para participar en las actividades contratadas." },
      { kind: "p", text: "Asimismo manifiesta que:" },
      { kind: "ul", items: ["No padece enfermedades incompatibles con la práctica del esquí o snowboard.", "No presenta limitaciones que puedan poner en riesgo su seguridad o la de terceros.", "Informará previamente de cualquier circunstancia médica relevante.", "Seguirá en todo momento las instrucciones del instructor."] },
      { kind: "p", text: "La práctica del esquí y de los deportes de montaña implica riesgos inherentes que no pueden eliminarse completamente incluso adoptando todas las medidas razonables de seguridad." },
      { kind: "p", text: "El alumno participa voluntariamente siendo plenamente consciente de dichos riesgos." },
      { kind: "p", text: "Kaiten podrá denegar el acceso, suspender o finalizar una actividad cuando considere que el estado físico, técnico o psicológico del alumno pudiera poner en riesgo su seguridad, la del instructor o la del resto de participantes." },
      { kind: "p", text: "En estos supuestos, la suspensión del servicio por motivos de seguridad no dará derecho a indemnización ni reembolso, salvo que Kaiten determine expresamente lo contrario." },
    ],
  },
  {
    id: "informacion-previa",
    title: "9. Información previa a la contratación",
    blocks: [
      { kind: "p", text: "Antes de formalizar una reserva, el cliente dispondrá de información suficiente sobre:" },
      { kind: "ul", items: ["Características del servicio contratado.", "Duración.", "Nivel técnico requerido.", "Precio total.", "Impuestos aplicables.", "Material necesario.", "Requisitos de participación.", "Política de cancelación.", "Condiciones meteorológicas que puedan afectar a la actividad."] },
      { kind: "p", text: "El cliente declara haber recibido dicha información con carácter previo a la contratación y comprender plenamente las características del servicio contratado." },
    ],
  },
  {
    id: "precio",
    title: "10. Precio de los servicios",
    blocks: [
      { kind: "p", text: "Todos los precios publicados por KAITEN se expresan en euros (€) e incluyen los impuestos legalmente aplicables, salvo que se indique expresamente lo contrario." },
      { kind: "p", text: "Los precios podrán variar en función de la temporada, la duración del servicio, el número de participantes, el idioma solicitado, el nivel técnico, el tipo de actividad o cualquier otra circunstancia objetiva indicada durante el proceso de contratación." },
      { kind: "p", text: "El precio aplicable será el vigente en el momento de formalizar la reserva y quedará reflejado en la confirmación enviada al cliente." },
      { kind: "p", text: "KAITEN podrá modificar libremente sus tarifas para futuras contrataciones, sin que dichas modificaciones afecten a reservas ya confirmadas." },
    ],
  },
  {
    id: "pago",
    title: "11. Formas de pago",
    blocks: [
      { kind: "p", text: "El importe de la reserva deberá abonarse mediante alguno de los sistemas de pago habilitados por KAITEN, entre los que podrán encontrarse:" },
      { kind: "ul", items: ["Tarjeta bancaria.", "Transferencia bancaria.", "Bizum.", "Pasarela de pago online.", "Cualquier otro sistema que KAITEN habilite en cada momento."] },
      { kind: "p", text: "Salvo que expresamente se indique otra cosa, la reserva únicamente quedará confirmada cuando el pago haya sido correctamente recibido y validado por KAITEN." },
      { kind: "p", text: "Cuando el pago se realice mediante transferencia bancaria, KAITEN podrá solicitar el justificante de la operación y no estará obligado a confirmar la reserva hasta verificar el ingreso efectivo en su cuenta bancaria." },
      { kind: "p", text: "Los datos de pago serán gestionados por proveedores especializados que cumplen los estándares de seguridad aplicables. KAITEN no almacena los datos completos de las tarjetas bancarias utilizadas durante el proceso de pago." },
    ],
  },
  {
    id: "facturacion",
    title: "12. Facturación",
    blocks: [
      { kind: "p", text: "El cliente podrá solicitar la correspondiente factura en cualquier momento." },
      { kind: "p", text: "Cuando el contratante actúe como empresa o profesional, deberá facilitar los datos fiscales necesarios para su emisión antes de la prestación del servicio." },
      { kind: "p", text: "La factura será emitida en formato electrónico, salvo que el cliente solicite expresamente otro formato cuando la normativa lo permita." },
    ],
  },
  {
    id: "desistimiento",
    title: "13. Derecho de desistimiento",
    blocks: [
      { kind: "p", text: "Con carácter general, los consumidores disponen del derecho de desistimiento previsto en el Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios." },
      { kind: "p", text: "No obstante, de conformidad con el artículo 103 del citado texto legal, dicho derecho no resultará aplicable cuando la contratación tenga por objeto actividades de ocio, deportivas, recreativas o de tiempo libre que prevean una fecha o un periodo concreto de ejecución, como sucede con las clases de esquí, snowboard, cursos, programas de formación, actividades de montaña o experiencias organizadas por KAITEN." },
      { kind: "p", text: "En consecuencia, una vez confirmada una reserva para una fecha determinada, el cliente no podrá ejercer el derecho legal de desistimiento previsto para otros contratos celebrados a distancia, sin perjuicio de las condiciones de modificación o cancelación establecidas en las presentes Condiciones Generales." },
      { kind: "p", text: "Cuando excepcionalmente resulte aplicable el derecho de desistimiento, KAITEN procederá al reembolso de las cantidades que correspondan utilizando, siempre que sea posible, el mismo medio de pago empleado por el cliente, dentro del plazo legalmente establecido." },
    ],
  },
  {
    id: "modificaciones",
    title: "14. Modificaciones de la reserva",
    blocks: [
      { kind: "p", text: "Las solicitudes de modificación deberán realizarse por escrito mediante correo electrónico o a través de los canales oficiales de atención al cliente." },
      { kind: "p", text: "Las modificaciones estarán sujetas a disponibilidad de profesores, horarios y plazas." },
      { kind: "p", text: "Con carácter general, las solicitudes recibidas con una antelación mínima de setenta y dos (72) horas respecto al inicio del servicio podrán ser atendidas siempre que exista disponibilidad." },
      { kind: "p", text: "Las modificaciones solicitadas con menor antelación podrán ser aceptadas únicamente cuando resulte organizativamente posible, sin que KAITEN venga obligada a ello." },
      { kind: "p", text: "Las modificaciones que impliquen un incremento del precio deberán ser abonadas por el cliente antes del inicio del servicio." },
      { kind: "p", text: "Cuando la modificación suponga una reducción del precio inicialmente contratado, KAITEN no estará obligada a devolver la diferencia, salvo que expresamente acuerde lo contrario." },
    ],
  },
  {
    id: "cancelaciones-cliente",
    title: "15. Cancelaciones efectuadas por el cliente",
    blocks: [
      { kind: "p", text: "Las cancelaciones deberán comunicarse por escrito a través del correo electrónico oficial de KAITEN o mediante cualquier otro canal expresamente habilitado." },
      { kind: "p", text: "Salvo que se establezcan condiciones particulares para un servicio concreto, será de aplicación la siguiente política:" },
      { kind: "ul", items: [
        "Cancelaciones comunicadas con más de siete (7) días naturales de antelación: reembolso del importe abonado, descontando, en su caso, los gastos de gestión que se hubieran informado previamente.",
        "Cancelaciones comunicadas entre siete (7) y cuatro (4) días naturales antes del inicio del servicio: KAITEN podrá retener hasta el treinta por ciento (30 %) del importe total de la reserva.",
        'Cancelaciones comunicadas con tres (3) días naturales o menos de antelación, así como la no presentación del alumno («no show»): no procederá devolución alguna y podrá cobrarse el cien por cien (100 %) del importe contratado.',
      ]},
      { kind: "p", text: "Las anteriores condiciones responden a la planificación anticipada de instructores, recursos materiales y disponibilidad limitada durante la temporada de esquí." },
    ],
  },
  {
    id: "cancelaciones-kaiten",
    title: "16. Cancelaciones efectuadas por KAITEN",
    blocks: [
      { kind: "p", text: "KAITEN podrá cancelar o modificar una actividad cuando concurran circunstancias que impidan su correcta realización, entre ellas:" },
      { kind: "ul", items: ["Condiciones meteorológicas adversas.", "Riesgo para la seguridad de los participantes.", "Cierre total o parcial de la estación de esquí.", "Cierre de remontes esenciales para el desarrollo de la actividad.", "Riesgo de aludes.", "Restricciones impuestas por las autoridades competentes.", "Enfermedad o indisponibilidad sobrevenida del instructor.", "Causas de fuerza mayor.", "Cualquier otra circunstancia ajena al control razonable de KAITEN."] },
      { kind: "p", text: "Siempre que resulte posible, KAITEN ofrecerá al cliente una de las siguientes alternativas:" },
      { kind: "ul", items: ["Cambio de fecha.", "Cambio de horario.", "Sustitución por otro instructor con cualificación equivalente.", "Sustitución por un servicio de características similares.", "Emisión de un bono por el importe correspondiente.", "Reembolso total o parcial cuando ninguna de las alternativas anteriores resulte viable."] },
      { kind: "p", text: "La elección de la solución aplicable dependerá de las circunstancias concretas de cada caso, procurando siempre minimizar los perjuicios para ambas partes." },
      { kind: "p", text: "Cuando la actividad pueda desarrollarse de forma segura, aunque existan condiciones meteorológicas distintas a las previstas inicialmente, la prestación del servicio continuará con normalidad." },
    ],
  },
  {
    id: "meteorologia",
    title: "17. Condiciones meteorológicas y estado de la estación",
    blocks: [
      { kind: "p", text: "La práctica del esquí, del snowboard y de las actividades de montaña está condicionada por factores meteorológicos, nivológicos y de seguridad que pueden variar de forma imprevisible." },
      { kind: "p", text: "El cliente declara conocer y aceptar que la realización de los servicios contratados depende, entre otros factores, de las condiciones climatológicas, del estado de la nieve, del funcionamiento de los remontes mecánicos, de las decisiones adoptadas por la estación de esquí y de las instrucciones emitidas por las autoridades competentes." },
      { kind: "p", text: "La lluvia, nieve, viento, niebla, bajas temperaturas o cualquier otra circunstancia meteorológica no supondrán, por sí mismas, la cancelación automática de la actividad cuando, a juicio de KAITEN, existan condiciones suficientes para desarrollar el servicio con las debidas garantías de seguridad." },
      { kind: "p", text: "Únicamente cuando KAITEN considere que las condiciones existentes comprometen la seguridad de los alumnos o de los instructores podrá suspender, modificar o cancelar la actividad." },
      { kind: "p", text: "En tales casos, KAITEN podrá ofrecer un cambio de fecha, un cambio de horario, un bono por el importe correspondiente o, cuando proceda, el reembolso total o parcial del servicio no prestado." },
    ],
  },
  {
    id: "cierre-estacion",
    title: "18. Cierre de la estación de esquí y de los remontes",
    blocks: [
      { kind: "p", text: "Cuando la estación de esquí permanezca totalmente cerrada al público por causas ajenas a KAITEN y resulte imposible prestar el servicio contratado, el cliente podrá optar entre:" },
      { kind: "ul", items: ["Reprogramar la actividad para otra fecha sujeta a disponibilidad.", "Recibir un bono por el importe abonado para utilizar durante la temporada en curso o la siguiente, cuando resulte posible.", "Solicitar el reembolso de las cantidades correspondientes al servicio no disfrutado."] },
      { kind: "p", text: "Cuando únicamente permanezcan cerrados determinados sectores, remontes o pistas, pero la actividad pueda desarrollarse en otras zonas abiertas de la estación con condiciones razonables de seguridad y calidad, el servicio se considerará plenamente ejecutable y no existirá derecho automático a cancelación o reembolso." },
      { kind: "p", text: "Las decisiones adoptadas por la dirección de la estación de esquí respecto al cierre o apertura de pistas y remontes serán ajenas al control de KAITEN y no generarán responsabilidad alguna para la escuela." },
    ],
  },
  {
    id: "puntualidad",
    title: "19. Puntualidad y no presentación",
    blocks: [
      { kind: "p", text: "El cliente deberá presentarse en el punto de encuentro indicado con la antelación suficiente para iniciar la actividad a la hora prevista." },
      { kind: "p", text: "Salvo que KAITEN comunique expresamente otro plazo, se recomienda acudir con una antelación mínima de diez (10) minutos." },
      { kind: "p", text: "El instructor permanecerá en el punto de encuentro durante un máximo de quince (15) minutos desde la hora fijada para el inicio de la actividad." },
      { kind: "p", text: 'Transcurrido dicho plazo sin que el alumno comparezca, KAITEN podrá considerar que el cliente no se ha presentado («no show»), entendiéndose el servicio como prestado a todos los efectos, sin derecho a recuperación del tiempo perdido, modificación de la reserva ni devolución del importe abonado.' },
      { kind: "p", text: "Los retrasos imputables al cliente no darán lugar a ampliaciones del horario inicialmente contratado." },
    ],
  },
  {
    id: "material",
    title: "20. Material y equipamiento",
    blocks: [
      { kind: "p", text: "Cada participante será responsable de acudir con el material necesario para la correcta realización de la actividad, salvo que expresamente se haya contratado un servicio que incluya su suministro." },
      { kind: "p", text: "Con carácter general, el alumno deberá disponer de:" },
      { kind: "ul", items: ["Esquís o snowboard adecuados a su nivel.", "Botas correctamente ajustadas.", "Bastones cuando proceda.", "Casco homologado cuando sea obligatorio o recomendable.", "Ropa técnica adecuada para condiciones invernales.", "Guantes.", "Gafas de sol o máscara de esquí.", "Protección solar."] },
      { kind: "p", text: "Cuando la actividad requiera forfait para la utilización de los remontes mecánicos, éste deberá ser adquirido previamente por el cliente, salvo que expresamente se indique lo contrario durante el proceso de contratación." },
      { kind: "p", text: "KAITEN podrá impedir el inicio de la actividad cuando considere que el material utilizado no reúne las condiciones mínimas de seguridad." },
    ],
  },
  {
    id: "seguridad",
    title: "21. Normas de seguridad",
    blocks: [
      { kind: "p", text: "Todos los alumnos deberán seguir en todo momento las instrucciones impartidas por los instructores de KAITEN." },
      { kind: "p", text: "Asimismo, deberán respetar las normas de funcionamiento de la estación de esquí, las recomendaciones de seguridad publicadas por Baqueira Beret y las normas internacionales de comportamiento en pistas establecidas por la Federación Internacional de Esquí (FIS), o aquellas que las sustituyan." },
      { kind: "p", text: "KAITEN podrá suspender inmediatamente la participación de cualquier alumno cuando observe conductas que puedan poner en riesgo su propia seguridad o la de terceras personas. Entre otras, tendrán dicha consideración:" },
      { kind: "ul", items: ["Consumo de alcohol o drogas antes o durante la actividad.", "Comportamiento agresivo.", "Incumplimiento reiterado de las instrucciones del instructor.", "Utilización de material manifiestamente inseguro.", "Abandono del grupo sin autorización.", "Acceso a zonas cerradas o restringidas.", "Cualquier otra conducta objetivamente peligrosa."] },
      { kind: "p", text: "La expulsión por motivos de seguridad no generará derecho a devolución alguna." },
    ],
  },
  {
    id: "resp-cliente",
    title: "22. Responsabilidad del cliente",
    blocks: [
      { kind: "p", text: "El cliente responderá de los daños y perjuicios ocasionados por él mismo o por los menores bajo su responsabilidad cuando dichos daños sean consecuencia de actuaciones dolosas, negligentes o contrarias a las instrucciones recibidas." },
      { kind: "p", text: "Asimismo, responderá de los daños causados al material cedido por KAITEN o a terceros durante el desarrollo de la actividad cuando sean imputables a su actuación." },
      { kind: "p", text: "El cliente manifiesta conocer que la práctica del esquí y de otras actividades de montaña implica riesgos inherentes que no pueden eliminarse completamente, incluso aplicando todas las medidas de seguridad razonablemente exigibles." },
    ],
  },
  {
    id: "resp-kaiten",
    title: "23. Responsabilidad de KAITEN",
    blocks: [
      { kind: "p", text: "KAITEN responderá únicamente de aquellos daños que resulten directamente imputables a una actuación dolosa o negligente de la propia organización, dentro de los límites establecidos por la legislación vigente." },
      { kind: "p", text: "En ningún caso responderá por:" },
      { kind: "ul", items: ["Accidentes derivados de riesgos inherentes a la práctica del esquí o de los deportes de montaña.", "Actuaciones imprudentes del alumno.", "Incumplimiento de las instrucciones del instructor.", "Utilización de material defectuoso propiedad del cliente.", "Cierres de pistas o remontes.", "Decisiones adoptadas por Baqueira Beret.", "Fenómenos meteorológicos.", "Actuaciones de terceros ajenos a KAITEN.", "Pérdidas, robos o deterioros de objetos personales."] },
      { kind: "p", text: "Las limitaciones anteriores no resultarán aplicables cuando la legislación de protección de consumidores establezca expresamente lo contrario." },
    ],
  },
  {
    id: "seguro",
    title: "24. Seguro",
    blocks: [
      { kind: "p", text: "KAITEN dispondrá de los seguros de responsabilidad civil exigidos por la normativa aplicable para el desarrollo de su actividad." },
      { kind: "p", text: "Salvo que expresamente se indique durante el proceso de contratación, los servicios no incluyen seguro individual de accidentes, asistencia sanitaria, rescate en pistas, gastos médicos, repatriación ni cobertura de material deportivo." },
      { kind: "p", text: "Se recomienda a todos los participantes disponer de un seguro personal que cubra la práctica del esquí y de los deportes de invierno, incluyendo los posibles gastos de rescate, asistencia médica y responsabilidad civil frente a terceros." },
    ],
  },
];

export const ANNEX_SECTIONS: LegalSection[] = [
  {
    id: "anexo-i",
    title: "Anexo I – Normas de seguridad y participación",
    blocks: [
      { kind: "h3", text: "1. Objeto" },
      { kind: "p", text: "El presente Anexo forma parte integrante de las Condiciones Generales de Contratación y establece las normas básicas de seguridad que deberán respetar todos los participantes en las actividades organizadas por KAITEN | Escuela de Esquí Baqueira. La contratación de cualquiera de los servicios implica la aceptación expresa de las presentes normas." },
      { kind: "h3", text: "2. Obligaciones del alumno" },
      { kind: "p", text: "Todos los participantes deberán:" },
      { kind: "ul", items: ["Respetar en todo momento las instrucciones del instructor.", "Adaptar su velocidad y forma de esquiar a su nivel técnico y a las condiciones de la pista.", "Mantener una conducta responsable y respetuosa con el resto de usuarios de la estación.", "Utilizar material en correcto estado de conservación.", "Informar previamente de cualquier lesión, enfermedad o limitación física.", "Comunicar inmediatamente cualquier accidente ocurrido durante la actividad."] },
      { kind: "h3", text: "3. Casco y material de protección" },
      { kind: "p", text: "KAITEN recomienda el uso del casco homologado para todos los alumnos. Será obligatorio cuando así lo exija la normativa vigente, la estación de esquí o las características concretas de la actividad. Asimismo, se recomienda el uso de:" },
      { kind: "ul", items: ["Protector dorsal.", "Gafas o máscara homologada.", "Protector solar.", "Ropa térmica adecuada.", "Guantes.", "Protector de cuello."] },
      { kind: "h3", text: "4. Consumo de alcohol y drogas" },
      { kind: "p", text: "No estará permitida la participación de ninguna persona que, a juicio razonable del instructor, se encuentre bajo los efectos del alcohol, drogas o medicamentos incompatibles con la práctica segura del esquí. KAITEN podrá denegar el acceso o finalizar inmediatamente la actividad sin derecho a devolución." },
      { kind: "h3", text: "5. Nivel técnico" },
      { kind: "p", text: "El alumno deberá comunicar correctamente su nivel de esquí o snowboard durante la reserva. Cuando el instructor compruebe que el nivel real difiere significativamente del declarado y ello afecte a la seguridad o al correcto desarrollo de la actividad, KAITEN podrá:" },
      { kind: "ul", items: ["Cambiar al alumno de grupo.", "Adaptar la actividad.", "Modificar el recorrido.", "Suspender la actividad cuando resulte necesario."] },
      { kind: "h3", text: "6. Conductas prohibidas" },
      { kind: "p", text: "No estará permitido:" },
      { kind: "ul", items: ["Abandonar el grupo sin autorización.", "Acceder a zonas cerradas.", "Esquiar fuera de pista cuando la actividad no lo contemple.", "Desobedecer instrucciones del instructor.", "Poner en peligro a otros usuarios.", "Utilizar material manifiestamente inseguro."] },
      { kind: "p", text: "Estas conductas podrán dar lugar a la expulsión inmediata de la actividad." },
      { kind: "h3", text: "7. Accidentes" },
      { kind: "p", text: "En caso de accidente, el instructor prestará la primera asistencia posible y activará, cuando proceda, los servicios de rescate de la estación. Los gastos derivados del rescate, asistencia sanitaria, transporte o atención médica serán asumidos por el participante conforme a la cobertura de su seguro o a la normativa aplicable." },
      { kind: "h3", text: "8. Normas FIS" },
      { kind: "p", text: "Todos los participantes deberán respetar las normas internacionales de comportamiento en pistas aprobadas por la Federación Internacional de Esquí (FIS), o aquellas que las sustituyan. El incumplimiento de dichas normas podrá suponer la suspensión inmediata de la actividad." },
      { kind: "h3", text: "9. Riesgo inherente" },
      { kind: "p", text: "El cliente reconoce expresamente que la práctica del esquí y de los deportes de montaña implica riesgos inherentes que no pueden eliminarse completamente, incluso aplicando todas las medidas razonables de seguridad. La participación en las actividades organizadas por KAITEN es voluntaria y supone la aceptación consciente de dichos riesgos." },
    ],
  },
  {
    id: "anexo-ii",
    title: "Anexo II – Política de modificaciones, cancelaciones y reembolsos",
    blocks: [
      { kind: "h3", text: "Cambios de reserva" },
      { kind: "p", text: "Las solicitudes de modificación deberán realizarse por escrito y estarán sujetas a disponibilidad de profesores y horarios." },
      { kind: "h3", text: "Cancelaciones por parte del cliente" },
      { kind: "ul", items: [
        "Más de 7 días de antelación: reembolso del importe abonado, descontando los gastos de gestión informados previamente.",
        "Entre 7 y 4 días de antelación: KAITEN podrá retener hasta el 30 % del importe total.",
        "3 días o menos / no presentación: no procederá devolución alguna.",
      ]},
      { kind: "h3", text: "Cancelaciones por parte de KAITEN" },
      { kind: "p", text: "Cuando la actividad no pueda realizarse por causas imputables a KAITEN, el cliente podrá optar, siempre que resulte posible, por:" },
      { kind: "ul", items: ["Cambio de fecha.", "Cambio de horario.", "Sustitución por otro instructor.", "Bono por el importe correspondiente.", "Reembolso de las cantidades abonadas."] },
      { kind: "h3", text: "Condiciones meteorológicas" },
      { kind: "p", text: "Las condiciones meteorológicas adversas no implicarán automáticamente la cancelación de la actividad. KAITEN únicamente suspenderá el servicio cuando considere que no existen condiciones suficientes de seguridad." },
      { kind: "h3", text: "Cierre de Baqueira Beret" },
      { kind: "p", text: "En caso de cierre total de la estación, el cliente podrá elegir entre nueva fecha, bono o devolución del importe correspondiente. Si existen sectores abiertos que permitan desarrollar la actividad con seguridad, el servicio continuará con normalidad." },
      { kind: "h3", text: "Riesgo de aludes" },
      { kind: "p", text: "Cuando exista riesgo objetivo para la seguridad de alumnos o instructores, KAITEN podrá modificar, aplazar o cancelar cualquier actividad." },
      { kind: "h3", text: "Retrasos" },
      { kind: "p", text: "El instructor esperará un máximo de 15 minutos desde la hora de inicio prevista. Transcurrido dicho plazo sin la comparecencia del alumno, el servicio se considerará iniciado." },
      { kind: "h3", text: "Fuerza mayor" },
      { kind: "p", text: "En caso de circunstancias extraordinarias ajenas al control de KAITEN (fenómenos meteorológicos extremos, pandemias, restricciones administrativas, huelgas u otras causas equivalentes), la escuela podrá reprogramar la actividad, emitir un bono o efectuar el reembolso cuando legalmente proceda." },
      { kind: "h3", text: "Reembolsos" },
      { kind: "p", text: "Cuando proceda una devolución, ésta se realizará utilizando, siempre que sea posible, el mismo medio de pago empleado por el cliente. El plazo máximo de tramitación será de 14 días naturales, salvo que la normativa aplicable establezca un plazo diferente." },
    ],
  },
];

export const GUIDE_SECTION: LegalSection = {
  id: "guia",
  title: "Guía de contratación",
  blocks: [
    { kind: "p", text: "En KAITEN | Escuela de Esquí Baqueira queremos que disfrutes de una experiencia segura, personalizada y sin sorpresas. Por ello, antes de realizar tu reserva, te recomendamos dedicar unos minutos a leer esta guía, donde encontrarás la información más importante sobre el funcionamiento de nuestros servicios." },
    { kind: "h3", text: "Cómo reservar" },
    { kind: "p", text: "Puedes realizar tu reserva a través de nuestra página web, por correo electrónico, por teléfono o mediante WhatsApp. Una vez recibida tu solicitud, comprobaremos la disponibilidad de profesores y horarios y, cuando la reserva haya sido aceptada y el pago correspondiente se haya recibido correctamente, te enviaremos una confirmación con todos los detalles de la actividad. Hasta ese momento, la reserva no se considerará formalizada." },
    { kind: "h3", text: "Antes de la actividad" },
    { kind: "p", text: "Es importante que todos los participantes se encuentren en condiciones físicas adecuadas para la práctica del esquí o del snowboard. Si existe alguna lesión, enfermedad, alergia o circunstancia médica que pueda afectar al desarrollo de la actividad, deberá comunicarse antes del inicio de la clase para que podamos adaptar el servicio cuando sea posible." },
    { kind: "p", text: "En el caso de menores de edad, la reserva deberá realizarla o autorizarla su padre, madre o representante legal, quien será responsable de facilitar toda la información necesaria para garantizar su seguridad." },
    { kind: "h3", text: "Material necesario" },
    { kind: "p", text: "Cada participante deberá acudir con el material adecuado para la actividad contratada, salvo que expresamente se haya incluido el alquiler del mismo. Cuando sea necesario utilizar los remontes de la estación, el alumno deberá disponer del forfait correspondiente." },
    { kind: "p", text: "Recomendamos utilizar casco durante todas las actividades, siendo obligatorio cuando así lo establezca la normativa o las características de la actividad. También aconsejamos acudir con ropa técnica adecuada, guantes, gafas o máscara de esquí y protección solar." },
    { kind: "h3", text: "Durante la clase" },
    { kind: "p", text: "Nuestros instructores adaptarán la enseñanza al nivel y objetivos de cada alumno, priorizando siempre la seguridad. Todos los participantes deberán seguir las indicaciones del instructor, respetar las normas de la estación y mantener un comportamiento responsable con el resto de usuarios de las pistas." },
    { kind: "h3", text: "Cambios y cancelaciones" },
    { kind: "p", text: "Si necesitas modificar tu reserva, intentaremos atender tu solicitud siempre que exista disponibilidad. Las solicitudes realizadas con mayor antelación tendrán más posibilidades de ser aceptadas." },
    { kind: "p", text: "En caso de cancelación por parte del cliente, las condiciones de devolución dependerán de la antelación con la que se comunique. Las cancelaciones realizadas con más de siete días de antelación podrán dar derecho al reembolso. Entre siete y cuatro días podrá aplicarse una retención parcial y, cuando la cancelación se produzca con tres días o menos de antelación o el cliente no se presente a la actividad, no procederá devolución del importe abonado." },
    { kind: "h3", text: "Meteorología y condiciones de la estación" },
    { kind: "p", text: "El esquí es una actividad que depende de las condiciones meteorológicas y del estado de la estación. La lluvia, la nieve, el viento o la niebla no implican necesariamente la cancelación de una actividad, siempre que pueda desarrollarse con seguridad." },
    { kind: "h3", text: "Puntualidad" },
    { kind: "p", text: "Te recomendamos acudir al punto de encuentro al menos diez minutos antes del inicio de la actividad. El instructor esperará un máximo de quince minutos desde la hora prevista. Transcurrido ese tiempo sin la comparecencia del alumno, la actividad se considerará iniciada y no será posible recuperar el tiempo perdido ni solicitar su devolución." },
    { kind: "h3", text: "Seguridad y responsabilidad" },
    { kind: "p", text: "La práctica del esquí y de los deportes de invierno implica riesgos inherentes que no pueden eliminarse completamente. Nuestro equipo trabaja para minimizar dichos riesgos mediante una enseñanza personalizada, la elección de recorridos adecuados y el cumplimiento de estrictos protocolos de seguridad." },
    { kind: "p", text: "Los participantes deberán actuar con prudencia, utilizar material adecuado y seguir en todo momento las indicaciones del instructor. KAITEN dispone del seguro de responsabilidad civil exigido por la normativa vigente. No obstante, salvo que se indique expresamente, las actividades no incluyen un seguro individual de accidentes ni de rescate, por lo que recomendamos disponer de una cobertura personal adecuada." },
    { kind: "h3", text: "Protección de datos" },
    { kind: "p", text: "Los datos personales facilitados durante el proceso de reserva serán tratados únicamente para gestionar la contratación, prestar los servicios solicitados y cumplir nuestras obligaciones legales. Toda la información sobre el tratamiento de datos y el ejercicio de tus derechos puede consultarse en nuestra Política de Privacidad." },
  ],
};
