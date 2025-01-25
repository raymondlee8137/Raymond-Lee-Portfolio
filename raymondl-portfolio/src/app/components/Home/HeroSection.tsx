"use client"

import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
    return (
        <section className = "flex flex-col items-start justify-start h-screen pl-12 pt-40">
            <h1 className="text-7xl fond-bold text-left">
                Hi, I'm <br /><span className="text-blue-500">Raymond.</span>
            </h1>
            <h3 className="text-sm text-gray-300 pt-4">Electrical and Computer Engineering, 2025 at Rutgers University</h3>
            <h2 className="text-3xl font-light mt-4">
                I am {""}
                <span className="text-blue-500 font-semibold">
                    <Typewriter
                    words={["an innovator.","a problem solver.", "an Engineer."]}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                    />
                </span>
            </h2>
        </section>
    );
}