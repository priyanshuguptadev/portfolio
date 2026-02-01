import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams<{ id: string }>();
    const project = id ? PROJECTS.find(p => p.id === parseInt(id)) : undefined;

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center text-neutral-500">
                <p>Project not found.</p>
                <Link to="/" className="text-white mt-4 underline">Go Home</Link>
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
                to="/"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-8 group"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm">Back to projects</span>
            </Link>

            <div className="mb-12">
                {/* Large Thumbnail */}
                <div className="w-full aspect-video bg-neutral-900 rounded-xl mb-8 flex items-center justify-center text-neutral-700 border border-neutral-800">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>

                <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">{project.title}</h1>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="prose prose-invert prose-neutral max-w-none">
                    <p className="text-neutral-400 leading-relaxed text-base">
                        {project.description}
                    </p>
                </div>
            </div>

            <div className="flex gap-6 pt-8 border-t border-neutral-800">
                <a href={project.live} className="flex items-center gap-2 text-white hover:text-neutral-300 transition-colors">
                    <span className="text-sm font-medium">View Live Demo</span>
                    <ArrowUpRight size={16} />
                </a>
                <a href={project.github} className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors">
                    <span className="text-sm font-medium">Source Code</span>
                    <GithubIcon size={16} />
                </a>
            </div>
        </motion.div>
    );
};

// Helper component for Icon if needed, but I'll use Lucide directly in JSX
const GithubIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);


export default ProjectDetails;
