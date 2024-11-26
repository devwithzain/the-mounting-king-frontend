export const animation = {
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

export const navVarients = {
   initial: { opacity: 0, y: "-100%", transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] } },
   vissible: { opacity: 1, y: "0%", transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] } },
};