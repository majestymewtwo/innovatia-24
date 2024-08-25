import React from "react";
import Lottie from "lottie-react";
import oceanReef from "@/assets/animations/ocean-reef-1.json";
import { motion as m } from "framer-motion";
import Footer from "@/components/Footer";

const MainLayout = ({ children }) => {
  return (
    <m.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.75 }}
      exit={{ y: "-100%", opacity: 0 }}
      className='bg-transparent relative flex flex-col h-screen overflow-hidden'>
      <Lottie className='absolute w-screen z-0' animationData={oceanReef} />
      {children}
      <Footer />
    </m.div>
  );
};

export default MainLayout;
