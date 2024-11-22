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