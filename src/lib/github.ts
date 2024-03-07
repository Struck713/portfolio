import { env } from "process";

export interface Repo {
    id: string,
    name: string,
    description: string,
    full_name: string,
    html_url: string,
    homepage?: string,
    language: string,
    pushed_at: Date
}

const repos: Repo[] = [
    {
        id: "667666994",
        full_name: "Struck713/music-bot",
        name: "music-bot",
        description: "A discord bot that plays music, among other things",
        html_url: "https://github.com/Struck713/music-bot",
        language: "typescript",
        pushed_at: new Date("2024-03-02T04:15:04.000Z")
    },
    {
        id: "762146293",
        full_name: "Struck713/localized-troll",
        name: "localized-troll",
        description: "A discord bot that uses GPT4ALL to do a little trolling",
        html_url: "https://github.com/Struck713/localized-troll",
        language: "typescript",
        pushed_at: new Date("2024-02-28T07:55:45.000Z")
    },
    {
        id: "757193848",
        full_name: "Struck713/image-to-ppm",
        name: "image-to-ppm",
        description: "Making images worse by converting them to PPM",
        html_url: "https://github.com/Struck713/image-to-ppm",
        language: "rust",
        pushed_at: new Date("2024-02-15T08:55:11.000Z")
    },
    {
        id: "669971570",
        full_name: "Struck713/eagle",
        name: "eagle",
        description: "A collection of utilities pertaining to Kent State services",
        html_url: "https://github.com/Struck713/eagle",
        language: "typescript",
        pushed_at: new Date("2024-01-19T00:58:31.000Z")
    },
    {
        id: "275071239",
        full_name: "Struck713/mobutil",
        name: "mobutil",
        description: "Testing my NMS skills by overwriting some default entities ",
        html_url: "https://github.com/Struck713/mobutil",
        language: "java",
        pushed_at: new Date("2023-12-26T22:52:49.000Z")
    },
    {
        id: "728360806",
        full_name: "Struck713/aoc2023",
        name: "aoc2023",
        description: "My solution for Advent of Code 2023",
        html_url: "https://github.com/Struck713/aoc2023",
        language: "rust",
        pushed_at: new Date("2023-12-22T03:39:59.000Z")
    },
    {
        id: "706451420",
        full_name: "Struck713/typemips",
        name: "typemips",
        description: "A TypeScript package for interpreting MIPS assembly",
        html_url: "https://github.com/Struck713/typemips",
        language: "typescript",
        pushed_at: new Date("2023-10-25T06:47:15.000Z")
    },
    {
        id: "533980214",
        full_name: "Struck713/nonapus-adventures",
        name: "nonapus-adventures",
        description: "A game designed using JavaScript and p5.js for Dr. Delozier's Software Engineering class at Kent State",
        html_url: "https://github.com/Struck713/nonapus-adventures",
        language: "javascript",
        pushed_at: new Date("2023-10-25T03:30:55.000Z")
    },
    {
        id: "685861199",
        full_name: "Struck713/where-to-eat",
        name: "where-to-eat",
        description: "A little web app that finds places to eat near you",
        homepage: "https://wsie.nstruck.dev",
        html_url: "https://github.com/Struck713/where-to-eat",
        language: "typescript",
        pushed_at: new Date("2023-09-02T05:11:53.000Z")
    },
    {
        id: "596641562",
        full_name: "Struck713/gamma-gambling",
        name: "gamma-gambling",
        description: "Database project for CS 33007",
        homepage: "https://gammagambling.com",
        html_url: "https://github.com/Struck713/gamma-gambling",
        language: "typescript",
        pushed_at: new Date("2023-08-30T18:49:14.000Z")
    },
    {
        id: "612052234",
        full_name: "Struck713/game-of-life",
        name: "game-of-life",
        description: "A simple implementation of Conway's Game of Life in p5.js",
        html_url: "https://github.com/Struck713/game-of-life",
        language: "javascript",
        pushed_at: new Date("2023-03-10T05:17:40.000Z")
    },
    {
        id: "582890470",
        full_name: "Struck713/syslog-agent",
        name: "syslog-agent",
        description: "An open-source agent that sends syslog messages from the Windows Event Log",
        html_url: "https://github.com/Struck713/syslog-agent",
        language: "java",
        pushed_at: new Date("2023-01-13T21:14:10.000Z")
    },
    {
        id: "560621612",
        full_name: "Struck713/os-labs",
        name: "os-labs",
        description: "All of the lab assignments for Dr. Guan's Operating System's class at Kent State University",
        html_url: "https://github.com/Struck713/os-labs",
        language: "c++",
        pushed_at: new Date("2022-11-21T05:53:48.000Z")
    },
    {
        id: "197472921",
        full_name: "Struck713/PerWorldServer",
        name: "PerWorldServer",
        description: "Source code of the PerWorldServer plugin on Spigot.",
        html_url: "https://github.com/Struck713/PerWorldServer",
        language: "java",
        pushed_at: new Date("2022-05-19T19:08:24.000Z")
    },
    {
        id: "462857393",
        full_name: "Struck713/cs2-lecture-notes",
        name: "cs2-lecture-notes",
        description: "Code written in class during J. Maletic's lectures at Kent State University",
        html_url: "https://github.com/Struck713/cs2-lecture-notes",
        language: "c++",
        pushed_at: new Date("2022-04-25T19:31:05.000Z")
    },
    {
        id: "463239628",
        full_name: "Struck713/infix-to-postfix",
        name: "infix-to-postfix",
        description: "No provided description.",
        html_url: "https://github.com/Struck713/infix-to-postfix",
        language: "c++",
        pushed_at: new Date("2022-02-26T01:55:53.000Z")
    },
    {
        id: "348940878",
        full_name: "Struck713/struckit",
        name: "struckit",
        description: "My toolkit for building Bukkit plugins",
        html_url: "https://github.com/Struck713/struckit",
        language: "java",
        pushed_at: new Date("2021-04-21T03:25:24.000Z")
    }
];

export const getRepos = async (): Promise<Repo[]> => {
    // const repos = await fetch(`https://api.github.com/users/${env.GITHUB_USER}/repos`, {
    //     headers: {
    //         "Accept": "application/vnd.github+json",
    //         "Authorization": `Bearer ${env.GITHUB_TOKEN}`,
    //         "X-GitHub-Api-Version": "2022-11-28"
    //     }
    // }).then(res => res.json())
    //     .then(res => res as Repo[])
    //     .catch(_ => null);

    // if (!repos) return [];

    // return repos.map(repo => ({
    //     id: repo.id,
    //     full_name: repo.full_name,
    //     name: repo.name,
    //     description: repo.description,
    //     homepage: repo.homepage,
    //     html_url: repo.html_url,
    //     language: repo.language.toLowerCase(),
    //     pushed_at: new Date(repo.pushed_at)
    // })).sort((a, b) => (b.pushed_at.getTime() - a.pushed_at.getTime()));
    return repos;
}