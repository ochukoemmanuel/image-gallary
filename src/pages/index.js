import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

const index = ({ images, isLoading, setTerm }) => {
  return (
    <div>
      <Hero setTerm={setTerm} />
      <Content images={images} isLoading={isLoading} />
    </div>
  );
};

export default index;
