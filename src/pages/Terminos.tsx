import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MAIN_SECTIONS, ANNEX_SECTIONS, GUIDE_SECTION } from "../data/terminos";
import type { Block, LegalSection } from "../data/terminos";
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
  return (
    <div className="terminos">
      <Navbar />

      <main className="terminos__main">
        <header className="terminos__header">
          <p className="terminos__eyebrow">Legal</p>
          <h1 className="terminos__title">Condiciones generales de contratación</h1>
        </header>

        <article className="terminos__content">
          {MAIN_SECTIONS.map((s) => <Section key={s.id} section={s} />)}

          <div className="terminos__divider" aria-hidden="true" />

          {ANNEX_SECTIONS.map((s) => <Section key={s.id} section={s} />)}

          <div className="terminos__divider" aria-hidden="true" />

          <Section section={GUIDE_SECTION} />
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default Terminos;
