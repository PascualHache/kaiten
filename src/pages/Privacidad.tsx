import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import type { Block } from "../data/terminos";
import { useLegal } from "../i18n/legal";
import { useUi } from "../i18n";
import "./Privacidad.css";

function renderBlocks(blocks: Block[]) {
  return blocks.map((block, i) => {
    if (block.kind === "p") {
      return <p key={i} className="privacidad__paragraph">{block.text}</p>;
    }
    if (block.kind === "ul") {
      return (
        <ul key={i} className="privacidad__list">
          {block.items.map((item, j) => (
            <li key={j} className="privacidad__list-item">{item}</li>
          ))}
        </ul>
      );
    }
    if (block.kind === "h3") {
      return <h3 key={i} className="privacidad__subsection-title">{block.text}</h3>;
    }
    return null;
  });
}

function Privacidad() {
  const ui = useUi();
  const { privacidad } = useLegal();

  return (
    <div className="privacidad">
      <main className="privacidad__main">
        <header className="privacidad__header">
          <PageTitle eyebrow={ui.legalPages.updated} spacing="loose">
            {ui.legalPages.privacidadTitle}
          </PageTitle>
        </header>

        <article className="privacidad__content">
          {privacidad.map((section) => (
            <section key={section.id} className="privacidad__section">
              {section.title && (
                <h2 className="privacidad__section-title">{section.title}</h2>
              )}
              {renderBlocks(section.blocks)}
            </section>
          ))}
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default Privacidad;
