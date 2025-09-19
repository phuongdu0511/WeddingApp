import React, { useEffect, useState } from "react";
import Welcome from "../pages/Welcome";
import HomeContent from "../pages/HomeContent";
import type { Guest } from "../types/Guest";
import axios from "axios";
import { API_BASE_URL } from "../config/api";

const Home: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const query = window.location.pathname.replace(/^\/+/, "");
  const [guest, setGuest] = useState<Guest | null>(null);

  const api = axios.create({
    baseURL: API_BASE_URL,
  });

  useEffect(() => {
    if (!query) return; // nếu không có tên sau domain

    api.get(`/api/Guest/path?path=${query}`).then((res) => {
      if (res?.data?.guestName != null || res?.data?.guestPath != null) {
        setGuest(res?.data);
      } else {
        setGuest(null);
      }
    }).catch(() => setGuest(null));;
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
