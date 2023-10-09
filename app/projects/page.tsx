import Projects from "@/components/Projects/Projects";
import MainLayout from "@/layouts/MainLayout";
import { almarena } from "app/fonts/localFont";

export const metadata = {
  title: "Projects",
  description: "Showcase of my software creations.",
};

export default function Page() {
  return (
    <MainLayout>
      <div className={`space-y-2 pb-8 pt-6 md:space-y-5 ${almarena.className}`}>
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-slate-800 dark:text-slate-200 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Projects
        </h1>
        <p className="text-lg leading-7 text-slate-500 dark:text-slate-400">
          Here are deployed projects worth sharing. Click to view
        </p>
      </div>
      <Projects />
    </MainLayout>
  );
}
