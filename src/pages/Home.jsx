import { Howl } from "howler";
import { useState, useEffect } from "react";

import "./Home.css";

export default function Home() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // boot
    useEffect(() => {
        const music = new Howl({ src: "/sound/music.ogg", preload: true, loop: true });
        const boot = new Howl({ src: "/sound/boot.wav", preload: true });

        let musicTimeout;
        const bootTimeout = setTimeout(() => {
            boot.play();
            musicTimeout = setTimeout(() => {
                // music.play();
                music.fade(0, 1, 2000);
            }, 1500);
        }, 1000);

        return () => {
            music.stop();
            boot.stop();
            clearTimeout(musicTimeout);
            clearTimeout(bootTimeout);
        }
    }, []);

    // date and time
    useEffect(() => {
        let colonVisible = false;

        function updateDate() {
            const date = new Date();

            const weekday = date.toLocaleDateString([], { weekday: "short" });
            const month = date.getMonth() + 1;
            const day = date.getDate();

            const dateString = `${weekday} ${month}/${day}`;
            let timeString = date.toLocaleTimeString([], { hour: "numeric", minute: "numeric", hour12: true });

            colonVisible = !colonVisible;

            if (!colonVisible) timeString = timeString.replace(":", " ");

            setDate(dateString);
            setTime(timeString);
        }

        const interval = setInterval(updateDate, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="home">
            <h1>Home</h1>
            <h1>{date}</h1>
            <h2>{time}</h2>
        </div>
    )
}