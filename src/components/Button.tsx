import { HTMLProps } from "react";

export const Link = ({ children, ...props}: HTMLProps<HTMLAnchorElement>) => 
    <a {...props} target="_blank" className="text-magenta">{children}</a>;

export const Button = ({ className, children, ...props }: HTMLProps<HTMLAnchorElement>) => {
    return (
        <a {...props} className={`${className} bg-none text-black font-bold py-2 px-4 rounded transition-colors ease-in-out duration-300 hover:bg-cream`}>
            {children}
        </a>
    )
}