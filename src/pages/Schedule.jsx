import React from "react";
import backButton from "/back-button.png";
import { Link } from "react-router-dom";
import { EventTimeline } from "@/components/Timeline";

const Schedule = () => {
  return (
    <div className='z-10 text-white p-4 lg:w-2/3 mx-auto space-y-4'>
      <div className='flex items-center gap-4'>
        <Link to='/welcome'>
          <img
            src={backButton}
            className='focus:outline-none size-10 fill-white drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'
            alt='backButton'
          />
        </Link>
        <h1 className='text-4xl lg:text-6xl font-beauty-mountain drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          Event Schedule & Venues
        </h1>
      </div>
      <h1 className='text-xl font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
        Note : This is a tentative schedule and will be subject to changes
      </h1>
      <div className='flex items-center justify-center'>
        <EventTimeline />
      </div>
    </div>
  );
};

export default Schedule;
