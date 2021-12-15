import React from 'react';
import ImageCard from './imageCard';
import Spinner from '../images/spinner.gif';

const Content = ({ images, isLoading }) => {
  if (!isLoading && images.length === 0) {
    return (
      <h1 className='text-center text-2xl mx-auto container py-80 my-34'>
        No images found
      </h1>
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
            <ImageCard key={image.id} image={image} />
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
