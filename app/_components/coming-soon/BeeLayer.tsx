"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type Direction = "left" | "right" | "top" | "bottom";

interface BeeInitial {
  left?: string | number;
  right?: string | number;
  top?: string | number;
  bottom?: string | number;
}

interface BeeAnimate {
  x: (string | number)[];
  y: (string | number)[];
  rotate: number[];
}

type Bee = {
  id: number;
  size: number;
  opacity: number;
  direction: Direction;
  depth: number;
  blur?: string;
  initial: BeeInitial;
  animate: BeeAnimate;
  duration: number;
};

const bees: Bee[] = [
  {
    id: 1,
    size: 110,
    opacity: 1,
    depth: 1,
    direction: "right",
    initial: { left: "-7%", top: "22%" },
    animate: {
      x: ["0vw", "18vw", "42vw", "70vw", "105vw"], // FIXED
      y: [0, -25, 15, -10, 8],
      rotate: [0, -5, 3, -2, 0],
    },
    duration: 42,
  },

  {
    id: 2,
    size: 130,
    opacity: 0.95,
    depth: 0.8,
    direction: "left",
    initial: { right: "-10%", top: "65%" },
    animate: {
      x: ["0vw", "-12vw", "-35vw", "-65vw", "-105vw"], // FIXED
      y: [0, 20, -15, 18, -8],
      rotate: [0, 4, -3, 2, 0],
    },
    duration: 55,
  },

  {
    id: 3,
    size: 65,
    opacity: 0.9,
    depth: 0.3,
    direction: "right",
    initial: { left: "-7%", top: "78%" },
    animate: {
      x: ["0vw", "20vw", "55vw", "90vw", "105vw"], // FIXED
      y: [0, -8, 6, -5, 4],
      rotate: [0, -2, 2, -1, 0],
    },
    duration: 75,
  },

  {
    id: 4,
    size: 90,
    opacity: 0.92,
    depth: 0.7,
    direction: "left",
    initial: { right: "-7%", top: "32%" },
    animate: {
      x: ["0vw", "-10vw", "-25vw", "-50vw", "-95vw"], // FIXED
      y: [0, 30, -18, 12, -6],
      rotate: [0, 6, -5, 3, 0],
    },
    duration: 62,
  },

  {
    id: 5,
    size: 85,
    opacity: 0.88,
    depth: 0.2,
    direction: "top",
    initial: { left: "15%", top: "-7%" },
    animate: {
      x: ["0vw", "8vw", "-6vw", "12vw", "18vw"],
      y: ["0vh", "20vh", "40vh", "65vh", "95vh"],
      rotate: [0, 2, -2, 1, 0],
    },
    duration: 68,
  },

  {
    id: 6,
    size: 95,
    opacity: 0.9,
    depth: 0.25,
    direction: "bottom",
    initial: { right: "18%", bottom: "-7%" },
    animate: {
      x: ["0vw", "-8vw", "5vw", "-12vw", "-95vw"], // FIXED
      y: ["0vh", "-20vh", "-40vh", "-65vh", "-95vh"],
      rotate: [0, -2, 2, -1, 0],
    },
    duration: 72,
  },
];

export default function BeeLayer() {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bees.map((bee) => {
        const scale = 0.4 + Math.pow(bee.depth, 0.85) * 0.75;

        const opacity = 0.85 + bee.depth * 0.15;

        const blur =
          bee.depth < 0.3 ? "blur-[2px]" : bee.depth < 0.6 ? "blur-[1px]" : "";

        return (
          <motion.div
            key={bee.id}
            className="absolute will-change-transform transform-gpu translate-z-0"
            style={{
              ...bee.initial,
              opacity,
              zIndex: Math.round(bee.depth * 10),
              transformOrigin: "center",
              backfaceVisibility: "hidden",
            }}
            animate={{
              x: bee.animate.x,
              y: bee.animate.y,
              rotate: bee.animate.rotate,
              scale,
            }}
            transition={{
              duration: bee.duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <motion.div
              animate={{ y: [0, -2, 1, -1, 0] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            >
              <motion.div
                animate={{ scale: [1, 1.012, 1] }}
                transition={{ duration: 0.16, repeat: Infinity }}
              >
                <Image
                  src="/bee.gif"
                  alt=""
                  width={bee.size}
                  height={bee.size}
                  draggable={false}
                  priority={bee.id <= 2}
                  className={`
                    select-none
                    ${blur}
                    ${bee.direction === "right" ? "-scale-x-100" : ""}
                  `}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
