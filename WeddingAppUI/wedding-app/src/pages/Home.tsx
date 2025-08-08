import React from 'react';
import '../assets/css/home.css';
import home1 from '../assets/images/home_1.jpg';
import home2 from '../assets/images/home_2.jpg';
import home3 from '../assets/images/home_3.jpg';
import letter from '../assets/images/letter.png';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen items-center main-wr">
        <img
            src={home1}
            alt="Ảnh 1"
            className="absolute w-full"
        />
        <img
            src={home2}
            alt="Ảnh 2"
            className="absolute w-full mt-img-2"
        />
        <img
            src={home3}
            alt="Ảnh 3"
            className="absolute w-full mt-img-3"
        />
        <img
            src={letter}
            alt="Letter"
            className="absolute mt-letter left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 z-10"
        />
        <div className="absolute w-full mt-name">
            <h3 className="font-lora text-4xl  text-center">
                PHƯƠNG DUY
            </h3>
            <h3 className="font-highSpirited text-4xl text-center">
                and
            </h3>
            <h3 className="font-lora text-4xl  text-center">
                NGỌC DIỆP
            </h3>
        </div>
        <div className="absolute w-full mt-date z-20">
            <h3 className="font-math text-2xl  text-center">
                29.11.2025
            </h3>
        </div>
    </div>
  );
};

export default Home;