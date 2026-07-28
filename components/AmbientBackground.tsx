"use client";

export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* 1. Engineering Grid Layer with 50s Slow Parallax Drift */}
      <div className="absolute -inset-[16px] ambient-grid-layer animate-ambient-drift opacity-100" />

      {/* 2. Micro Noise Texture Layer for Editorial Depth */}
      <div className="absolute inset-0 ambient-noise-layer opacity-[0.04] mix-blend-overlay" />
    </div>
  );
}
