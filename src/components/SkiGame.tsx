import { useEffect, useRef, useState } from "react";
import { fill, useUi } from "../i18n";
import "./SkiGame.css";

const RECORD_KEY = "kaiten404-record";

/* Velocidad inicial en px/s; el metraje son px recorridos entre 12 */
const BASE_SPEED = 190;
const MAX_SPEED_FACTOR = 2.4;
const ACCELERATION = 9;
const STEER_SPEED = 230;
const PX_PER_METER = 12;

type Status = "idle" | "running" | "paused" | "over";

interface Sprite {
  x: number;
  y: number;
  s: number;
}

interface Mark {
  x: number;
  y: number;
}

/** Estado imperativo de la partida: cambia a 60 fps y no se pinta en React. */
interface Game {
  w: number;
  h: number;
  dpr: number;
  x: number;
  vx: number;
  dist: number;
  speed: number;
  skierY: number;
  acc: number;
  left: boolean;
  right: boolean;
  pointer: boolean;
  trees: Sprite[];
  marks: Mark[];
  trail: Mark[];
}

interface Palette {
  bg: string;
  ink: string;
  accent: string;
  tree: string;
  mark: string;
  trail: string;
}

function readRecord(): number {
  try {
    return Number(localStorage.getItem(RECORD_KEY)) || 0;
  } catch {
    return 0;
  }
}

function writeRecord(value: number) {
  try {
    localStorage.setItem(RECORD_KEY, String(value));
  } catch {
    /* modo privado o almacenamiento bloqueado: el récord es prescindible */
  }
}

/** Los colores salen del design system ya resuelto, así que el tema manda. */
function readPalette(el: HTMLElement): Palette {
  const cs = getComputedStyle(el);
  const v = (name: string, fallback: string) =>
    cs.getPropertyValue(name).trim() || fallback;

  return {
    bg: v("--color-surface-raised", "#F8F6F2"),
    ink: v("--color-text", "#000000"),
    accent: v("--color-text-accent", "#4E4966"),
    tree: v("--color-text-accent", "#4E4966"),
    mark: v("--color-border-soft", "rgba(0,0,0,0.07)"),
    trail: v("--color-border", "rgba(0,0,0,0.12)"),
  };
}

/**
 * Minijuego de esquí de la página 404.
 *
 * La partida vive en un ref y se pinta sobre un canvas: a 60 fps no puede
 * pasar por el estado de React. Solo suben a estado las tres cosas que la
 * interfaz enseña — situación, metros y récord.
 */
