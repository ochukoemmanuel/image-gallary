import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

const SingleCard = ({ getImage }) => {
  const params = useParams();

  useEffect(() => {
    getImage(params.id);
  }, []);

  return (
    <div>
      <div>
        <img src={`poo`} alt='image' />
      </div>
    </div>
  );
};

export default SingleCard;
