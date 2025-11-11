import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function MedicalDermatologyPage() {
  return (
    <ServicePageTemplate
      title="Medical Dermatology"
      subtitle="Exceptional Medical Dermatology Services at Dermaglare Skin"
      description="At Dermaglare Skin, Dr. Jabu Nkehli provides high-quality dermatological care for patients of all ages, from infants to the elderly. Whether it's treating a newborn's sensitive skin or managing age-related skin conditions, her broad experience and knowledge in the field ensures everyone receives the most effective and appropriate care."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80"
      sideImage="https://images.unsplash.com/photo-1629909615957-be38b8c891ed?w=800&q=80"
      sections={[
        {
          title: "Range of Conditions Treated",
          content:
            "Dr. Nkehli's expertise in medical dermatology encompasses a wide range of conditions. This includes but is not limited to, acne, pigmentation disorders, eczema, inflammatory skin diseases, autoimmune skin disorders, and skin cancers. Through a comprehensive examination and diagnosis, she determines the most suitable treatment for every patient.",
        },
        {
          title: "Our Approach to Treatment",
          content:
            "At Dermaglare Skin, we believe in a patient-centered approach. Dr. Nkehli takes the time to listen to your concerns, evaluate your condition, and tailor a treatment plan that fits your specific needs. We utilise the latest advances in dermatology, ensuring that our patients receive the most current and effective treatments.",
        },
        {
          title: "Prevention and Education",
          content:
            "Beyond treating existing conditions, Dermaglare Skin also places a strong emphasis on preventive care and patient education. We guide patients in understanding their skin better, teaching them how to protect it, and helping them make informed decisions about their skin health.",
        },
      ]}
      features={["Electrocautery and Curettage", "Cryosurgery"]}
    />
  );
}

