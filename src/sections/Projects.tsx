import { URL, projects } from "@/lib/config";
import { IconGithub, Icon, getIconByLanguage, IconLanguages } from "../components/Icons";
import Preview from "../components/Preview";
import Markdown from "react-markdown";
import { ClassAttributes, ReactNode } from "react";
import Section from "./Section";

export interface Project {
    name: string,
    description: string | ReactNode,
    html_url: string,
    homepage?: string,
    language: string,
}

export const Project = ({ name, description, language, homepage, html_url }: Project) => {
    return (
        <div className={`px-10 py-5 bg-primary rounded-lg drop-shadow-md ${homepage ? "row-span-2" : "row-span-1"}`}>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Icon href={html_url} target="_blank" icon={<IconGithub />} />
                        <p className="text-xl font-bold">{name}</p>
                    </div>
                    <Icon icon={getIconByLanguage(language as IconLanguages)} />
                </div>
                <div className="flex flex-col gap-2">
                    {description}
                    {homepage && <Preview name={name} url={homepage} />}
                </div>
            </div>
        </div>
    )
}

const X = () => {
    return 
}

export default () => {

    const description = <p>
        Here are some of the project's I've worked on. You can click the<Icon href={URL.Github} className="inline-flex align-middle px-2" icon={<IconGithub />} /> 
        to view the project's repository on Github. There are language badges next to each repo.
    </p>;

    return (
        <Section name="Projects" description={description}>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {projects.map(repo => <Project key={repo.name} {...repo} />)}
            </div>
        </Section>
    )
}