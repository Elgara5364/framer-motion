import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSignal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const childVariants = {
  hidden: {
    // y: 0,
    opacity: 0,
  },
  visible: {
    // y: -50,
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  const showTitle = useSignal(true);
  useSignals();
  console.log(showTitle.value);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container order">
      <AnimatePresence exitBeforeEnter>
        {setTimeout(() => {
          showTitle.value = false;
          console.log(showTitle.value);
        }, 4000)}
        {showTitle.value && (
          <motion.h2 exit={{ opacity: 0 }}>
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
