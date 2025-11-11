import Image from "next/image";

const HeroSection = () => {
  return (
    <figure className="flex flex-col items-center justify-center gap-12 w-full px-3">
      <div className="relative w-full h-[calc(100vh-35vh)] tablet:h-[calc(100vh-10vh)]">
        <Image
          alt="img"
          src="/hero.jpg"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className=" object-fill rounded-md"
        />
      </div>
    </figure>
  );
};

export default HeroSection;
