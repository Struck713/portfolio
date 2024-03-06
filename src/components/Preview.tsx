
export interface PreviewProps {
    url: string;
}

export default ({ url }: PreviewProps) => {
    return (
        <img 
            className="rounded-lg"
            src={`https://preview.nstruck.dev/api/capture?width=1920&height=1080&url=${url}`} />
    )
}