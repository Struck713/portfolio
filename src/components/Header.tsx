import { URL } from "@/app/config";
import { Bento, Tile } from "./Bento";
import { getIconByLanguage, IconGithub, IconLanguages, IconLinkedIn } from "./Icons";

const stack: IconLanguages[] = ["typescript", "go", "rust", "java", "javascript", "c++"];

export default () => {
    return (
        <header className="animate-rise">
            <Bento>
                <Tile tone="accent" span="sm:col-span-2 lg:row-span-2" className="flex flex-col justify-between gap-8">
                    {/* <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium tracking-wide">
                        Open to work
                    </span> */}
                    <div className="flex flex-col gap-3">
                        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                            Noah Struck
                        </h1>
                        <p className="text-lg text-white/80">
                            Software Engineer @ RoviSys
                        </p>
                    </div>
                </Tile>

                <Tile href={URL.Github} tone="surface" span="lg:col-span-1" className="flex flex-col justify-between gap-6">
                    <span className="[&>img]:h-7 [&>img]:w-7"><IconGithub /></span>
                    <div>
                        <p className="font-semibold">GitHub</p>
                        <p className="text-sm text-muted">@Struck713</p>
                    </div>
                </Tile>
                <Tile href={URL.LinkedIn} tone="surface" span="lg:col-span-1" className="flex flex-col justify-between gap-6">
                    <span className="[&>img]:h-7 [&>img]:w-7"><IconLinkedIn /></span>
                    <div>
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-sm text-muted">Noah Struck</p>
                    </div>
                </Tile>

                <Tile tone="tint" span="sm:col-span-2" className="flex flex-col justify-between gap-4">
                    <p className="text-sm font-medium text-muted">I like to build using</p>
                    <div className="flex flex-row flex-wrap gap-4">
                        {stack.map(lang => (
                            <span key={lang} className="[&>img]:h-8 [&>img]:w-8">{getIconByLanguage(lang)}</span>
                        ))}
                    </div>
                </Tile>
            </Bento>
        </header>
    )
}
