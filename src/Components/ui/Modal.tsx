"use client";

import { closedIcon } from "@/asserts/icons/Icons";
import { AnimatePresence, motion, Variants } from "framer-motion";
import * as React from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const dialogVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 24 },
  },
  exit: { opacity: 0, y: 16, scale: 0.98, transition: { duration: 0.15 } },
};

export function useModal(defaultOpen = false) {
  const [isOpen, setOpen] = React.useState(defaultOpen);
  const open = React.useCallback(() => setOpen(true), []);
  const close = React.useCallback(() => setOpen(false), []);
  return { isOpen, open, close };
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
}: ModalProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const backdropRef = React.useRef<HTMLDivElement | null>(null);
  const previouslyFocused = React.useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // Lock body scroll + focus management while open
  React.useEffect(() => {
    if (!isOpen) return;
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const toFocus = containerRef.current?.querySelector<HTMLElement>(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );
    toFocus?.focus();

    return () => {
      document.body.style.overflow = original;
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen]);

  // ESC to close + simple focus trap
  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && containerRef.current) {
        const focusable = Array.from(
          containerRef.current.querySelectorAll<HTMLElement>(
            "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
          )
        ).filter((el) => !el.hasAttribute("disabled"));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        } else if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div
            ref={backdropRef}
            onMouseDown={(e) => {
              if (e.target === backdropRef.current) onClose();
            }}
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          />
          <motion.div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="glass relative z-[101] w-full max-w-md rounded-2xl shadow-glow-lg"
          >
            <div className="flex items-center justify-between border-b border-slate-200/60 px-5 py-4 dark:border-white/10">
              {title && (
                <h3
                  id="modal-title"
                  className="text-lg font-semibold text-slate-900 dark:text-white"
                >
                  {title}
                </h3>
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="inline-flex items-center justify-center rounded-full p-1.5 text-slate-500 transition-colors hover:bg-primary/10 hover:text-primary dark:text-slate-400"
              >
                {closedIcon}
              </button>
            </div>
            <div className="px-5 py-4">{children}</div>
            {footer && (
              <div className="border-t border-slate-200/60 px-5 py-4 dark:border-white/10">
                {footer}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
