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

export const getRepos = async (): Promise<Repo[]> => {
    const repos = await fetch(`https://api.github.com/users/${env.GITHUB_USER}/repos`, {
        headers: {
            "Accept": "application/vnd.github+json",
            "Authorization": `Bearer ${env.GITHUB_TOKEN}`,
            "X-GitHub-Api-Version": "2022-11-28"
        }
    }).then(res => res.json())
      .then(res => res as Repo[])
      .catch(_ => null);

    if (!repos) return [];

    // console.log(repos[4]);

    return repos.map(repo => ({
        id: repo.id,
        full_name: repo.full_name,
        name: repo.name,
        description: repo.description,
        homepage: repo.homepage,
        html_url: repo.html_url,
        language: repo.language.toLowerCase(),
        pushed_at: new Date(repo.pushed_at)
    })).sort((a, b) => (b.pushed_at.getTime() - a.pushed_at.getTime()));
}