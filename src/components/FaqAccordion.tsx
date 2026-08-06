"use client";

import { useState } from "react";
import { faqs } from "@/config/site";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ocean/10 border-y border-ocean/10">
      {faqs.map((f, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={f.q}>
            <button
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <span className="font-display text-base text-ocean sm:text-lg">{f.q}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ocean/20 text-ocean transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              className={`grid overflow-hidden transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="min-h-0 text-sm leading-relaxed text-ocean/65 sm:text-[15px]">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
