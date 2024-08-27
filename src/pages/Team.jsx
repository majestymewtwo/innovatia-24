import React from "react";
import backButton from "/back-button.png";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className='z-10 text-white p-4 lg:w-2/3 mx-auto'>
      <div className='flex items-center gap-4'>
        <Link to='/welcome'>
          <img
            src={backButton}
            className='focus:outline-none size-10 fill-white drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'
            alt='backButton'
          />
        </Link>
        <h1 className='text-5xl lg:text-6xl font-beauty-mountain drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          Our Team and Volunteers
        </h1>
      </div>
    </div>
  );
};

export default Team;
