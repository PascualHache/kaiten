import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { COOKIES_SECTIONS } from "../data/cookies";
import type { Block } from "../data/terminos";
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
  return (
    <div className="cookies">
      <Navbar />

      <main className="cookies__main">
        <header className="cookies__header">
          <p className="cookies__eyebrow">Legal · Última actualización: julio 2026</p>
          <h1 className="cookies__title">Política de cookies</h1>
        </header>

        <article className="cookies__content">
          {COOKIES_SECTIONS.map((section) => (
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
