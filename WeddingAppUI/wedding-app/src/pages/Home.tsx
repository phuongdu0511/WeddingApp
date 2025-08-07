import React from 'react';
import '../assets/css/home.css';
import home1 from '../assets/images/home_1.jpg';
import home2 from '../assets/images/home_2.jpg';
import home3 from '../assets/images/home_3.jpg';
import letter from '../assets/images/letter.png';

const Home: React.FC = () => {
  return (
    <div>
        <img
            src={home1}
            alt="Ảnh 1"
            className="w-full"
        />
        <img
            src={home2}
            alt="Ảnh 2"
            className="w-full"
        />
        <img
            src={home3}
            alt="Ảnh 3"
            className="w-full -mt-56 relative z-0"
        />
        <img
            src={letter}
            alt="Letter"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
        />
    </div>
  );
};

export default Home;