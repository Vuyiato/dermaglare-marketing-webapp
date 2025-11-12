import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Medical Dermatology",
      description: "Comprehensive skin care for all ages",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
      link: "/services/medical",
      category: "medical",
    },
    {
      title: "Surgical Dermatology",
      description: "Expert surgical procedures for skin conditions",
      image:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800",
      link: "/services/surgical",
      category: "surgical",
    },
    {
      title: "Cosmetic Dermatology",
      description: "Advanced aesthetic treatments",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
      link: "/services/cosmetic",
      category: "cosmetic",
    },
    {
      title: "Paediatric Dermatology",
      description: "Specialized care for children",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
      link: "/services/paediatric",
      category: "paediatric",
    },
    {
      title: "Botox Injections",
      description: "Anti-wrinkle treatments and therapeutic applications",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
      link: "/services/botox",
      category: "procedure",
    },
    {
      title: "Medical Peeling",
      description: "Chemical peels for skin rejuvenation",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
      link: "/services/peeling",
      category: "procedure",
    },
    {
      title: "Micro-needling",
      description: "Collagen induction therapy",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800",
      link: "/services/micro-needling",
      category: "procedure",
    },
    {
      title: "Platelet-Rich Plasma (PRP)",
      description: "Natural healing and rejuvenation",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800",
      link: "/services/prp",
      category: "procedure",
    },
    {
      title: "Skin Tightening",
      description: "Non-surgical skin firming treatments",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
      link: "/services/skin-tightening",
      category: "procedure",
    },
    {
      title: "Electrocautery & Curettage",
      description: "Precise lesion removal",
      image:
        "https://images.unsplash.com/photo-1582719366278-1c2c6bd6df13?w=800",
      link: "/services/electrocautery",
      category: "procedure",
    },
    {
      title: "Cryosurgery",
      description: "Freezing treatment for skin lesions",
      image:
        "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800",
      link: "/services/cryosurgery",
      category: "procedure",
    },
  ];

  return (
    <div className="services-overview-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-container">
          <div className="section-label">OUR SERVICES</div>
          <h1 className="services-hero-title">
            Comprehensive Dermatology Solutions
          </h1>
          <p className="services-hero-description">
            From medical treatments to cosmetic procedures, we offer a full
            range of dermatological services tailored to your unique skin care
            needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="services-grid-container">
          {services.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className="service-overview-card"
            >
              <div className="service-overview-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay"></div>
              </div>
              <div className="service-overview-content">
                <h3 className="service-overview-title">{service.title}</h3>
                <p className="service-overview-description">
                  {service.description}
                </p>
                <span className="service-overview-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="services-cta-container">
          <h2 className="services-cta-title">Ready to Get Started?</h2>
          <p className="services-cta-description">
            Book a consultation with Dr. Jabu Nkehli to discuss your skin care
            needs.
          </p>
          <a
            href="https://patient-portal-snowy.vercel.app"
            className="services-cta-button"
          >
            Book Appointment
          </a>
        </div>
      </section>
    </div>
  );
}
