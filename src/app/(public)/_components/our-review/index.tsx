import CarouselWrapper from "@/components/common/carousel-wrapper";
import CustomButton from "@/components/common/custom-button";
import MainSectionHeader from "@/components/common/main-section-header";
import ReviewCardSection from "@/components/common/review-card";
import { CarouselItem } from "@/components/ui/carousel";

const OurReviewSection = () => {
  return (
    <section className="container mx-auto ">
      <div className="grid gap-[30px] px-3">
        <h4 className="tablet:text-[20px] xl:text-[22px] font-semibold text-warn-primary text-center">
          Our Review
        </h4>

        <MainSectionHeader
          header="What They Say ?"
          description="Here are some comments from our customers, be one of them"
        />

        <div className="hidden tablet:grid tablet:grid-cols-3 gap-[30px]">
          <ReviewCardSection />
          <ReviewCardSection />
          <ReviewCardSection />
        </div>

        <div className="tablet:hidden w-full overflow-hidden">
          <CarouselWrapper
            itemLength={3}
            autoPlay={true}
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-full pl-4"
              >
                <div className="p-4">
                  {" "}
                  <ReviewCardSection />
                </div>
              </CarouselItem>
            ))}
          </CarouselWrapper>
        </div>

        <div className="w-full flex items-center justify-center">
          <CustomButton title="See all" />
        </div>
      </div>
    </section>
  );
};

export default OurReviewSection;
