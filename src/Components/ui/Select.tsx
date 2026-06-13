import { cn } from "@/Components/lib/utils";

type Option = { value: string; label: string };

type SelectProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  required?: boolean;
  className?: string;
};

export default function Select({
  label,
  id,
  name,
  value,
  onChange,
  options,
  required = false,
  className,
}: SelectProps) {
  return (
    <div className={cn("relative", className)}>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium text-slate-500 dark:text-slate-400"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full cursor-pointer appearance-none rounded-xl border border-slate-300 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-primary dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-white text-slate-900 dark:bg-[#12121b] dark:text-white"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
