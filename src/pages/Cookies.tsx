import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import type { Block } from "../data/terminos";
import { useLegal } from "../i18n/legal";
import { useUi } from "../i18n";
import "./Cookies.css";

function renderBlocks(blocks: Block[]) {
  return blocks.map((block, i) => {
    if (block.kind === "p") {
      return <p key={i} className="cookies__paragraph">{block.text}</p>;
    }
    if (block.kind === "ul") {
      return (
        <ul key={i} className="cookies__list">
          {block.items.map((item, j) => (
            <li key={j} className="cookies__list-item">{item}</li>
          ))}
        </ul>
      );
    }
    if (block.kind === "h3") {
      return <h3 key={i} className="cookies__subsection-title">{block.text}</h3>;
    }
    return null;
  });
}

function Cookies() {
  const ui = useUi();
  const { cookies } = useLegal();

  return (
    <div className="cookies">
      <main className="cookies__main">
        <header className="cookies__header">
          <PageTitle eyebrow={ui.legalPages.updated} spacing="loose">
            {ui.legalPages.cookiesTitle}
          </PageTitle>
        </header>

        <article className="cookies__content">
          {cookies.map((section) => (
            <section key={section.id} className="cookies__section">
              {section.title && (
                <h2 className="cookies__section-title">{section.title}</h2>
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

export default Cookies;
