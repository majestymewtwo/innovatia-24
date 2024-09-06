import React from "react";
import goal1 from "/sdg/goal-1.png";
import goal2 from "/sdg/goal-2.png";
import goal3 from "/sdg/goal-3.png";
import goal4 from "/sdg/goal-4.png";

const Donation = () => {
  return (
    <div className='poppins-regular text-white mt-12 w-[90%] lg:w-2/3 focus:outline-none mx-auto rounded-md bg-[#0F1B33]/50 p-5 border space-y-6'>
      <h1 className='text-2xl lg:text-4xl font-lost-fish text-center drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
        Aiding Hearts - Donation Stall
      </h1>
      <p className='font-beauty-mountain text-center text-4xl drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
        <q>Empowering Lives, One Contribution at a Time.</q>
      </p>
      <p className='text-justify'>
        In the boundless spirit of compassion and community, we extend a
        Heartfelt Invitation to you to grace us with your presence at the{" "}
        <q>AIDING HEARTS - DONATION STALL</q> where every act of generosity, no
        matter how modest, possesses the transformative power to create profound
        and enduring change. Your support, whether through financial
        contributions or essential items like clothing and books, will weave a
        tapestry of hope for those in need. Here, we stand united in pursuit of
        the Sustainable Development Goals (SDGs), embracing the names that
        represent our collective aspirations
      </p>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        <img className='rounded-md border' src={goal1} alt='goal-1' />
        <img className='rounded-md border' src={goal2} alt='goal-2' />
        <img className='rounded-md border' src={goal3} alt='goal-3' />
        <img className='rounded-md border' src={goal4} alt='goal-4' />
      </div>
      <p className='text-justify'>
        Your presence and contributions will not merely touch lives; they will
        sculpt destinies and breathe life into dreams. This is more than an
        event; it is a convergence of hearts, a symphony of humanity in action.
        By joining hands with us, you become an architect of change, fostering a
        sense of communal responsibility that resonates far beyond the confines
        of the day. We are driven by a shared purpose—to extend a lifeline to
        those who truly need it.
      </p>
      <p className='font-beauty-mountain text-center text-4xl drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
        <q>
          Together, let's make a difference that reverberates beyond measure.{" "}
        </q>
      </p>
    </div>
  );
};

export default Donation;
