import Lottie from "lottie-react";
import React from "react";
import oceanReef from "@/assets/animations/ocean-reef-1.json";
import { motion as m } from "framer-motion";
import CountdownTimer from "@/components/Countdown";
import { Link } from "react-router-dom";
import NavButton from "@/components/NavButton";

const Details = () => {
  return (
    <>
      <div className='z-10 flex flex-col space-y-6 items-center py-6 px-12 lg:py-10 w-full lg:overflow-y-scroll'>
        <div className='text-white text-center space-y-2'>
          <h3 className='text-2xl lg:gap-2 flex flex-col lg:flex-row font-black drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
            <span>Department of</span>
            <span>M.Tech Computer Science & Engineering</span>
          </h3>
          <p className='text-xs font-bold lg:text-sm drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
            in association with
          </p>
          <h3 className='text-3xl font-black drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
            Sai Infoblitz
          </h3>
          <p className='text-xs font-bold lg:text-sm drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
            proudly presents
          </p>
        </div>
        <Link
          to='/'
          className='select-none px-12 lg:px-0 flex items-baseline space-x-4 text-white drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          <h1 className='font-lost-fish text-3xl lg:text-8xl'>Innovatia</h1>
          <h1 className='font-sandy-toes-starfish text-5xl lg:text-9xl'>3.</h1>
          <h1 className='font-sandy-toes-palm text-4xl lg:text-9xl'>0</h1>
        </Link>
        <CountdownTimer targetDate={"09-11-2024"} />
        <div className='flex flex-col lg:flex-row relative items-center gap-4'>
          <NavButton path='/about' title='About' />
          <NavButton path='/events' title='Events' />
          <NavButton path='/schedule' title='Schedule' />
          <NavButton path='/team' title='Team' />
        </div>
      </div>
      <div className='space-y-4 text-white text-center w-full'>
        <h1 className='text-6xl font-beauty-mountain drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          Promo Video
        </h1>
        <video
          className='w-[90%] lg:w-1/2 focus:outline-none mx-auto rounded-md'
          src='/promo.mp4'
          controls></video>
      </div>
    </>
  );
};

export default Details;
