import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noah Struck - Tunnels",
  icons: { icon: "/favicon.ico" },
};

export default ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <head>
        <meta
          name="go-import"
          content="nstruck.dev/tunnels git https://github.com/Struck713/tunnels"
        />
      </head>
      {children}
    </>
  );
};
