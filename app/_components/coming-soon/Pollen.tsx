"use client";

import { motion } from "framer-motion";
import { useEffect, useState, startTransition } from "react";

interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export default function PollenLayer() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 45 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 5,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 10,
    }));

    startTransition(() => {
      setParticles(generated);
    });
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-amber-300"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: 0.12,
          }}
          animate={{
            y: [0, -120],
            x: [0, 15, -10, 5],
            opacity: [0, 0.15, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
