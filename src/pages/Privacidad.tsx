import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PRIVACIDAD_SECTIONS } from "../data/privacidad";
import type { Block } from "../data/terminos";
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
  return (
    <div className="privacidad">
      <Navbar />

      <main className="privacidad__main">
        <header className="privacidad__header">
          <p className="privacidad__eyebrow">Legal · Última actualización: julio 2026</p>
          <h1 className="privacidad__title">Política de privacidad</h1>
        </header>

        <article className="privacidad__content">
          {PRIVACIDAD_SECTIONS.map((section) => (
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
