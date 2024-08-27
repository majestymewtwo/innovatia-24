import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import oceanReef from "@/assets/animations/ocean-reef-1.json";
import { AnimatePresence, motion as m } from "framer-motion";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    console.log("Page changed");
    if (ref.current) {
      ref.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <AnimatePresence mode='wait'>
      <div
        ref={ref}
        className='relative flex flex-col justify-between bg-transparent lg:h-screen overflow-hidden'>
        <m.div
          key={location.pathname}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeIn" }}
          className='min-h-screen lg:min-h-min lg:h-[90%] lg:overflow-y-scroll pb-10'>
          {children}
        </m.div>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default MainLayout;
