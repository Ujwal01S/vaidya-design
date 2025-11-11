"use client";

import {
  subscribeSchema,
  SubscribeSchemaType,
} from "@/schema/subscribe.schema";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import CustomButton from "../common/custom-button";
import { MailSVG } from "@/svg/landing-page";

const SubscibeForm = () => {
  const form = useForm<SubscribeSchemaType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(subscribeSchema),
  });

  const submitHandler = (data: SubscribeSchemaType) => {
    console.log(data);
    form.reset();
    setTimeout(() => {
      form.clearErrors();
    }, 300);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="flex flex-col tablet:w-[550px] tablet:flex-row gap-4 table:gap-[15px] items-start justify-center w-full max-w-4xl mx-auto"
      >
        <FormField
          control={form.control}
          name={"email"}
          render={({ field }) => (
            <FormItem className="relative w-full tablet:flex-[0_0_60%]">
              <FormControl>
                <Input
                  placeholder="example.@gmail.com"
                  {...field}
                  className="shadow-none py-4 tablet:py-5 border-none bg-white rounded-sm w-full px-[35px]"
                />
              </FormControl>
              <span
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-200 pointer-events-none ${
                  form.formState.errors.email ? "-top-2" : "top-1/2"
                }`}
              >
                <MailSVG />
              </span>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full tablet:flex-1 flex items-center justify-center">
          <CustomButton
            title="Subscribe"
            className="w-full table:w-auto px-8 table:px-12 py-4"
          />
        </div>
      </form>
    </Form>
  );
};

export default SubscibeForm;
