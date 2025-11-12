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
    description:
      "Expert diagnosis and treatment of skin, hair, and nail conditions from acne to skin cancer. Dr. Nkehli treats patients of all ages with evidence-based medical care for eczema, psoriasis, infections, autoimmune diseases, and comprehensive skin cancer screening. Experience specialized dermatological care focused on your health and wellbeing.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    link: "/services/medical",
    color: "#F4E48E",
  },
  {
    title: "BOTOX INJECTIONS",
    description:
      "FDA-approved Botox treatment for wrinkle reduction and hyperhidrosis (excessive sweating). Smooth forehead lines, frown lines, and crow's feet with natural-looking results. Also effective for treating underarm, palm, and foot sweating. Expert injection technique by specialist dermatologist. Results last 3-4 months. R2,000-R6,000 depending on treatment area.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    link: "/services/botox",
    color: "#4E747B",
  },
  {
    title: "COSMETIC DERMATOLOGY",
    description:
      "Advanced aesthetic treatments combining medical expertise with artistry. From anti-aging injectables to chemical peels, micro-needling, PRP therapy, and skin tightening. Achieve natural-looking rejuvenation while maintaining skin health. Personalized treatment plans address wrinkles, texture, pigmentation, acne scars, and skin laxity for confidence-enhancing results.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    link: "/services/cosmetic",
    color: "#F4E48E",
  },
  {
    title: "PAEDIATRIC CARE",
    description:
      "Gentle, specialized dermatology for children from newborns to teens. Expert treatment of eczema, diaper rash, birthmarks, warts, molluscum, adolescent acne, and hair/scalp conditions. Child-friendly approach with age-appropriate treatments. Dr. Nkehli's compassionate care puts both children and parents at ease while delivering effective solutions for pediatric skin concerns.",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    link: "/services/paediatric",
    color: "#4E747B",
  },
  {
    title: "SURGICAL DERMATOLOGY",
    description:
      "Expert surgical procedures for skin cancer excision, diagnostic biopsies, and removal of benign lesions, cysts, and moles. Performed in-office under local anesthesia with techniques that minimize scarring. Comprehensive care includes skin cancer treatment with excellent cure rates, cyst removal, scar revision, and keloid treatment. Optimal medical and cosmetic outcomes.",
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
    link: "/services/surgical",
    color: "#F4E48E",
  },
  {
    title: "CRYOSURGERY",
    description:
      "Liquid nitrogen treatment to freeze and destroy abnormal tissue. Highly effective for actinic keratoses (precancerous spots), warts, seborrheic keratoses, and select skin cancers. Quick in-office procedure with minimal discomfort. Healing takes 1-3 weeks. No cutting or stitches required. Affordable treatment from R500-R2,500 depending on number and size of lesions treated.",
    image:
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
    link: "/services/cryosurgery",
    color: "#4E747B",
  },
  {
    title: "ELECTROCAUTERY",
    description:
      "Electrodesiccation and curettage (ED&C) combining scraping and electrical burning for effective lesion removal. Treats superficial skin cancers, seborrheic keratoses, and resistant warts. Cure rates of 90-95% for properly selected skin cancers. Healing by natural process over 2-4 weeks without stitches. Pricing R800-R6,000 based on complexity and lesion size.",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80",
    link: "/services/electrocautery",
    color: "#F4E48E",
  },
  {
    title: "PRP THERAPY",
    description:
      "Platelet-Rich Plasma harnesses your body's natural growth factors for facial rejuvenation and hair restoration. The Vampire Facial combines PRP with micro-needling for enhanced collagen production. Effective for androgenetic alopecia (pattern hair loss), improving skin tone and texture, and reducing acne scars. Natural, biocompatible treatment. R3,000-R6,500 per session.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    link: "/services/prp",
    color: "#4E747B",
  },
  {
    title: "MICRO-NEEDLING",
    description:
      "Collagen induction therapy using medical-grade device with fine needles to stimulate natural healing response. Improves acne scars, fine lines, large pores, and skin texture. Enhanced results when combined with PRP (Vampire Facial). Minimal downtime with 1-3 days redness. Series of 3-6 treatments recommended. Safe for all skin types. R2,000-R6,000 per treatment.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    link: "/services/micro-needling",
    color: "#F4E48E",
  },
  {
    title: "CHEMICAL PEELING",
    description:
      "Professional chemical peels for skin resurfacing and rejuvenation. Superficial, medium, and deep peels treat sun damage, pigmentation, fine lines, acne, and rough texture. Customized depth based on your concerns and skin type. Downtime varies from minimal flaking to 7 days peeling. Visible improvement in skin tone, texture, and radiance. R800-R15,000 depending on peel type.",
    image:
      "https://images.unsplash.com/photo-1526758097130-bab247274f58?w=800&q=80",
    link: "/services/peeling",
    color: "#4E747B",
  },
  {
    title: "SKIN TIGHTENING",
    description:
      "Non-surgical radiofrequency and acoustic wave therapy to firm sagging skin without surgery. Stimulates deep collagen production for natural tightening of face, neck, abdomen, arms, and thighs. Also improves cellulite and stretch marks. Comfortable treatments with no downtime. Gradual improvement over 2-6 months. Series of 4-8 treatments. R2,500-R7,000 per session.",
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
            <a href="/services">
              <button className="explore-button">
                <span>VIEW COMPLETE LIST</span>
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
