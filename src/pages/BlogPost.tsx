import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { blogs } from "../data/blogs";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? blogs.find((b) => b.slug === slug) : undefined;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-neutral-500">
        <p>Blog post not found.</p>
        <Link to="/blogs" className="text-white mt-4 underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12"
    >
      <Link
        to="/blogs"
        className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span className="text-sm">Back to all blogs</span>
      </Link>

      <article className="mb-12">
        <header className="mb-10">
          <title>{blog.title}</title>
          <span className="text-xs text-neutral-500">{blog.date}</span>
        </header>

        <div className="prose prose-invert prose-neutral max-w-none prose-sm sm:prose-base prose-p:text-neutral-400 prose-headings:text-neutral-200 prose-a:text-white prose-code:text-neutral-300 prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {blog.content}
          </ReactMarkdown>
        </div>
      </article>
    </motion.div>
  );
};

export default BlogPost;
