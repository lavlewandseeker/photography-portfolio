"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const themes = [
  { title: "Nature", href: "/nature" },
  { title: "Architecture", href: "/architecture" },
  { title: "Art", href: "/art" },
  { title: "Sea", href: "/sea" }
];

export default function FloatingThemesBackUp() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const bubbles = bubblesRef.current;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const state = bubbles.map(() => ({
      x: Math.random() * width * 0.66,
      y: Math.random() * height * 0.66,
      vx: (Math.random() - 0.5) * 0.05,
    vy: (Math.random() - 0.5) * 0.05
    }));

    function animate() {
      state.forEach((p, i) => {


        p.x += p.vx * 0.01
        p.y += p.vy * 0.01

        const bubble = bubbles[i];
        bubble.style.transform = `translate(${p.x}px, ${p.y}px)`;
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {};
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">

      {themes.map((theme, i) => (
        <Link key={theme.href} href={theme.href}>
          <div
            ref={(el) => {
              if (el) bubblesRef.current[i] = el;
            }}
            className="absolute top-0 left-0 w-28 h-28 rounded-full border border-white/40
            flex items-center justify-center
            text-white font-semibold
            backdrop-blur-md bg-white/5
            shadow-[0_0_25px_rgba(255,255,255,0.25)]
            transition cursor-pointer"
          >
            {theme.title}
          </div>
        </Link>
      ))}

    </div>
  );
}