import CustomButton from "@/components/common/custom-button";

const ShareSection = () => {
  return (
    <section className="container  bg-[url('/cliplogo.png')] bg-contain bg-right  bg-no-repeat w-full relative py-8 backdrop-opacity-80 mx-auto grid gap-8 px-3 tablet:px-[84px]">
      <div className="px-3 tablet:pl-16">
        {/* Article with background image on mobile */}
        <article className="relative px-6 py-8 table:py-12 border-2 border-warn-primary rounded-md grid gap-6 tablet:text-center desktop:text-left max-w-full  desktop:mx-0 w-[30vw] min-w-[294px] h-fit items-center justify-center min-h-[300px] ">
          {/* Overlay for better text readability on mobile */}
          <div className="absolute inset-0 desktop:bg-transparent rounded-md z-0"></div>

          <div className="absolute w-4 h-4 bg-warn-primary rounded-full top-3 right-6" />

          {/* Content */}
          <div className="relative z-10">
            <header>
              <h3 className="text-xl tablet:text-2xl desktop:text-[32px] font-bold leading-tight text-black">
                Do you want to share your vehicle?
              </h3>
            </header>
            <p className="text-base tablet:text-lg desktop:text-[18px] leading-relaxed text-para mt-4">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <div className="flex justify-center desktop:justify-start mt-6">
              <CustomButton title="Learn More" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ShareSection;
