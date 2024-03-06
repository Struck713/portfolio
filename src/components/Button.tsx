import { HTMLProps } from "react";

export default ({ className, children, ...props }: HTMLProps<HTMLAnchorElement>) => {
    return (
        <a {...props} className={`${className} bg-gray-500 text-white font-bold py-2 px-4 rounded`}>{children}</a>
    )
}