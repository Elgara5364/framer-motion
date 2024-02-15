import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSignals } from "@preact/signals-react/runtime";
import { showModal } from "../App";
import { Link } from "react-router-dom";

const backdrop = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
  },
};

const modal = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = () => {
  // console.log(showModal.value);
  useSignals();
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal.value && (
        <motion.div
          variants={backdrop}
          animate="visible"
          initial="hidden"
          exit="hidden"
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-10">
          <motion.div
            variants={modal}
            className="text-center rounded-lg mx-auto my-[25vw] max-w-[400px] px-[20px] py-[40px] bg-white">
            <p className="font-bold text-black">Want to Make Another Pizza?</p>
            <Link to="/" className="text-black">
              <button
                onClick={() => (showModal.value = false)}
                className="border-black text-black">
                Start Again
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
