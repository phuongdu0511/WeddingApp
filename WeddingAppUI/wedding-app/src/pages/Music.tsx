import { useState, useRef, useEffect } from "react";
import Music from "../assets/images/cover/music.gif";
import "../assets/css/Music.css";

const songs: string[] = Object.values(
  import.meta.glob("../assets/music/*.mp3", { eager: true, import: "default" })
) as string[];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setCurrentIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Xử lý click bật/tắt nhạc
  useEffect(() => {
    const handleClick = () => {
      if (!isPlaying) {
        // Khi bật lại thì chuyển sang bài tiếp theo
        setCurrentIndex((prev) => {
          const next = (prev + 1) % songs.length;
          if (audioRef.current) {
            audioRef.current.src = songs[next];
            audioRef.current.play();
          }
          return next;
        });
        setIsPlaying(true);
      } else {
        // Khi đang phát thì tắt nhạc
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setIsPlaying(false);
      }
    };

    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, [isPlaying]);

  // Khi bài hát kết thúc -> tự động sang bài tiếp theo
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % songs.length;
        if (audioRef.current) {
          audioRef.current.src = songs[next];
          audioRef.current.play();
        }
        return next;
      });
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

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
      </div>
    </>
  );
}
