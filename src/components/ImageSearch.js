import React from 'react';
import { useState } from 'react/cjs/react.development';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={onSubmit} className='w-full max-w-sm'>
        <div className='flex items-center bg-white py-3 px-4'>
          <input
            onChange={(e) => setText(e.target.value)}
            type='text'
            placeholder='Search Image Term...'
            className='bg-white boder-none w-full text-grey-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
          />
          <button
            type='submit'
            className='bg-yellow-500 hover:bg-yellow-700 transition duration-300 ease-in-out border-none text-sm border-4 text-white py-2 px-4 rounded'
          >
            Serach
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
