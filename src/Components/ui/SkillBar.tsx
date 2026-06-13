"use client";

import { motion, useReducedMotion } from "framer-motion";

type SkillBarProps = {
  name: string;
  value: number;
};

export default function SkillBar({ name, value }: SkillBarProps) {
  const reduce = useReducedMotion();

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-200">
          {name}
        </span>
        <span className="font-semibold text-primary">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-violet-500"
          initial={{ width: reduce ? `${value}%` : 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
