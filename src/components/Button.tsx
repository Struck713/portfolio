import { HTMLProps } from "react";

export default ({ className, children, ...props }: HTMLProps<HTMLAnchorElement>) => {
    return (
        <a {...props} className={`${className} bg-none text-black font-bold py-2 px-4 rounded transition-colors ease-in-out duration-300 hover:bg-gray-300`}>
            {children}
        </a>
    )
}