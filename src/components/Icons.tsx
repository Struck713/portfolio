import { HTMLProps, ReactElement } from "react"

export type IconProps = HTMLProps<HTMLAnchorElement> & { icon: ReactElement };
export const Icon = ({ className, icon, ...props }: IconProps) => {
    return (
        <a className={`self-center transition-colors ease-in-out duration-500 hover:text-blue-700 ${className}`} {...props}>
            <span className="[&>svg]:h-5 [&>svg]:w-5 [&>img]:h-5 [&>img]:w-5">
                {icon}
            </span>
        </a>
    )
}

export type IconLanguages = "typescript" | "javascript" | "java" | "c++" | "rust";
export const getIconByLanguage = (language: IconLanguages) => {
    switch(language) {
        case "typescript": return <IconTypeScript />;
        case "javascript": return <IconJavaScript />;
        case "java": return <IconJava />;
        case "c++": return <IconCPlusPlus />;
        case "rust": return <IconRust />
    }
}

const IconTypeScript = () => <img alt="TypeScript logo" src="/icons/typescript.svg" />;
const IconJavaScript = () => <img alt="JavaScript logo" src="/icons/javascript.svg" />;
const IconJava = () => <img alt="Java logo" src="/icons/java.svg" />;
const IconCPlusPlus = () => <img alt="C++ logo" src="/icons/cplusplus.svg" />;
const IconRust = () => <img alt="Rust logo" src="/icons/rust.svg" />;

export const IconGithub = () => {
    // Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 496 512">
            <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg>
    )
}

export const IconComputer = () => {
    // Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools
    return (
        <svg viewBox="-0.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
                    <g id="Icon-Set" transform="translate(-568.000000, -463.000000)" fill="currentColor">
                        <path d="M597,481 L570,481 L570,467 C570,465.896 570.896,465 572,465 L595,465 C596.104,465 597,465.896 597,467 L597,481 L597,481 Z M597,485 C597,486.104 596.104,487 595,487 L572,487 C570.896,487 570,486.104 570,485 L570,483 L597,483 L597,485 L597,485 Z M582,489 L586,489 L586,493 L582,493 L582,489 Z M595,463 L572,463 C569.791,463 568,464.791 568,467 L568,485 C568,487.209 569.791,489 572,489 L580,489 L580,493 L578,493 C577.447,493 577,493.448 577,494 C577,494.553 577.447,495 578,495 L590,495 C590.553,495 591,494.553 591,494 C591,493.448 590.553,493 590,493 L588,493 L588,489 L595,489 C597.209,489 599,487.209 599,485 L599,467 C599,464.791 597.209,463 595,463 L595,463 Z">
                        </path>
                    </g>
                </g>
            </g>
        </svg>
    )
}