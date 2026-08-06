import { cta } from "@/config/site";

export default function StickyBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ocean/95 backdrop-blur-md lg:hidden">
      <div className="flex items-stretch gap-2 p-3" style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}>
        <a
          href={cta.call.href}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/25 py-3 text-sm font-semibold text-white"
        >
          Call
        </a>
        <a
          href={cta.text.href}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/25 py-3 text-sm font-semibold text-white"
        >
          Text
        </a>
        <a
          href={cta.primary.href}
          className="flex flex-[1.6] items-center justify-center rounded-full bg-cyan py-3 text-sm font-bold text-ocean"
        >
          {cta.primaryShort.label}
        </a>
      </div>
    </div>
  );
}
