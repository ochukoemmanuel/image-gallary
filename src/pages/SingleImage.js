import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import SingleCard from '../components/SingleCard';

const SingleImage = ({ getImage }) => {
  return (
    <div>
      <SingleCard getImage={getImage} />
    </div>
  );
};

export default SingleImage;
