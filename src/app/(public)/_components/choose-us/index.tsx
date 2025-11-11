import MainSectionHeader from "@/components/common/main-section-header";
import SupportCard from "@/components/common/support-card";
import { GuidSVG, WhyChooseUsLocationSVG } from "@/svg/why-us";
import Image from "next/image";

const WhyChooseUsSection = () => {
  return (
    <div className="container">
      <section className="px-6 desktop:px-34 grid gap-10">
        <MainSectionHeader
          header="Why choose us"
          description="Aliquam erat ajofia  volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices."
        />

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-[50px]">
          <figure className="relative w-full aspect-square   md:h-[80vh] overflow-hidden">
            <Image
              src={"/whyus.png"}
              alt="whyus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-[12px]"
            />
          </figure>

          <div className="flex w-full flex-col items-center justify-center gap-2.5">
            <SupportCard
              description="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices."
              title="Customer Support"
              icon={<WhyChooseUsLocationSVG />}
            />

            <SupportCard
              description="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices."
              title="Best Price Guaranted"
              icon={<GuidSVG />}
            />
            <SupportCard
              description="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices."
              title="Many Location"
              icon={<WhyChooseUsLocationSVG />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsSection;
