import { HTMLProps } from "react";

export const Link = ({ children, ...props }: HTMLProps<HTMLAnchorElement>) =>
    <a {...props} target="_blank" className="font-medium text-accent-ink underline decoration-tint-deep underline-offset-2 transition-colors hover:decoration-accent-ink">{children}</a>;

export const Button = ({ className = "", children, ...props }: HTMLProps<HTMLAnchorElement>) => {
    return (
        <a {...props} className={`inline-flex items-center gap-2 rounded-full bg-accent-ink px-5 py-2.5 font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-accent ${className}`}>
            {children}
        </a>
    )
}
