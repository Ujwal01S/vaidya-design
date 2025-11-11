import SubscibeForm from "@/components/form/subscribe-form";

const SubscriptionSection = () => {
  return (
    <section className="bg-custom-pink py-10 px-4 table:px-8 desktop:px-[171px]">
      <div className="grid gap-6 table:gap-[30px]">
        <h2 className="text-base table:text-xl desktop:text-[28px] font-bold text-center">
          SUBSCRIBE OUR NEWSLETTER
        </h2>

        <p className="text-sm table:text-base desktop:text-base text-center max-w-2xl mx-auto">
          We can help you provide the latest news whenever and wherever you are
          via email
        </p>

        <SubscibeForm />
      </div>
    </section>
  );
};

export default SubscriptionSection;
