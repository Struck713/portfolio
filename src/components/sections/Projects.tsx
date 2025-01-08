import { URL, projects } from "@/app/config";
import { ReactNode } from "react";
import { Icon, IconGithub, IconLanguages, getIconByLanguage } from "../Icons";
import Preview from "../Preview";
import Section from "./Section";

export interface Project {
    name: string,
    description: string | ReactNode,
    html_url?: string,
    homepage?: string,
    language: IconLanguages,
}

export const Project = ({ name, description, language, homepage, html_url }: Project) => {
    return (
        <div className="px-10 py-5 bg-primary rounded-lg drop-shadow-md">
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <div className="flex flex-row gap-2">
                        {html_url && <Icon href={html_url} target="_blank" icon={<IconGithub />} />}
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

export default () => {

    const description = <p>
        Here are some of the project's I've worked on. You can click the<Icon href={URL.Github} className="inline-flex align-middle px-2" icon={<IconGithub />} />
        to view the project's repository on Github. There are language badges next to each repo.
    </p>;

    return (
        <Section name="Projects" description={description}>
            <div className="gap-4 columns-1 md:columns-2 lg:columns-3">
                {projects.map(repo => 
                    <div key={repo.name} className="first:mt-0 mt-4">
                        <Project {...repo} />
                    </div>
                )}
            </div>
        </Section>
    )
}
