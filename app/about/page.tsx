'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <p className="section-label">WHO WE ARE</p>
            <h1 className="about-hero-title">
              Leading the Way in<br />
              Dermatology
            </h1>
            <p className="about-hero-description">
              Dr. Jabu Nkehli, our resident expert at Dermaglare Skin, is a 
              distinguished specialist dermatologist, combining a wealth of 
              experience with a deep passion for enhancing your skin, hair, 
              and nail health. Her proficiency spans across medical 
              dermatology, aesthetics, and dermatology surgery, ensuring 
              comprehensive care for both adult and pediatric skin diseases.
            </p>
            <p className="about-hero-description">
              From managing common issues like acne, pigmentation, and 
              eczema to tackling life-threatening skin infections and skin 
              cancer, Dr. Nkehli provides each patient with individualized, 
              cutting-edge treatments.
            </p>
            <button className="about-cta-button">
              GET IN TOUCH
            </button>
          </div>

          <div className="about-hero-image">
            <div className="placeholder-image">
              <img src="/images/doctor-office.jpg" alt="Doctor Office" className="hero-img" />
            </div>
            <div className="experience-badge-bottom">
              <div className="experience-number">15+</div>
              <div className="experience-text">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <div className="values-content">
            <p className="section-label">OUR VALUES</p>
            <h2 className="values-title">
              Keep Your Skin<br />
              Natural & Healthy.
            </h2>
            <p className="values-subtitle">
              Embark on your journey to healthier skin today.
            </p>
          </div>

          <div className="values-cards">
            <div className="value-card">
              <div className="value-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="8" r="3" strokeWidth="2"/>
                  <path d="M12 11c-3 0-6 1.5-6 4v2h12v-2c0-2.5-3-4-6-4z" strokeWidth="2"/>
                  <circle cx="18" cy="6" r="2" strokeWidth="2"/>
                  <circle cx="6" cy="6" r="2" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="value-card-title">Vision</h3>
              <p className="value-card-description">
                Aiming to be Johannesburg's premier dermatology practice, we 
                prioritise patient satisfaction, exceptional services, and 
                advancements in skin health.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="3" strokeWidth="2"/>
                  <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="value-card-title">Mission</h3>
              <p className="value-card-description">
                Dermaglare Skin provides comprehensive, high-level 
                dermatological care, using evidence-based treatments and 
                innovative technologies, for all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Dr. Jabu Nkehli Section */}
      <section className="doctor-journey-section">
        <div className="journey-container">
          <div className="journey-image">
            <div className="placeholder-image">
            <img src="/images/doctor-poster.jpeg" alt="Doctor Office" className="hero-img" />

            </div>
          </div>

          <div className="journey-content">
            <p className="section-label">ABOUT DR. JABU NKEHIL</p>
            <h2 className="journey-title">A Journey of Excellence</h2>
            <p className="journey-description">
              Dr Nkehli's commitment to medical practice began with a Bachelor of 
              Medicine and Surgery qualification from the Nelson R Mandela School of 
              Medicine, University of KwaZulu-Natal, in 2000. Following internships and 
              service in hospitals across South Africa, she gained invaluable global 
              exposure as a resident medical officer in England between 2003-2005. This 
              diverse experience enriched her knowledge and dedication to delivering 
              quality care to her patients.
            </p>

            <div className="accordion-container">
              <div className={`accordion-item ${openAccordion === 'difference' ? 'active' : ''}`}>
                <button 
                  className="accordion-header"
                  onClick={() => toggleAccordion('difference')}
                >
                  <span>Making a Difference</span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                    className={`accordion-icon ${openAccordion === 'difference' ? 'rotate' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openAccordion === 'difference' && (
                  <div className="accordion-content">
                    <p>
                      Beyond clinical practice, Dr Nkehli is deeply committed to addressing and 
                      eradicating disfiguring skin conditions, including leprosy. Her dedication 
                      extends to community outreach and education, ensuring that quality 
                      dermatological care reaches all who need it.
                    </p>
                  </div>
                )}
              </div>

              <div className={`accordion-item ${openAccordion === 'academic' ? 'active' : ''}`}>
                <button 
                  className="accordion-header"
                  onClick={() => toggleAccordion('academic')}
                >
                  <span>An Accomplished Academic</span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                    className={`accordion-icon ${openAccordion === 'academic' ? 'rotate' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openAccordion === 'academic' && (
                  <div className="accordion-content">
                    <p>
                      Dr Nkehli's academic excellence is demonstrated through her Fellowship of 
                      the College of Dermatologists of South Africa and her Master's degree in 
                      Medicine specializing in Dermatology from the University of the 
                      Witwatersrand. Her expertise is recognized both nationally and 
                      internationally.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="about-footer">
        <div className="about-footer-container">
          <div className="footer-brand-section">
            <div className="footer-logo">
              <div className="logo-text">
                <span className="logo-main">Dermaglare Skin</span>
                <span className="logo-sub">DR JABU NKEHLI</span>
              </div>
            </div>
            <p className="footer-brand-description">
              Your skin health journey begins here at<br />
              Dermaglare Skin. With Dr Jabu Nkehli's expert<br />
              guidance, we ensure your skin shines its<br />
              brightest.
            </p>
            <div className="footer-social">
              <a 
                href="https://www.linkedin.com/company/dermaglare-skin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-services-section">
            <h3 className="footer-section-title">Services</h3>
            <ul className="footer-links-list">
              <li><Link href="/services/paediatric">Paediatric Dermatology</Link></li>
              <li><Link href="/services/medical">Medical Dermatology</Link></li>
              <li><Link href="/services/surgical">Surgical Dermatology</Link></li>
              <li><Link href="/services/cosmetic">Cosmetic Dermatology</Link></li>
            </ul>
          </div>

          <div className="footer-contact-section">
            <h3 className="footer-section-title">Contact Us</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeWidth="2"/>
                </svg>
                <span>069 322 3134</span>
              </li>
              <li className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" strokeWidth="2"/>
                </svg>
                <span>info@dermaglareskin.co.za</span>
              </li>
              <li className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" strokeWidth="2"/>
                </svg>
                <span>
                  Suite 3, East Wing Wingwood Medical<br />
                  Suites Life Bedford Gardens 8 Leicester<br />
                  Rd Bedford Gardens
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            Copyright © 2023 Dermaglare Skin. Powered by Plum Digital.
          </p>
          <div className="footer-legal-links">
            <Link href="/terms">Term of use</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </section>
    </main>
  );
}