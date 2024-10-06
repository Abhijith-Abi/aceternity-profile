import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";

export default function Spotlight() {
    return (
        <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row justify-between items-center">
            <div className="space-y-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-7xl font-bold">
                    Nice to meet you! 👋🏻
                    <br />
                    <span className="underline underline-offset-8 decoration-cyan-500">
                        {"I'm Abhijith"}
                    </span>
                </h1>
                <p className="md:w-96 text-lg text-gray-300">
                    {
                        "I'm a Fullstack developer based in India, passionate about building modern web applications that users love."
                    }
                </p>
                <Link
                    href={"mailto:abhijithabhijith1999@gmail.com"}
                    className="inline-block group"
                >
                    <div>
                        <h1 className="text-3xl font-bold group-hover:text-cyan-400 transition-all">
                            Conatct Me 📫
                        </h1>
                        <div className="w-40 h-2 bg-cyan-500 rounded-full "></div>
                        <div className="w-40 h-2 bg-yellow-500 rounded-full translate-x-2"></div>
                    </div>
                </Link>
            </div>
            <div className="relative">
                <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
                    <div className="flex gap-3 translate-x-8">
                        <div className="w-32 h-32 rounded-2xl  bg-cyan-500"></div>
                        <div className="w-32 h-32 rounded-full bg-yellow-500"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-yellow-500"></div>
                        <div className="w-32 h-32 rounded-full  bg-cyan-500"></div>
                    </div>
                    <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
                </div>
                <div className="absolute bottom-5 sm:bottom-14 left-0 sm:left-10">
                    <MovingBorderBtn
                        borderRadius="0.5rem"
                        className="p-3 font-semibold"
                    >
                        <p>🟢 Avilable for work</p>
                    </MovingBorderBtn>
                </div>
            </div>
        </div>
    );
}
