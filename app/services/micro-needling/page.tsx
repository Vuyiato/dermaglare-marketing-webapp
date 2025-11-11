import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function MicroneedlingPage() {
  return (
    <ServicePageTemplate
      heroImage="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80" sideImage="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80" title="Micro-needling"
      subtitle="Unlocking the Magic of Micro-needling"
      description="Microneedling, a method also renowned as collagen induction therapy, is an advanced procedure using a Microneedling pen with mesoceutical serums to address specific skin concerns. It spurs the production of fresh collagen and skin tissue, leading to a smoother, firmer, and more radiant complexion."
      sections={[
        {
          title: "A Solution for Stretch Marks, Acne Scars, and Pigmentation",
          content: "Microneedling proves to be an effective remedy for stretch marks, a form of scar tissue. Through promoting collagen and elastin production, skin resilience and firmness are enhanced. Consequently, acne scarring and hyper-pigmentation can be successfully tackled, revealing a revitalised skin surface."
        },
        {
          title: "Your Microneedling Experience with Dr. Jabu Nkehli",
          content: "During your treatment, Dr. Jabu Nkehli will skillfully manoeuvre the microneedling device across your skin, a process typically completed in less than 30 minutes. Results emerge gradually over weeks to months as your natural collagen growth occurs. Initial redness, akin to a sunburn, will be visible before your desired results surface."
        }
      ]}
    />
  );
}
