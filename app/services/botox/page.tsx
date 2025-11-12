import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function BotoxPage() {
  return (
    <ServicePageTemplate
      title="Botox Injections"
      subtitle="Advanced Botulinum Toxin Treatments"
      description="Botox is a clinically proven, FDA-approved treatment that offers effective solutions for both medical and cosmetic concerns. Dr. Jabu Nkehli specializes in precision Botox injections to address hyperhidrosis, facial wrinkles, and various aesthetic enhancements."
      heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80"
      sideImage="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
      sections={[
        {
          title: "What is Botox?",
          content:
            "Botox (Botulinum Toxin Type A) is a purified protein that temporarily blocks nerve signals to muscles, reducing muscle activity. This FDA-approved treatment has been safely used for decades in both medical and cosmetic applications. At Dermaglare Skin, Dr. Nkehli uses pharmaceutical-grade Botox to ensure optimal safety and results.",
        },
        {
          title: "Botox for Hyperhidrosis (Excessive Sweating)",
          content:
            "Hyperhidrosis can significantly impact quality of life and confidence. Botox injections offer a highly effective solution by blocking the chemical signals that activate sweat glands. Treatment areas include underarms, palms, feet, and forehead. Results typically last 6-12 months, with minimal downtime. This FDA-approved treatment can reduce sweating by up to 87%, providing long-lasting relief from this challenging condition.",
        },
        {
          title: "Botox for Facial Rejuvenation",
          content:
            "Botox is the gold standard for treating dynamic wrinkles caused by repetitive facial expressions. Common treatment areas include forehead lines, frown lines (glabellar lines), crow's feet, bunny lines on the nose, and chin dimpling. The treatment works by temporarily relaxing targeted facial muscles, smoothing existing wrinkles and preventing new ones from forming. Results appear within 3-7 days and typically last 3-4 months.",
        },
        {
          title: "Additional Botox Applications",
          content:
            "Beyond wrinkles and sweating, Botox can address various conditions including TMJ disorders and jaw clenching, gummy smile correction, neck bands (platysmal bands), migraine prevention (FDA-approved), and brow lift for a refreshed appearance. Dr. Nkehli will assess your individual needs during consultation to determine the most appropriate treatment plan.",
        },
        {
          title: "The Treatment Process",
          content:
            "Your journey begins with a comprehensive consultation with Dr. Jabu Nkehli to discuss your concerns and goals. The injection process typically takes 10-20 minutes using ultra-fine needles to minimize discomfort. Most patients describe the sensation as a tiny pinch. No anesthesia is required, though topical numbing cream can be applied if desired. You can return to normal activities immediately after treatment, with minimal restrictions.",
        },
        {
          title: "What to Expect After Treatment",
          content:
            "Results begin to appear within 3-7 days, with full effects visible at 2 weeks. The treated area will feel and look natural, not frozen when performed correctly. Side effects are minimal and may include slight redness or swelling at injection sites, rare temporary bruising, and mild headache (uncommon). Dr. Nkehli recommends avoiding lying down for 4 hours post-treatment, no vigorous exercise for 24 hours, and staying upright to ensure optimal toxin placement.",
        },
        {
          title: "Why Choose Dr. Jabu Nkehli?",
          content:
            "As a specialist dermatologist, Dr. Nkehli brings extensive training in facial anatomy and injection techniques. Her expertise ensures natural-looking results tailored to your unique facial structure and aesthetic goals. She uses only pharmaceutical-grade products from reputable suppliers and provides comprehensive aftercare support. With years of experience, Dr. Nkehli understands the artistry behind Botox treatments, delivering subtle enhancements that highlight your natural beauty.",
        },
        {
          title: "Pricing and Consultation",
          content:
            "Botox pricing varies depending on the number of areas treated and units required. During your initial consultation, Dr. Nkehli will provide a detailed treatment plan and transparent pricing. Most patients require 20-60 units depending on treatment areas. Book your consultation today to discuss how Botox can help you achieve your aesthetic or medical goals.",
        },
      ]}
    />
  );
}
