import React from "react";
import backButton from "/back-button.png";
import { Link } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";
import Button from "@/components/Button";

const Events = () => {
  const technicalEvents = [
    {
      name: "Cryptic Heist",
      key: "cryptic-heist",
      image: "/events/cryptic-heist-poster.png",
      info: "Dive into a fun and thrilling online adventure where participants act as digital detectives, solving cryptographic puzzles, cracking codes, and uncovering hidden secrets to complete a high-stakes virtual heist.",
    },
    {
      name: "DevQuest",
      key: "dev-quest",
      image: "/events/devquest-poster.jpg",
      info: "An exhilarating coding competition designed to test your problem-solving skills and algorithmic prowess! Compete with the best and showcase your coding mastery in a thrilling and intellectually stimulating environment.",
    },
    {
      name: "Voyage of Visions",
      key: "voyage-of-visions",
      image: "/events/voyage-of-visions-poster.jpg",
      info: "Set sail on a voyage of innovation and discovery where participants present groundbreaking ideas across various technologies, exploring the vast depths of knowledge and creativity",
    },
  ];

  const nonTechnicalEvents = [
    {
      name: "CraftWave ",
      key: "craft-wave",
      image: "/events/craft-wave-poster.png",
      info: "A creative and environmentally-focused competition designed to raise awareness about ocean pollution caused by improper waste disposal. Participants will engage in a series of challenges that combine art, innovation, and sustainability.",
    },
    {
      name: "M.A.D.D Wars",
      key: "madd-wars",
      image: "/events/madd-wars-poster.jpg",
      info: "An extraordinary celebration of some of the most iconic worlds of adventure, heroism, and magic. Whether you're drawn to epic battles, enchanted lands, or the vibrant universes of beloved characters, this event has something for every fan. ",
    },
    {
      name: "Sictone",
      key: "sictone",
      image: "/events/sictone-poster.jpg",
      info: "An engaging and entertaining a series of rounds that challenge participants' knowledge, listening skills, lyrical memory, and puzzle-solving abilities. The event is designed to test teams in a fun, dynamic environment through cinematic quizzes and puzzle-solving tasks.",
    },
  ];

  const workshops = [
    {
      name: "Workshop 1",
      key: "event-1",
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
        <h1 className='text-3xl lg:text-6xl font-beauty-mountain drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          Technical, Non-Technical Events & Workshops
        </h1>
      </div>
      {/* Events Tabs */}
      <Tabs.Root
        defaultValue='technical'
        className='w-full border-2 border-white rounded-md lg:min-h-[70vh] text-white bg-[#0F1B33]/25 z-10 drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
        <Tabs.List className='flex'>
          <Tabs.Trigger
            value='technical'
            className='w-1/2 border-b-2 border-white py-2 font-bold text-lg data-[state="active"]:bg-[#152642]/25'>
            Technical
          </Tabs.Trigger>
          <Tabs.Trigger
            value='non-technical'
            className='w-1/2 border-b-2 border-x-2 border-white py-2 font-bold text-lg data-[state="active"]:bg-[#152642]/25'>
            Non-Technical
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className='p-4' value='technical'>
          <h1 className='text-2xl'>Our Technical Events</h1>
          <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 z-10 text-white'>
            {technicalEvents.map((data, index) => (
              <EventCard
                key={index}
                name={data.name}
                pic={data.image}
                info={data.info}
                path={data.key}
              />
            ))}
          </div>
        </Tabs.Content>
        <Tabs.Content className='p-4' value='non-technical'>
          <h1 className='text-2xl'>Our Non-Technical Events</h1>
          <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 z-10 text-white'>
            {nonTechnicalEvents.map((data, index) => (
              <EventCard
                key={index}
                name={data.name}
                pic={data.image}
                info={data.info}
                path={data.key}
              />
            ))}
          </div>
        </Tabs.Content>
        <Tabs.Content className='p-4' value='workshop'>
          Our Workshops
          <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 z-10 text-white'>
            {workshops.map((data, index) => (
              <EventCard
                key={index}
                name={data.name}
                pic={data.image}
                info={data.info}
                path={data.key}
              />
            ))}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

const EventCard = ({ name, pic, info, path }) => {
  return (
    <div className='flex flex-col justify-between p-2 space-y-2'>
      <img className='h-52 w-full rounded-md' src={pic} alt={name} />
      <h1 className='text-xl font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
        {name}
      </h1>
      <p className='drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)] text-justify'>
        {info}
      </p>
      <Button path={`/event/${path}`} />
    </div>
  );
};

export default Events;
