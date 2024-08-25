import React, { useState } from "react";
import { Link } from "react-router-dom";
import anchor from "/anchor.png";

const NavButton = ({ path, title }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <Link
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      to={path}
      className='border border-white bg-[#152642] hover:bg-[#325684] text-white font-lost-fish rounded-md drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] text-xl transition-all ease-in-out duration-200 flex justify-center items-center h-14 w-48 gap-2'>
      {hovering && (
        <img
          src={anchor}
          className='size-7 fill-white -rotate-12'
          alt='white-anchor'
        />
      )}
      {title}
    </Link>
  );
};

export default NavButton;
