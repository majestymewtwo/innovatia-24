import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      return { days, hours, minutes, seconds };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft]);

  return (
    <div>
      <h1 className='text-white text-xl text-center font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
        starts in
      </h1>
      <div className='flex justify-center items-baseline w-2/3 mx-auto lg:w-full gap-1 lg:gap-4'>
        <TimeCard timeLeft={timeLeft.days} timeName='DAYS' />
        <span className='text-7xl text-white drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          :
        </span>
        <TimeCard timeLeft={timeLeft.hours} timeName='HOURS' />
        <span className='text-7xl text-white drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          :
        </span>
        <TimeCard timeLeft={timeLeft.minutes} timeName='MINUTES' />
        <span className='text-7xl text-white drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          :
        </span>
        <TimeCard timeLeft={timeLeft.seconds} timeName='SECONDS' />
      </div>
    </div>
  );
};

export default CountdownTimer;

const TimeCard = ({ timeLeft, timeName }) => {
  return (
    <div className='flex flex-col justify-center items-center space-y-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] rounded-lg text-white px-2'>
      <h1 className='text-7xl font-sandy-toes-wave drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'>
        {timeLeft}
      </h1>
      <h2 className='text-lg font-bold font-sandy-toes tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'>
        {timeName}
      </h2>
    </div>
  );
};
