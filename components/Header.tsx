"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <Link href="/" onClick={closeMenu}>
            <div className="logo-text">
              <img
                src="/images/logo.png"
                alt="Dermaglare Logo"
                className="hero-img"
              />
            </div>
          </Link>
        </div>

        <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link href="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="nav-link" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link
                href="https://patient-portal-snowy.vercel.app"
                className="nav-link"
                onClick={closeMenu}
              >
                Book Appointment
              </Link>
            </li>
            <li>
              <Link
                href="/download-app"
                className="nav-link"
                onClick={closeMenu}
              >
                Download Our App
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button - THIS WAS MISSING! */}
        <div className="header-actions">
          <button
            className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  );
}
