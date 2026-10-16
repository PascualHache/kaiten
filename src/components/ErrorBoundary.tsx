import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import logoSquared from "../assets/logos/logo_squared.png";
import { useUi } from "../i18n";
import "./ErrorBoundary.css";

const WHATSAPP_URL = "https://wa.me/34699820954";
const PHONE_URL = "tel:+34699820954";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * Último cortafuegos de la aplicación.
 *
 * Sin esto, cualquier excepción durante el render deja la pantalla en blanco y
 * el visitante no tiene forma de llegar a reservar. El fallback es HTML plano
 * (`<a href>`, no `<Link>`) a propósito: si lo que ha fallado es el Router, un
 * `<Link>` reventaría dentro del propio fallback.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    /* El reporte a Sentry no se hace aquí, sino con `onCaughtError` en
       main.tsx: React 19 ya avisa por esa vía de todo lo que absorbe este
       boundary, y duplicarlo crearía dos issues por cada fallo. */
    console.error("[Kaiten] Error no capturado:", error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return <ErrorScreen />;
  }
}

/* El fallback va aparte para poder leer el idioma con un hook: el
   ErrorBoundary tiene que ser una clase (getDerivedStateFromError). */
function ErrorScreen() {
  const ui = useUi();

  return (
    <div className="error-boundary">
      <div className="error-boundary__content">
        <img className="error-boundary__logo" src={logoSquared} alt="Kaiten" />
        <h1 className="error-boundary__title">{ui.error.title}</h1>
        <p className="error-boundary__text">{ui.error.text}</p>

        <div className="error-boundary__actions">
          <button
            type="button"
            className="error-boundary__btn"
            onClick={() => window.location.reload()}
          >
            {ui.error.retry}
          </button>
          <a href="/" className="error-boundary__link">
            {ui.error.home}
          </a>
        </div>

        <p className="error-boundary__contact">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <span aria-hidden="true">·</span>
          <a href={PHONE_URL}>+34 699 820 954</a>
        </p>
      </div>
    </div>
  );
}

export default ErrorBoundary;
