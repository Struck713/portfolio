import { DATE_FORMAT, experience } from "@/app/config";
import { Utils } from "@/lib/util";
import moment from "moment";
import { ReactNode } from "react";
import { Tile } from "../Bento";
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

const durationOf = (start: string, end?: string) =>
    (end ? moment(end) : moment()).diff(moment(start));

const getDateRange = (start: string, end?: string) => {
    const startMoment = moment(start);
    const endMoment = end ? moment(end) : moment();
    const endDate = end ? endMoment.format(DATE_FORMAT) : "Present";
    return <span>{startMoment.format(DATE_FORMAT)} - {endDate} &#x2022; {Utils.latestTimeForMoment(startMoment, endMoment)}</span>;
}

export const ExperienceCard = ({ name, logo, positions, url }: Experience) => {
    const totalTime = Utils.fullTimeForNumber(
        positions.reduce((value, { start, end }) => value + durationOf(start, end), 0)
    );

    return (
        <Tile tone="surface" className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
                <a className="w-24" href={url} target="_blank" rel="noreferrer">{logo}</a>
                <div className="flex flex-col gap-1">
                    <p className="font-display text-xl font-bold">{name}</p>
                    <p className="text-xs text-muted">{totalTime}</p>
                </div>
            </div>
            <div className="flex flex-col gap-5 border-l-2 border-tint-deep pl-5">
                {positions.map(({ title, description, start, end }) =>
                    <div key={title} className="relative">
                        <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-surface bg-accent" />
                        <h3 className="text-lg font-bold">{title}</h3>
                        <p className="text-xs text-muted">{getDateRange(start, end)}</p>
                        <div className="mt-2 text-sm">{description}</div>
                    </div>
                )}
            </div>
        </Tile>
    )
}

export default () => {
    return (
        <Section name="Experience">
            <div className="flex flex-col gap-4">
                {experience.map(exper => (
                    <ExperienceCard key={exper.name} {...exper} />
                ))}
            </div>
        </Section>
    )
}
