import { cn } from "@/Components/lib/utils";

type InputProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  className?: string;
};

const fieldClass =
  "peer w-full rounded-xl border border-slate-300 bg-white/60 px-4 pb-2.5 pt-5 text-sm text-slate-900 outline-none transition-colors placeholder-transparent focus:border-primary dark:border-white/10 dark:bg-white/[0.03] dark:text-white";

const labelClass =
  "pointer-events-none absolute left-4 top-2 text-xs text-slate-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary";

export default function Input({
  label,
  id,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  className,
}: InputProps) {
  return (
    <div className={cn("relative", className)}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        required={required}
        placeholder={label}
        onChange={(e) => onChange(e.target.value)}
        className={fieldClass}
      />
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
    </div>
  );
}
