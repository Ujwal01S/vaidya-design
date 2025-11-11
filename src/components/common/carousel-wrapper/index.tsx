"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  itemLength: number;
  autoPlay?: boolean;
  className?: string;
  contentClassName?: string;
}

const CarouselWrapper = ({
  children,
  itemLength,
  autoPlay = true,
  className,
  contentClassName,
}: Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateIndex = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    updateIndex(); // Initial
    carouselApi.on("select", updateIndex);

    return () => {
      carouselApi.off("select", updateIndex);
    };
  }, [carouselApi]);

  return (
    <Carousel
      setApi={setCarouselApi}
      className={cn("w-full overflow-hidden", className)}
      opts={{ loop: true, align: "start", containScroll: "trimSnaps" }}
      autoPlay={autoPlay}
    >
      <CarouselContent className={cn("", contentClassName)}>
        {children}
      </CarouselContent>

      <div className="flex gap-1 py-5 justify-center items-center">
        {Array.from({ length: itemLength }).map((_, index) => (
          <button
            key={index}
            onClick={() => carouselApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer",
              index === currentIndex
                ? "bg-warn-primary border-2 border-warn-primary"
                : "bg-[#7f7f7f]",
            )}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default CarouselWrapper;
