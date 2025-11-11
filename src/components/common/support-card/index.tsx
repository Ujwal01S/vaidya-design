interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SupportCard = ({ description, icon, title }: Props) => {
  return (
    <div className="flex w-full flex-col table:flex-row gap-6 tablet:gap-[25px] items-center justify-center">
      <div className="rounded-[10px] w-12 h-12 tablet:w-[51px] tablet:h-[51px] bg-warn-primary flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex flex-col gap-2 table:gap-3 text-center table:text-start">
        <h4 className="text-lg tablet:text-[20px] desktop:text-[22px] font-semibold leading-tight">
          {title}
        </h4>
        <p className="text-xs table:text-sm desktop:text-base leading-relaxed max-w-full table:max-w-none">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SupportCard;
