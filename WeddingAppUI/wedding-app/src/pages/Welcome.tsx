import "../assets/css/Welcome.css";
import home1 from "../assets/images/cover/home_1.jpg";
import home2 from "../assets/images/cover/home_2.jpg";
import home3 from "../assets/images/cover/home_3.jpg";
import letter from "../assets/images/cover/letter.webp";
import cursor from "../assets/images/cover/cursor.png";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface WelcomeProps {
  onClick: () => void;
  language: string | undefined;
}

const Welcome: React.FC<WelcomeProps> = ({ onClick, language }) => {
  // Translate
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);

  return (
    <div
      className="relative min-h-screen items-center main-wr overflow-y-hidden"
      onClick={(e) => {
        e.stopPropagation(); // chặn click lan xuống HomeContent
        onClick(); // đóng Welcome, mở HomeContent
      }}
    >
      <img loading="lazy" src={home1} alt="Ảnh 1" className="absolute w-full" />
      <img loading="lazy" src={home2} alt="Ảnh 2" className="absolute w-full mt-img-2" />
      <img loading="lazy" src={home2} alt="Ảnh 2" className="absolute w-full mt-33" />
      <img loading="lazy" src={home3} alt="Ảnh 3" className="absolute w-full mt-img-3" />
      <div className="absolute mt-letter left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 z-10">
        <img src={letter} alt="Letter" className="zoom-in-animate" />
      </div>
      <div className="absolute w-full mt-name zoom-in-animate">
        <p className="font-lora text-4xl  text-center">{t("bride_name")}</p>
        <p className="font-snellRoundhand text-4xl text-center">&</p>
        <p className="font-lora text-4xl  text-center">{t("groom_name")}</p>
      </div>
      <div className="absolute w-full mt-date z-20 zoom-in-animate">
        <p className="font-snellRoundhand font-bold text-3xl  text-center">
          29.11.2025
        </p>
      </div>
      <div className="absolute mt-cursor left-1/2 -translate-x-1/8 -translate-y-1/2 w-1/6 z-20 cursor-pointer">
        <img src={cursor} alt="cursor" className="pointer-animate" />
      </div>
    </div>
  );
};

export default Welcome;
