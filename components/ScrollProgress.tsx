"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

      {/* Circular Progress Indicator */}
      <motion.div
        className="scroll-progress-circle"
        style={{
          opacity: useSpring(scrollYProgress, {
            stiffness: 100,
            damping: 30,
          }),
        }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle
            cx="30"
            cy="30"
            r="28"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
            fill="none"
          />
          <motion.circle
            cx="30"
            cy="30"
            r="28"
            stroke="#E8D99F"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
              rotate: -90,
              transformOrigin: "center",
            }}
            strokeDasharray="0 1"
          />
        </svg>

        <motion.button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 19V5M5 12l7-7 7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </motion.div>
    </>
  );
}
