"use server";

import { getRepos } from "@/lib/github";
import { Card } from "./Repo";

export default async () => {

    const repos = await getRepos();
    return (
        <div className="grid grid-cols-3 gap-4">
            {repos.map((repo, index) => <Card key={repo.id} index={index} {...repo} />)}
        </div>
    )
}