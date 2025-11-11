import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function PeelingPage() {
  return (
    <ServicePageTemplate
      heroImage="https://images.unsplash.com/photo-1596178060810-7e547b5b8b1b?w=1200&q=80"
      sideImage="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
      title="Chemical Peeling"
      subtitle="Transform Your Skin with Medical Peeling"
      description="Unveil your skin's natural glow with our range of medical peels. At Dermaglare Skin, we provide an array of chemical peels aimed at brightening, clarifying, and rejuvenating your skin, each designed to meet different skincare needs."
      sections={[
        {
          title: "Brightening Peels",
          content:
            "Brightening peels are perfect for those aiming to restore their skin's natural radiance. These peels use a blend of potent acids and skin-enhancing ingredients to gently exfoliate the skin's surface, lifting away dull, tired-looking skin cells to reveal a more luminous complexion underneath.",
        },
        {
          title: "Clarifying Peels",
          content:
            "For individuals dealing with acne, uneven skin texture, or enlarged pores, our clarifying peels offer an effective solution. These peels work to deeply cleanse the skin, unclog pores, and reduce the appearance of blemishes. The result is smoother, clearer skin with fewer breakouts.",
        },
        {
          title: "Rejuvenating Peels",
          content:
            "Combat the signs of aging with our rejuvenating peels. These specialised treatments are designed to stimulate collagen production, reduce the appearance of fine lines and wrinkles, and promote cellular turnover for firmer, more youthful-looking skin.",
        },
        {
          title: "The Chemical Peel Procedure",
          content:
            "Administered by the distinguished Dr. Jabu Nkehli, our chemical peel treatments are tailored to your unique skin needs and concerns. With her expertise and meticulous approach, Dr. Nkehli ensures you receive the most suitable treatment, taking into consideration your skin type, condition, and desired results.",
        },
      ]}
    />
  );
}
