"use client";

import { DATE_FORMAT, experience } from "@/app/config";
import { Utils } from "@/lib/util";
import moment from "moment";
import { ReactNode } from "react";
import Section from "./Section";

export interface Experience {
    logo: ReactNode,
    name: string,
    title: string,
    url: string,
    skills: string[],
    description: ReactNode,
    start: string,
    end?: string
}

interface PillProps { title: string };
export const Pill = ({ title }: PillProps) => {
    return <span className="text-xs bg-white rounded-lg p-1">{title}</span>
}

export const Experience = ({ title, logo, description, url, start, end, skills }: Experience) => {

    const getDateRange = (start: string, end?: string) => {
        const startMoment = moment(start);
        const endMoment = end ? moment(end) : moment();
        const endDate = end ? endMoment.format(DATE_FORMAT) : "Present";
        const startDate = startMoment.format(DATE_FORMAT);
        return <span>{startDate} - {endDate} &#x2022; {Utils.latestTime(startMoment, endMoment)}</span>;
    }

    return (
        <div className="px-10 py-5 bg-primary rounded-lg drop-shadow-md">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-1">
                        <p className="text-xl font-bold">{title}</p>
                        <p className="text-xs">{getDateRange(start, end)}</p>
                    </div>
                    <a className="self-center" href={url} target="_blank">{logo}</a>
                </div>
                <div className="w-full">{description}</div>
                {skills.length != 0 && 
                    <div className="flex flex-row gap-1 pt-1">
                        {skills.map(pill => <Pill title={pill} />)}
                    </div>
                }
            </div>
        </div>
    )
}

export default () => {
    return (
        <Section name="Experience">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {experience.map(exper => <Experience key={exper.name} {...exper} />)}
            </div>
        </Section>
    )
}