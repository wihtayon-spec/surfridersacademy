import Link from "next/link";
import { getProduct, formatPrice } from "@/config/site";

export default function LessonCard({
  title,
  forWho,
  blurb,
  productId,
}: {
  title: string;
  forWho: string;
  blurb: string;
  productId: string;
}) {
  const product = getProduct(productId);
  return (
    <div className="group flex flex-col rounded-2xl border border-ocean/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean/5">
      <div className="eyebrow text-cyan">{forWho}</div>
      <h3 className="font-display mt-2 text-xl text-ocean">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ocean/65">{blurb}</p>

      {product && (
        <ul className="mt-5 space-y-1.5 border-t border-ocean/10 pt-5 text-sm text-ocean/70">
          {product.includes.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex items-center justify-between">
        {product && (
          <span className="font-display text-lg text-ocean">
            {formatPrice(product.price)}
            {product.price !== null && <span className="ml-1 text-xs font-sans text-ocean/50">{product.unit}</span>}
          </span>
        )}
        <Link
          href="/contact"
          className="text-sm font-semibold text-cyan underline-offset-4 transition-colors group-hover:underline"
        >
          {product?.price === null ? "Request a Quote →" : "Book →"}
        </Link>
      </div>
    </div>
  );
}
