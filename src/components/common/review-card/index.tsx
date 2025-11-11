import { QuoteSVG } from "@/svg/landing-page";
import { Star } from "lucide-react";
import Image from "next/image";

const ReviewCardSection = () => {
  return (
    <div className="grid gap-5 py-6 px-4 shadow-md hover:shadow-[0px_16px_16px_0px_#8C10101A]">
      <div className="flex justify-between items-center">
        <QuoteSVG />

        <div className="flex gap-2 items-center">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              className="w-5 h-5 "
              fill="#ea3c3c"
              stroke="#ea3c3c"
            />
          ))}
        </div>
      </div>

      <p className="text-xs table:text-sm desktop:text-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam
        suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor
        elementum a felis, tempus erat orci.
      </p>

      <div className="flex gap-2.5 items-center">
        <div className="relative aspect-square h-[75px] w-[75px]">
          <Image
            fill
            src="/pp.png"
            alt="profile"
            className="contain-content rounded-full h-auto w-auto"
            sizes="100px"
          />
        </div>

        <div className="grid gap-2">
          <p className="table:text-[20px] desktop:text-[22px] font-bold">
            Meliash Subedi
          </p>
          <p className="table:text-sm desktop:text-[18px] text-hint-text font-medium ">
            Pokhara
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCardSection;
