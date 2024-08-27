import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export function EventTimeline() {
  const agenda = [
    {
      time: "9:30 AM",
      title: "Innaugration",
      venue: "MBA Auditorium",
    },
    {
      time: "9:30 AM",
      title: "Innaugration",
      venue: "MBA Auditorium",
    },
    {
      time: "9:30 AM",
      title: "Innaugration",
      venue: "MBA Auditorium",
    },
    {
      time: "9:30 AM",
      title: "Innaugration",
      venue: "MBA Auditorium",
    },
    {
      time: "9:30 AM",
      title: "Innaugration",
      venue: "MBA Auditorium",
    },
    {
      time: "9:30 AM",
      title: "Innaugration",
      venue: "MBA Auditorium",
    },
  ];

  return (
    <ol class='py-6 relative mx-auto border-s-4 border-gray-300 font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
      {agenda.map((plan, index) => (
        <li key={index} class='mb-10 ms-4'>
          <div class='absolute size-6 rounded-full mt-3 -left-3.5 border z-20 border-slate-500 bg-white'></div>
          <time class='mb-1 text-sm font-normal leading-none text-white dark:text-white'>
            {plan.time}
          </time>
          <h3 class='text-lg font-semibold text-white dark:text-white'>
            {plan.title}
          </h3>
          <p class='mb-4 text-base font-normal text-white dark:text-white'>
            {plan.venue}
          </p>
        </li>
      ))}
    </ol>
  );
}
