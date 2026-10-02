import { useEffect, type RefObject } from "react";

/**
 * Animaciones de la página Nosotros.
 *
 * GSAP y ScrollTrigger se cargan con import() dinámico, igual que en
 * useScrollAnimations: viajan en su propio chunk y, hasta que llega, la página
 * se ve completa y estática en vez de en blanco.
 *
 * Los selectores son `data-nos-*` a propósito. El hook global
 * useScrollAnimations se engancha a [data-line], [data-reveal] y
 * [data-parallax] sobre todo el árbol de la app, así que compartir nombres
 * haría que cada elemento de esta página se animase dos veces.
 */
export function useNosotrosMotion(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = root.current;
    if (!el) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add(
        { motion: "(prefers-reduced-motion: no-preference)" },
        (ctx) => {
          const { motion } = ctx.conditions as { motion: boolean };
          const q = (selector: string) =>
            Array.from(el.querySelectorAll<HTMLElement>(selector));

          const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            delay: 0.1,
          });

          if (motion) {
            tl.from(q("[data-nos-line]"), {
              yPercent: 110,
              duration: 0.9,
              stagger: 0.09,
            })
              .from(
                q("[data-nos-rule]"),
                { scaleX: 0, transformOrigin: "left center", duration: 0.6 },
                "-=0.45",
              )
              .from(
                q("[data-nos-fade]"),
                { y: 16, autoAlpha: 0, duration: 0.6, stagger: 0.08 },
                "-=0.35",
              );

            // La declaración "Kaiten Line" se enciende palabra a palabra
            // enganchada al scroll.
            const words = q("[data-nos-word]");
            const wordsBlock = el.querySelector("[data-nos-words]");
            if (words.length && wordsBlock) {
              gsap.fromTo(
                words,
                { opacity: 0.14 },
                {
                  opacity: 1,
                  ease: "none",
                  stagger: 0.1,
                  scrollTrigger: {
                    trigger: wordsBlock,
                    start: "top 78%",
                    end: "bottom 50%",
                    scrub: true,
                  },
                },
              );
            }

            q("[data-nos-parallax]").forEach((img) => {
              gsap.fromTo(
                img,
                { yPercent: -5 },
                {
                  yPercent: 5,
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
          } else {
            tl.from([...q("[data-nos-line]"), ...q("[data-nos-fade]")], {
              autoAlpha: 0,
              duration: 0.5,
              stagger: 0.05,
            });
          }

          const rev = q("[data-nos-reveal]");
          if (rev.length) {
            gsap.set(rev, { autoAlpha: 0, y: motion ? 28 : 0 });
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
        el,
      );

      cleanup = () => mm.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [root]);
}
