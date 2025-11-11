"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SkinTipsSection() {
  const tips = [
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ),
      title: "Sun Protection is Key",
      description:
        "Always wear SPF 30+ sunscreen, even on cloudy days. UV rays are the leading cause of premature aging and skin cancer.",
    },
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
        </svg>
      ),
      title: "Hydration Matters",
      description:
        "Drink plenty of water and use a quality moisturizer suited to your skin type. Hydrated skin is healthy skin.",
    },
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ),
      title: "Sleep Well",
      description:
        "Your skin repairs itself during sleep. Aim for 7-9 hours nightly for optimal skin regeneration and a healthy glow.",
    },
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
      title: "Cleanse Gently",
      description:
        "Use a gentle cleanser twice daily. Over-washing or harsh products can strip natural oils and damage your skin barrier.",
    },
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      ),
      title: "Healthy Diet",
      description:
        "Eat antioxidant-rich foods like berries, leafy greens, and nuts. Your skin reflects what you eat.",
    },
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Regular Check-ups",
      description:
        "Visit a dermatologist annually for skin cancer screenings and professional advice tailored to your skin's needs.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      {/* Skin Care Tips Section */}
      <section className="skin-tips-section">
        <div className="skin-tips-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="tips-header"
          >
            <p className="section-label">DERMATOLOGY INSIGHTS</p>
            <h2 className="section-title">Essential Skin Care Tips</h2>
            <p className="section-description">
              Expert advice from Dr. Jabu Nkehli to help you maintain healthy,
              glowing skin
            </p>
          </motion.div>

          <motion.div
            className="tips-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                className="tip-card"
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="tip-icon-wrapper">{tip.icon}</div>
                <h3 className="tip-title">{tip.title}</h3>
                <p className="tip-description">{tip.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="cta-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Skin?
          </motion.h2>
          <motion.p
            className="cta-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Book a consultation with Dr. Jabu Nkehli and start your journey to
            healthier, more radiant skin today.
          </motion.p>
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/download-app" className="cta-button primary">
              BOOK NOW
            </Link>
            <a href="tel:0693223134" className="cta-button secondary">
              CALL US
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