function SkiGame() {
  const ui = useUi();
  const t = ui.notFound.game;

  const [status, setStatus] = useState<Status>("idle");
  const [meters, setMeters] = useState(0);
  const [record, setRecord] = useState(0);
  const [touch, setTouch] = useState(false);

  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);
  const statusRef = useRef<Status>("idle");
  const toggleRef = useRef<(() => void) | null>(null);
  const gameRef = useRef<Game>({
    w: 0,
    h: 0,
    dpr: 1,
    x: 0,
    vx: 0,
    dist: 0,
    speed: BASE_SPEED,
    skierY: 0,
    acc: 0,
    left: false,
    right: false,
    pointer: false,
    trees: [],
    marks: [],
    trail: [],
  });

  /* Todo el bucle vive en un único efecto: así las funciones que llama el
     rAF no se recrean en cada render ni leen props viejas. */
  useEffect(() => {
    const box = boxRef.current;
    const canvas = canvasRef.current;
    if (!box || !canvas) return;

    const g = gameRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let last = 0;
    let lastUi = 0;
    /* getComputedStyle es caro para llamarlo 60 veces por segundo: la paleta
       solo puede cambiar con el tema, y eso pasa fuera del bucle. */
    let palette = readPalette(box);

    function setStatusBoth(next: Status) {
      statusRef.current = next;
      setStatus(next);
    }

    function addTree(y: number) {
      g.trees.push({ x: 32 + Math.random() * (g.w - 64), y, s: 14 + Math.random() * 10 });
    }

    /* Los dos bordes de la pista: árboles pegados a izquierda y derecha */
    function addEdge(y: number) {
      const side = Math.random() < 0.5 ? 20 + Math.random() * 10 : g.w - 20 - Math.random() * 10;
      g.trees.push({ x: side, y, s: 16 + Math.random() * 8 });
    }

    function reset() {
      g.x = g.w / 2;
      g.vx = 0;
      g.dist = 0;
      g.acc = 0;
      g.speed = BASE_SPEED;
      g.skierY = Math.min(g.h * 0.28, 150);
      g.trees = [];
      g.marks = [];
      g.trail = [];

      for (let y = 0; y < g.h + 40; y += 24) {
        g.marks.push({ x: Math.random() * g.w, y: y + Math.random() * 20 });
        /* Nada justo delante del esquiador: nadie choca al arrancar */
        if (y > g.skierY + 70 && Math.random() < 0.55) addTree(y);
      }
      for (let y = 0; y < g.h; y += 40) {
        if (Math.random() < 0.6) {
          addEdge(y);
          addEdge(y + 18);
        }
      }
    }

    function fit() {
      const rect = box!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.max(1, Math.round(rect.width * dpr));
      canvas!.height = Math.max(1, Math.round(rect.height * dpr));

      const first = g.w === 0;
      g.w = rect.width;
      g.h = rect.height;
      g.dpr = dpr;

      palette = readPalette(box!);
      if (first || statusRef.current === "idle") reset();
      else g.x = Math.min(Math.max(g.x, 18), rect.width - 18);

      draw(false);
    }

    function drawTree(c: CanvasRenderingContext2D, o: Sprite, color: string) {
      c.fillStyle = color;
      c.fillRect(o.x - 1.5, o.y + o.s * 0.35, 3, o.s * 0.3);
      c.beginPath();
      c.moveTo(o.x, o.y - o.s * 0.75);
      c.lineTo(o.x + o.s * 0.42, o.y + o.s * 0.38);
      c.lineTo(o.x - o.s * 0.42, o.y + o.s * 0.38);
      c.closePath();
      c.fill();
    }

    function draw(crashed: boolean) {
      if (!g.w) return;
      const c = ctx!;
      const col = palette;

      c.setTransform(g.dpr, 0, 0, g.dpr, 0, 0);
      c.fillStyle = col.bg;
      c.fillRect(0, 0, g.w, g.h);

      /* Marcas de nieve: dan sensación de avance sin cargar la escena */
      c.strokeStyle = col.mark;
      c.lineWidth = 1.5;
      c.lineCap = "round";
      for (const o of g.marks) {
        c.beginPath();
        c.moveTo(o.x - 4, o.y + 2);
        c.lineTo(o.x, o.y - 1);
        c.lineTo(o.x + 4, o.y + 2);
        c.stroke();
      }

      if (g.trail.length > 1) {
        c.strokeStyle = col.trail;
        c.lineWidth = 1.5;
        for (const off of [-3, 3]) {
          c.beginPath();
          g.trail.forEach((p, i) =>
            i ? c.lineTo(p.x + off, p.y) : c.moveTo(p.x + off, p.y),
          );
          c.stroke();
        }
      }

      /* Los árboles por delante del esquiador se pintan después, para que
         el orden de profundidad se lea bien */
      const sorted = g.trees.slice().sort((a, b) => a.y - b.y);
      for (const o of sorted) if (o.y < g.skierY) drawTree(c, o, col.tree);

      c.save();
      c.translate(g.x, g.skierY);
      c.rotate(crashed ? 1.2 : (-g.vx / STEER_SPEED) * 0.55);
      c.strokeStyle = col.accent;
      c.lineWidth = 2.5;
      c.lineCap = "round";
      for (const off of [-3.5, 3.5]) {
        c.beginPath();
        c.moveTo(off, -6);
        c.lineTo(off, 10);
        c.stroke();
      }
      c.fillStyle = col.ink;
      c.beginPath();
      c.ellipse(0, 0, 4.5, 6, 0, 0, Math.PI * 2);
      c.fill();
      c.beginPath();
      c.arc(0, -8, 3.2, 0, Math.PI * 2);
      c.fill();
      c.strokeStyle = col.ink;
      c.lineWidth = 1.2;
      c.beginPath();
      c.moveTo(-6, -2);
      c.lineTo(-8, 9);
      c.moveTo(6, -2);
      c.lineTo(8, 9);
      c.stroke();
      c.restore();

      for (const o of sorted) if (o.y >= g.skierY) drawTree(c, o, col.tree);
    }

    function over() {
      cancelAnimationFrame(rafRef.current);
      const m = Math.floor(g.dist / PX_PER_METER);
      setMeters(m);
      if (m > readRecord()) {
        writeRecord(m);
        setRecord(m);
      }
      setStatusBoth("over");
      draw(true);
    }

    function loop(now: number) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const steer = (g.right ? 1 : 0) - (g.left ? 1 : 0);
      g.vx += (steer * STEER_SPEED - g.vx) * Math.min(1, dt * 7);
      g.x = Math.min(Math.max(g.x + g.vx * dt, 18), g.w - 18);
      g.speed = Math.min(BASE_SPEED * MAX_SPEED_FACTOR, g.speed + ACCELERATION * dt);

      /* Cuanto más se cruza, menos se baja: girar cuesta velocidad */
      const dy = g.speed * dt * (1 - Math.abs(g.vx) / 900);
      g.dist += dy;

      for (const o of g.trees) o.y -= dy;
      for (const o of g.marks) o.y -= dy;
      for (const o of g.trail) o.y -= dy;
      g.trees = g.trees.filter((o) => o.y > -40);
      g.marks = g.marks.filter((o) => o.y > -10);
      g.trail.push({ x: g.x, y: g.skierY });
      g.trail = g.trail.filter((o) => o.y > -10);

      /* El sembrado va por distancia, no por tiempo: la densidad no depende
         de los fps, y se estrecha según baja */
      g.acc += dy;
      const spacing = Math.max(16, 46 - g.dist / 600) * (320 / Math.max(g.w, 200));
      while (g.acc > spacing) {
        g.acc -= spacing;
        addTree(g.h + 30 + Math.random() * 20);
        if (Math.random() < 0.5) g.marks.push({ x: Math.random() * g.w, y: g.h + 10 });
        if (Math.random() < 0.35) addEdge(g.h + 30);
      }

      for (const o of g.trees) {
        const dx = o.x - g.x;
        const dy2 = o.y + o.s * 0.15 - g.skierY;
        const r = o.s * 0.42 + 4;
        if (dx * dx + dy2 * dy2 < r * r) {
          over();
          return;
        }
      }

      if (now - lastUi > 100) {
        lastUi = now;
        setMeters(Math.floor(g.dist / PX_PER_METER));
      }

      draw(false);
      rafRef.current = requestAnimationFrame(loop);
    }

    function start() {
      if (statusRef.current === "over" || statusRef.current === "idle") {
        reset();
        setMeters(0);
      }
      setStatusBoth("running");
      last = performance.now();
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(loop);
    }

    function pause() {
      cancelAnimationFrame(rafRef.current);
      g.left = false;
      g.right = false;
      setStatusBoth("paused");
    }

    function toggle() {
      if (statusRef.current === "running") pause();
      else start();
    }

    toggleRef.current = toggle;

    function onKeyDown(event: KeyboardEvent) {
      const key = event.key;
      if (key === "ArrowLeft" || key === "a") {
        g.left = true;
        if (statusRef.current === "running") event.preventDefault();
      } else if (key === "ArrowRight" || key === "d") {
        g.right = true;
        if (statusRef.current === "running") event.preventDefault();
      } else if (key === "Escape" && statusRef.current === "running") {
        pause();
      } else if (key === "Enter" || key === " ") {
        /* Enter y espacio son la tecla de los enlaces y botones de la página:
           solo arrancan la partida si el foco no está en uno */
        const target = event.target as HTMLElement | null;
        if (target?.closest("a, button, input, select, textarea")) return;
        event.preventDefault();
        toggle();
      }
    }

    function onKeyUp(event: KeyboardEvent) {
      if (event.key === "ArrowLeft" || event.key === "a") g.left = false;
      if (event.key === "ArrowRight" || event.key === "d") g.right = false;
    }

    /* Una pestaña en segundo plano no debe seguir calculando la partida:
       el navegador ya frena el rAF, pero así además no se choca a ciegas. */
    function onVisibility() {
      if (document.hidden && statusRef.current === "running") pause();
    }

    const observer = new ResizeObserver(() => fit());
    observer.observe(box);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    document.addEventListener("visibilitychange", onVisibility);

    setRecord(readRecord());
    setTouch(window.matchMedia("(pointer: coarse)").matches);
    fit();

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      document.removeEventListener("visibilitychange", onVisibility);
      toggleRef.current = null;
    };
  }, []);

  /* Sin teclado se gira pulsando una mitad del lienzo; al arrastrar el dedo
     de un lado al otro el giro cambia sin levantarlo. */
  function steerFromPointer(clientX: number) {
    const g = gameRef.current;
    if (!boxRef.current) return;
    const rect = boxRef.current.getBoundingClientRect();
    const right = clientX - rect.left > rect.width / 2;
    g.right = right;
    g.left = !right;
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (statusRef.current !== "running") return;
    gameRef.current.pointer = true;
    steerFromPointer(event.clientX);
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!gameRef.current.pointer || statusRef.current !== "running") return;
    steerFromPointer(event.clientX);
  }

  function onPointerUp() {
    const g = gameRef.current;
    if (!g.pointer) return;
    g.left = false;
    g.right = false;
    g.pointer = false;
  }

  const overlay = {
    idle: {
      title: t.idleTitle,
      text: touch ? t.idleTextTouch : t.idleTextKeyboard,
      button: t.idleButton,
    },
    paused: { title: t.pausedTitle, text: "", button: t.pausedButton },
    over: {
      title: t.overTitle,
      text:
        meters > 0 && meters >= record
          ? fill(t.overRecord, { n: meters })
          : fill(t.overScore, { n: meters }),
      button: t.overButton,
    },
    running: { title: "", text: "", button: "" },
  }[status];

  return (
    <section className="ski-game" aria-label={t.aria}>
      <header className="ski-game__head">
        <h2 className="ski-game__title">{t.title}</h2>
        <p className="ski-game__hint">{touch ? t.hintTouch : t.hintKeyboard}</p>
      </header>

      <div
        className="ski-game__box"
        ref={boxRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <canvas className="ski-game__canvas" ref={canvasRef} aria-hidden="true" />

        <p className="ski-game__hud">
          <span className="ski-game__meters">
            <span className="ski-game__meters-label">{t.meters}</span>
            <span className="ski-game__meters-value" aria-live="off">
              {meters}
            </span>
          </span>
          <span className="ski-game__record">{fill(t.record, { n: record })}</span>
        </p>

        {status !== "running" && (
          <div className="ski-game__overlay">
            <div className="ski-game__card" onPointerDown={(e) => e.stopPropagation()}>
              <p className="ski-game__card-title">{overlay.title}</p>
              {overlay.text && <p className="ski-game__card-text">{overlay.text}</p>}
              <button
                type="button"
                className="k-btn k-btn--cta k-btn--sm"
                onClick={() => toggleRef.current?.()}
              >
                {overlay.button}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SkiGame;
