import { HTMLProps, PropsWithChildren } from "react";

export const Bento = ({
  className = "",
  dense = false,
  children,
}: PropsWithChildren<{ className?: string; dense?: boolean }>) => (
  <div
    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${
      dense ? "grid-flow-row-dense" : ""
    } ${className}`}
  >
    {children}
  </div>
);

export type Tone = "surface" | "tint" | "accent";

const tones: Record<Tone, string> = {
  surface: "bg-surface border-border text-ink",
  tint: "bg-tint border-tint-deep text-ink",
  accent: "bg-accent-ink border-accent-ink text-white",
};

type TileProps = {
  span?: string;
  tone?: Tone;
  interactive?: boolean;
  href?: string;
} & Omit<HTMLProps<HTMLAnchorElement>, "href" | "span">;

export const Tile = ({
  span = "",
  tone = "surface",
  interactive = false,
  href,
  className = "",
  children,
  ...props
}: PropsWithChildren<TileProps>) => {
  const classes = `card card-pad ${tones[tone]} ${
    href || interactive ? "card-hover" : ""
  } ${span} ${className}`;

  if (href) {
    const isAnchor = href.startsWith("#");
    return (
      <a
        href={href}
        className={classes}
        {...(isAnchor ? {} : { target: "_blank", rel: "noreferrer" })}
        {...props}
      >
        {children}
      </a>
    );
  }

  return <div className={classes}>{children}</div>;
};
