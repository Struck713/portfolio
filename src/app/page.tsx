import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default () => {
  return (
    <main className="bg-[url('/background.svg')] bg-contain bg-no-repeat bg-secondary px-60">
      <div className="min-h-screen justify-center">
        <Header />
        <Projects />
      </div>
    </main>
  );
}
