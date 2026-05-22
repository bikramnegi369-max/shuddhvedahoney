"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type Direction = "left" | "right" | "top" | "bottom";

const bees = [
  {
    id: 1,
    size: 110,
    opacity: 0.95,
    direction: "right" as Direction,
    initial: {
      left: "-7%",
      top: "22%",
    },
    animate: {
      x: ["0vw", "18vw", "42vw", "70vw", "120vw"],
      y: [0, -25, 15, -10, 8],
      rotate: [0, -5, 3, -2, 0],
    },
    duration: 42,
  },

  {
    id: 2,
    size: 130,
    opacity: 0.75,
    direction: "left" as Direction,
    initial: {
      right: "-10%",
      top: "65%",
    },
    animate: {
      x: ["0vw", "-12vw", "-35vw", "-65vw", "-120vw"],
      y: [0, 20, -15, 18, -8],
      rotate: [0, 4, -3, 2, 0],
    },
    duration: 55,
  },

  {
    id: 3,
    size: 65,
    opacity: 0.35,
    blur: "blur-[1.5px]",
    direction: "right" as Direction,
    initial: {
      left: "-7%",
      top: "78%",
    },
    animate: {
      x: ["0vw", "20vw", "55vw", "90vw", "125vw"],
      y: [0, -8, 6, -5, 4],
      rotate: [0, -2, 2, -1, 0],
    },
    duration: 75,
  },

  {
    id: 4,
    size: 90,
    opacity: 0.55,
    direction: "left" as Direction,
    initial: {
      right: "-7%",
      top: "32%",
    },
    animate: {
      x: ["0vw", "-10vw", "-25vw", "-50vw", "-90vw"],
      y: [0, 30, -18, 12, -6],
      rotate: [0, 6, -5, 3, 0],
    },
    duration: 62,
  },

  // Bee descending from sky
  {
    id: 5,
    size: 85,
    opacity: 0.45,
    direction: "top" as Direction,
    initial: {
      left: "15%",
      top: "-7%",
    },
    animate: {
      x: ["0vw", "8vw", "-6vw", "12vw", "18vw"],
      y: ["0vh", "20vh", "40vh", "65vh", "95vh"],
      rotate: [0, 2, -2, 1, 0], // ✅ FIXED (removed 90deg rotation)
    },
    duration: 68,
  },

  // Bee rising from below
  {
    id: 6,
    size: 95,
    opacity: 0.5,
    direction: "bottom" as Direction,
    initial: {
      right: "18%",
      bottom: "-7%",
    },
    animate: {
      x: ["0vw", "-8vw", "5vw", "-12vw", "-18vw"],
      y: ["0vh", "-20vh", "-40vh", "-65vh", "-95vh"],
      rotate: [0, -2, 2, -1, 0], // ✅ FIXED (removed -90deg rotation)
    },
    duration: 72,
  },
];

export default function BeeLayer() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
    >
      {bees.map((bee) => (
        <motion.div
          key={bee.id}
          className="
            absolute
            will-change-transform
            transform-gpu
          "
          style={{
            ...bee.initial,
            opacity: bee.opacity,
          }}
          animate={{
            x: bee.animate.x,
            y: bee.animate.y,
            rotate: bee.animate.rotate,
          }}
          transition={{
            duration: bee.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: [0.42, 0, 0.58, 1],
            delay: 0,
          }}
        >
          {/* Natural floating motion */}
          <motion.div
            animate={{
              y: [0, -2, 1, -1, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Body vibration */}
            <motion.div
              animate={{
                scale: [1, 1.015, 1],
              }}
              transition={{
                duration: 0.16,
                repeat: Infinity,
                ease: "linear",
              }}
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
                  ${
                    bee.id <= 2
                      ? "drop-shadow-[0_0_32px_rgba(255,210,120,0.35)]"
                      : "drop-shadow-[0_0_20px_rgba(212,168,92,0.25)]"
                  }
                  ${bee.blur ?? ""}

                  ${bee.direction === "right" ? "-scale-x-100" : ""}
                `}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
