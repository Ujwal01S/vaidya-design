import z from "zod";

export const subscribeSchema = z.object({
  email: z.email().nonempty("Email is required"),
});

export type SubscribeSchemaType = z.infer<typeof subscribeSchema>;
