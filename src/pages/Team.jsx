import React, { useState } from "react";
import backButton from "/back-button.png";
import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin } from "lucide-react";

const Team = () => {
  const staff = [
    {
      name: "Dr Nithya M",
      designation: "Head of the Department",
      image: "/team/nithya.jpeg",
    },
    {
      name: "Shiny A",
      designation: "Staff Coordinator",
      image: "/team/shiny.jpg",
    }
  ];

  const webdevs = [
    {
      name: "Muthu Aanand SU",
      designation: "Student - 4th Year",
      image: "/team/muthu-aanand.jpg",
      github: "https://github.com/majestymewtwo",
      linkedIn: "https://www.linkedin.com/in/muthu-aanand-su-b36188218/",
    },
  ];

  return (
    <div className='z-10 text-white p-4 space-y-10 lg:w-2/3 mx-auto'>
      <div className='flex items-center gap-4'>
        <Link to='/welcome'>
          <img
            src={backButton}
            className='focus:outline-none size-10 fill-white drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'
            alt='backButton'
          />
        </Link>
        <h1 className='text-4xl lg:text-6xl font-beauty-mountain drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          Our Team and Volunteers
        </h1>
      </div>
      <div className='space-y-6'>
        <h1 className='text-5xl font-lost-fish drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          Faculty Coordinators
        </h1>
        <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
          {staff.map((person, index) => (
            <Card
              key={index}
              name={person.name}
              role={person.designation}
              image={person.image}
            />
          ))}
        </div>
      </div>
      <div className='space-y-6'>
        <h1 className='text-5xl font-lost-fish drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          Website Team
        </h1>
        <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
          {webdevs.map((person, index) => (
            <Card
              key={index}
              name={person.name}
              role={person.designation}
              image={person.image}
              github={person.github}
              linkedIn={person.linkedIn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ name, role, image, github, linkedIn }) => {
  const [spin, setSpin] = useState(false);
  return (
    <div className='text-white flex flex-col items-center relative'>
      <div
        className='relative hover:scale-105 cursor-pointer'
        onMouseEnter={() => setSpin(true)}
        onMouseLeave={() => setSpin(false)}>
        <img
          src='/wheel-blue.png'
          className={`size-40 lg:size-60 ${spin && "animate-wheelspin"}`}
          alt='wheel'
        />
        <img
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-28 lg:size-40 border-4 border-cyan-600 rounded-full'
          src={image}
          alt={name}
        />
      </div>
      <h1 className='font-black text-3xl drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
        {name}
      </h1>
      <h1 className='font-bold text-xl font-mono drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
        {role}
      </h1>
      <div className='social-links flex flex-row gap-2 justify-center'>
        {github && (
          <a href={github} target='_blank'>
            <Github color='#FFFFFF' />
          </a>
        )}
        {linkedIn && (
          <a href={linkedIn} target='_blank'>
            <Linkedin color='#FFFFFF' />
          </a>
        )}
      </div>
    </div>
  );
};

export default Team;
