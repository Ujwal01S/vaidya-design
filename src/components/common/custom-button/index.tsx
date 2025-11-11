import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
  onClick?: () => void;
}

const CustomButton = ({ className, title, onClick }: Props) => {
  return (
    <Button
      className={cn(
        "py-5 px-[25px] bg-warn-primary hover:bg-warn-hover font-medium w-fit rounded-[6px]",
        className,
      )}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
