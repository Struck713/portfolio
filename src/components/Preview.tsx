"use client";

export interface PreviewProps {
    url: string;
    name: string;
}

export default ({ name, url }: PreviewProps) => {
    return (name &&
        <a href={url} target="_blank">
            <img className="rounded-lg transition-transform ease-in-out hover:scale-105" src={`/preview/${name.toLowerCase()}.png`} />
        </a>
    )
}
