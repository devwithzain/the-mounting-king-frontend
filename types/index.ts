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

export type TstepsFormData = z.infer<typeof stepsFormSchema>;

export type TlogoMarqueeProps = {
   children: React.ReactNode;
   baseVelocity: number;
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