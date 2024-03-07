import { Suspense } from "react"
import ProjectsList from "./server/ProjectsList"

export default () => {
    return (
        <div className="flex flex-col gap-2 h-full w-full pb-20">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p>Here are some of my project's I've worked on. Currently, they are dynamically loaded from Github. In the future, this website will load nothing from Github and will just be statically served.</p>
          <Suspense fallback={<p>Loading projects..</p>}>
            <ProjectsList />
          </Suspense>
        </div>
    )
}