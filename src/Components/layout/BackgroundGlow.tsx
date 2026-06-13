// Decorative, fixed background glow + subtle grid. Server component (no JS).
export default function BackgroundGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Glow blobs */}
      <div className="absolute -top-48 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px] dark:bg-primary/15" />
      <div className="absolute top-1/4 -right-40 h-[34rem] w-[34rem] rounded-full bg-violet-500/15 blur-[130px]" />
      <div className="absolute bottom-0 -left-40 h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/10 blur-[130px]" />

      {/* Subtle dotted grid */}
      <div
        className="absolute inset-0 opacity-[0.18] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          color: "#64748b",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
}
