import CustomButton from "@/components/common/custom-button";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";

const SalesSection = () => {
  return (
    <section className="relative w-full h-[300px] tablet:h-[350px] desktop:h-[446px] container mx-auto">
      <div className="relative w-full h-full">
        <Image
          src="/bannerbg.jpg"
          fill
          alt="Black Friday sale banner"
          sizes="100vw"
          className="object-fill"
          priority={false}
        />
        {/* Overlay for better text readability - darker gradient from top, only on right half */}
      </div>

      <div className="absolute inset-0 flex items-center justify-end px-4 tablet:px-8 desktop:px-12">
        <article className="relative z-10 ml-auto w-full max-w-[400px] desktop:max-w-[488px] text-white grid gap-3 tablet:gap-4 desktop:gap-5">
          <header>
            <h2 className="font-bold text-2xl tablet:text-3xl desktop:text-4xl leading-tight">
              BLACK FRIDAY SALE!
            </h2>
          </header>

          <p className="text-sm tablet:text-base desktop:text-lg leading-relaxed">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Jorem ipsum
            dolor sit amet, consectetur adipiscing elit. Jorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>

          <div className="mt-2 tablet:mt-4">
            <CustomButton title="Rent vehicle" />
          </div>
        </article>
      </div>

      <Button className="py-[11px] px-[30px] bg-warn-primary hover:bg-warn-hover font-medium w-fit rounded-[6px] absolute right-6 -bottom-4 shadow-[0px_4px_4px_0px_#F4620033]">
        <Search />
      </Button>
    </section>
  );
};

export default SalesSection;
