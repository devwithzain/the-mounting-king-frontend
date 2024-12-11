import { Dispatch, SetStateAction } from "react";
import { z } from "zod";

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
});

export const profileFormSchema = z.object({
   name: z.string().min(1, {
      message: "Name is required",
   }),
   email: z.string().email({
      message: "Email is required",
   }),
});

export type TloginFormData = z.infer<typeof loginFormSchema>;
export type TprofileFormData = z.infer<typeof profileFormSchema>;
export type TregisterFormData = z.infer<typeof registerFormSchema>;
export type TstepsFormData = z.infer<typeof stepsFormSchema>;

export type TlogoMarqueeProps = {
   children: React.ReactNode;
   baseVelocity: number;
};

export type TproductsProps = {
   id: string;
   title: string;
   price: string;
   description: string;
   short_description: string;
   image: string;
};

export type TpositionProps = {
   left: number;
   width: number;
   opacity: number;
};

export type TselectedItem = {
   quantity: number;
   price: number;
   time: number;
};

export type TButtonProps = {
   title: string;
   href: string;
};

export type TRoundedProps = {
   children: React.ReactNode;
   className?: string;
   backgroundColor: string;
};

export type TlinksProps = {
   data: {
      title: string,
      index: number,
      href: string;
   };
   className: string;
   isActive: boolean,
   setSelectedIndicator: Dispatch<SetStateAction<string>>;
};