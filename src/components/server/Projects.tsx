"use server";

import { getRepos } from "@/lib/github";
import { Project } from "../Project";

export default async () => {
    const repos = await getRepos();
    return (
        <div className="grid grid-cols-3 gap-4">
            {repos.map(repo => <Project key={repo.id} {...repo} />)}
        </div>
    )
}