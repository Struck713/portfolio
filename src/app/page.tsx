import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default () => {
  return (
    <main className="bg-gray-200 px-32 2xl:px-96">
      <div className="min-h-screen justify-center">
        <Header />
        <Projects />
      </div>
    </main>
  );
}
