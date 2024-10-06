import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";

export default function NavBar() {
    //------------ social links ----------//
    const socials = [
        {
            link: "",
            label: "Linkedin",
            icon: SiLinkedin,
        },
        {
            link: "",
            label: "Github",
            icon: SiGithub,
        },
        {
            link: "",
            label: "WhatsApp",
            icon: SiWhatsapp,
        },
    ];
    return (
        <nav className="py-10 flex justify-between items-center">
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-cyan-500 -rotate-2">
                Abhijith 🧑🏻‍💻
            </h1>
            <div className="flex items-center gap-5">
                {socials?.map((social, index) => {
                    const Icon = social?.icon;
                    return (
                        <Link
                            href={social?.link}
                            key={index}
                            aria-label={social?.label}
                        >
                            <Icon className="w-5 h-5 hover:scale-125 transition-all" />
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
