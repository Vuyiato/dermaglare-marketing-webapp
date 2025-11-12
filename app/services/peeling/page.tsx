import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function PeelingPage() {
  return (
    <ServicePageTemplate
      heroImage="https://images.unsplash.com/photo-1526758097130-bab247274f58?w=1200&q=80"
      sideImage="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80"
      title="Chemical Peeling"
      subtitle="Medical-Grade Chemical Peels for Skin Transformation"
      description="Chemical peels are advanced dermatological treatments that use carefully formulated acid solutions to exfoliate and rejuvenate the skin. At Dermaglare Skin, Dr. Jabu Nkehli offers a comprehensive range of medical-grade peels to address various skin concerns, from acne and hyperpigmentation to aging and sun damage."
      sections={[
        {
          title: "Understanding Chemical Peels",
          content:
            "Chemical peels work by removing the outermost layers of damaged or aging skin, revealing fresh, healthy skin underneath. The depth of the peel varies depending on the concentration and type of acid used. Dr. Nkehli offers superficial, medium, and deep peels, each suited for specific skin concerns and types. These medical-grade treatments are far more effective than over-the-counter products and require professional expertise for safe application.",
        },
        {
          title: "Types of Chemical Peels Offered",
          content:
            "SUPERFICIAL PEELS (Light Peels): Using glycolic acid, salicylic acid, or lactic acid, these peels treat the outermost layer of skin. They're perfect for mild discoloration, rough texture, and acne. Minimal downtime with slight redness lasting 1-2 days. MEDIUM PEELS: TCA (Trichloroacetic Acid) peels penetrate deeper to address moderate wrinkles, age spots, freckles, and acne scars. Expect 5-7 days of peeling and redness. DEEP PEELS: Phenol peels for severe sun damage, deep wrinkles, and significant scarring. Requires longer recovery (2-3 weeks) but delivers dramatic results.",
        },
        {
          title: "Conditions Treated",
          content:
            "Chemical peels effectively address numerous skin concerns: HYPERPIGMENTATION - Melasma, age spots, sun damage, and post-inflammatory hyperpigmentation. ACNE & SCARRING - Active acne, acne scars, and enlarged pores. AGING SIGNS - Fine lines, wrinkles, and skin laxity. TEXTURE ISSUES - Rough skin, keratosis pilaris, and uneven tone. SUN DAMAGE - Solar lentigines, freckling, and photoaging. Dr. Nkehli will assess your skin during consultation to recommend the most appropriate peel for your concerns.",
        },
        {
          title: "The Treatment Process",
          content:
            "CONSULTATION: Comprehensive skin analysis and medical history review. Discussion of your goals and realistic expectations. Skin preparation instructions (usually 2-4 weeks of pre-treatment). PRE-TREATMENT: Your skin is thoroughly cleansed and degreased. Protective barriers applied to sensitive areas (eyes, lips). APPLICATION: The chemical solution is carefully applied by Dr. Nkehli. You may feel a tingling or warm sensation. Treatment time varies from 30-60 minutes depending on peel depth. NEUTRALIZATION: The peel is neutralized or self-neutralizes. Soothing post-treatment products applied.",
        },
        {
          title: "Recovery and Aftercare",
          content:
            "SUPERFICIAL PEELS: Mild redness and flaking for 3-5 days. Return to work immediately or next day. Light makeup can be applied after 24 hours. MEDIUM PEELS: Significant peeling and redness for 7-14 days. Social downtime of about 1 week. Skin may be red for several weeks. DEEP PEELS: Extensive peeling and crusting for 2-3 weeks. Requires 2-3 weeks off work. New skin will be very pink for months. GENERAL AFTERCARE: Gentle cleansing with pH-balanced products. Heavy moisturization to support healing. Strict sun protection (SPF 50+) for at least 3 months. Avoid picking or pulling at peeling skin. Use prescribed post-peel skincare products.",
        },
        {
          title: "Expected Results",
          content:
            "Results vary by peel depth: SUPERFICIAL: Immediate glow, improved texture visible after 1 treatment. Best results after a series of 4-6 peels spaced 2-4 weeks apart. MEDIUM: Significant improvement in pigmentation and fine lines. Optimal results at 6 weeks post-treatment. May require 1-3 treatments. DEEP: Dramatic improvement in deep wrinkles and severe damage. Results can last 10+ years. Usually only one treatment needed. All peels stimulate collagen production, providing continued improvement over 3-6 months.",
        },
        {
          title: "Safety and Considerations",
          content:
            "NOT SUITABLE FOR: Active infections or cold sores. Pregnancy or breastfeeding. Recent Accutane use (within 6-12 months). Open wounds or recent facial surgery. Certain skin types may be prone to hyperpigmentation post-peel (Fitzpatrick skin types IV-VI require special protocols). POTENTIAL SIDE EFFECTS: Temporary redness and sensitivity. Skin peeling and flaking (expected). Rarely, infection or scarring if aftercare not followed. Possible temporary darkening before lightening in darker skin tones. Dr. Nkehli conducts thorough assessments to minimize risks and ensure optimal outcomes.",
        },
        {
          title: "Combination Treatments",
          content:
            "Chemical peels work synergistically with other treatments: Combined with MICRONEEDLING for enhanced collagen production and product penetration. Paired with LASER TREATMENTS for comprehensive skin rejuvenation. Used with TARGETED SKINCARE REGIMENS for maintained results. Alternated with PRP THERAPY for accelerated healing and anti-aging. Dr. Nkehli will create a personalized treatment plan that may incorporate multiple modalities for optimal results.",
        },
        {
          title: "Why Choose Dr. Jabu Nkehli for Chemical Peels?",
          content:
            "As a specialist dermatologist, Dr. Nkehli has extensive training in chemical peel applications and skin physiology. Her expertise ensures safe treatment across all skin types, including darker skin tones which require specialized protocols. She uses pharmaceutical-grade products from trusted manufacturers and customizes peel formulations based on your unique skin needs. With her meticulous approach, you can expect professional monitoring throughout the process and comprehensive pre and post-treatment support.",
        },
        {
          title: "Pricing and Consultation",
          content:
            "Chemical peel pricing varies based on peel type and depth: Superficial peels start from R800-R1500 per treatment. Medium peels range from R2500-R4500. Deep peels begin at R8000-R15000. Package deals available for series of superficial peels. Book your consultation with Dr. Nkehli to receive a personalized assessment and treatment plan. During consultation, she will examine your skin, discuss your concerns, and recommend the most appropriate peel for your needs and budget.",
        },
      ]}
    />
  );
}
