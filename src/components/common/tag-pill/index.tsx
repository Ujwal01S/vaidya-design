interface Props {
  title: string;
  icon: React.ReactNode;
}

const TagPill = ({ icon, title }: Props) => {
  return (
    <div className="bg-bg-pill p-2 flex gap-2 items-center rounded-xl">
      {icon}

      <p className="text-hint-text">{title}</p>
    </div>
  );
};

export default TagPill;
