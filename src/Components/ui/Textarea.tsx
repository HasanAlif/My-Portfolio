import { cn } from "@/Components/lib/utils";

type TextareaProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  required?: boolean;
  className?: string;
};

export default function Textarea({
  label,
  id,
  name,
  value,
  onChange,
  rows = 5,
  required = false,
  className,
}: TextareaProps) {
  return (
    <div className={cn("relative", className)}>
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        required={required}
        placeholder={label}
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full resize-none rounded-xl border border-slate-300 bg-white/60 px-4 pb-2.5 pt-5 text-sm text-slate-900 outline-none transition-colors placeholder-transparent focus:border-primary dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-xs text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
}
