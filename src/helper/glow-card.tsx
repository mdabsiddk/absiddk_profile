"use client";

import React, { useEffect, useRef } from "react";

const GlowCard = ({ children, identifier }: { children: React.ReactNode, identifier: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      id={identifier}
      className="glow-card group relative rounded-xl border border-[#25213b] bg-[#101123] transition-all duration-300 hover:border-[#16f2b3]"
      style={{
        background: "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(22, 242, 179, 0.15), transparent 40%)",
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowCard;
