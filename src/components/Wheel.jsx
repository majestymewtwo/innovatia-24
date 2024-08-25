import React, { useState } from "react";
import wheelIcon from "@/assets/wheel.png";
import { Link } from "react-router-dom";

const Wheel = () => {
  const [rotate, setRotate] = useState(false);

  return (
    <Link
      onMouseEnter={() => setRotate(true)}
      onMouseLeave={() => setRotate(false)}
      to='/welcome'
      className='absolute -bottom-40 left-0 right-0 mx-auto size-72 cursor-pointer hover:-bottom-28 hover:size-[22rem] transition-all ease-in duration-200 select-none z-20'>
      <img
        src={wheelIcon}
        className={`pointer-events-none  ${
          rotate && "animate-wheelspin"
        } w-full h-full`}
        alt='wheel'
      />
      <button
        className={`${
          !rotate ? "hidden" : "absolute"
        } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-[#CD9A30] px-14 py-4 rounded border-2 border-black transition-all ease-in duration-200 font-lost-fish text-3xl text-stone-800`}>
        Explore
      </button>
    </Link>
  );
};

export default Wheel;
