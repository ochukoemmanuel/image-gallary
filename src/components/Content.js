import React from 'react';
import ImageCard from './imageCard';
import Spinner from '../images/spinner.gif';

const Content = ({ images, isLoading, setTerm }) => {
  if (!isLoading && images.length === 0) {
    return (
      <div className='text-center mx-auto container py-80 my-34'>
        <h1 className=' text-xl font-bold text-gray-700'>No matches found</h1>
        <p className='text-sm'>Try checking your spellings and try again</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className='container mx-auto py-80 my-34'>
        <img className='w-40 mx-auto' src={Spinner} alt={Spinner} />
      </div>
    );
  }
  return (
    <>
      <div className='container px-6 mx-auto py-32 flex justify-center'>
        <div className=' text-center grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} setTerm={setTerm} />
          ))}
        </div>
      </div>
      <p className='text-center pb-6'>
        All images are provided by
        <span>
          <a className='text-green-600 pl-1' href='https://pixabay.com'>
            Pixabay
          </a>
        </span>
      </p>
    </>
  );
};

export default Content;
