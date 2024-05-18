import { PropsWithChildren, ReactNode } from "react"


interface SectionProps { name: string, description?: ReactNode };
export default ({ name, description, children } : PropsWithChildren<SectionProps>) => {
    return (
        <div id={name.toLowerCase()} className="flex flex-col gap-2 h-full w-full px-5 md:px-40 lg:px-60">
            <h1 className="text-3xl font-bold text-black">{name}</h1>
            <div className="text-black">
                {description}
            </div>
            {children}
        </div>
    )
}