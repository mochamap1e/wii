import { useEffect } from "react";

import gsap from "../clients/gsap";

import "./Boot.css";

export default function Boot() {
    useEffect(() => {
        gsap.timeline({ repeat: -1, defaults: { ease: "sine.inOut" } })
            .to("#continue", { opacity: 0 })
            .to("#continue", { opacity: 1 });
    }, []);
    
    return (
        <div id="boot">
            <h1>&#x26A0; WARNING-HEALTH AND SAFETY</h1>

            <h2>BEFORE PLAYING, READ YOUR OPERATIONS</h2>
            <h2>MANUAL FOR IMPORTANT INFORMATION</h2>
            <h2>ABOUT YOUR HEALTH AND SAFETY.</h2>

            <h3>Also online at</h3>
            <h2>www.nintendo.com/healthsafety/</h2>

            <h1 id="continue">Click to continue.</h1>
        </div>
    )
}