import React from 'react';
import ImageSearch from './ImageSearch';

const Hero = ({ setTerm }) => {
  return (
    <div className='bg-img h-96 flex flex-col justify-center items-center px-6'>
      <h1 className='lg:text-5xl md:text-5xl md:mb-6 sm:text-4xl sm:mb-2 text-3xl text-white font-black text-center mb-4'>
        Beautiful image for your next project
      </h1>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {/* <Link
        to='/'
        className='py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce'
      >
        Order Now
      </Link> */}
    </div>
  );
};

export default Hero;
