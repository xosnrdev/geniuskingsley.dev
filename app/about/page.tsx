import { MDXLayoutRenderer } from "@/components/MDXComponents";
import AuthorLayout from "@/layouts/MDX/AuthorLayout";
import MainLayout from "@/layouts/MainLayout";
import { allAuthors } from "contentlayer/generated";

export const metadata = {
  title: "About",
  description: "Discover my journey, passions, and experiences",
};

export default function About() {
  const author = allAuthors.find((p) => p.slug === "about");

  if (!author) {
    return null;
  }

  return (
    <MainLayout>
      <AuthorLayout content={author}>
        <MDXLayoutRenderer content={author} />
      </AuthorLayout>
    </MainLayout>
  );
}
