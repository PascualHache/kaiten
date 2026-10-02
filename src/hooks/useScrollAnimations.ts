import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Animaciones de scroll del prototipo "Kaiten Responsive".
 *
 * GSAP y ScrollTrigger se cargan con import() dinámico, así que viajan en su
 * propio chunk y no engordan el bundle inicial. Hasta que ese chunk llega, la
 * página es perfectamente usable: nada se oculta antes de tener con qué
 * animarlo, y si la carga falla el contenido se queda visible y estático.
 */

type Intensity = "sutil" | "media" | "expresiva";

const INTENSITY_FACTOR: Record<Intensity, number> = {
  sutil: 0.5,
  media: 1,
  expresiva: 1.6,
};

interface Options {
  /** Amplitud de los desplazamientos. El prototipo usa "media" por defecto. */
  intensity?: Intensity;
}

export function useScrollAnimations({ intensity = "media" }: Options = {}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      // La ruta pudo cambiar mientras cargaba el chunk.
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const k = INTENSITY_FACTOR[intensity];
      const q = (selector: string) =>
        Array.from(root.querySelectorAll<HTMLElement>(selector));

      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const { motion } = ctx.conditions as {
            motion: boolean;
          };

          const main = root.querySelector<HTMLElement>("[data-main]");
          if (main) {
            gsap.fromTo(
              main,
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 0.45, ease: "power1.out" },
            );
          }

          // ---- Hero: las líneas del titular suben desde su máscara ----
          const lines = q("[data-line]");
          if (lines.length) {
            const tl = gsap.timeline({
              defaults: { ease: "power3.out" },
              delay: 0.1,
            });

            if (motion) {
              tl.from(lines, {
                yPercent: 110,
                duration: 0.6 + 0.3 * k,
                stagger: 0.09,
              })
                .from(
                  "[data-hero-rule]",
                  { scaleX: 0, transformOrigin: "left center", duration: 0.6 },
                  "-=0.45",
                )
                .from(
                  "[data-hero-fade]",
                  { y: 16 * k, autoAlpha: 0, duration: 0.6, stagger: 0.08 },
                  "-=0.35",
                )
                .from("[data-hero-side]", { autoAlpha: 0, duration: 0.6 }, "-=0.4");

              gsap.to("[data-hero-bg]", {
                yPercent: 10 * k,
                ease: "none",
                scrollTrigger: {
                  trigger: "[data-hero]",
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                },
              });

              // Efecto tragaperras de las coordenadas, enganchado al timeline.
              q("[data-slot]").forEach((el) => {
                const final = el.getAttribute("data-slot") ?? "";
                const o = { p: 0 };
                tl.to(
                  o,
                  {
                    p: 1,
                    duration: 1.4,
                    ease: "power2.out",
                    onUpdate: () => {
                      const n = Math.floor(o.p * final.length);
                      el.textContent = final
                        .split("")
                        .map((c, i) =>
                          i < n || c === " "
                            ? c
                            : String(Math.floor(Math.random() * 10)),
                        )
                        .join("");
                    },
                    onComplete: () => {
                      el.textContent = final;
                    },
                  },
                  0.3,
                );
              });
            } else {
              tl.from(
                [...lines, ...q("[data-hero-fade]"), ...q("[data-hero-side]")],
                { autoAlpha: 0, duration: 0.5, stagger: 0.05 },
              );
            }
          }

          // ---- Parallax de fotos de cabecera ----
          if (motion) {
            q("[data-parallax]").forEach((img) => {
              gsap.fromTo(
                img,
                { yPercent: -5 * k },
                {
                  yPercent: 5 * k,
                  ease: "none",
                  scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                  },
                },
              );
            });
          }

          // ---- Experiencias: solo entrada escalonada de las tarjetas ----
          // Sin pin ni scrub horizontal: anclar la sección secuestraba el
          // scroll vertical de la página al llegar a ella.
          const track = root.querySelector<HTMLElement>("[data-exp-track]");
          const tiles = q("[data-exp-tile]");

          if (track && tiles.length) {
            gsap.from(tiles, {
              x: motion ? 40 * k : 0,
              autoAlpha: 0,
              duration: 0.6,
              stagger: 0.06,
              ease: "power2.out",
              scrollTrigger: { trigger: track, start: "top 85%", once: true },
            });
          }

          // ---- Reveal genérico por lotes ----
          const rev = q("[data-reveal]");
          if (rev.length) {
            gsap.set(rev, { autoAlpha: 0, y: motion ? 28 * k : 0 });
            ScrollTrigger.batch(rev, {
              start: "top 90%",
              once: true,
              onEnter: (batch) =>
                gsap.to(batch, {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.7,
                  stagger: 0.07,
                  ease: "power2.out",
                  overwrite: true,
                }),
            });
          }

          ScrollTrigger.refresh();
        },
      );

      cleanup = () => mm.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [pathname, intensity]);

  return rootRef;
}

/**
 * Refresca las posiciones de ScrollTrigger tras un cambio de altura
 * (abrir un acordeón, desplegar una fila de reservas…). No-op si GSAP
 * todavía no se ha cargado.
 */
export async function refreshScrollTriggers() {
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  ScrollTrigger.refresh();
}
