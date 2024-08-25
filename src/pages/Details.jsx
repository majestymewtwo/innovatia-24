import Lottie from "lottie-react";
import React from "react";
import oceanReef from "@/assets/animations/ocean-reef-1.json";
import { motion as m } from "framer-motion";

const Details = () => {
  return (
    <m.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.75 }}
      exit={{ y: "-100%", opacity: 0 }}
      className='bg-transparent relative flex overflow-hidden'>
      <div className='z-10 flex flex-col items-center py-10 w-full min-h-screen'>
        <div className='text-white text-center'>
          <h3 className='text-2xl font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
            Department of M.Tech Computer Science & Engineering
          </h3>
          <p className='drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
            in association with
          </p>
          <h3 className='text-2xl font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
            Sai Infoblitz
          </h3>
          <p className='drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
            proudly presents
          </p>
        </div>
        <h1 className='text-9xl select-none flex items-baseline space-x-4 text-white drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          <span className='font-lost-fish text-8xl'>INNOVATIA</span>
          <span className='font-sandy-toes-starfish'>3.</span>
          <span className='font-sandy-toes-palm'>0</span>
        </h1>
      </div>
      <Lottie className='absolute w-screen z-0' animationData={oceanReef} />
    </m.div>
  );
};

export default Details;
