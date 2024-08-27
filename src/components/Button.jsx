import React, { useState } from "react";
import { Link } from "react-router-dom";
import anchor from "/anchor.png";

const Button = ({ path }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <Link
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      to={path}
      className='border border-white bg-[#152642] hover:bg-[#325684] text-white font-lost-fish rounded-md drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] text-lg transition-all ease-in-out duration-200 flex justify-center items-center h-12 w-full gap-2'>
      {hovering && (
        <img
          src={anchor}
          className='size-7 fill-white -rotate-12'
          alt='white-anchor'
        />
      )}
      View More
    </Link>
  );
};

export default Button;
