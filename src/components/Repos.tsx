"use server";

import { Repo, getRepos } from "@/lib/github";

export const Card = ({ name, description, html_url }: Repo) => {
    return (
        <div className="px-10 py-5 bg-white drop-shadow-sm rounded-lg">
            <a href={html_url} target="_blank" className="text-xl font-bold">{ name }</a>
            <p>{ description }</p>
        </div>
    )
}

export default async () => {
    const repos = await getRepos();
    return repos.map(repo => <Card {...repo} />);
}