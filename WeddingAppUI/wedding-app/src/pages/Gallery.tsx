import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BONN0724 from "../assets/images/wedding/BONN0724.jpg";
import BONN1025 from "../assets/images/wedding/BONN1025.jpg";
import BONN9280 from "../assets/images/wedding/BONN9280.jpg";
import BONN9018 from "../assets/images/wedding/BONN9018.jpg";
import BONN9771 from "../assets/images/wedding/BONN9771.jpg";
import BONN9786 from "../assets/images/wedding/BONN9786.jpg";
import BONN1019 from "../assets/images/wedding/BONN1019.jpg";
import BONN0893 from "../assets/images/wedding/BONN0893.jpg";
import BONN1038 from "../assets/images/wedding/BONN1038.jpg";
import BONN0610 from "../assets/images/wedding/BONN0610.jpg";

const images = [
  BONN0724,
  BONN9280,
  BONN1025,
  BONN9771,
  BONN9018,
  BONN9786,
  BONN1019,
  BONN0893,
  BONN1038,
  BONN0610,
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);

  // Auto chạy ảnh chính
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    setAutoPlay(false);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlay(false);
  };

  const selectImage = (index: number) => {
    setCurrent(index);
    setAutoPlay(false);
  };

  // Lấy ra 5 ảnh quanh current
  const getVisibleThumbs = () => {
    const thumbs: string[] = [];
    for (let i = -2; i <= 2; i++) {
      const idx = (current + i + images.length) % images.length;
      thumbs.push(images[idx]);
    }
    return thumbs;
  };

  // Vuốt trên mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const delta = touchStart - touchEnd;
    if (delta > 50) {
      nextImage();
    } else if (delta < -50) {
      prevImage();
    }
  };

  return (
    <div className="flex flex-col gap-4" onClick={() => setAutoPlay(false)}>
      {/* Ảnh chính */}
      <div
        className="relative h-[666px] overflow-hidden shadow-lg"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[current]}
          alt="main"
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* Nút prev */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
          className="absolute left-[2%] top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 shadow"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Nút next */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          className="absolute right-[2%] top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 shadow"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Thumbnail: chỉ hiển thị 5 ảnh, current ở giữa */}
      <div className="flex gap-2">
        {getVisibleThumbs().map((img, i) => {
          const idx = (current + (i - 2) + images.length) % images.length;
          return (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              onClick={(e) => {
                e.stopPropagation();
                selectImage(idx);
              }}
              className={`w-20 h-14 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                idx === current
                  ? "scale-110"
                  : "opacity-70 hover:opacity-100"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
