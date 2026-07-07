"use client";

import { projects } from "@/app/config";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconLanguages, getIconByLanguage, languageNames } from "../Icons";
import Section from "./Section";

export interface Project {
    name: string,
    tagline: string,
    description: string | ReactNode,
    html_url?: string,
    homepage?: string,
    language: IconLanguages,
    featured?: boolean
}

const LanguageChip = ({ language }: { language: IconLanguages }) => (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-tint px-2.5 py-1 text-xs font-semibold text-accent-ink">
        <span className="[&>img]:h-4 [&>img]:w-4">{getIconByLanguage(language)}</span>
        {languageNames[language]}
    </span>
);

const ProjectLink = ({ href, children }: { href: string, children: ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group/link inline-flex items-center gap-1 text-sm font-semibold text-accent-ink transition-colors hover:text-accent"
    >
        {children}
        <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-0.5">&#8599;</span>
    </a>
);

const ProjectCard = ({ project, onOpen }: { project: Project, onOpen: () => void }) => {
    const { name, tagline, language } = project;
    return (
        <button
            type="button"
            onClick={onOpen}
            className="card card-pad flex h-full w-full cursor-pointer flex-col gap-2 border-border bg-surface text-left text-ink transition-colors hover:border-tint-deep"
        >
            <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-bold">{name}</h3>
                <LanguageChip language={language} />
            </div>
            <p className="text-sm text-muted">{tagline}</p>
        </button>
    );
};

const DetailBody = ({ project, onClose }: { project: Project, onClose: () => void }) => {
    const { name, description, language, homepage, html_url } = project;
    return (
        <div
            onClick={e => e.stopPropagation()}
            className="animate-fade flex max-h-[85vh] w-full flex-col overflow-auto card card-pad border-tint-deep bg-surface text-ink shadow-2xl sm:h-full sm:max-h-none sm:shadow-none"
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-bold">{name}</h3>
                    <LanguageChip language={language} />
                </div>
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="shrink-0 cursor-pointer rounded-full p-1 text-muted transition-colors hover:bg-tint hover:text-ink"
                >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className="mt-4 text-sm text-muted">{description}</div>
            <div className="mt-auto flex items-center gap-5 pt-6">
                {html_url && <ProjectLink href={html_url}>Code</ProjectLink>}
                {homepage && <ProjectLink href={homepage}>Visit site</ProjectLink>}
            </div>
        </div>
    );
};

const ProjectDetail = ({ project, onClose }: { project: Project, onClose: () => void }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return (
        <>
            <div onClick={onClose} className="absolute inset-0 z-10 hidden sm:flex">
                <DetailBody project={project} onClose={onClose} />
            </div>
            {mounted && createPortal(
                <div
                    onClick={onClose}
                    className="fixed inset-0 z-40 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm sm:hidden"
                >
                    <DetailBody project={project} onClose={onClose} />
                </div>,
                document.body
            )}
        </>
    );
};

export default () => {
    const [selected, setSelected] = useState<Project | null>(null);

    useEffect(() => {
        if (!selected) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selected]);

    const description = (
        <p>Some of the projects I&apos;ve worked on. Click any card to read more.</p>
    );

    return (
        <Section name="Projects" description={description}>
            <div className="relative">
                <div
                    aria-hidden={!!selected}
                    className={`grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 ${selected ? "invisible" : ""}`}
                >
                    {projects.map(repo => (
                        <ProjectCard key={repo.name} project={repo} onOpen={() => setSelected(repo)} />
                    ))}
                </div>
                {selected && <ProjectDetail project={selected} onClose={() => setSelected(null)} />}
            </div>
        </Section>
    )
}
