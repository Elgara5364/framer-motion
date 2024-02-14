import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: " 0px 0px 8px rgb(255, 255,255)",
    boxShadow: " 0px 0px 8px rgb(255, 255,255)",
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};

const ContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      variants={ContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container">
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          exit>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
