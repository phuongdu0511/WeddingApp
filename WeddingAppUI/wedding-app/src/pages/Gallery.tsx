import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BONN0052 from "../assets/images/wedding/BONN0052.jpg";
import BONN0451 from "../assets/images/wedding/BONN0451.jpg";
import BONN0255 from "../assets/images/wedding/BONN0255.jpg";
import BONN0283 from "../assets/images/wedding/BONN0283.jpg";
import BONN1012 from "../assets/images/wedding/BONN1012.jpg";
import BONN1068 from "../assets/images/wedding/BONN1068.jpg";
import BONN9555 from "../assets/images/wedding/BONN9555.jpg";

const images = [
  BONN0052,
  BONN0255,
  BONN0283,
  BONN0451,
  BONN1012,
  BONN1068,
  BONN9555,
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
    <div
      className="flex flex-col gap-4"
      onClick={() => setAutoPlay(false)}
    >
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
                  ? "ring-4 ring-indigo-500 scale-110"
                  : "opacity-70 hover:opacity-100"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
