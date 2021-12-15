import React from 'react';
import { Link } from 'react-router-dom';

const imageCard = ({ image, setTerm }) => {
  const tags = image.tags.split(',');

  // const joined = tags
  //   .map((el, i) => {
  //     return `${el}-`;
  //   })
  //   .join('')
  //   .replace(' ', '')
  //   .trim();
  // console.log(joined);
  //

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <Link to={`/photo/${image.id}`}>
        <img src={image.webformatURL} className='w-full' alt='img' />
      </Link>
      <div className='py-6 px-6'>
        <div className='font-bold text-purple-500 text-xl mb-2 text-center '>
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        {tags.map((tag, index) => (
          <button
            onClick={() => setTerm(tag)}
            key={index}
            className='cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1'
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default imageCard;
