import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import TagPill from "../tag-pill";
import CustomButton from "../custom-button";
import { AutoSVG, GasSVG, SeatSVG } from "@/svg/landing-page";
import { IVechicleTypesProps } from "@/types/product-card.types";

const ProductCard = ({ data }: { data: IVechicleTypesProps }) => {
  return (
    <div className="rounded-3xl shadow-md transition-all duration-300 hover:shadow-[0px_16px_16px_0px_#8C10101A]">
      <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl">
        <Image
          alt="img"
          src={data.imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover"
          quality={75}
        />
      </div>

      <div className=" grid gap-4 desktop:gap-[15px] px-4 pb-4 pt-2.5 desktop:pt-5 desktop:px-8 desktop:pb-8 ">
        <h4 className="font-semibold text-[20px] desktop:text-2xl">
          {data.title}
        </h4>
        <div className="flex gap-1.5 items-center">
          <Star
            className="w-6 h-6 "
            fill="#ea3c3c"
            stroke="#ea3c3c"
          />
          <p className="text-hint-text">{data.review}</p>
        </div>

        <div className="flex gap-1.5 items-center">
          <MapPin
            className="w-6 h-6 "
            stroke="#737373"
          />
          <p className="text-hint-text">{data.location}</p>
        </div>

        <div className="flex gap-2.5 flex-wrap">
          <TagPill
            icon={<SeatSVG />}
            title="4 seats"
          />
          <TagPill
            icon={<GasSVG />}
            title="Gas"
          />
          <TagPill
            icon={<AutoSVG />}
            title="Auto"
          />
        </div>

        <div className="flex justify-between items-center">
          <p className="font-semibold xl:text-[18px] tablet:text-base text-sm">
            {data.price}
            <span className="font-normal xl:text-[18px] tablet:text-base text-sm">
              /hr
            </span>
          </p>
          <CustomButton title="See More" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
