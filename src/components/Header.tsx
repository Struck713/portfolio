"use client";

import { ReactElement } from "react"
import Button from "./Button"
import { Icon, IconGithub, IconLinkedIn } from "./Icons"

interface IconButtonProps { url: string, icon: ReactElement, text: string }
const IconButton = ({ url, icon, text }: IconButtonProps) => {
    return (
        <Button href={url} target="_blank" className="flex flex-row gap-1">
            <Icon icon={icon} />
            <p>{text}</p>
        </Button>
    )
}

export default () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="flex flex-col gap-4 text-center">
                <h1 className="text-5xl font-bold">Noah Struck</h1>
                <div className="flex flex-row gap-1">
                    <p>CS @ Kent</p>
                    <p className="self-center text-xs">|</p>
                    <p>Software Engineer</p>
                    <p className="self-center text-xs">|</p>
                    <p>Hobbyist</p>
                </div>
                <div className="flex flex-row justify-evenly">
                    <IconButton url="https://github.com/Struck713" icon={<IconGithub />} text="Struck713" />
                    <IconButton url="https://www.linkedin.com/in/noah-struck/" icon={<IconLinkedIn />} text="Noah Struck" />
                </div>
            </div>
        </div>
    )
}