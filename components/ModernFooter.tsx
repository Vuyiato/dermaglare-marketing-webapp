"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ModernFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-main">
        <div className="footer-content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="footer-brand-section"
          >
            <h2 className="footer-brand-title">DERMAGLARE</h2>
            <p className="footer-tagline">
              REDEFINING BEAUTY, FIGHTING FOR RESULTS,
              <br />
              BRINGING EXCELLENCE IN ALL WAYS
            </p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/dermaglare_skin/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="18" cy="6" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/dermaglareskin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/dermaglareskin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          <div className="footer-links-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="footer-column"
            >
              <h3 className="footer-heading">SERVICES</h3>
              <ul className="footer-menu">
                <li>
                  <Link href="/services/medical">Medical Dermatology</Link>
                </li>
                <li>
                  <Link href="/services/cosmetic">Cosmetic Procedures</Link>
                </li>
                <li>
                  <Link href="/services/surgical">Surgical Dermatology</Link>
                </li>
                <li>
                  <Link href="/services/botox">Botox Treatments</Link>
                </li>
                <li>
                  <Link href="/services/prp">PRP Therapy</Link>
                </li>
                <li>
                  <Link href="/services/peeling">Chemical Peels</Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="footer-column"
            >
              <h3 className="footer-heading">QUICK LINKS</h3>
              <ul className="footer-menu">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/services">All Services</Link>
                </li>
                <li>
                  <a
                    href="https://patient-portal-snowy.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Appointment
                  </a>
                </li>
                <li>
                  <Link href="/download-app">Download App</Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="footer-column"
            >
              <h3 className="footer-heading">CONTACT</h3>
              <ul className="footer-menu contact-info">
                <li>
                  <span className="contact-label">PHONE</span>
                  <a href="tel:0693223134">069 322 3134</a>
                </li>
                <li>
                  <span className="contact-label">EMAIL</span>
                  <a href="mailto:drnkehli@dermaglareskin.co.za">
                    drnkehli@dermaglareskin.co.za
                  </a>
                </li>
                <li>
                  <span className="contact-label">ADDRESS</span>
                  <span>
                    Suite 3, Eastwing, Ground floor
                    <br />
                    Wingwood Place Leicester Rd
                    <br />
                    Medical Suites, Bedford Gardens
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="footer-bottom-text"
          >
            <p>&copy; {currentYear} DERMAGLARE SKIN. ALL RIGHTS RESERVED</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="footer-legal"
          >
            <Link href="/privacy">PRIVACY POLICY</Link>
            <span className="separator">|</span>
            <Link href="/terms">TERMS & CONDITIONS</Link>
          </motion.div>
        </div>
      </div>

      <div className="footer-pattern"></div>
    </footer>
  );
}
