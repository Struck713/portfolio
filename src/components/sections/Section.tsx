import { PropsWithChildren, ReactNode } from "react"

interface SectionProps { name: string, description?: ReactNode };
export default ({ name, description, children } : PropsWithChildren<SectionProps>) => {
    return (
        <section id={name.toLowerCase()} className="flex scroll-mt-8 flex-col gap-5 animate-rise">
            <div className="flex flex-col gap-2">
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink">{name}</h2>
                {description && <div className="max-w-2xl text-muted">{description}</div>}
            </div>
            {children}
        </section>
    )
}
