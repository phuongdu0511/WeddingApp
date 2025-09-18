import React, { useEffect, useState } from "react";
import Welcome from "../pages/Welcome";
import HomeContent from "../pages/HomeContent";
import type { Guest } from "../types/Guest";

const Home: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const query = window.location.pathname.replace(/^\/+/, "");
  const [guest, setGuest] = useState<Guest | null>(null);


  useEffect(() => {
    if (!query) return; // nếu không có tên sau domain

    // Gọi API kiểm tra tên khách mời
    fetch(`http://192.168.0.104:5022/api/Guest/path?path=${query}`)
      .then(res => res.json())
      .then((data: Guest) => {
        if(data.guestName != null || data.guestPath != null) {
          setGuest(data);
        } else {
          setGuest(null);
        }
      })
      .catch(() => setGuest(null));
  }, []);
  return (
    <>
      {showWelcome ? (
        <Welcome onClick={() => setShowWelcome(false)} />
      ) : (
        <HomeContent guest={guest} />
      )}
    </>
  );
};

export default Home;
