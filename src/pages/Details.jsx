import Lottie from "lottie-react";
import React from "react";
import oceanReef from "@/assets/animations/ocean-reef-1.json";
import { motion as m } from "framer-motion";
import CountdownTimer from "@/components/Countdown";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className='z-10 flex flex-col items-center py-10 w-full h-screen overflow-y-scroll'>
      <div className='text-white text-center'>
        <h3 className='text-2xl font-serif font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          Department of M.Tech Computer Science & Engineering
        </h3>
        <p className='drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          in association with
        </p>
        <h3 className='text-2xl font-serif font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          Sai Infoblitz
        </h3>
        <p className='drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          proudly presents
        </p>
      </div>
      <Link
        to='/'
        className='text-9xl select-none flex items-baseline space-x-4 text-white drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
        <h1 className='font-lost-fish text-8xl'>INNOVATIA</h1>
        <h1 className='font-sandy-toes-starfish'>3.</h1>
        <h1 className='font-sandy-toes-palm'>0</h1>
      </Link>
      <CountdownTimer targetDate={"09-11-2024"} />
    </div>
  );
};

export default Details;
