"use client";

import { DATE_FORMAT, experience } from "@/app/config";
import { Utils } from "@/lib/util";
import moment from "moment";
import { ReactNode } from "react";
import Section from "./Section";

export interface Experience {
    logo: ReactNode,
    name: string,
    url: string, 
    positions: {
        title: string,
        skills: string[],
        description: ReactNode,
        start: string,
        end?: string   
    }[],
}

interface PillProps { title: string };
export const Pill = ({ title }: PillProps) => {
    return <span className="text-xs bg-white rounded-lg p-1">{title}</span>
}

export const Experience = ({ name, logo, positions, url }: Experience) => {

    const totalTimeForPositions = Utils.latestTimeForNumber(positions.reduce((value, { start, end }) => value + (end ? moment(end) : moment()).diff(moment(start)), 0));

    const getDateRange = (start: string, end?: string) => {
        const startMoment = moment(start);
        const endMoment = end ? moment(end) : moment();
        const endDate = end ? endMoment.format(DATE_FORMAT) : "Present";
        const startDate = startMoment.format(DATE_FORMAT);
        return <span>{startDate} - {endDate} &#x2022; {Utils.latestTimeForMoment(startMoment, endMoment)}</span>;
    }

    return (
        <div className="px-10 py-5 bg-primary rounded-lg drop-shadow-md">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-4">
                    <a className="self-center w-12" href={url} target="_blank">{logo}</a>
                    <div className="flex flex-col self-center gap-1">
                        <p className="text-xl font-bold">{name}</p>
                        <p className="text-xs">{totalTimeForPositions}</p>
                    </div>
                </div>
                <div className="w-full mt-5 ml-5 flex flex-col gap-5">
                    {positions.map(({ title, description, start, end }) => 
                        <div key={title} className="flex flex-row items-center">
                            <p className="self-start w-12">&#x2022;</p>
                            <div className="w-full flex flex-col gap-2">
                                <div>
                                    <h3 className="text-lg font-bold">{title}</h3>
                                    <p className="text-xs">{getDateRange(start, end)}</p>
                                </div>
                                <p>{description}</p>
                            </div>
                        </div>
                    )}
                </div>
                {/* <div className="w-full">{description}</div>
                {skills.length != 0 && 
                    <div className="flex flex-row gap-1 pt-1">
                        {skills.map(pill => <Pill title={pill} />)}
                    </div>
                } */}
            </div>
        </div>
    )
}

export default () => {
    return (
        <Section name="Experience">
            <div className="grid grid-cols-1 lg:grid-cols-auto gap-4">
                {experience.map(exper => <Experience key={exper.name} {...exper} />)}
            </div>
        </Section>
    )
}