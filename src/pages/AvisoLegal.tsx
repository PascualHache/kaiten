import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AvisoLegal.css";

const SECTIONS = [
  {
    id: "titular",
    title: "1. Titular del sitio web",
    content: [
      "En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los datos identificativos del titular del presente sitio web:",
      "Es Kaiten con NIF 53027264M y domicilio social Avenida Pas d'Arro, 52 29 B – 25530, Vielha (Lleida).",
      "Los datos de contacto de Kaiten son los siguientes: Correo electrónico: kaitenski@gmail.com · Página web: https://kaitenski.com/ · Dominio web: www.kaitenski.com · Teléfono: +34 699 820 954",
      "El acceso y utilización del presente sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas del presente Aviso Legal.",
    ],
  },
  {
    id: "condiciones",
    title: "2. Condiciones de uso",
    content: [
      "El presente Aviso Legal regula el acceso, navegación y utilización del sitio web, así como las responsabilidades derivadas del uso de sus contenidos y servicios.",
      "El usuario se compromete a utilizar la página web de forma diligente, conforme a la legislación vigente, la buena fe, el orden público y el presente Aviso Legal.",
      "Queda expresamente prohibido utilizar la web con fines ilícitos o lesivos para Kaiten, para terceros o que puedan impedir el normal funcionamiento del sitio web.",
      "Kaiten podrá modificar, actualizar o eliminar, en cualquier momento y sin necesidad de previo aviso, los contenidos, servicios y condiciones de uso del sitio web.",
    ],
  },
  {
    id: "propiedad",
    title: "3. Propiedad intelectual e industrial",
    content: [
      "Todos los contenidos del sitio web, incluyendo, entre otros: textos, fotografías, vídeos, imágenes, diseños, logotipos, marcas, nombres comerciales, software, bases de datos, código fuente, elementos gráficos, estructura y diseño del sitio web.",
      "Están protegidos por la normativa nacional e internacional sobre propiedad intelectual e industrial y son titularidad de KAITEN o de terceros que han autorizado su utilización.",
      "El acceso a la web no implica en ningún caso la cesión, transmisión o renuncia de derechos de propiedad intelectual o industrial.",
      "Queda prohibida la reproducción, distribución, transformación, comunicación pública, puesta a disposición, extracción, reutilización o explotación, total o parcial, de cualquier contenido sin autorización previa y por escrito del titular de los derechos, salvo en los casos legalmente permitidos.",
      "El usuario únicamente podrá visualizar los contenidos para uso estrictamente personal y privado.",
    ],
  },
  {
    id: "responsabilidad",
    title: "4. Responsabilidad",
    content: [
      "Kaiten adopta todas las medidas razonables para garantizar el correcto funcionamiento del sitio web. No obstante, no puede garantizar la disponibilidad permanente del mismo ni la ausencia de errores técnicos.",
      "En consecuencia, Kaiten no será responsable, en la medida permitida por la legislación vigente, de los daños o perjuicios derivados de: interrupciones del servicio, errores de funcionamiento, caídas del sistema, virus informáticos o elementos tecnológicos dañinos, ataques informáticos, uso indebido del sitio web por parte de los usuarios, fallos de Internet o de terceros proveedores.",
      "El usuario será el único responsable del uso que realice del sitio web y de la información facilitada mediante los formularios disponibles.",
    ],
  },
  {
    id: "enlaces-terceros",
    title: "5. Enlaces a terceros",
    content: [
      "El sitio web puede contener enlaces a páginas web de terceros con la finalidad de facilitar información adicional a los usuarios.",
      "Kaiten no controla dichos sitios web y, por tanto, no asume responsabilidad alguna respecto de sus contenidos, políticas de privacidad, disponibilidad o funcionamiento.",
      "La inclusión de estos enlaces no implica la existencia de relación comercial, recomendación o aprobación por parte de Kaiten.",
    ],
  },
  {
    id: "enlaces-hacia",
    title: "6. Enlaces hacia este sitio web",
    content: [
      "No podrá establecerse ningún enlace al presente sitio web sin autorización previa, expresa y por escrito de Kaiten.",
      'En caso de autorizarse, el enlace deberá realizarse de forma íntegra hacia la página principal o hacia las páginas expresamente autorizadas, sin reproducir contenidos, crear marcos ("frames") ni generar confusión sobre la titularidad del sitio web.',
    ],
  },
  {
    id: "datos",
    title: "7. Protección de datos personales",
    content: [
      "El tratamiento de los datos personales de los usuarios se realiza conforme al Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD) y demás normativa aplicable.",
      "Toda la información relativa al tratamiento de datos personales puede consultarse en la correspondiente Política de Privacidad.",
    ],
  },
  {
    id: "cookies",
    title: "8. Política de cookies",
    content: [
      "Este sitio web utiliza cookies propias y de terceros para garantizar el correcto funcionamiento de la página, mejorar la experiencia de navegación y obtener estadísticas de uso.",
      "La información detallada sobre las cookies utilizadas, su finalidad y la forma de configurarlas o rechazarlas puede consultarse en la Política de Cookies.",
    ],
  },
  {
    id: "modificaciones",
    title: "9. Modificaciones",
    content: [
      "Kaiten se reserva el derecho de modificar el presente Aviso Legal en cualquier momento para adaptarlo a novedades legislativas, criterios jurisprudenciales o cambios en la actividad desarrollada.",
      "Las modificaciones serán publicadas en esta misma página y producirán efectos desde el momento de su publicación.",
    ],
  },
  {
    id: "legislacion",
    title: "10. Legislación aplicable y jurisdicción",
    content: [
      "El presente Aviso Legal se rige por la legislación española.",
      "Para cualquier controversia derivada del acceso o utilización del sitio web, las partes se someten a los Juzgados y Tribunales que resulten competentes conforme a la normativa vigente.",
      "Cuando el usuario tenga la condición de consumidor, serán competentes los juzgados y tribunales correspondientes a su domicilio, de conformidad con la legislación de protección de consumidores y usuarios.",
    ],
  },
];

function AvisoLegal() {
  return (
    <div className="aviso-legal">
      <Navbar />

      <main className="aviso-legal__main">
        <header className="aviso-legal__header">
          <p className="aviso-legal__eyebrow">Legal</p>
          <h1 className="aviso-legal__title">Aviso legal</h1>
        </header>

        <article className="aviso-legal__content">
          {SECTIONS.map(({ id, title, content }) => (
            <section key={id} className="aviso-legal__section">
              <h2 className="aviso-legal__section-title">{title}</h2>
              {content.map((paragraph, i) => (
                <p key={i} className="aviso-legal__paragraph">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default AvisoLegal;
