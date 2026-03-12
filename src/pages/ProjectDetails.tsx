import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { AnimatedPage } from "../components/AnimatedPage";
import { PROJECTS } from "../data/projects";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? PROJECTS.find((p) => p.id === parseInt(id)) : undefined;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-neutral-500">
        <p>Project not found.</p>
        <Link to="/" className="text-white mt-4 underline">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <AnimatedPage className="mt-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span className="text-sm">Back to projects</span>
      </Link>

      <article className="mb-12">
        <header className="mb-10">
          <title>{project.title}</title>
        </header>

        <div className="prose prose-invert prose-neutral max-w-none prose-sm sm:prose-base prose-p:text-neutral-400 prose-headings:text-neutral-200 prose-a:text-white prose-code:text-neutral-300 prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {project.content}
          </ReactMarkdown>
        </div>
      </article>
    </AnimatedPage>
  );
};

export default ProjectDetails;
