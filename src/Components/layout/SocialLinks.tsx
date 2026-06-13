import { cn } from "@/Components/lib/utils";
import { socials } from "@/data/socials";

export default function SocialLinks({
  className,
  itemClassName,
}: {
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={social.name}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-glow dark:border-white/10 dark:text-slate-300 dark:hover:text-white [&_svg]:h-5 [&_svg]:w-5",
            itemClassName
          )}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
