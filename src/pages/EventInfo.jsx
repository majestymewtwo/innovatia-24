import React from "react";
import backButton from "/back-button.png";
import { Link, useParams } from "react-router-dom";
import data from "@/assets/data.json";

const EventInfo = () => {
  const { eventName } = useParams();
  const eventData = data[eventName];
  const length = eventData.rounds.length;

  return (
    <div className='z-10 text-white p-4 lg:w-2/3 space-y-10 select-none mx-auto'>
      <div className='flex items-center gap-4 pt-4'>
        <Link to='/events'>
          <img
            src={backButton}
            className='size-10 fill-white drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'
            alt='backButton'
          />
        </Link>
        <h1 className='text-3xl lg:text-6xl font-lost-fish drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          {eventData.name}
        </h1>
      </div>
      <div className='space-y-4 bg-[#0F1B33]/50 p-4 rounded-md'>
        <div className='flex flex-col lg:flex-row gap-10 items-center'>
          <div className='space-y-4'>
            <p className='text-xl font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] text-justify'>
              {eventData.info}
            </p>
            <p className='text-xl font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] text-justify'>
              Team - {eventData.team}
            </p>
            <p className='text-xl font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] text-justify'>
              Venue - {eventData.venue}
            </p>
            <p className='text-xl font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] text-justify'>
              Reporting Time - {eventData["reporting-time"]}
            </p>
          </div>
          <img
            className='lg:w-1/2 rounded-md shadow-lg'
            src={eventData.image}
            alt={eventName}
          />
        </div>
        <div className={`py-5 grid grid-cols-1 ${length%2===0 ? "lg:grid-cols-2" : "lg:grid-cols-3"} items-start justify-around gap-7`}>
          {eventData.rounds.map((round, index) => (
            <div
              key={index}
              className={`font-bold text-center`}>
              <h1 className='text-3xl font-lost-fish drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
                Round{" "}
                <span className='text-4xl font-black font-sans'>
                  {index + 1}
                </span>
              </h1>
              {round.name && (
                <p className='drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
                  Name - {round.name}
                </p>
              )}
              <p className='drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
                Mode - {round.mode}
              </p>
              <p className='drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
                Date - {round.date}
              </p>
              <p className='drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
                Time - {round.time}
              </p>
              <p className='drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] my-5 text-justify'>
                {round.info}
              </p>
            </div>
          ))}
        </div>
        <p className='text-xl text-justify font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] my-5'>
          {eventData.instructions}
        </p>
        <div className='flex flex-col lg:flex-row gap-4 items-center justify-center py-5 font-lost-fish text-xl'>
          <a
            className='p-4 w-full text-center lg:w-fit border-2 border-white rounded-md font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] transition-all ease-in-out duration-200 hover:scale-105 hover:bg-[#223a6c]'
            href={eventData["form-link"]}
            target='_blank'>
            Register Now
          </a>
          <a
            className='p-4 w-full text-center lg:w-fit border-2 border-white rounded-md font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] transition-all ease-in-out duration-200 hover:scale-105 hover:bg-[#223a6c]'
            href={eventData["group-link"]}
            target='_blank'>
            Group Link
          </a>

          <a
            className='p-4 w-full text-center lg:w-fit border-2 border-white rounded-md font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] transition-all ease-in-out duration-200 hover:scale-105 hover:bg-[#223a6c]'
            href={eventData["brochure-link"]}
            target='_blank'>
            Event Brochure
          </a>
        </div>
        <div className='flex flex-col lg:flex-row h-56 lg:h-fit justify-between'>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-lost-fish text-2xl'>Student Co-ordinators</h1>
            {eventData.coordinators.map((person, index) => {
              if (person.type === "Student")
                return (
                  <div className='flex font-bold items-center gap-4 text-lg'>
                    <h1>{person.name}</h1>
                    <h1>{person.phone}</h1>
                  </div>
                );
            })}
          </div>
          <div className='gap-2 flex flex-col'>
            <h1 className='font-lost-fish text-2xl'>Staff Co-ordinators</h1>
            {eventData.coordinators.map((person, index) => {
              if (person.type === "Staff")
                return (
                  <div className='flex font-bold items-center gap-4 text-lg'>
                    <h1>{person.name}</h1>
                    <h1>{person.phone}</h1>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
