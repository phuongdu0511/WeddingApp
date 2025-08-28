import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import Music from "../assets/images/cover/music.gif";
import "../assets/css/Music.css";

const songs: string[] = Object.values(
  import.meta.glob("../assets/music/*.mp3", { eager: true, import: "default" })
) as string[];

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showList, setShowList] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // xử lý toggle khi click bất kỳ đâu
  useEffect(() => {
    const handleClick = () => {
      if (!isPlaying) {
        // Bật nhạc random
        const randomIndex = Math.floor(Math.random() * songs.length);
        setCurrentSong(randomIndex);
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

  const playSong = (index: number) => {
    setCurrentSong(index);
    if (audioRef.current) {
      audioRef.current.src = songs[index];
      audioRef.current.play();
    }
    setIsPlaying(true);
  };

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

        <button
          onClick={(e) => {
            e.stopPropagation(); // tránh trigger body click
            setShowList(!showList);
          }}
          className="bg-icon-menu text-white p-3 rounded-full shadow-lg pointer-events-auto"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* List nhạc */}
      {showList && (
        <div className="fixed bottom-20 right-4 w-60 bg-white border rounded-lg shadow-lg p-3 space-y-2 z-[9999]">
          {songs.map((song, i) => {
            const rawTitle = song.split("/").pop()?.replace(".mp3", "");
            const title = rawTitle
              ? decodeURIComponent(rawTitle)
              : `Bài ${i + 1}`;
            return (
              <div
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  playSong(i);
                }}
                className={`p-2 rounded cursor-pointer hover:bg-indigo-100 ${
                  currentSong === i ? "bg-indigo-200 font-semibold" : ""
                }`}
              >
                {title}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
