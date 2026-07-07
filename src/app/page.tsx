import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

export default () => {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex max-w-container flex-col gap-14 px-5 py-10 md:gap-20 md:py-16">
        <Header />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
