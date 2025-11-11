import Image from "next/image";
import HeroSection from "./_components/hero-section";
import SalesSection from "./_components/sale-section";
import VehicleSection from "./_components/types-section";
import ShareSection from "./_components/share-section";
import WhyChooseUsSection from "./_components/choose-us";
import OurReviewSection from "./_components/our-review";
import SubscriptionSection from "./_components/subscription-section";
import FrequentlyAskedQuestionSection from "./_components/frequent-question";

export default async function Home() {
  return (
    <div className=" grid gap-6 desktop:gap-8">
      {/* hero section */}
      <section className="container mx-auto py-2 desktop:py-[27px] px-3  tablet:px-[84px] z-10">
        <HeroSection />
      </section>

      <figure className="relative w-full h-10 container">
        <Image
          src="/brand-logo.jpg"
          alt="brandlogo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-contain"
        />
      </figure>

      <SalesSection />

      <VehicleSection />

      <ShareSection />

      <WhyChooseUsSection />
      <OurReviewSection />

      <SubscriptionSection />

      <FrequentlyAskedQuestionSection />
    </div>
  );
}
