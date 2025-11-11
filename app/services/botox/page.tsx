import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function BotoxPage() {
  return (
    <ServicePageTemplate
      title="Botox Injections"
      subtitle="Unveiling the Power of Botox Injections"
      description="Botox offers a clinically approved, non-surgical approach to address various skin concerns. Whether you're dealing with excessive sweating or facial wrinkles, Botox provides effective, minimally invasive solutions."
      heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80"
      sideImage="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
      sections={[
        {
          title: "Botox for Hyperhidrosis",
          content:
            "Hyperhidrosis, a condition characterised by excessive sweating, can be a major cause of discomfort and social anxiety for many. By blocking the nerves that stimulate your sweat glands, Botox injections can effectively reduce sweating in problem areas, including the underarms, palms, and feet.",
        },
        {
          title: "Botox for Facial Wrinkles",
          content:
            "Botox has long been a go-to solution for smoothing out facial wrinkles. By temporarily relaxing the underlying muscles, Botox injections help soften fine lines and prevent deeper wrinkles from forming, providing a more youthful appearance. It's particularly effective on dynamic wrinkles, which are caused by muscle movement, such as crow's feet and frown lines.",
        },
        {
          title: "The Botox Procedure with Dr. Jabu Nkehli",
          content:
            "Administered by the seasoned Dr. Jabu Nkehli, the Botox treatment process is swift and often painless, with results noticeable within a few days to a week post-procedure. Regular follow-up treatments are recommended to maintain the best results.",
        },
      ]}
    />
  );
}

