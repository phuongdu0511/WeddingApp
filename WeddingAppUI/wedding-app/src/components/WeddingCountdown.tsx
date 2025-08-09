import React from "react";
import { useCountdown } from "../hooks/useCountdown";

const WeddingCountdown: React.FC = () => {
    const targetDate = new Date("2025-11-29T00:00:00");
    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    return (
        <div className="flex justify-center items-center gap-2 text-center font-lora mt-4">
            <div>
                <span className="block text-4xl">{days}</span>
            </div>
            <span className="block text-2xl">:</span>
            <div>
                <span className="block text-4xl">{hours}</span>
            </div>
            <span className="block text-2xl">:</span>
            <div>
                <span className="block text-4xl">{minutes}</span>
            </div>
            <span className="block text-2xl">:</span>
            <div>
                <span className="block text-4xl">{seconds}</span>
            </div>
        </div>
    );
};

export default WeddingCountdown;