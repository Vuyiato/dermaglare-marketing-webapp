import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function ElectrocauteryPage() {
  return (
    <ServicePageTemplate
      heroImage="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=80" sideImage="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80" title="Electrocautery & Curettage"
      subtitle="Comprehensive Electrocautery and Curettage"
      description="Electrocautery and Curettage is a safe, effective, and minimally invasive procedure performed by dermatologists to address various skin conditions. This treatment involves the use of electric current (Electrocautery) to heat and remove abnormal or unwanted tissue, and then scrape away the treated skin (Curettage) for the elimination of the diseased skin."
      sections={[
        {
          title: "Benefits of Electrocautery and Curettage",
          content: "Electrocautery and Curettage offers an efficient way to treat numerous skin conditions, including warts, skin tags, and some types of skin cancers. Its precision allows for the removal of specific skin areas without affecting the surrounding healthy tissue. Moreover, the heat from the electrocautery can help minimise bleeding by coagulating blood vessels on the spot, promoting safer and cleaner treatment."
        },
        {
          title: "The Procedure: What to Expect?",
          content: "The Electrocautery and Curettage procedure, expertly performed by Dr. Jabu Nkehli, begins with the application of a local anesthetic to numb the targeted area, ensuring a comfortable experience for patients. Then, she uses an electrocautery device to heat and remove the unwanted skin tissue, followed by a curette, a small, sharp instrument, to scrape away the remaining diseased skin. The entire procedure is typically quick and followed by minimal discomfort."
        },
        {
          title: "Is This Right for You?",
          content: "If you're troubled by unwanted skin growths or looking for efficient removal of specific skin conditions, Electrocautery and Curettage might be the ideal solution for you. It's always best to discuss with Dr. Jabu Nkehli to determine the most effective treatment for your unique skin needs."
        }
      ]}
    />
  );
}
