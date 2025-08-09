import { useState, useEffect } from "react";

function formatNumber(num: number) {
  return num < 10 ? `0${num}` : `${num}`;
}

function calculateTimeLeft(targetDate: Date) {
  const difference = targetDate.getTime() - new Date().getTime();

  if (difference <= 0)
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };

  return {
    days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
    hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
    minutes: formatNumber(Math.floor((difference / (1000 * 60)) % 60)),
    seconds: formatNumber(Math.floor((difference / 1000) % 60)),
  };
}

export function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}