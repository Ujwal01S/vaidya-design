import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
  title?: string;
}

const SectionHeader = ({ title = "2 WHEELERS" }: Props) => {
  return (
    <div className="flex items-center w-full justify-between">
      <div className="w-[20%] flex xs:hidden"></div>
      <h3 className="text-[18px] tablet:text-[28px] xl:text-[32px] font-bold">
        {title}
      </h3>

      <button>
        <Link
          href={"#"}
          className="flex items-center gap-2 text-[14px] desktop:text-base text-hint-text "
        >
          <p className="font-semibold">See all</p>
          <ArrowRight className="w-6 h-6 " />
        </Link>
      </button>
    </div>
  );
};

export default SectionHeader;
