import { cn } from "@/Components/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-[#0b0b12] disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-primary to-violet-500 text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5",
  outline:
    "border border-slate-300 text-slate-700 hover:border-primary hover:text-primary dark:border-white/15 dark:text-slate-200 dark:hover:border-primary dark:hover:text-white",
  ghost:
    "text-slate-600 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-white/5",
};

const Spinner = () => (
  <svg
    className="h-4 w-4 animate-spin"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = "primary", className } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href !== undefined) {
    const external = props.external;
    return (
      <Link
        href={props.href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, loading = false, disabled = false } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
}
