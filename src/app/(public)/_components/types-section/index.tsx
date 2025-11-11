import ProductCard from "@/components/common/product-card";
import SectionHeader from "@/components/common/seciton-header";
import {
  carTypesData,
  heavyVechicleData,
  vehicleTypesData,
} from "../../_mock/types";
import MainSectionHeader from "@/components/common/main-section-header";
import CarouselWrapper from "@/components/common/carousel-wrapper";
import { CarouselItem } from "@/components/ui/carousel";

const VehicleSection = () => {
  return (
    <section className="grid gap-6 container mx-auto overflow-hidden">
      <MainSectionHeader
        header="Types of Vehicles"
        description="Be the first person to take the full enjoyment from our service"
      />

      {/* bike section */}
      <div className="px-3 tablet:px-35">
        <SectionHeader />
      </div>

      <div className="hidden tablet:grid tablet:grid-cols-3 gap-5 desktop:gap-10 px-3 tablet:px-35">
        {vehicleTypesData.map((bike) => (
          <ProductCard
            key={bike.id}
            data={bike}
          />
        ))}
      </div>

      <div className="tablet:hidden w-full overflow-hidden">
        <CarouselWrapper
          itemLength={vehicleTypesData.length}
          autoPlay={true}
        >
          {vehicleTypesData.map((bike) => (
            <CarouselItem
              key={bike.id}
              className="basis-full pl-4"
            >
              <div className="p-4">
                {" "}
                <ProductCard data={bike} />
              </div>
            </CarouselItem>
          ))}
        </CarouselWrapper>
      </div>

      {/* car section */}
      <div className="px-3 tablet:px-35">
        <SectionHeader />
      </div>

      <div className="hidden tablet:grid grid-cols-1 tablet:grid-cols-3 gap-5 desktop:gap-10 px-3 tablet:px-35">
        {carTypesData.map((car) => (
          <ProductCard
            key={car.id}
            data={car}
          />
        ))}
      </div>

      <div className="tablet:hidden w-full overflow-hidden">
        <CarouselWrapper
          itemLength={carTypesData.length}
          autoPlay={true}
        >
          {carTypesData.map((car) => (
            <CarouselItem
              key={car.id}
              className="basis-full pl-4"
            >
              <div className="p-4">
                {" "}
                <ProductCard data={car} />
              </div>
            </CarouselItem>
          ))}
        </CarouselWrapper>
      </div>

      {/* Heavy section */}
      <div className="px-3 tablet:px-35">
        <SectionHeader title="Heavy Duty" />
      </div>

      <div className="hidden tablet:grid grid-cols-1 tablet:grid-cols-3 gap-5 desktop:gap-10 px-3 tablet:px-35 pb-3">
        {heavyVechicleData.map((car) => (
          <ProductCard
            key={car.id}
            data={car}
          />
        ))}
      </div>

      <div className="tablet:hidden w-full overflow-hidden">
        <CarouselWrapper
          itemLength={carTypesData.length}
          autoPlay={true}
        >
          {heavyVechicleData.map((heavy) => (
            <CarouselItem
              key={heavy.id}
              className="basis-full pl-4"
            >
              <div className="p-4">
                {" "}
                <ProductCard data={heavy} />
              </div>
            </CarouselItem>
          ))}
        </CarouselWrapper>
      </div>
    </section>
  );
};

export default VehicleSection;
