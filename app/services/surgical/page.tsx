import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function SurgicalDermatologyPage() {
  return (
    <ServicePageTemplate
      heroImage="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&q=80" sideImage="https://images.unsplash.com/photo-1579154204845-8f0e0a072a43?w=800&q=80" title="Surgical Dermatology"
      subtitle="Expertise in Surgical Dermatology"
      description="Surgical Dermatology involves performing a range of minor surgical procedures aimed at diagnosing and treating skin diseases and disorders. From precise skin biopsies to the removal of benign or malignant skin growths, these procedures form an integral part of comprehensive skin care."
      sections={[
        {
          title: "Precision and Care at Dermaglare Skin",
          content: "At Dermaglare Skin, Dr. Jabu Nkehli offers expert surgical dermatology services. With her profound knowledge and extensive experience, she ensures that each procedure is executed with utmost precision and care, while prioritising patient comfort and safety."
        },
        {
          title: "Surgical Procedures We Offer",
          content: "Our surgical dermatology services include intralesional injections of medication, skin biopsies, shave excisions, and other minor surgical procedures. These are primarily used for the removal of various skin growths such as warts, skin tags, cysts, and others, both benign and malignant."
        },
        {
          title: "Prioritising Your Skin Health",
          content: "Each surgical procedure conducted at Dermaglare Skin is geared towards improving the health and appearance of your skin. Dr. Nkehli believes in thoroughly explaining each step of the procedure to patients, discussing potential outcomes, and answering all questions to ensure patient comfort and confidence in the treatment plan."
        }
      ]}
    />
  );
}
