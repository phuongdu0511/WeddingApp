import React from "react";
import { useCountdown } from "../hooks/useCountdown";

const WeddingCountdown: React.FC = () => {
    const targetDate = new Date("2025-11-29T00:00:00");
    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    return (
        <div className="flex justify-center items-center gap-2 text-center font-lora mt-4">
            <div>
                <span className="block text-7xl font-bold font-highSpirited">{days}</span>
            </div>
            <span className="block text-7xl font-bold font-highSpirited">:</span>
            <div>
                <span className="block text-7xl font-bold font-highSpirited">{hours}</span>
            </div>
            <span className="block text-7xl font-bold font-highSpirited">:</span>
            <div>
                <span className="block text-7xl font-bold font-highSpirited">{minutes}</span>
            </div>
            <span className="block text-7xl font-bold font-highSpirited">:</span>
            <div>
                <span className="block text-7xl font-bold font-highSpirited">{seconds}</span>
            </div>
        </div>
    );
};

export default WeddingCountdown;