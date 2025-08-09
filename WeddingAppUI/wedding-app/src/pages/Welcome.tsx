import React from 'react';
import '../assets/css/Welcome.css';
import home1 from '../assets/images/cover/home_1.jpg';
import home2 from '../assets/images/cover/home_2.jpg';
import home3 from '../assets/images/cover/home_3.jpg';
import letter from '../assets/images/cover/letter.png';
import cursor from '../assets/images/cover/cursor.png';

interface WelcomeProps {
  onClick: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onClick }) => {
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
        <div className="absolute mt-letter left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 z-10">
            <img
                src={letter}
                alt="Letter"
                className="zoom-in-animate"
            />
        </div>
        <div className="absolute w-full mt-name zoom-in-animate">
            <p className="font-lora text-4xl  text-center">
                PHƯƠNG DUY
            </p>
            <p className="font-highSpirited text-4xl text-center">
                and
            </p>
            <p className="font-lora text-4xl  text-center">
                NGỌC DIỆP
            </p>
        </div>
        <div className="absolute w-full mt-date z-20 zoom-in-animate">
            <p className="font-math text-2xl  text-center">
                29.11.2025
            </p>
        </div>
        <div className="absolute mt-cursor left-1/2 -translate-x-1/8 -translate-y-1/2 w-1/6 z-20 cursor-click">
            <img
                src={cursor}
                alt="cursor"
                className="pointer-animate"
                onClick={onClick}
            />
        </div>
    </div>
  );
};

export default Welcome;