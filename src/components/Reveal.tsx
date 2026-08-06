"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

/**
 * Reveal — fades/rises content into view once it scrolls into the
 * viewport. Respects prefers-reduced-motion (handled globally via the
 * .rise-in animation duration override in globals.css). Falls back to
 * always-visible if IntersectionObserver isn't available.
 */
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${visible ? "rise-in" : "opacity-0"} ${className}`}>
      {children}
    </div>
  );
}
