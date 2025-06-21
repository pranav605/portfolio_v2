'use client';
import React, { useRef, useEffect } from 'react';

const techs = [
  "React JS", "Node.js", "Next.js", "TypeScript", "ExpressJS", "Vite", "HTML",
  "CSS", "Tailwind", "MongoDB", "Postgres", "Git", "Python", "Django", "AWS"
];

export default function AutoScrollingTechList() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1; // pixels per frame

    const interval = setInterval(() => {
      if (!container) return;

      scrollAmount += speed;
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0; // reset scroll
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }, 10); // lower value = smoother animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:hidden pt-4 px-2">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 pb-2 snap-x scroll-smooth no-scrollbar cursor-default"
      >
        {techs.map((tech, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-start text-gray-200 border border-zinc-800 shadow-md rounded px-4 py-2 text-sm font-medium flex items-center gap-2 hover:scale-105 transition-transform duration-200"
          >
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
