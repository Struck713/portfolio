import Card from "@/components/Card";
import Repos from "@/components/Repos";
import { Suspense } from "react";

export default async () => {

  return (
    <main className="flex min-h-screen flex-row justify-center p-10 bg-gray-200">
      <div className="flex flex-col items-center w-full">
          <div>
            <p className="text-3xl font-bold">Noah Struck</p>
            <p>Software Engineer</p>
          </div>
      </div>
      <div className="flex flex-col items-center gap-5 w-full">
        <Suspense fallback={<p>Loading repos..</p>}><Repos /></Suspense>
      </div>
    </main>
  );
}
