
import { Link } from "@/components/Button";
import { Project } from "@/sections/Projects";

export enum URL {
    Github = "https://github.com/Struck713",
    LinkedIn = "https://www.linkedin.com/in/noah-struck/"
};

export const projects: Project[] = [
    {
        name: "music-bot",
        description: "A lot of the original Discord music bots slowly have been taken offline. I wanted to make my own so that I could have a music bot without worrying about it getting taken offline. This project does exactly that.",
        html_url: "https://github.com/Struck713/music-bot",
        language: "typescript",
    },
    {
        name: "portfolio",
        description: "This website.",
        html_url: "https://github.com/Struck713/portfolio",
        language: "typescript",
    },
    {
        name: "image-to-ppm",
        description: (
            <p>
                A simple Rust command line application that can take a PNG or JPG image and convert it to it's raw format, PPM.
                You can find it on <Link href="https://crates.io/crates/image-to-ppm">crates.io</Link>.
            </p>),
        html_url: "https://github.com/Struck713/image-to-ppm",
        language: "rust",

    },
    {
        name: "eagle",
        description: (
            <p>
                This tool is used to scrape Kent State course data.
                This package is specifically used in Cobalt, found at <Link href="https://kent.cobalt.lol">https://kent.cobalt.lol</Link>.
                It is a fork (and port) of <Link href="https://github.com/ilefa/husky">ilefa/husky</Link>.
            </p>),
        html_url: "https://github.com/Struck713/eagle",
        language: "typescript",
    },
    {
        name: "mobutil",
        description: "This is a library for server-side Minecraft mods. It uses Java reflection to inject code into the NMS API to create custom in game entities.",
        html_url: "https://github.com/Struck713/mobutil",
        language: "java",
    },
    {
        name: "where-to-eat",
        description: "A little web app that finds places to eat near you",
        homepage: "https://wsie.nstruck.dev",
        html_url: "https://github.com/Struck713/where-to-eat",
        language: "typescript",
    },
    {
        name: "aoc2023",
        description: (
            <p>
                I had wanted to use <Link href="https://www.rust-lang.org/">Rust</Link> for awhile, so I thought this would be a good place to start.
                I implemented around half of the <Link href="https://adventofcode.com/2023">2023 Advent of Code</Link> problems.
            </p>),
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
        description: "Database project for CS 33007",
        homepage: "https://gammagambling.com",
        html_url: "https://github.com/Struck713/gamma-gambling",
        language: "typescript",
    },
    {
        name: "syslog-agent",
        description: "An open-source agent that sends syslog messages from the Windows Event Log.",
        html_url: "https://github.com/Struck713/syslog-agent",
        language: "java",
    },
    {
        name: "PerWorldServer",
        description:
            (<p>
                Source code of the PerWorldServer plugin on <Link href="https://www.spigotmc.org/resources/perworldserver-per-world-tab-list-and-chat-1-8-8-1-18-1.23989/">Spigot</Link>.
            </p>),
        html_url: "https://github.com/Struck713/PerWorldServer",
        language: "java",
    },
];