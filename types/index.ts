import { Dispatch, SetStateAction } from "react";

export type TmodallProps = {
   title: string;
   description: string;
   isOpen: boolean;
   onClose: () => void;
   children?: React.ReactNode;
};

export type TuseAlerteModalProps = {
   loading?: boolean;
   isOpen: boolean;
   onClose: () => void;
   onConfirm: () => void;
};

export type TuserProps = {
   id: bigint;
   name: string;
   email: string;
   image: string | null;
   role: string;
   created_at: Date | null;
   updated_at: Date | null;
};

export type ThooksProps = {
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
};

export type TModalProps = {
   isOpen?: boolean;
   onClose: () => void;
   body?: React.ReactElement;
};


export type TlogoMarqueeProps = {
   children: React.ReactNode;
   baseVelocity: number;
};

export type TRoundedProps = {
   children: React.ReactNode;
   className?: string;
   style?: React.CSSProperties;
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

export type TheadingProps = {
   title: string;
   description: string;
};

export type TservicesColumnProps = {
   id: bigint;
   title: string;
   short_description: string;
   description: string;
   image: string;
   created_at: Date | null;
};

export type TemployeesColumnProps = {
   id: bigint;
   name: string;
   email: string;
   address: string;
   phone_number: string;
   state: string;
   created_at: Date | null;
};

export type TRequestServicesColumnProps = {
   id: bigint;
   service_title: string;
   service_description: string;
   created_at: Date | null;
   steps: {
      step_title: string;
      step_description: string;
      options: {
         size: string;
         time: number;
         price: number;
      }[];
   }[];
};