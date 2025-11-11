import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function CosmeticDermatologyPage() {
  return (
    <ServicePageTemplate
      title="Cosmetic Dermatology"
      subtitle="Elevate Your Beauty with Cosmetic Dermatology"
      description="Cosmetic Dermatology focuses on enhancing and improving the appearance of skin, hair, and nails. This specialised field uses various aesthetic treatments to promote healthy skin, mitigate imperfections, and foster a youthful, radiant look."
      heroImage="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80"
      sideImage="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80"
      sections={[
        {
          title: "Rejuvenate Your Skin at Dermaglare Skin",
          content:
            "At Dermaglare Skin, Dr. Jabu Nkehli offers an array of state-of-the-art cosmetic dermatology services. From skin rejuvenation procedures to treatments designed to minimise imperfections, our services aim to enhance your natural beauty while maintaining the health and integrity of your skin.",
        },
        {
          title: "Personalised Aesthetic Treatments",
          content:
            "Every patient is unique, and so is their skin. At Dermaglare Skin, we appreciate these individual differences. Dr. Nkehli provides personalised treatments to address specific skin concerns, carefully selecting the best procedures and products that cater to your skin's particular needs and goals.",
        },
        {
          title: "Committed to Your Skin Health",
          content:
            "While cosmetic dermatology focuses on aesthetic aspects, at Dermaglare Skin, we never compromise on your skin's health. Dr. Nkehli ensures that each procedure not only enhances your appearance but also contributes to your overall skin health.",
        },
      ]}
      features={[
        "Botox Injections",
        "Micro-needling",
        "Platelet-Rich Plasma",
        "Medical Peeling",
        "Skin Tightening",
        "Dermaglareskin Facials",
      ]}
    />
  );
}

