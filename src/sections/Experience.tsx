import { IconGithub, Icon, getIconByLanguage, IconLanguages } from "../components/Icons";
import Preview from "../components/Preview";
import Section from "./Section";

export interface Repo {
    name: string,
    description: string,
    full_name: string,
    html_url: string,
    homepage?: string,
    language: string,
    pushed_at: Date
}

export const Experience = ({ name, full_name, description, language, homepage, html_url }: Repo) => {
    return (
        <div className={`px-10 py-5 bg-primary rounded-lg drop-shadow-md ${homepage ? "row-span-2" : "row-span-1"}`}>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Icon href={html_url} target="_blank" icon={<IconGithub />} />
                        <p className="text-xl font-bold">{full_name}</p>
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

    return (
        <Section name="Experience">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {/* {projects.map(repo => <Experience key={repo.full_name} {...repo} />)} */}
            </div>
        </Section>
    )
}