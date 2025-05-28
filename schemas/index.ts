import * as z from "zod";

export const stepsFormSchema = z.object({
   name: z.string().min(1),
   email: z.string().email(),
   phone: z.any(),
   postcode: z.string(),
   tvsize: z.string(),
   specialRequest: z.string(),
});

export const loginFormSchema = z.object({
   email: z.string().email({
      message: "Email is required",
   }),
   password: z.string().min(1, {
      message: "Password is required",
   }),
});

export const registerFormSchema = z.object({
   name: z.string().min(1, {
      message: "Name is required",
   }),
   email: z.string().email({
      message: "Email is required",
   }),
   password: z.string().min(8, {
      message: "Minimum 8 characters required",
   }),
   confirmPassword: z.string().min(8, {
      message: "Minimum 8 characters required",
   }),
}).refine((data) => data.password === data.confirmPassword, {
   message: "Passwords don't match",
   path: ["confirmPassword"],
});

export const productsColumnSchema = z.object({
   title: z.string(),
   price: z.string(),
   color: z.string(),
   size: z.string(),
   category: z.string(),
   shortDescription: z.string(),
   description: z.string(),
   image: z.any(z.any()),
});

export const servicesColumnSchema = z.object({
   title: z.string(),
   short_description: z.string(),
   description: z.string(),
   image: z.any().nullable(),
});

export const employeesColumnSchema = z.object({
   name: z.string(),
   email: z.string(),
   address: z.string(),
   phone_number: z.string(),
   state: z.string(),
});

export const requestServicesFormSchema = z.object({
   service_title: z.string().nonempty("Title is required"),
   service_description: z.string().nonempty("Description is required"),
   steps: z.array(
      z.object({
         step_title: z.string().nonempty("Step title is required"),
         step_description: z.string().nonempty("Step description is required"),
         options: z.array(
            z.object({
               size: z.string().nonempty("Size is required"),
               time: z.number().int().nonnegative("Time must be a non-negative integer"),
               price: z.number().nonnegative("Price must be a non-negative number"),
            })
         ),
      })
   ),
});

export type TloginFormData = z.infer<typeof loginFormSchema>;
export type TregisterFormData = z.infer<typeof registerFormSchema>;
export type TservicesColumnProps = z.infer<typeof servicesColumnSchema>;
export type TproductsColumnProps = z.infer<typeof productsColumnSchema>;
export type TemployeesColumnSchema = z.infer<typeof employeesColumnSchema>;
export type TrequestServiceFormData = z.infer<typeof requestServicesFormSchema>;
