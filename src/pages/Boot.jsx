import { Howl } from "howler";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import gsap from "../clients/gsap";

import "./Boot.css";

export default function Boot() {
    const navigate = useNavigate();
    const clicked = useRef(false);

    useEffect(() => {
        const click = new Howl({ src: "sfx/click.wav" });

        function onClick() {
            if (!clicked.current) {
                clicked.current = true;

                click.play();

                gsap.to("#boot", { opacity: 0 });

                setTimeout(() => navigate("/home", { replace: true }), 1000);
            }
        }

        setTimeout(() => {
            gsap.timeline({ repeat: -1, defaults: { ease: "sine.inOut" } })
                .to("#boot-continue", { opacity: 1 })
                .to("#boot-continue", { opacity: 0 });
        }, 2000);

        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);
    
    return (
        <div id="boot-bg">
            <div id="boot" className="flex-column">
                <h1 id="boot-warning">
                    <img src="/icons/warning.svg"/>
                    WARNING-HEALTH AND SAFETY
                </h1>

                <div className="boot-section flex-column">
                    <h2>BEFORE PLAYING, READ YOUR OPERATIONS</h2>
                    <h2>MANUAL FOR IMPORTANT INFORMATION</h2>
                    <h2>ABOUT YOUR HEALTH AND SAFETY.</h2>
                </div>

                <div className="boot-section flex-column">
                    <h3>Also online at</h3>
                    <h2 id="boot-health-safety">www.nintendo.com/healthsafety/</h2>
                </div>

                <h1 id="boot-continue">Click to continue.</h1>
            </div>
        </div>
    )
}