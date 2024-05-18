
import { Link } from "@/components/Button";
import { Experience } from "@/components/sections/Experience";
import { Project } from "@/components/sections/Projects";
import Image from "next/image";

export const DATE_FORMAT = "MM/YYYY";
export enum URL {
    Github = "https://github.com/Struck713",
    LinkedIn = "https://www.linkedin.com/in/noah-struck/"
};

export const experience: Experience[] = [
    {
        name: "RoviSys",
        title: "Software Co-op",
        logo: <Image width={436.7} height={73.7} className="w-32" alt={"RoviSys"} src={`/experience/rovisys.svg`} />,
        description: <span>I will eventually write about skills I gained at RoviSys, but currently I haven't really worked there long enough to have anything to write about.</span>,
        skills: [],
        url: "https://www.rovisys.com",
        start: "2024-05-13"
    },
    {
        name: "Kent State University",
        title: "Tutor",
        logo: <Image width={573.49335} height={167.41333} className="w-32" alt={"RoviSys"} src={`/experience/ksu.svg`} />,
        description: (
            <>
                <p>Tutored students on Kent State CS curriculum.</p>
            </>
        ),
        skills: [],
        url: "https://www.kent.edu/cs",
        start: "2023-09-26"
    }
]

export const projects: Project[] = [
    {
        name: "portfolio",
        description: (
            <span>
                This website, which is built using React (Next.js to be more specific) and Tailwind. 
                All of the styling and design was done by yours truly.
            </span>
        ),
        html_url: "https://github.com/Struck713/portfolio",
        language: "typescript",
    },
    {
        name: "music-bot",
        description: (
            <span>
                A lot of the original Discord music bots slowly have been taken offline. I wanted to make 
                my own so that I could have a music bot without worrying about it getting taken offline. 
                This project does exactly that.
            </span>
        ),
        html_url: "https://github.com/Struck713/music-bot",
        language: "typescript",
    },
    {
        name: "image-to-ppm",
        description: (
            <span>
                A simple Rust command line application that can take a PNG or JPG image and convert it to
                it's raw format, PPM. You can find it on <Link href="https://crates.io/crates/image-to-ppm">crates.io</Link>.
            </span>
        ),
        html_url: "https://github.com/Struck713/image-to-ppm",
        language: "rust",

    },
    {
        name: "eagle",
        description: (
            <span>
                This tool is used to scrape Kent State course data.
                This package is specifically used in Cobalt, found at <Link href="https://kent.cobalt.lol">https://kent.cobalt.lol</Link>.
                It is a fork (and port) of <Link href="https://github.com/ilefa/husky">ilefa/husky</Link>.
            </span>
        ),
        html_url: "https://github.com/Struck713/eagle",
        language: "typescript",
    },
    {
        name: "mobutil",
        description: (
            <span>
                This is a library for server-side Minecraft mods. It uses Java reflection to inject code into the{" "}
                <Link href="https://wiki.vg/Main_Page">NMS API</Link> to create custom in game entities.
            </span>
        ),
        html_url: "https://github.com/Struck713/mobutil",
        language: "java",
    },
    {
        name: "where-to-eat",
        description: (
            <span>
                There used to be a website that let you find places to eat near you that was really good, then
                they turned it into an app. I wanted it to still be a website, so I recreated it myself. Go ahead,
                 try it out for yourself!
            </span>
        ),
        homepage: "https://wsie.nstruck.dev",
        html_url: "https://github.com/Struck713/where-to-eat",
        language: "typescript",
    },
    {
        name: "aoc2023",
        description: (
            <span>
                I had wanted to use <Link href="https://www.rust-lang.org/">Rust</Link> for awhile, so I thought this would be a good place to start.
                I implemented around half of the <Link href="https://adventofcode.com/2023">2023 Advent of Code</Link> problems.
            </span>
        ),
        html_url: "https://github.com/Struck713/aoc2023",
        language: "rust",
    },
    {
        name: "nonapus-adventures",
        description: "A game designed using JavaScript and p5.js for Dr. Delozier's Software Engineering class at Kent State.",
        html_url: "https://github.com/Struck713/nonapus-adventures",
        language: "javascript",
    },
    {
        name: "gamma-gambling",
        description: (
            <span>
                For my Intro to Database Design class, I wanted to go above and beyond and make something really cool. 
                My group ended up created a full fledge gambling website with interactive games through websockets.
            </span>
        ),
        homepage: "https://gammagambling.com",
        html_url: "https://github.com/Struck713/gamma-gambling",
        language: "typescript",
    },
    {
        name: "syslog-agent",
        description: (
            <span>
                There isn't really a good open source and easy-to-use solution to sending Windows Event Logs to a syslog server. 
                I designed this piece of software to accomplish that task.
            </span>
        ),
        html_url: "https://github.com/Struck713/syslog-agent",
        language: "java",
    },
    {
        name: "PerWorldServer",
        description:(
            <span>
                Source code of the PerWorldServer plugin on <Link href="https://www.spigotmc.org/resources/perworldserver-per-world-tab-list-and-chat-1-8-8-1-18-1.23989/">Spigot</Link>.
            </span>
        ),
        html_url: "https://github.com/Struck713/PerWorldServer",
        language: "java",
    },
];