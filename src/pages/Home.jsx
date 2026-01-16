import { Howl } from "howler";
import { useState, useEffect } from "react";

import "./Home.css";

export default function Home() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // date and time
    useEffect(() => {
        function updateDate() {
            const date = new Date();

            const weekday = date.toLocaleDateString([], { weekday: "short" });
            const month = date.getMonth() + 1;
            const day = date.getDate();

            setDate(`${weekday} ${month}/${day}`);
            setTime(date.toLocaleTimeString([], { hour: "numeric", minute: "numeric", hour12: true }));
        }

        const interval = setInterval(updateDate, 1000);

        return () => clearInterval(interval);
    }, []);

    // boot anim
    useEffect(() => {
        const boot = new Howl({ src: "/sfx/boot.wav", preload: true });

        setTimeout(() => {
            boot.play();
        }, 1000);
    }, []);

    return (
        <div id="home-bg">
            <h1>Home</h1>
            <h1>{date}</h1>
            <h2>{time}</h2>
        </div>
    )
}