import React from "react";
import backButton from "/back-button.png";
import { Link } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";

const Events = () => {
  const technicalEvents = [
    {
      name: "Event 1",
      image: "Image 1",
      info: "This is information about event 1",
    },
    {
      name: "Event 2",
      image: "Image 2",
      info: "This is information about event 2",
    },
    {
      name: "Event 3",
      image: "Image 3",
      info: "This is information about event 3",
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
        className='w-full border-2 border-white rounded-md h-[70vh] text-white z-10 drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
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
          Technical Events List
        </Tabs.Content>
        <Tabs.Content className='p-4' value='non-technical'>
          Non Technical Events List
        </Tabs.Content>
        <Tabs.Content className='p-4' value='workshop'>
          Workshop List
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default Events;
