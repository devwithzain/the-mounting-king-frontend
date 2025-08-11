import type { Variants } from "framer-motion";

export const animation: Variants = {
   initial: { y: "100%" },
   enter: () => ({
      y: "0",
      transition: {
         duration: 0.75,
         ease: [0.33, 1, 0.68, 1],
         delay: 0.5,
      },
   }),
};

export const wrapperVariants: Variants = {
   open: {
      scaleY: 1,
      transition: {
         when: "beforeChildren",
         staggerChildren: 0.1,
      },
   },
   closed: {
      scaleY: 0,
      transition: {
         when: "afterChildren",
         staggerChildren: 0.1,
      },
   },
};

export const iconVariants: Variants = {
   open: {
      opacity: 1,
      y: 0,
      transition: {
         when: "beforeChildren",
      },
   },
   closed: {
      opacity: 0,
      y: -15,
      transition: {
         when: "afterChildren",
      },
   },
};

export const actionIconVariants: Variants = {
   open: { scale: 1, y: 0 },
   closed: { scale: 0, y: -7 },
};

export const menuSlide: Variants = {
   initial: { x: "calc(100% + 100px)" },
   enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
   exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
   },
};

export const slide: Variants = {
   initial: { x: 80 },
   enter: (i) => ({
      x: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
   }),
   exit: (i) => ({
      x: 80,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
   }),
};

export const scale: Variants = {
   open: { scale: 1, transition: { duration: 0.3 } },
   closed: { scale: 0, transition: { duration: 0.4 } },
};

let initialPath = "";
let targetPath = "";

if (typeof window !== "undefined") {
   initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight
      } Q-100 ${window.innerHeight / 2} 100 0`;
   targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight
      } Q100 ${window.innerHeight / 2} 100 0`;
}

export const curve: Variants = {
   initial: {
      d: initialPath,
   },
   enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
   },
   exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
   },
};