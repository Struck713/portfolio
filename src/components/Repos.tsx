"use server";

import { Repo, getRepos } from "@/lib/github";
import { IconComputer, IconGithub, Icon, getIconByLanguage, IconLanguages } from "./Icons";
import Preview from "./Preview";

export const Card = ({ name, description, language, homepage, html_url }: Repo) => {
    return (
        <div className="px-10 py-5 bg-white rounded-lg drop-shadow-sm">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                    <Icon href={html_url} target="_blank" icon={getIconByLanguage(language as IconLanguages)} />
                    <p className="text-xl font-bold">{name}</p>
                </div>
                <div className="flex flex-row gap-2">
                    {/* {homepage && <Icon href={homepage} target="_blank" icon={<IconComputer />} />} */}
                    <Icon href={html_url} target="_blank" icon={<IconGithub />} />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p>{description}</p>
                {homepage && <Preview url={homepage} />}
            </div>
        </div>
    )
}

export default async () => {
    const repos = await getRepos();
    return (
        <div className="grid grid-cols-3 gap-4">
            {repos.map(repo => <Card key={repo.id} {...repo} />)}
        </div>
    )
}