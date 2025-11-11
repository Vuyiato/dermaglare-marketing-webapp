import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function PRPPage() {
  return (
    <ServicePageTemplate
      heroImage="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80"
      sideImage="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80"
      title="PRP (Platelet Rich Plasma)"
      subtitle="Unlock Your Skin and Hair's Vitality with PRP"
      description="Platelet-Rich Plasma (PRP) therapy is a groundbreaking treatment that uses the healing power of your own blood to rejuvenate the skin and hair. This innovative treatment involves extracting growth factors from your blood, then reintroducing them to your body through a micro-needling technique, which helps in regeneration and revitalisation."
      sections={[
        {
          title: "Platelet-Rich Plasma (PRP) for Skin Regeneration",
          content:
            "PRP therapy is a fantastic option for anyone seeking a natural way to improve skin texture, reduce fine lines, and revive the skin's overall appearance. The growth factors stimulate the production of collagen, the protein responsible for skin elasticity and firmness, giving your skin a healthy and youthful glow.",
        },
        {
          title: "Platelet-Rich Plasma (PRP) for Hair Regeneration",
          content:
            "PRP therapy is also extremely effective for treating hair thinning and hair loss. By injecting the platelet-rich plasma into your scalp, we can stimulate dormant hair follicles and encourage new growth, helping to restore your hair's thickness and vitality.",
        },
        {
          title: "The Platelet-Rich Plasma (PRP) Procedure",
          content:
            "The PRP process, expertly performed by Dr. Jabu Nkehli, starts with a simple blood draw. The blood is then placed in a centrifuge to separate the platelet-rich plasma. This plasma, filled with growth factors, is then applied to the skin via a micro-needling device or injected into the scalp for hair regeneration.",
        },
        {
          title: "Is Platelet-Rich Plasma (PRP) Therapy Right for You?",
          content:
            "PRP is a natural, minimally invasive procedure with little to no downtime, making it suitable for individuals seeking skin rejuvenation or hair regrowth. It's an ideal treatment for those wanting to harness the healing power of their own blood to improve their appearance.",
        },
      ]}
    />
  );
}
