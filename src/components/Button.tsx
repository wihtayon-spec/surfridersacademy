import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "sand";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-cyan text-ocean hover:bg-cyan-bright hover:-translate-y-0.5 shadow-lg shadow-cyan/20",
  secondary:
    "bg-white/10 text-white border border-white/25 hover:bg-white/20 backdrop-blur",
  ghost:
    "text-ocean border border-ocean/20 hover:border-ocean/50 hover:bg-ocean/5",
  sand: "bg-ocean text-sand hover:bg-navy hover:-translate-y-0.5 shadow-lg shadow-ocean/20",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  [key: string]: unknown;
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const isAnchor = href.startsWith("tel:") || href.startsWith("sms:") || href.startsWith("http") || external;

  if (isAnchor) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
