import { URL } from "@/app/config";
import { Icon, IconGithub, IconLinkedIn } from "./Icons";

export default () => {
    return (
        <footer className="mt-16 border-t border-border">
            <div className="mx-auto flex max-w-container flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1">
                    <p className="font-display font-bold text-ink">Noah Struck</p>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <a href="#experience" className="text-sm text-muted transition-colors hover:text-ink">Experience</a>
                    <a href="#projects" className="text-sm text-muted transition-colors hover:text-ink">Projects</a>
                    <span className="h-4 w-px bg-border" />
                    <Icon href={URL.Github} target="_blank" icon={<IconGithub />} className="opacity-70 transition-opacity hover:opacity-100" />
                    <Icon href={URL.LinkedIn} target="_blank" icon={<IconLinkedIn />} className="opacity-70 transition-opacity hover:opacity-100" />
                </div>
            </div>
        </footer>
    );
}
