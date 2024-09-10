"use client";

import { ReactElement } from "react"
import { Button } from "./Button"
import { Icon, IconGithub, IconLinkedIn } from "./Icons"
import { URL } from "@/app/config";

interface IconButtonProps { url: string, icon: ReactElement, text: string }
const IconButton = ({ url, icon, text }: IconButtonProps) => {
    return (
        <Button href={url} target="_blank" className="flex flex-row gap-2">
            <Icon icon={icon} />
            <p>{text}</p>
        </Button>
    )
}

export default () => {
    return (
        <div className="flex h-screen justify-center items-center bg-[url('/background.svg')] bg-cover bg-bottom bg-no-repeat">
            <div className="flex flex-col gap-4 text-center">
                <h1 className="text-5xl font-bold">Noah Struck</h1>
                <div className="flex flex-row gap-1">
                    <p>CS @ Kent</p>
                    <p className="self-center text-xs">|</p>
                    <p>Software Engineer</p>
                    <p className="self-center text-xs">|</p>
                    <p>Enthusiast</p>
                </div>
                <div className="flex flex-row justify-evenly">
                    <IconButton url={URL.Github} icon={<IconGithub />} text="Struck713" />
                    <IconButton url={URL.LinkedIn} icon={<IconLinkedIn />} text="Noah Struck" />
                </div>
            </div>
        </div>
    )
}