import { useEffect } from "react";
import { AnimatedPage } from "../components/AnimatedPage";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const Blogs = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage className="w-full mt-12">
      <div className="flex flex-col gap-10">
        {blogs.map((blog) => (
          <Link
            to={`/blogs/${blog.slug}`}
            key={blog.slug}
            className="group block"
          >
            <article className="flex flex-col gap-2">
              <span className="text-xs text-neutral-500">{blog.date}</span>
              <h3 className="text-lg font-medium text-neutral-200 group-hover:text-white transition-colors">
                {blog.title}
              </h3>
            </article>
          </Link>
        ))}
      </div>
    </AnimatedPage>
  );
};

export default Blogs;
