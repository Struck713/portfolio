"use client";

import { Repo } from "@/lib/github";
import { IconGithub, Icon, getIconByLanguage, IconLanguages } from "./Icons";
import Preview from "./Preview";

type CardProps = Repo & { index: number };
export const Card = ({ index, name, description, language, homepage, html_url }: CardProps) => {

    return (
        <div className={`px-10 py-5 bg-white rounded-lg drop-shadow-md ${homepage ? "row-span-2" : "row-span-1"}`}>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                    <Icon href={html_url} target="_blank" icon={getIconByLanguage(language as IconLanguages)} />
                    <p className="text-xl font-bold">{name}</p>
                </div>
                <Icon href={html_url} target="_blank" icon={<IconGithub />} />
            </div>
            <div className="flex flex-col gap-2">
                <p>{description}</p>
                {homepage && <Preview name={name} url={homepage} />}
            </div>
        </div>
    )
}