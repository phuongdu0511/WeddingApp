import { useState, useRef, useEffect } from "react";
import Music from "../assets/images/cover/music.gif";
import "../assets/css/Music.css";

const songs: string[] = Object.values(
  import.meta.glob("../assets/music/*.mp3", { eager: true, import: "default" })
) as string[];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // xử lý toggle khi click bất kỳ đâu
  useEffect(() => {
    const handleClick = () => {
      if (!isPlaying) {
        // Bật nhạc random
        const randomIndex = Math.floor(Math.random() * songs.length);
        if (audioRef.current) {
          audioRef.current.src = songs[randomIndex];
          audioRef.current.play();
        }
        setIsPlaying(true);
      } else {
        // Tắt nhạc
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setIsPlaying(false);
      }
    };

    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, [isPlaying]);

  return (
    <>
      {/* Player ẩn */}
      <audio ref={audioRef} />

      {/* Icon nhạc góc phải dưới */}
      <div className="fixed bottom-4 right-4 flex items-center gap-3 z-[9999] pointer-events-none mg-right">
        <div className="pointer-events-auto">
          <img
            src={Music}
            alt="music icon"
            className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
              isPlaying ? "opacity-100 animate-spin-slow" : "opacity-50"
            }`}
          />
        </div>

        {/* <button
          onClick={(e) => {
            e.stopPropagation(); // tránh trigger body click
            setShowList(!showList);
          }}
          className="bg-icon-menu text-white p-3 rounded-full shadow-lg pointer-events-auto"
        >
          <Menu size={17} />
        </button> */}
      </div>
    </>
  );
}
