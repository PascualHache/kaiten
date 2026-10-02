import type { ReactNode } from "react";
import "./PageTitle.css";

interface PageTitleProps {
  /** Small uppercase line above the heading. */
  eyebrow?: string;
  /** Heading content — a string, or markup when the title breaks lines. */
  children: ReactNode;
  /** "loose" widens the gap below the heading (legal pages). */
  spacing?: "default" | "loose";
}

export default function PageTitle({
  eyebrow,
  children,
  spacing = "default",
}: PageTitleProps) {
  return (
    <header
      className={`page-title${spacing === "loose" ? " page-title--loose" : ""}`}
      data-reveal=""
    >
      {eyebrow && <p className="page-title__eyebrow">{eyebrow}</p>}
      <h1 className="page-title__heading">{children}</h1>
    </header>
  );
}
