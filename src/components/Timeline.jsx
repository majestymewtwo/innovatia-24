export function EventTimeline() {
  const offlineAgenda = [
    {
      time: "9:30 AM - 10:45 AM",
      title: "Innaugration",
      venue: "Beta Hall",
    },
    {
      time: "10:45 AM - 11:00 AM",
      title: "Break",
    },
    {
      time: "11:00 AM - 12:35 PM",
      title: "Voyage of Visions - Round 1",
      venue: "Alpha Hall",
    },
    {
      time: "11:00 AM - 12:35 PM",
      title: "Devquest - Round 1",
      venue: "Beta Hall",
    },
    {
      time: "11:00 AM - 12:35 PM",
      title: "Cryptic Heist - Round 1",
      venue: "Gamma Hall",
    },
    {
      time: "11:00 AM - 12:35 PM",
      title: "Craftwaves - Round 1",
      venue: "Classroom",
    },
    {
      time: "11:00 AM - 12:35 PM",
      title: "Sictone - Round 1",
      venue: "Smart Classroom - I",
    },
    {
      time: "11:00 AM - 12:35 PM",
      title: "M.A.D.D Wars - Round 1",
      venue: "Smart Classroom - II",
    },
    {
      time: "12:35 PM - 1:25 PM",
      title: "Lunch Break",
    },
    {
      time: "1:25 PM - 2:45 PM",
      title: "Voyage of Visions - Round 2",
      venue: "Alpha Hall",
    },
    {
      time: "1:25 PM - 2:45 PM",
      title: "Devquest - Round 2",
      venue: "Beta Hall",
    },
    {
      time: "1:25 PM - 2:45 PM",
      title: "Cryptic Heist - Round 2",
      venue: "Gamma Hall",
    },
    {
      time: "1:25 PM - 2:45 PM",
      title: "Craftwaves - Round 2",
      venue: "Classroom",
    },
    {
      time: "1:25 PM - 2:45 PM",
      title: "Sictone - Round 2",
      venue: "Smart Classroom - I",
    },
    {
      time: "1:25 PM - 2:45 PM",
      title: "M.A.D.D Wars - Round 2",
      venue: "Smart Classroom - II",
    },
    {
      time: "2:45 PM - 3:00 PM",
      title: "Break",
    },
    {
      time: "3:00 PM - 4:00 PM",
      title: "Valedictory",
      venue: "Beta Hall",
    },
  ];

  const onlineAgenda = [
    {
      time: "09/09/2024",
      title: "Devquest",
      venue: "7:00 PM  to 9:00 PM",
    },
    {
      time: "09/09/2024",
      title: "Cryptic Heist",
      venue: "7:00 PM  to 9:00 PM",
    },
    {
      time: "09/09/2024",
      title: "M.A.D.D Wars",
      venue: "7:00 PM  to 9:00 PM",
    },
    {
      time: "09/09/2024",
      title: "Sictone",
      venue: "7:00 PM  to 9:00 PM",
    },
    {
      time: "09/09/2024",
      title: "Voyage of Visions",
      venue: "To be posted in group",
    },
    {
      time: "09/09/2024",
      title: "Craftwaves",
      venue: "To be posted in group",
    },
  ];

  return (
    <section className='flex flex-col lg:flex-row justify-between w-full py-7 gap-5'>
      <div className='lg:w-1/2 space-y-4'>
        <h1 className='font-lost-fish text-5xl drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          Online Schedule
        </h1>
        <ol className='py-6 relative w-fit mx-auto border-s-4 border-gray-300 font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          {onlineAgenda.map((plan, index) => (
            <li key={index} className='mb-10 ms-4'>
              <div className='absolute size-6 rounded-full mt-3 -left-3.5 border z-20 border-slate-500 bg-white'></div>
              <time className='mb-1 text-sm font-normal leading-none text-white dark:text-white'>
                {plan.time}
              </time>
              <h3 className='text-lg font-semibold text-white dark:text-white'>
                {plan.title}
              </h3>
              <p className='mb-4 text-base font-normal text-white dark:text-white'>
                {plan.venue}
              </p>
            </li>
          ))}
        </ol>
      </div>
      <div className='lg:w-1/2 space-y-4'>
        <h1 className='font-lost-fish text-5xl drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          Offline Schedule
        </h1>
        <ol className='py-6 relative w-fit mx-auto border-s-4 border-gray-300 font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          {offlineAgenda.map((plan, index) => (
            <li key={index} className='mb-10 ms-4'>
              <div className='absolute size-6 rounded-full mt-3 -left-3.5 border z-20 border-slate-500 bg-white'></div>
              <time className='mb-1 text-sm font-normal leading-none text-white dark:text-white'>
                {plan.time}
              </time>
              <h3 className='text-lg font-semibold text-white dark:text-white'>
                {plan.title}
              </h3>
              <p className='mb-4 text-base font-normal text-white dark:text-white'>
                {plan.venue}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
