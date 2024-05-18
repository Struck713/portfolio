import { Button } from "@/components/Button";

export default () => {
  return (
    <main className="bg-primary">
      <div className="min-h-screen justify-center">
        <div className="flex flex-col h-screen justify-center items-center gap-2 bg-[url('/background.svg')] bg-cover">
          <h1 className="text-3xl font-bold">Woah woah! That doesn't exist!</h1>
          <Button href="/">Return to safety</Button>
          <p className="p-10 text-xs">&#40;This error page needs some work&#41;</p>
        </div>
      </div>
    </main>
  );
}
