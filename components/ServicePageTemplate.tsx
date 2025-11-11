import React from "react";
import Link from "next/link";

interface ServiceSection {
  title: string;
  content: string | string[];
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  sections: ServiceSection[];
  features?: string[];
  heroImage?: string;
  sideImage?: string;
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  sections,
  features,
  heroImage = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
  sideImage = "https://images.unsplash.com/photo-1629909615957-be38b8c891ed?w=800&q=80",
}: ServicePageProps) {
  return (
    <main className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-image-bg">
          <img src={heroImage} alt={title} className="hero-bg-img" />
          <div className="hero-overlay"></div>
        </div>
        <div className="service-hero-container">
          <h1 className="service-hero-title">{title}</h1>
          <p className="service-hero-subtitle">{subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content-section">
        <div className="service-content-container">
          <div className="service-content-with-image">
            <div className="service-intro">
              <p className="service-intro-text">{description}</p>
            </div>
            <div className="service-side-image">
              <img src={sideImage} alt={`${title} treatment`} />
            </div>
          </div>

          {/* Content Sections */}
          <div className="service-sections">
            {sections.map((section, index) => (
              <div key={index} className="service-section-block">
                <h2 className="service-section-title">{section.title}</h2>
                {Array.isArray(section.content) ? (
                  section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="service-section-text">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="service-section-text">{section.content}</p>
                )}
              </div>
            ))}
          </div>

          {/* Features List */}
          {features && features.length > 0 && (
            <div className="service-features">
              <h3 className="service-features-title">Our Services Include:</h3>
              <ul className="service-features-list">
                {features.map((feature, index) => (
                  <li key={index} className="service-feature-item">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <polyline
                        points="20 6 9 17 4 12"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Button - REMOVED */}
          {/* <div className="service-cta">
            <Link href={ctaLink}>
              <button className="service-cta-button">{ctaText}</button>
            </Link>
          </div> 
          */}
        </div>
      </section>

      {/* Related Services */}
      <section className="related-services">
        <div className="related-services-container">
          <h2 className="related-services-title">Explore Our Other Services</h2>
          <div className="related-services-grid">
            <Link href="/services/paediatric" className="related-service-card">
              <h3>Paediatric Dermatology</h3>
              <p>Specialized care for children's sensitive skin</p>
            </Link>
            <Link href="/services/medical" className="related-service-card">
              <h3>Medical Dermatology</h3>
              <p>Comprehensive care for all ages</p>
            </Link>
            <Link href="/services/surgical" className="related-service-card">
              <h3>Surgical Dermatology</h3>
              <p>Expert surgical procedures</p>
            </Link>
            <Link href="/services/cosmetic" className="related-service-card">
              <h3>Cosmetic Dermatology</h3>
              <p>Enhance your natural beauty</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
