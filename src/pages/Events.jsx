import React from "react";
import backButton from "/back-button.png";
import { Link } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";

const Events = () => {
  const technicalEvents = [
    {
      name: "Event 1",
      image: "/placeholder.webp",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut eum dolore non maiores reiciendis repudiandae aliquam.",
    },
    {
      name: "Event 2",
      image: "/placeholder.webp",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut eum dolore non maiores reiciendis repudiandae aliquam.",
    },
    {
      name: "Event 3",
      image: "/placeholder.webp",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut eum dolore non maiores reiciendis repudiandae aliquam.",
    },
  ];

  const nonTechnicalEvents = [
    {
      name: "Event 4",
      image: "/placeholder.webp",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut eum dolore non maiores reiciendis repudiandae aliquam.",
    },
    {
      name: "Event 5",
      image: "/placeholder.webp",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut eum dolore non maiores reiciendis repudiandae aliquam.",
    },
    {
      name: "Event 6",
      image: "/placeholder.webp",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut eum dolore non maiores reiciendis repudiandae aliquam.",
    },
  ];

  const workshops = [
    {
      name: "Workshop 1",
      image: "/placeholder.webp",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut eum dolore non maiores reiciendis repudiandae aliquam.",
    },
  ];

  return (
    <div className='z-10 text-white p-4 lg:w-2/3 space-y-10 mx-auto'>
      <div className='flex items-center gap-4'>
        <Link to='/welcome'>
          <img
            src={backButton}
            className='size-10 fill-white drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'
            alt='backButton'
          />
        </Link>
        <h1 className='text-4xl lg:text-6xl font-beauty-mountain drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          Technical & Non-Technical Events
        </h1>
      </div>
      {/* Events Tabs */}
      <Tabs.Root
        defaultValue='technical'
        className='w-full border-2 border-white rounded-md lg:h-[70vh] text-white z-10 drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
        <Tabs.List className='flex'>
          <Tabs.Trigger
            value='technical'
            className='w-1/3 border-b-2 border-white py-2 font-bold text-lg data-[state="active"]:bg-white/25'>
            Technical
          </Tabs.Trigger>
          <Tabs.Trigger
            value='non-technical'
            className='w-1/3 border-b-2 border-x-2 border-white py-2 font-bold text-lg data-[state="active"]:bg-white/25'>
            Non-Technical
          </Tabs.Trigger>
          <Tabs.Trigger
            value='workshop'
            className='w-1/3 border-b-2 border-white py-2 font-bold text-lg data-[state="active"]:bg-white/25'>
            Workshop
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className='p-4' value='technical'>
          Our Technical Events
          <div className='grid grid-cols-1 lg:grid-cols-3 z-10 text-white'>
            {technicalEvents.map((data, index) => (
              <EventCard
                key={index}
                name={data.name}
                pic={data.image}
                info={data.info}
              />
            ))}
          </div>
        </Tabs.Content>
        <Tabs.Content className='p-4' value='non-technical'>
          Our Non Technical Events
          <div className='grid grid-cols-1 lg:grid-cols-3 z-10 text-white'>
            {nonTechnicalEvents.map((data, index) => (
              <EventCard
                key={index}
                name={data.name}
                pic={data.image}
                info={data.info}
              />
            ))}
          </div>
        </Tabs.Content>
        <Tabs.Content className='p-4' value='workshop'>
          Our Workshops
          <div className='grid grid-cols-1 lg:grid-cols-3 z-10 text-white'>
            {workshops.map((data, index) => (
              <EventCard
                key={index}
                name={data.name}
                pic={data.image}
                info={data.info}
              />
            ))}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

const EventCard = ({ name, pic, info }) => {
  return (
    <div className='p-2 space-y-2'>
      <img className='h-40 w-full' src={pic} alt={name} />
      <h1 className='text-xl font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
        {name}
      </h1>
      <p className='drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>{info}</p>
    </div>
  );
};

export default Events;
