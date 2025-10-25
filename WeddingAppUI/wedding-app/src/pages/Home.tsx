import React, { useEffect, useState, useRef } from "react";
import Welcome from "../pages/Welcome";
import HomeContent from "../pages/HomeContent";
import type { Guest } from "../types/Guest";
import axios from "axios";
import { API_BASE_URL } from "../config/api";
import "../assets/css/Home.css";
import "../assets/css/transition.css";
import Lottie from "lottie-react";
import loadingHeart from "../assets/gif/LoadingHeart.json";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [guest, setGuest] = useState<Guest | null>(null);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const query = window.location.pathname.replace(/^\/+/, "");
  const api = axios.create({ baseURL: API_BASE_URL });
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadVideo = () =>
      new Promise<void>((resolve, reject) => {
        const video = document.createElement("video");
        video.src = "/videos/v1.mp4";
        video.preload = "auto";
        video.oncanplaythrough = () => resolve();
        video.onerror = () => reject();
        video.load();
      });

    const loadMusic = () => {
      const musicFiles = import.meta.glob("../assets/music/*.mp3", {
        eager: true,
        import: "default",
      });

      const audioPromises = Object.values(musicFiles).map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (src: any) =>
          new Promise<void>((resolve, reject) => {
            const audio = new Audio();
            audio.src = src;
            audio.oncanplaythrough = () => resolve();
            audio.onerror = () => reject();
            audio.load();
          })
      );

      return Promise.allSettled(audioPromises);
    };

    const loadImages = () => {
      const coverImages = import.meta.glob(
        "../assets/images/cover/*.{JPG,jpg,jpeg,png,gif,webp}",
        { eager: true }
      );

      const imagePromises = Object.values(coverImages).map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mod: any) =>
          new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.src = mod.default;
            img.onload = () => resolve();
            img.onerror = () => reject();
          })
      );

      return Promise.allSettled(imagePromises);
    };

    // Tuần tự: video → nhạc → ảnh
    loadVideo()
      .then(() => loadMusic())
      .then(() => loadImages())
      .finally(() => setAssetsLoaded(true));
  }, []);

  // Fetch guest data
  useEffect(() => {
    if (!query) return;
    setLoading(true);
    api
      .get(`/api/Guest/path?path=${query}`)
      .then((res) => setGuest(res?.data))
      .catch(() => setGuest(null))
      .finally(() => setLoading(false));
  }, [query]);

  // Hiển thị loading nếu video hoặc data chưa sẵn sàng
  if (!assetsLoaded || loading) {
    return (
      <div className="absolute z-40 w-full h-full flex justify-center items-center">
        <div style={{ width: 400 }}>
          <Lottie animationData={loadingHeart} loop={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="wedding-app">
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={showWelcome ? "welcome" : "home"}
          timeout={500}
          classNames="fade"
          nodeRef={nodeRef}
        >
          <div className="wedding-app" ref={nodeRef}>
            {showWelcome ? (
              <Welcome
                language={guest?.language}
                onClick={() => setShowWelcome(false)}
              />
            ) : (
              <HomeContent guest={guest} setGuest={setGuest} />
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Home;
