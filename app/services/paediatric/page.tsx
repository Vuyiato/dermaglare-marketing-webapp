import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function PaediatricDermatologyPage() {
  return (
    <ServicePageTemplate
      heroImage="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80" sideImage="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80" title="Paediatric Dermatology"
      subtitle="Specialised Pediatric Dermatology for Your Little Ones"
      description="At Dermaglare Skin, we understand that the skin health of your little ones is of paramount importance. With children's sensitive skin being susceptible to a variety of conditions such as diaper rash, dermatitis, warts, and acne, Pediatric Dermatology plays a crucial role in ensuring their well-being."
      sections={[
        {
          title: "Expert Care for Children",
          content: "Dr. Jabu Nkehli, a seasoned dermatologist, extends her expertise to children from infancy up to 13 years of age. Renowned for her gentle and empathetic approach, she ensures the comfort of your child while delivering specialized treatments tailored to their needs."
        },
        {
          title: "Comprehensive Skin Treatments for Children",
          content: [
            "At Dermaglare Skin, our comprehensive approach involves thorough diagnosis and thoughtful treatment planning. From addressing allergy-related skin conditions and inherited skin diseases to treating acne and problematic birthmarks, we ensure your child gets the best care.",
            "Our services extend beyond consultations. We offer a range of treatments designed specifically for children's delicate skin."
          ]
        }
      ]}
      features={[
        "Cryotherapy",
        "Topical and systemic therapies for skin disease",
        "Skin surgery and repair",
        "Comprehensive patch testing for skin allergies",
        "Phototherapy"
      ]}
      
    />
  );
}
