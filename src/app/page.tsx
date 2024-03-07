import Projects from "@/components/server/Projects";
import { Suspense } from "react";

export default () => {
  return (
    <main className="bg-gray-200 px-32 2xl:px-96">

      {/* Header */}
      <div className="min-h-screen justify-center">
        <div className="flex h-screen justify-center items-center">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-5xl font-bold">Noah Struck</h1>
            <div className="flex flex-row gap-1">
              <p>CS @ Kent</p>
              <p className="self-center text-xs">|</p>
              <p>Software Engineer</p>
              <p className="self-center text-xs">|</p>
              <p>Hobbyist</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-2 h-full w-full pb-20">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p>Here are some of my project's I've worked on. Currently, they are dynamically loaded from Github. In the future, this website will load nothing from Github and will just be statically served.</p>
          <Suspense fallback={<p>Loading projects..</p>}>
            <Projects />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
