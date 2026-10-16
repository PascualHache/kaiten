import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import type { Block } from "../data/terminos";
import { useLegal } from "../i18n/legal";
import { useUi } from "../i18n";
import "./AvisoLegal.css";

/* El texto vive en src/data/aviso.ts (castellano) y en src/i18n/legal
   (catalán e inglés), con la misma forma que el resto de legales. */
function renderBlocks(blocks: Block[]) {
  return blocks.map((block, i) => {
    if (block.kind === "p") {
      return (
        <p key={i} className="aviso-legal__paragraph">
          {block.text}
        </p>
      );
    }
    if (block.kind === "ul") {
      return (
        <ul key={i} className="aviso-legal__list">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    }
    if (block.kind === "h3") {
      return (
        <h3 key={i} className="aviso-legal__subsection-title">
          {block.text}
        </h3>
      );
    }
    return null;
  });
}

function AvisoLegal() {
  const ui = useUi();
  const { aviso } = useLegal();

  return (
    <div className="aviso-legal">
      <main className="aviso-legal__main">
        <header className="aviso-legal__header">
          <PageTitle eyebrow={ui.legalPages.legal} spacing="loose">
            {ui.legalPages.avisoTitle}
          </PageTitle>
        </header>

        <article className="aviso-legal__content">
          {aviso.map((section) => (
            <section key={section.id} className="aviso-legal__section">
              <h2 className="aviso-legal__section-title">{section.title}</h2>
              {renderBlocks(section.blocks)}
            </section>
          ))}
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default AvisoLegal;
