import React, { useState, useEffect } from "react";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-silkscreen",
});

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDateUTC = new Date(`12/27/2023 16:00 UTC`);
      const difference = targetDateUTC - new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={silkscreen.className}>
      <div className="grid grid-cols-2 gap-5 text-center sm:grid-cols-4">
        <div className="flex flex-col p-2 text-xl text-orange-500 bg-white bg-opacity-20 backdrop-blur-sm rounded-box">
          <div className="font-mono text-5xl countdown">
            <span
              className={silkscreen.className}
              style={{ "--value": timeLeft.days ?? 0 }}
            ></span>
          </div>
          days
        </div>
        <div className="flex flex-col p-2 text-xl text-orange-500 bg-white bg-opacity-20 backdrop-blur-sm rounded-box">
          <div className="font-mono text-5xl countdown">
            <span
              className={silkscreen.className}
              style={{ "--value": timeLeft.hours ?? 0 }}
            ></span>
          </div>
          hours
        </div>
        <div className="flex flex-col p-2 text-xl text-orange-500 bg-white bg-opacity-20 backdrop-blur-sm rounded-box">
          <div className="font-mono text-5xl countdown">
            <span
              className={silkscreen.className}
              style={{ "--value": timeLeft.minutes ?? 0 }}
            ></span>
          </div>
          min
        </div>
        <div className="flex flex-col p-2 text-xl text-orange-500 bg-white bg-opacity-20 backdrop-blur-sm rounded-box">
          <div className="font-mono text-5xl countdown ">
            <span
              className={silkscreen.className}
              style={{ "--value": timeLeft.seconds ?? 0 }}
            ></span>
          </div>
          sec
        </div>
      </div>
    </div>
  );
}
