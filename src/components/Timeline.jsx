export function EventTimeline() {
  const offlineAgenda = [
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
  const onlineAgenda = [
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
