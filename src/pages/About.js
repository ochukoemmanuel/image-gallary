import React from 'react';

const About = () => {
  return (
    <div>
      <div className='h-72 px-6 flex justify-center items-center bg-yellow-300'>
        <h1 className='text-3xl uppercase font-black'>About</h1>
      </div>
      <div className='bg-green-100 rounded container flex sm:flex-col md:flex-row justify-between px-6 my-32 mx-auto'>
        <div className='flex-1 p-14'>
          <h1 className='font-black mb-3'>About Drip template</h1>
          <p>
            Hi, I'm Sal, the author of the template you're currently previewing.
            I am sharing for free, for your personal & commercial use on
            unlimited domains. If you'd like to support my work, donations are
            highly appreciated! You can remove the credit links after donation.
            Thank you!
          </p>
        </div>
        <div className='flex-1  text-left m-14'>
          <a
            href='https://pixabay.com'
            className=' bg-yellow-300 py-2 px-4 rounded transition duration-300'
          >
            Piaxbay
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
