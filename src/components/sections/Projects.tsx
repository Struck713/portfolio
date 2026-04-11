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
    featured?: boolean
}

export const Project = ({ name, description, language, homepage, html_url }: Project) => {
    return (
        <div className="h-full px-10 py-5 bg-primary rounded-lg drop-shadow-md">
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        {html_url && <Icon href={html_url} target="_blank" icon={<IconGithub />} />}
                        <p className="text-xl font-bold">{name}</p>
                    </div>
                    <Icon icon={getIconByLanguage(language as IconLanguages)} />
                </div>
                <div className="flex flex-col lg:flex-row gap-2">
                    <div>{description}</div>
                    <div className="lg:max-w-[40%]">
                        {homepage && <Preview name={name} url={homepage} />}
                    </div>
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

    const { 
        featured = [], 
        regular = []
    } = Object.groupBy(projects, project => project.featured ? "featured" : "regular");

    return (
        <Section name="Projects" description={description}>
            <div className="gap-4 flex flex-col">
                {featured.map(repo => 
                    <div key={repo.name}>
                        <Project {...repo} />
                    </div>
                )}
            </div>
            <div className="mt-4 gap-4 grid grid-cols-1 sm:grid-cols-2">
                {regular.map(repo => 
                    <div key={repo.name}>
                        <Project {...repo} />
                    </div>
                )}
            </div>
        </Section>
    )
}
