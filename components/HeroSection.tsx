"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { gsap } from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (textRef.current) {
      const letters = textRef.current.querySelectorAll(".letter");
      gsap.fromTo(
        letters,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.03,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    }
  }, []);

  const title = "Dermaglare Skin";
  const subtitle = "Dermatology & Skin Care";

  return (
    <motion.section
      ref={containerRef}
      className="hero-section-modern"
      style={{ opacity }}
    >
      <motion.div className="hero-background" style={{ y: smoothY, scale }}>
        <div className="gradient-overlay"></div>
        <div className="noise-texture"></div>
      </motion.div>

      <div className="hero-content-modern">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-badge"
        >
          <span className="pulse-dot"></span>
          DERMATOLOGY EXCELLENCE SINCE 2018
        </motion.div>

        <div ref={textRef} className="hero-title-modern">
          <h1 className="main-title">
            {title.split("").map((letter, index) => (
              <span key={index} className="letter">
                {letter}
              </span>
            ))}
          </h1>
          <h2 className="sub-title">
            {subtitle.split("").map((letter, index) => (
              <span key={index} className="letter">
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hero-description-modern"
        >
          SPECIALIST DERMATOLOGIST - DR JABU NKEHLI
          <br />
          <span className="highlight-text">
            Redefining beauty, Fighting for results, Bringing excellence
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="hero-cta-group"
        >
          <a
            href="https://patient-portal-snowy.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>BOOK APPOINTMENT</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </a>

          <a href="/download-app">
            <motion.button
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DOWNLOAD APP
            </motion.button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="scroll-indicator"
        >
          <div className="scroll-text">SCROLL TO EXPLORE</div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="scroll-arrow"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5v14M19 12l-7 7-7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <div className="floating-elements">
        <motion.div
          className="float-circle circle-1"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="float-circle circle-2"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="float-circle circle-3"
          animate={{
            y: [-15, 15, -15],
            x: [15, -15, 15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.section>
  );
}
