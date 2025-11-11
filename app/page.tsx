import React from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import HorizontalScroll from "@/components/HorizontalScroll";
import ParallaxSection from "@/components/ParallaxSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ModernFooter from "@/components/ModernFooter";
import SkinTipsSection from "@/components/SkinTipsSection";

export default function Home() {
  return (
    <main className="home-page-modern">
      {/* Hero Section with Parallax */}
      <HeroSection />

      {/* Horizontal Scrolling Services */}
      <HorizontalScroll />

      {/* Parallax Section with Quote */}
      <ParallaxSection />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-images">
            <div className="main-image">
              <div className="placeholder-image">
                <img
                  src="/images/smallimage.jpg"
                  alt="Skin-Care"
                  className="hero-img"
                />
              </div>
            </div>
            <div className="small-image">
              <div className="placeholder-image">
                <img
                  src="/images/doctor-close-up.jpeg"
                  alt="Doctor Close Up"
                  className="hero-img"
                />
              </div>
            </div>
          </div>

          <div className="about-content">
            <p className="section-label">WHO WE ARE</p>
            <h2 className="section-title">
              Your Dermatology Expert
              <br />- Dr. Jabu Nkehli
            </h2>
            <p className="section-description">
              With a passion for revealing the natural beauty of your skin,
              hair, and nails, Dr. Jabu Nkehli is a trusted dermatologist in
              Johannesburg. Her expertise spans across an extensive range of
              skin conditions, providing personalised and effective treatments
              for each patient.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Enhance Your Natural Glow</h3>
                  <p className="feature-description">
                    Dr. Nkehli employs her comprehensive dermatology expertise
                    to not only treat but also enhance the health of your skin,
                    hair, and nails.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      strokeWidth="2"
                    />
                    <line
                      x1="9"
                      y1="9"
                      x2="15"
                      y2="9"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="9"
                      y1="15"
                      x2="15"
                      y2="15"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">
                    Comprehensive Care for Various Conditions
                  </h3>
                  <p className="feature-description">
                    Dr. Nkehli expertly addresses a range of skin conditions
                    from acne and pigmentation to complex diseases, leveraging
                    her extensive experience to guide your recovery journey.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                      strokeWidth="2"
                    />
                    <polyline points="14 2 14 8 20 8" strokeWidth="2" />
                    <line
                      x1="16"
                      y1="13"
                      x2="8"
                      y2="13"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="16"
                      y1="17"
                      x2="8"
                      y2="17"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">
                    Personalised Path to Recovery
                  </h3>
                  <p className="feature-description">
                    Recognising the uniqueness of each patient&apos;s skin
                    condition at Dermaglare Skin, Dr. Nkehli tailors treatment
                    plans to address specific concerns and promote overall skin
                    health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="why-choose-image">
            <div className="experience-badge">
              <div className="experience-number">15+</div>
              <div className="experience-text">Years Experience</div>
            </div>
            <div className="placeholder-image">
              <img
                src="/images/doctor-working.jpeg"
                alt="Doctor Working"
                className="hero-img"
              />
            </div>
          </div>

          <div className="why-choose-content">
            <p className="section-label">WHY CHOOSE US</p>
            <h2 className="section-title">
              Experience Dermatological
              <br />
              Excellence
            </h2>
            <p className="section-description">
              At Dermaglare Skin, you&apos;re not just choosing dermatological
              care – you&apos;re choosing a trusted partner in your journey to
              optimal skin health.
            </p>

            <div className="why-choose-features">
              <div className="why-feature-item">
                <div className="why-feature-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <circle cx="12" cy="12" r="6" strokeWidth="2" />
                    <circle
                      cx="12"
                      cy="12"
                      r="2"
                      strokeWidth="2"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="why-feature-content">
                  <h3 className="why-feature-title">Unmatched Expertise</h3>
                  <p className="why-feature-description">
                    Delivering excellent care to both adult and pediatric
                    patients.
                  </p>
                </div>
              </div>

              <div className="why-feature-item">
                <div className="why-feature-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="why-feature-content">
                  <h3 className="why-feature-title">Making a Difference</h3>
                  <p className="why-feature-description">
                    Beyond clinical practice, Dr Nkehli is deeply committed to
                    addressing and eradicating disfiguring skin conditions,
                    including leprosy.
                  </p>
                </div>
              </div>

              <div className="why-feature-item">
                <div className="why-feature-icon">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M3 3v18h18"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 17V9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 17v-6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 17v-3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="why-feature-content">
                  <h3 className="why-feature-title">
                    Leading-edge Dermatology
                  </h3>
                  <p className="why-feature-description">
                    By keeping abreast with the latest advances in dermatology,
                    Dr Nkehli ensures that her patients receive the most current
                    and effective treatments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Care Tips & CTA Sections with Animations */}
      <SkinTipsSection />

      {/* Modern Footer */}
      <ModernFooter />
    </main>
  );
}
