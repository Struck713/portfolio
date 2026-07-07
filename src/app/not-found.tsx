import { Button } from "@/components/Button";

export default () => {
  return (
    <main className="min-h-screen">
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-5 text-center">
        <p className="font-display text-6xl font-bold text-accent-ink">404</p>
        <h1 className="font-display text-2xl font-bold">Woah woah! That doesn&apos;t exist!</h1>
        <p className="max-w-sm text-muted">The page you&apos;re looking for wandered off. Let&apos;s get you back.</p>
        <Button href="/">Return to safety</Button>
      </div>
    </main>
  );
}
