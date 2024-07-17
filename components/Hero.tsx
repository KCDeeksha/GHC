import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className='container relative pt-16'>
      <Image
        className="w-full h-auto"
        src="/Group19808.svg"
        width={1500}
        height={900}
        alt="Hero BG"
      />
      <div className="flex justify-between mt-4">
        <Image
          className="w-1/2 h-auto"
          src="/Group19807.svg"
          width={750} // Adjusted size
          height={450} // Adjusted size
          alt="Hero BG"
        />
        <Image
          className="w-1/2 h-auto"
          src="/Group19809.svg"
          width={750} // Adjusted size
          height={450} // Adjusted size
          alt="Hero BG"
        />
      </div>
      <Image
        className="w-full h-auto"
        src="/Frame20352.svg"
        width={1500}
        height={900}
        alt="Hero BG"
      />
    </div>
  );
};

export default Hero;
