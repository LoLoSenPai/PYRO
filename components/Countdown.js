import React, { useState, useEffect } from 'react';
import { Silkscreen } from 'next/font/google';

const silkscreen = Silkscreen({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-silkscreen',
});

export default function Home() {
    const calculateTimeLeft = () => {
        // Set the date we're counting down to
        const targetTimeUTC = "16:00";
    
        // Create a date object for the current time
        const targetDateUTC = new Date(`12/27/2023 ${targetTimeUTC} UTC`);
    
        const difference = targetDateUTC.getTime() - new Date().getTime();
        let timeLeft = {};
    
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
    
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className={silkscreen.className}>
            <div className="grid grid-cols-2 gap-5 text-center sm:grid-cols-4">
                <div className="flex flex-col p-2 text-xl text-orange-500 bg-white bg-opacity-20 backdrop-blur-sm rounded-box">
                    <div className="font-mono text-5xl countdown">
                        <span className={silkscreen.className} style={{ "--value": timeLeft.days ?? 0 }}></span>
                    </div>
                    days
                </div>
                <div className="flex flex-col p-2 text-xl text-orange-500 bg-white bg-opacity-20 backdrop-blur-sm rounded-box">
                    <div className="font-mono text-5xl countdown">
                        <span className={silkscreen.className} style={{ "--value": timeLeft.hours ?? 0 }}></span>
                    </div>
                    hours
                </div>
                <div className="flex flex-col p-2 text-xl text-orange-500 bg-white bg-opacity-20 backdrop-blur-sm rounded-box">
                    <div className="font-mono text-5xl countdown">
                        <span className={silkscreen.className} style={{ "--value": timeLeft.minutes ?? 0 }}></span>
                    </div>
                    min
                </div>
                <div className="flex flex-col p-2 text-xl text-orange-500 bg-white bg-opacity-20 backdrop-blur-sm rounded-box">
                    <div className="font-mono text-5xl countdown ">
                        <span className={silkscreen.className} style={{ "--value": timeLeft.seconds ?? 0 }}></span>
                    </div>
                    sec
                </div>
            </div>
        </div>
    );
}
