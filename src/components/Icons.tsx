import { HTMLProps, ReactElement } from "react"

export type IconProps = HTMLProps<HTMLAnchorElement> & { icon: ReactElement };
export const Icon = ({ className, icon, ...props }: IconProps) => {
    const spannedIcon = <span className={"[&>img]:h-5 [&>img]:w-5"}>{icon}</span>;

    // if the icon is clickable, make it clickable
    if (props.href) {
        return (
            <a className={`self-center transition-colors ease-in-out duration-500 hover:text-blue-700 ${className}`} {...props}>
                {spannedIcon}
            </a>
        );
    }
    // if the icon is not clickable, wrapp it in a self-center tag
    return <div className={`self-center ${className}`} >{spannedIcon}</div>;
}

export type IconLanguages = "typescript" | "javascript" | "java" | "c++" | "rust";
export const getIconByLanguage = (language: IconLanguages) => {
    switch (language) {
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

export const IconLinkedIn = () => <img alt="LinkedIn logo" src="/icons/linkedin.svg" />;
export const IconGithub = () => <img alt="LinkedIn logo" src="/icons/github.svg" />;