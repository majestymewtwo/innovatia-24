import React from "react";
import backButton from "/back-button.png";
import { Link } from "react-router-dom";
import oceanDiver from "@/assets/animations/ocean-diver.json";
import koiFish from "@/assets/animations/koi-fish.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div className='z-10 text-white p-4 sapce-y-6 lg:w-2/3 mx-auto'>
      <div className='flex items-center gap-4'>
        <Link to='/welcome'>
          <img
            src={backButton}
            className='focus:outline-none size-10 fill-white drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'
            alt='backButton'
          />
        </Link>
        <h1 className='text-5xl lg:text-6xl font-beauty-mountain drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          About the department
        </h1>
      </div>
      <div className='space-y-8'>
        <div className='flex flex-col lg:flex-row-reverse items-center justify-center'>
          <Lottie animationData={oceanDiver} />
          <div className='space-y-2'>
            <h1 className='font-lost-fish text-4xl drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
              Vision of the department
            </h1>
            <p className='font-bold text-lg drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
              To be a pioneer in providing industry and research focused
              integrated curriculum in computer science and engineering and to
              transform young minds to sustain technically and compete globally
              with enriched, ethical and moral values to serve the nation and
              beyond.
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 items-center justify-center'>
          <Lottie className='w-4/5' animationData={koiFish} />
          <div className='space-y-2'>
            <h1 className='font-lost-fish text-4xl drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
              Mission of the department
            </h1>
            <p className='font-bold space-y-4 text-lg drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
              Department of M.Tech Computer Science and Engineering, Sri Sai Ram
              Engineering College is committed to
              <ul className='list-disc px-4'>
                <li className='list-outside'>
                  Accelerate the learning process by collaborating undergraduate
                  fundamentals & postgraduate focused learning & research.
                </li>
                <li className='list-outside'>
                  Tie-up with industries to facilitate advanced real time
                  projects & internships to bridge gaps between industry &
                  academics.
                </li>
                <li className='list-outside'>
                  Impart research mindset to provoke innovative thoughts and be
                  responsible for inventions benefitting society · Inculcate
                  moral and ethical values as a part of curriculum to enable
                  interpersonal skills.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className='space-y-2 text-center font-poppins pt-9'>
          <h1 className='font-lost-fish text-5xl drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
            How to reach us?
          </h1>
          <p className='text-white font-bold text-lg drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
            Our college buses will be available for transport at Tambaram. Other
            college students can avail them.
          </p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.1818975171714!2d80.05476192507626!3d12.960209587354123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1700556169454!5m2!1sen!2sin'
            className='w-full h-[450px] md:h-72'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
