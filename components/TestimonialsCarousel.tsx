"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  treatment: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    treatment: "Botox Treatment",
    quote:
      "Dr. Nkehli is absolutely amazing! The results exceeded my expectations and the care was exceptional.",
    rating: 5,
  },
  {
    id: 2,
    name: "James K.",
    treatment: "PRP Therapy",
    quote:
      "Professional, knowledgeable, and caring. The PRP treatment has transformed my skin completely.",
    rating: 5,
  },
  {
    id: 3,
    name: "Linda P.",
    treatment: "Cosmetic Procedures",
    quote:
      "Outstanding results! Dr. Nkehli's expertise and attention to detail are unmatched.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael T.",
    treatment: "Medical Dermatology",
    quote:
      "Finally found a dermatologist who truly understands skin conditions. Highly recommend!",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="testimonials-header"
        >
          <h2 className="testimonials-title">
            WHAT OUR
            <br />
            <span className="highlight">PATIENTS SAY</span>
          </h2>
        </motion.div>

        <div className="carousel-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="testimonial-card"
            >
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-quote">
                  {testimonials[currentIndex].quote}
                </p>

                <div className="testimonial-footer">
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="testimonial-treatment">
                      {testimonials[currentIndex].treatment}
                    </p>
                  </div>

                  <div className="testimonial-rating">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <span key={i} className="star">
                          ★
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="carousel-controls">
            <motion.button
              className="carousel-button prev"
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>

            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <motion.button
              className="carousel-button next"
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
