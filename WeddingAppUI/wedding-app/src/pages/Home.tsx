import React, { useEffect, useState, useRef } from "react";
import Welcome from "../pages/Welcome";
import HomeContent from "../pages/HomeContent";
import type { Guest } from "../types/Guest";
import axios from "axios";
import { API_BASE_URL } from "../config/api";
import "../assets/css/Home.css";
import "../assets/css/transition.css"; // file CSS animation
import Lottie from "lottie-react";
import loadingAnimation from "../assets/gif/LoadingDot.json";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false); // fetch API loading
  const [showWelcome, setShowWelcome] = useState(true);
  const [guest, setGuest] = useState<Guest | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false); // preload video

  const query = window.location.pathname.replace(/^\/+/, "");
  const api = axios.create({ baseURL: API_BASE_URL });

  // Ref cho CSSTransition
  const nodeRef = useRef<HTMLDivElement>(null);

  // Preload video
  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/videos/v1.mp4"; // đường dẫn video của bạn
    video.oncanplaythrough = () => setVideoLoaded(true);
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
  if (!videoLoaded || loading) {
    return (
      <div className="absolute z-40 w-full h-full flex justify-center items-center">
        <div style={{ width: 400 }}>
          <Lottie animationData={loadingAnimation} loop={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="wedding-app relative">
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={showWelcome ? "welcome" : "home"}
          timeout={500}
          classNames="fade"
          nodeRef={nodeRef}
        >
          <div ref={nodeRef}>
            {showWelcome ? (
              <Welcome onClick={() => setShowWelcome(false)} />
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
