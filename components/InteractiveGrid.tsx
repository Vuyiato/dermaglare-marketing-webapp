"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GridItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

const gridItems: GridItem[] = [
  {
    id: 1,
    title: "Medical Dermatology",
    subtitle: "Expert Care",
    description:
      "Comprehensive treatment for skin conditions, from acne to eczema and psoriasis",
    icon: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M17 7l-5 5-5-5M7 17l5-5 5 5"/><circle cx="12" cy="12" r="3"/></svg>`,
  },
  {
    id: 2,
    title: "Cosmetic Procedures",
    subtitle: "Aesthetic Enhancement",
    description: "Advanced cosmetic treatments to enhance your natural beauty",
    icon: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  },
  {
    id: 3,
    title: "Surgical Solutions",
    subtitle: "Precision Treatment",
    description:
      "Expert surgical interventions for complex dermatological conditions",
    icon: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 3L5 7l4 4M15 3l4 4-4 4"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  },
  {
    id: 4,
    title: "Paediatric Care",
    subtitle: "Children's Skin Health",
    description: "Specialized dermatological care for children and adolescents",
    icon: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  },
];

export default function InteractiveGrid() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <section className="interactive-grid-section">
      <div className="grid-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid-header"
        >
          <h2 className="grid-title">
            <span className="title-line">COMPREHENSIVE</span>
            <span className="title-line highlight">CARE</span>
          </h2>
          <p className="grid-subtitle">
            Explore our range of specialized treatments
          </p>
        </motion.div>

        <div className="grid-items">
          {gridItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`grid-item ${activeItem === item.id ? "active" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setActiveItem(item.id)}
              onHoverEnd={() => setActiveItem(null)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="grid-item-inner">
                <motion.div
                  className="item-icon"
                  animate={
                    activeItem === item.id
                      ? { scale: 1.2, rotate: 5 }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />

                <div className="item-content">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-subtitle">{item.subtitle}</p>

                  <AnimatePresence>
                    {activeItem === item.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="item-description"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div
                  className="item-arrow"
                  animate={activeItem === item.id ? { x: 10 } : { x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>

              <motion.div
                className="grid-item-background"
                initial={{ opacity: 0 }}
                animate={
                  activeItem === item.id ? { opacity: 1 } : { opacity: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
