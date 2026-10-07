import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { IconX } from "@tabler/icons-react";
import logoKaiten from "../assets/logos/logo_text.png";
import "./NavMenu.css";

export interface NavMenuLink {
  to: string;
  label: string;
}

interface NavMenuProps {
  links: NavMenuLink[];
  onClose: () => void;
}

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const CLOSED_CLIP = "inset(0% 0% 100% 0%)";

/**
 * Menú a pantalla completa. Entra descubriéndose de arriba abajo con
 * clip-path y los elementos suben escalonados; al cerrar se repliega por el
 * mismo borde. Con prefers-reduced-motion se queda en un fundido corto.
 *
 * El cierre lo controla el propio menú para poder reproducir la salida antes
 * de desmontarse: el padre pasa `onClose` y nosotros lo llamamos al terminar.
 *
 * Se monta en un portal sobre <body> y no donde lo renderiza la Navbar: el
 * `backdrop-filter` de .navbar convierte al header en bloque contenedor de sus
 * descendientes `position: fixed`, así que dentro de él el menú se recortaba a
 * los 68px de la barra. En Home no se notaba porque la navbar arranca
 * transparente y ahí el filtro está desactivado.
 */
function NavMenu({ links, onClose }: NavMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  // Guarda el elemento que abrió el menú para devolverle el foco al cerrar.
  const openerRef = useRef<Element | null>(null);
  // Evita que una segunda llamada solape dos animaciones de salida.
  const closingRef = useRef(false);

  // Bloquea el scroll del fondo mientras el menú está abierto.
  useEffect(() => {
    openerRef.current = document.activeElement;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
      if (openerRef.current instanceof HTMLElement) openerRef.current.focus();
    };
  }, []);

  // Animación de entrada.
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled || !menuRef.current) return;

      if (window.matchMedia(REDUCED_MOTION).matches) {
        gsap.fromTo(menu, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 });
        return;
      }
      gsap.fromTo(
        menu,
        { clipPath: CLOSED_CLIP },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.55, ease: "power3.inOut" },
      );
      gsap.from(menu.querySelectorAll("[data-menu-item]"), {
        y: 36,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.05,
        delay: 0.25,
        ease: "power3.out",
      });
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  async function close() {
    const menu = menuRef.current;
    if (closingRef.current) return;
    closingRef.current = true;
    if (!menu) return onClose();

    const { gsap } = await import("gsap");
    const reduce = window.matchMedia(REDUCED_MOTION).matches;
    gsap.to(
      menu,
      reduce
        ? { autoAlpha: 0, duration: 0.2, onComplete: onClose }
        : {
            clipPath: CLOSED_CLIP,
            duration: 0.4,
            ease: "power3.in",
            onComplete: onClose,
          },
    );
  }

  // Escape cierra, igual que el botón.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        void close();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return createPortal(
    <div
      className="nav-menu"
      data-menu=""
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menú"
    >
      <div className="nav-menu__top">
        <button
          type="button"
          className="nav-menu__icon-btn"
          aria-label="Cerrar menú"
          onClick={() => void close()}
          ref={closeBtnRef}
        >
          <IconX size={26} stroke={2} />
        </button>
        <img className="nav-menu__logo" src={logoKaiten} alt="Kaiten" />
        <Link
          to="/reservas"
          className="nav-menu__reserve"
          onClick={() => void close()}
        >
          Reservar
        </Link>
      </div>

      <div className="nav-menu__body">
        <ul className="nav-menu__list">
          {links.map(({ to, label }, i) => (
            <li key={to} data-menu-item="">
              <Link
                to={to}
                className={`nav-menu__link${
                  pathname === to ? " nav-menu__link--active" : ""
                }`}
                onClick={() => void close()}
              >
                <span className="nav-menu__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-menu__aside" data-menu-item="">
          <div className="nav-menu__contact-group">
            <p className="nav-menu__eyebrow">Contacto</p>
            <div className="nav-menu__contact">
              <a href="tel:+34699820954">+34 699 820 954</a>
              <a
                href="https://wa.me/34699820954"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a href="mailto:kaitenski@gmail.com">kaitenski@gmail.com</a>
              <span className="nav-menu__address">
                Baqueira 1800 · Val d'Aran
              </span>
            </div>
          </div>

          <div className="nav-menu__lang" role="group" aria-label="Idioma">
            <button type="button" className="nav-menu__lang-btn nav-menu__lang-btn--active">
              ES
            </button>
            <span className="nav-menu__lang-sep" aria-hidden="true">
              /
            </span>
            <button type="button" className="nav-menu__lang-btn">
              EN
            </button>
            <span className="nav-menu__lang-sep" aria-hidden="true">
              /
            </span>
            <button type="button" className="nav-menu__lang-btn">
              CAT
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default NavMenu;
