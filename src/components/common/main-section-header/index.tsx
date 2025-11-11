interface Props {
  header: string;
  description: string;
}

const MainSectionHeader = ({ description, header }: Props) => {
  return (
    <header className="flex items-center justify-center flex-col">
      <h2 className="font-bold text-[18px] tablet:text-[34px] xl:text-[40px] text-center">
        {header}
      </h2>
      <p className="text-center text-xs tablet:text-sm xl:text-base max-w-[561px] text-wrap">
        {description}
      </p>
    </header>
  );
};

export default MainSectionHeader;
