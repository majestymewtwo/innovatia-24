import React from "react";
import Lottie from "lottie-react";
import oceanReef from "@/assets/animations/ocean-reef-1.json";
import { AnimatePresence, motion as m } from "framer-motion";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <div className='bg-transparent relative flex flex-col justify-between lg:h-screen overflow-hidden'>
        <m.div
          key={location.pathname}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.7 }}
          exit={{ y: "-100%", opacity: 0 }}
          className="lg:h-[90%]"
          >
          {children}
        </m.div>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default MainLayout;
