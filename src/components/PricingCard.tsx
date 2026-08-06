import { Product, formatPrice } from "@/config/site";
import Button from "./Button";

export default function PricingCard({ product }: { product: Product }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-7 ${
        product.featured
          ? "border-2 border-cyan bg-ocean text-white shadow-xl shadow-ocean/20"
          : "border border-ocean/10 bg-white text-ocean shadow-sm"
      }`}
    >
      {product.badge && (
        <span
          className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-semibold ${
            product.featured ? "bg-cyan text-ocean" : "bg-sunrise text-white"
          }`}
        >
          {product.badge}
        </span>
      )}

      <h3 className="font-display mt-2 text-xl">{product.name}</h3>
      <p className={`mt-1 text-sm ${product.featured ? "text-sand/70" : "text-ocean/60"}`}>{product.forWho}</p>

      <div className="mt-5">
        <span className="font-display text-4xl">{formatPrice(product.price)}</span>
        {product.price !== null && (
          <span className={`ml-1.5 text-sm ${product.featured ? "text-sand/60" : "text-ocean/50"}`}>
            {product.unit}
          </span>
        )}
      </div>
      <p className={`mt-1 text-xs ${product.featured ? "text-sand/50" : "text-ocean/45"}`}>{product.duration}</p>
      {product.note && (
        <p className={`mt-1 text-xs italic ${product.featured ? "text-sand/45" : "text-ocean/40"}`}>{product.note}</p>
      )}

      <ul className="mt-6 flex-1 space-y-2.5 text-sm">
        {product.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <svg
              className={`mt-0.5 h-4 w-4 shrink-0 ${product.featured ? "text-cyan-bright" : "text-cyan"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className={product.featured ? "text-sand/85" : "text-ocean/70"}>{item}</span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        variant={product.featured ? "primary" : "sand"}
        className="mt-7 w-full"
      >
        {product.price === null ? "Request a Quote" : "Book This Lesson"}
      </Button>
    </div>
  );
}
