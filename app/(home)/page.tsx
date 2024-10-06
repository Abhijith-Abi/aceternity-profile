import React from "react";
import NavBar from "./_components/Navbar";
import Spotlight from "./_components/Spotlight";

export default function page() {
    return (
        <div className="min-h-screen bg-black p-5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <NavBar />
                <Spotlight />
            </div>
        </div>
    );
}
