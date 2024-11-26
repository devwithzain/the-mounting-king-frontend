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
