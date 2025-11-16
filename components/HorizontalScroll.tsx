"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
}

const services: Service[] = [
  {
    title: "MEDICAL DERMATOLOGY",
    description: "Comprehensive skin care for all ages",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    link: "/services/medical",
    color: "#F4E48E",
  },
  {
    title: "BOTOX INJECTIONS",
    description: "Wrinkle reduction and hyperhidrosis treatment",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    link: "/services/botox",
    color: "#4E747B",
  },
  {
    title: "COSMETIC DERMATOLOGY",
    description: "Advanced aesthetic treatments for natural rejuvenation",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    link: "/services/cosmetic",
    color: "#F4E48E",
  },
  {
    title: "PAEDIATRIC CARE",
    description: "Specialized skin care for children and adolescents",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    link: "/services/paediatric",
    color: "#4E747B",
  },
  {
    title: "SURGICAL DERMATOLOGY",
    description: "Expert surgical procedures and skin cancer treatment",
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
    link: "/services/surgical",
    color: "#F4E48E",
  },
  {
    title: "CRYOSURGERY",
    description: "Liquid nitrogen treatment for skin lesions",
    image:
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
    link: "/services/cryosurgery",
    color: "#4E747B",
  },
  {
    title: "ELECTROCAUTERY",
    description: "Precise electrical treatment for skin lesions",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
    link: "/services/electrocautery",
    color: "#F4E48E",
  },
  {
    title: "PRP THERAPY",
    description: "Natural skin rejuvenation and hair restoration",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    link: "/services/prp",
    color: "#4E747B",
  },
  {
    title: "MICRO-NEEDLING",
    description: "Collagen induction for smoother, younger skin",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    link: "/services/micro-needling",
    color: "#F4E48E",
  },
  {
    title: "CHEMICAL PEELING",
    description: "Professional peels for skin transformation",
    image:
      "https://images.unsplash.com/photo-1526758097130-bab247274f58?w=800&q=80",
    link: "/services/peeling",
    color: "#4E747B",
  },
  {
    title: "SKIN TIGHTENING",
    description: "Non-invasive treatments for firmer skin",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
    link: "/services/skin-tightening",
    color: "#F4E48E",
  },
];

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    const container = containerRef.current;
    const scrollContent = scrollRef.current;

    const totalWidth = scrollContent.scrollWidth;
    const windowWidth = window.innerWidth;

    const scrollTween = gsap.to(scrollContent, {
      x: -(totalWidth - windowWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="horizontal-scroll-section">
      <div ref={scrollRef} className="horizontal-scroll-content">
        <div className="section-intro-card">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="intro-content"
          >
            <div className="intro-number">11</div>
            <h2 className="section-title-large">
              Expert
              <br />
              Treatments
            </h2>
            <div className="intro-divider"></div>
            <p className="section-description-large">
              Advanced dermatology solutions tailored to your unique skin needs
            </p>
            <div className="intro-badge">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Certified & Trusted</span>
            </div>
          </motion.div>
        </div>

        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="service-card-horizontal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <a href={service.link} className="service-card-link">
              <div className="service-card-inner">
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card-image"
                    loading="eager"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80";
                    }}
                  />
                  <div className="service-overlay"></div>

                  {/* Title overlay on image */}
                  <div className="service-title-overlay">
                    <div className="service-number">0{index + 1}</div>
                    <h3 className="service-title-on-image">{service.title}</h3>
                  </div>
                </div>

                <div className="service-content">
                  <p className="service-description">{service.description}</p>

                  <div className="service-arrow">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}

        <div className="section-outro-card">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="outro-title">EXPLORE ALL SERVICES</h3>
            <a
              href="http://portal.dermaglare.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="explore-button">
                <span>BOOK AN APPOINTMENT</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
