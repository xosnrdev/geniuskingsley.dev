import Link from "@/components/Link";
import SectionContainer from "@/components/SectionContainer";
import { almarena } from "./fonts/localFont";

export default function FourZeroFour() {
  return (
    <SectionContainer>
      <div
        className={`space-x-2 pb-8 pt-6 font-normal normal-case md:space-y-5 ${almarena.className}`}
      >
        <h1 className="text-6xl font-bold leading-9 tracking-tight text-slate-800 dark:text-slate-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-normal leading-normal md:text-2xl">
          Sorry we couldn't find this page.
        </p>
        <p className="mb-8">
          But don't worry, you can find plenty of other things on the homepage.
        </p>
        <Link href="/">Back to homepage</Link>
      </div>
    </SectionContainer>
  );
}
