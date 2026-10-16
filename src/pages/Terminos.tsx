import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import type { Block, LegalSection } from "../data/terminos";
import { useLegal } from "../i18n/legal";
import { useUi } from "../i18n";
import "./Terminos.css";

function renderBlocks(blocks: Block[]) {
  return blocks.map((block, i) => {
    if (block.kind === "p") {
      return <p key={i} className="terminos__paragraph">{block.text}</p>;
    }
    if (block.kind === "ul") {
      return (
        <ul key={i} className="terminos__list">
          {block.items.map((item, j) => (
            <li key={j} className="terminos__list-item">{item}</li>
          ))}
        </ul>
      );
    }
    if (block.kind === "h3") {
      return <h3 key={i} className="terminos__subsection-title">{block.text}</h3>;
    }
    return null;
  });
}

function Section({ section }: { section: LegalSection }) {
  return (
    <section className="terminos__section">
      <h2 className="terminos__section-title">{section.title}</h2>
      {renderBlocks(section.blocks)}
    </section>
  );
}

function Terminos() {
  const ui = useUi();
  const { terminos } = useLegal();

  return (
    <div className="terminos">
      <main className="terminos__main">
        <header className="terminos__header">
          <PageTitle eyebrow={ui.legalPages.legal} spacing="loose">
            {ui.legalPages.terminosTitle}
          </PageTitle>
        </header>

        <article className="terminos__content">
          {terminos.main.map((s) => <Section key={s.id} section={s} />)}

          <div className="terminos__divider" aria-hidden="true" />

          {terminos.annex.map((s) => <Section key={s.id} section={s} />)}

          <div className="terminos__divider" aria-hidden="true" />

          <Section section={terminos.guide} />
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default Terminos;
