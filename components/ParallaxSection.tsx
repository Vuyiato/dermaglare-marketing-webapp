"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="parallax-section">
      <motion.div className="parallax-container" style={{ opacity }}>
        <motion.div className="parallax-content" style={{ scale }}>
          <div className="parallax-text-group">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="parallax-title">
                EXCELLENCE IN
                <br />
                <span className="highlight">DERMATOLOGY</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="parallax-description"
            >
              It doesn't matter where you start, it's how you progress from
              there.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="signature"
            >
              <svg width="200" height="80" viewBox="0 0 200 80" fill="none">
                <path
                  d="M10 40 Q 50 10, 90 40 T 170 40"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="signature-path"
                />
              </svg>
            </motion.div>
          </div>

          <div className="parallax-images">
            <motion.div className="parallax-image image-1" style={{ y: y1 }}>
              <div className="image-placeholder">
                <img
                  src="/images/doctor-office.jpg"
                  alt="Dr. Jabu Nkehli at work"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="image-overlay"></div>
                <div className="image-label">DERMATOLOGY EXPERT</div>
              </div>
            </motion.div>

            <motion.div className="parallax-image image-2" style={{ y: y2 }}>
              <div className="image-placeholder">
                <img
                  src="/images/doctor-poster.jpeg"
                  alt="Dr. Jabu Nkehli"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="image-overlay"></div>
                <div className="image-label">EXCELLENCE IN CARE</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
