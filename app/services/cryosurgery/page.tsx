import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function CryosurgeryPage() {
  return (
    <ServicePageTemplate
      heroImage="https://images.unsplash.com/photo-1579154204845-8f0e0a072a43?w=1200&q=80" sideImage="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80" title="Cryosurgery"
      subtitle="Revitalising Your Skin with Cryotherapy"
      description="Cryotherapy, also known as cold therapy, is an innovative technique used in dermatology to treat a multitude of skin conditions. This procedure utilises Liquid Nitrogen, an extremely cold substance, as a targeted treatment for affected skin areas."
      sections={[
        {
          title: "How Cryotherapy Works",
          content: "Liquid Nitrogen, the key component in cryotherapy, is applied directly to skin lesions or irregularities. The intense cold produced by the liquid nitrogen helps to destroy abnormal skin cells and stimulate the growth of new, healthy ones."
        },
        {
          title: "Conditions Treated",
          content: "Cryotherapy is versatile, providing effective treatment for a broad spectrum of skin conditions including Solar Keratosis (sun spots), Solar lentigines (liver spots), Warts, Molluscum contagiosum, and Keloids. Cryotherapy offers a solution to improve the appearance and health of your skin."
        },
        {
          title: "The Cryotherapy Process",
          content: "Cryotherapy is a quick and straightforward procedure, often taking only a few minutes. It involves directly applying liquid nitrogen to the skin via a spray or cotton applicator. This freezes and destroys the affected skin cells, leading to their natural shedding and the emergence of healthy skin underneath."
        },
        {
          title: "Aftercare and Results",
          content: "Post-treatment, patients may experience temporary redness, swelling, or blistering at the treatment site, but these effects typically resolve on their own. With the shedding of the treated skin, you can expect to see noticeable improvement in your skin condition."
        }
      ]}
      features={[
        "Solar Keratosis (sun spots)",
        "Solar lentigines (liver spots)",
        "Warts",
        "Molluscum contagiosum",
        "Keloids"
      ]}
    />
  );
}
