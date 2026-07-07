
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
        logo: <Image width={436.7} height={73.7} className="w-32" alt={"RoviSys"} src={`/experience/rovisys.svg`} />,
        positions: [
            {
                title: "Software Engineer II",
                description: (
                    <ul className="list-inside list-disc">
                    </ul>
                ),
                skills: [],
                start: "2026-03-01",
            },
            {
                title: "Software Engineer I",
                description: (
                    <ul className="list-inside list-disc">
                        <li>Improved DevEx with streamlined builds and testing</li>
                        <li>Architected pipelines for improved project DevOps</li>
                        <li>Assisted in the internal rollout of AI workflows for developers</li>
                        <li>Designed and implemented high level solutions to solve client problems</li>
                        <li>Introduced modern solutions to legacy code in internal applications</li>
                    </ul>
                ),
                skills: [],
                start: "2025-01-06",
                end: "2026-03-01",
            },
        ],
        url: "https://www.rovisys.com",
    },
    // {
    //     name: "RoviSys",
    //     title: "Software Co-op",
    //     logo: <Image width={436.7} height={73.7} className="w-32" alt={"RoviSys"} src={`/experience/rovisys.svg`} />,
    //     description: <span>I will eventually write about skills I gained at RoviSys, but currently I haven't really worked there long enough to have anything to write about.</span>,
    //     skills: [],
    //     url: "https://www.rovisys.com",
    //     start: "2024-05-13",
    //     end: "2024-08-13"
    // },
    // {
    //     name: "Kent State University",
    //     title: "Tutor",
    //     logo: <Image width={573.49335} height={167.41333} className="w-32" alt={"RoviSys"} src={`/experience/ksu.svg`} />,
    //     description: (
    //         <>
    //             <p>At this position, I tutored students on the Kent State CS curriculum, this includes:</p>
    //             <ul className="list-inside list-disc">
    //                 <li><Link href="https://kent.cobalt.lol/course/CS13011">CS IA/IB</Link></li>
    //                 <li><Link href="https://kent.cobalt.lol/course/CS23001">CS 2</Link></li>
    //                 <li><Link href="https://kent.cobalt.lol/course/CS44001">CS 3</Link></li>
    //             </ul>
    //         </>
    //     ),
    //     skills: [],
    //     url: "https://www.kent.edu/cs",
    //     start: "2023-09-26"
    // }
]

export const projects: Project[] = [
    {
        name: "ShowVault",
        featured: true,
        tagline: "Track your progress through TV shows",
        description: (
            <span className="flex flex-col gap-2">
              A web app for tracking progress in TV shows. Some of the features include:
              <ul className="list-inside list-disc">
                  <li>Social: Add friends and view their watch history</li>
                  <li>Statistics: View how many hours you've logged watching shows</li>
                  <li>Notifications: Add shows to your Watchlist and be notified of new episodes</li>
              </ul>
              I am insanely proud of this project and have been actively working on it since December 2025. 
              There will probably be more features to come in the future.
              <p className="mt-2">This project is not open source, but you can try it via the <b>Visit site</b> link below.</p>
            </span>
        ),
        homepage: "https://showvault.app",
        language: "typescript",
    },
    {
        name: "portfolio",
        tagline: "The site you're looking at right now",
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
        name: "Keepr",
        featured: true,
        tagline: "Work-study hour logging for students",
        description: (
            <span className="flex flex-col gap-2">
              A web application that allows students to record and submit hours they have worked in an organization-specific work-study program.
              Some of the key features I built are:
              <ul className="list-inside list-disc">
                  <li>Organizations on a client-by-client basis</li>
                  <li>Editor for students to log and submit hours</li>
                  <li>Dynamic PDF generation for work-study forms</li>
              </ul>
              This project is not open source, but you can try it via the <b>Visit site</b> link below.
            </span>
        ),
        homepage: "https://keepr.nstruck.dev",
        language: "typescript",
    },
    {
        name: "music-bot",
        tagline: "A self-hosted Discord music bot",
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
        name: "tunnels",
        tagline: "Self-hosted reverse-proxy tunneling in Go",
        description: (
            <span>
                A tunneling application, similar to <Link href="https://github.com/cloudflare/cloudflared">cloudflared</Link>. Allows you to create your own proxy to act as a broker between the Internet
                and your services. Useful for on-the-fly reverse proxying your own services. I mostly created this project because I wanted to use Go to do networking and concurrency.
            </span>
        ),
        html_url: "https://github.com/Struck713/tunnels",
        language: "go",
    },
    {
        name: "mobutil",
        tagline: "Custom entities for Minecraft server mods",
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
        featured: true,
        tagline: "Find somewhere to eat nearby",
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
        tagline: "Advent of Code 2023, solved in Rust",
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
        name: "PerWorldServer",
        tagline: "Per-world tab list & chat for Spigot",
        description:(
            <span>
                Source code of the PerWorldServer plugin on <Link href="https://www.spigotmc.org/resources/perworldserver-per-world-tab-list-and-chat-1-8-8-1-18-1.23989/">Spigot</Link>.
            </span>
        ),
        html_url: "https://github.com/Struck713/PerWorldServer",
        language: "java",
    },
];
