import projects from "@/lib/projects";
import { IconGithub, Icon, getIconByLanguage, IconLanguages } from "./Icons";
import Preview from "./Preview";
import Markdown from "react-markdown";
import { ClassAttributes } from "react";

export interface Repo {
    name: string,
    description: string,
    full_name: string,
    html_url: string,
    homepage?: string,
    language: string,
    pushed_at: Date
}

const Link = (props: ClassAttributes<HTMLAnchorElement>) => <a {...props} target="_blank" className="text-blue-600"></a>

export const Project = ({ name, full_name, description, language, homepage, html_url }: Repo) => {
    return (
        <div className={`px-10 py-5 bg-white rounded-lg drop-shadow-md ${homepage ? "row-span-2" : "row-span-1"}`}>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Icon href={html_url} target="_blank" icon={<IconGithub />} />
                        <p className="text-xl font-bold">{full_name}</p>
                    </div>
                    <Icon icon={getIconByLanguage(language as IconLanguages)} />
                </div>
                <div className="flex flex-col gap-2">
                    <Markdown components={{ a: Link }}>{description}</Markdown>
                    {homepage && <Preview name={name} url={homepage} />}
                </div>
            </div>
        </div>
    )
}

export default () => {
    return (
        <div id="projects" className="flex flex-col gap-2 h-full w-full pb-20">
            <h1 className="text-3xl font-bold">Projects</h1>
            <div className="flex gap-2">
                <p>Here are some of the project's I've worked on. You can click the</p><Icon icon={<IconGithub />} /><p>to view the project's repository on Github.</p>
                <p>All of my projects are written in </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {projects.map(repo => <Project key={repo.full_name} {...repo} />)}
            </div>
        </div>
    )
}