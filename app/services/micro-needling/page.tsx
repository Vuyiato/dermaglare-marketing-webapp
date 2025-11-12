import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function MicroneedlingPage() {
  return (
    <ServicePageTemplate
      heroImage="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80" 
      sideImage="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80" 
      title="Micro-Needling"
      subtitle="Advanced Collagen Induction Therapy"
      description="Micro-needling, also known as collagen induction therapy, is a revolutionary minimally invasive treatment that harnesses your skin's natural healing abilities. By creating controlled micro-injuries, this procedure stimulates collagen and elastin production, resulting in smoother, firmer, and more youthful-looking skin. Dr. Jabu Nkehli uses medical-grade micro-needling devices to deliver safe and effective results."
      sections={[
        {
          title: "What is Micro-Needling?",
          content: "Micro-needling uses a specialized device equipped with fine, sterile needles to create thousands of microscopic channels in the skin. These controlled micro-injuries trigger the body's natural wound-healing response, stimulating the production of new collagen and elastin fibers. Unlike ablative treatments that remove skin layers, micro-needling preserves the epidermis while working in the deeper dermal layers. This makes it suitable for all skin types and tones, with minimal risk of post-inflammatory hyperpigmentation. The treatment is versatile and can be customized to address various concerns by adjusting needle depth and combining with targeted serums."
        },
        {
          title: "Conditions Treated",
          content: "Micro-needling effectively addresses a wide range of skin concerns including acne scars, surgical scars, and traumatic scars. It reduces fine lines, wrinkles, and skin laxity while improving large pores, rough skin texture, and uneven skin surface. The treatment helps with melasma, sun damage, and age spots when combined with appropriate serums. It's highly effective for stretch marks on the abdomen, thighs, and other areas. Scalp micro-needling can stimulate hair follicles for hair loss concerns. Overall, it provides comprehensive skin rejuvenation, improving tone, texture, and radiance across all treatment areas."
        },
        {
          title: "The Micro-Needling Procedure",
          content: "Your treatment begins with a thorough consultation where Dr. Nkehli assesses your skin and discusses your goals, reviewing your medical history to ensure you're a good candidate. Before treatment, skin is thoroughly cleansed and sanitized, followed by application of topical numbing cream for 30-45 minutes. The actual procedure takes 30-60 minutes depending on the area size. The micro-needling device is moved across treatment areas in multiple directions, with needle depth adjusted based on your specific concern and treatment area (ranging from 0.5mm to 2.5mm). Specialized serums may be applied during treatment for enhanced absorption. Most patients feel only pressure and slight pricking sensation with proper numbing."
        },
        {
          title: "Recovery and Aftercare",
          content: "Immediately after treatment, you'll experience significant redness and mild swelling, with skin feeling tight and sensitive. Pinpoint bleeding during treatment is normal. Over days 1-3, redness gradually fades and skin may feel dry and start to flake. Avoid makeup for the first 24 hours. During the healing phase (days 3-7), any flaking subsides and redness continues to diminish. Aftercare is crucial: use gentle cleansing with pH-balanced cleanser, apply prescribed healing serum frequently, maintain strict sun protection (SPF 50+) for at least 2 weeks, and avoid active ingredients like retinoids and acids for 3-5 days. Refrain from swimming, saunas, or intense exercise for 48 hours, and keep head elevated while sleeping to minimize swelling."
        },
        {
          title: "Expected Results and Timeline",
          content: "Results appear gradually and cumulatively. Immediately after redness subsides, skin appears plump and glowing with enhanced product absorption for several days. Within 2-4 weeks, you'll notice improved skin texture, smoothness, subtle reduction in fine lines, and more even skin tone. Optimal results emerge at 3-6 months as significant collagen remodeling occurs, with visible improvement in scars and wrinkles and firmer, more youthful-looking skin. Most concerns require 3-6 treatments spaced 4-6 weeks apart, with maintenance treatments every 6-12 months. Scarring may require 6-8 treatments for optimal improvement. Results continue to improve over time with each treatment session."
        },
        {
          title: "Micro-Needling with PRP (Vampire Facial)",
          content: "For enhanced results, Dr. Nkehli offers micro-needling combined with Platelet-Rich Plasma (PRP) from your own blood. This powerful combination, known as the 'Vampire Facial,' delivers concentrated growth factors directly into the skin during treatment. Benefits include accelerated healing, reduced downtime, enhanced collagen production, superior anti-aging results, and better improvement in skin quality and texture. The process involves drawing a small blood sample before treatment, processing it to concentrate platelets, then applying the PRP during and after micro-needling. Growth factors penetrate deeply through the micro-channels created by the needles, making this ideal for more significant skin concerns."
        },
        {
          title: "Safety and Contraindications",
          content: "While micro-needling is generally very safe when performed by a qualified professional like Dr. Nkehli, it's not suitable for everyone. Contraindications include active acne or skin infections, active cold sores or herpes outbreak, keloid scarring tendency, pregnancy or breastfeeding, blood clotting disorders or being on blood thinners, recent Accutane use (within 6 months), and skin cancer or suspicious lesions. Expected side effects include redness and sensitivity that resolves in 2-5 days, temporary dryness and flaking, and rare bruising. With proper aftercare, the risk of infection is very rare, and scarring risk is minimal when performed correctly by an experienced dermatologist."
        },
        {
          title: "Why Choose Dr. Jabu Nkehli?",
          content: "As a specialist dermatologist, Dr. Nkehli has the medical expertise to safely perform micro-needling on all skin types, including darker skin tones that require special care. She uses only medical-grade, FDA-approved devices in a sterile clinical environment. Her deep understanding of skin anatomy ensures optimal needle depth and technique for your specific concerns. Dr. Nkehli offers combination treatments tailored to your individual needs and provides comprehensive post-treatment care and support. Her years of experience and meticulous approach ensure you receive the safest, most effective treatment possible with natural-looking, long-lasting results."
        },
        {
          title: "Pricing and Consultation",
          content: "Micro-needling pricing varies based on treatment area and whether PRP is included. Face only treatments range from R2000-R3000 per session, while face and neck combined cost R3500-R4500 per session. Micro-needling with PRP ranges from R4000-R6000 per session. Treatment for stretch marks or scarring costs R2500-R4000 per area per session. Package deals are available for multiple treatment series, typically 3-6 sessions, offering better value. Book your consultation with Dr. Nkehli to discuss your concerns, determine if micro-needling is right for you, and receive a customized treatment plan with transparent pricing tailored to your skin goals."
        }
      ]}
    />
  );
}
