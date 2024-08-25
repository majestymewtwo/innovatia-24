import React, { useEffect, useState } from "react";
import sailingYacht from "@/assets/animations/yacht-sailing.json";
import Lottie from "lottie-react";

const Loader = () => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setDots((prev) => (prev == 3 ? 0 : prev + 1));
    }, 500);
  }, [dots]);

  const renderDots = () => {
    let dotElements = [];
    for (let i = 1; i <= dots; i++) {
      dotElements.push(
        <div key={i} className='bg-white size-2 rounded-full' />
      );
    }
    return dotElements;
  };

  return (
    <div className='h-screen flex flex-col items-center justify-center overflow-hidden bg-cyan-800'>
      <Lottie className='size-64' animationData={sailingYacht} />
      <div className='flex items-baseline gap-2'>
        <p className='text-white font-bold text-3xl'>Loading</p>
        {renderDots()}
      </div>
    </div>
  );
};

export default Loader;
