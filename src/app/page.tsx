import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";

export default () => {
  return (
    <main className="bg-secondary">
      <div className="min-h-screen justify-center">
        <Header />
        <div className="flex flex-col gap-12">
          <Experience />
          <Projects />
        </div>
        <Footer />
      </div>
    </main>
  );
}
