import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { askedQuestions } from "../../_mock/asked-questions";

const FrequentlyAskedQuestionSection = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 tablet:grid-cols-2 py-12">
      <div className="grid gap-[30px] px-4 tablet:px-22">
        <header>
          <h2 className="xl:text-[40px] tablet:text-[34px] text-[18px] font-bold text-center tablet:text-start">
            Frequently Asked Questions
          </h2>
        </header>

        <div className="grid gap-5">
          {askedQuestions.map((quesiton, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="p-0"
              defaultValue="item-0"
            >
              <AccordionItem
                value={`item-${index}`}
                className="border-none p-0"
              >
                <AccordionTrigger className="p-0 text-base tablet:text-[20px] xl:text-[22px] data-[state=open]:font-semibold">
                  {quesiton.title}
                </AccordionTrigger>
                <AccordionContent className="pl-10 tablet:text-[16px] text-sm">
                  {quesiton.content}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>

      <div>
        <figure className="relative hidden md:block w-full max-w-full h-[60vh] pt-12">
          <Image
            src={"/carrr.png"}
            alt="car"
            fill
            sizes="100vw"
            className="object-contain"
            quality={75}
          />
        </figure>

        <figure className="relative  md:hidden w-full  h-[40vh]">
          <Image
            src={"/fullcar.jpg"}
            alt="car"
            fill
            sizes="100vw"
            className="object-contain"
          />
        </figure>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestionSection;
