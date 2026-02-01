import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Link to={`/project/${project.id}`} className="block">
            <motion.div
                layoutId={`project-card-${project.id}`}
                className="group cursor-pointer flex flex-col gap-3 rounded-xl transition-all duration-300"
                whileHover={{ y: -4 }}
            >
                {/* Thumbnail */}
                <div className="w-full aspect-video bg-neutral-900 rounded-lg overflow-hidden relative border border-neutral-900 group-hover:border-neutral-800 transition-colors">
                    <div className="absolute inset-0 bg-neutral-800 group-hover:bg-neutral-700 transition-colors duration-500 flex items-center justify-center">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="flex flex-col gap-1 px-1">
                    <h3 className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">{project.title}</h3>
                    <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                    </p>

                    <div className="flex gap-2 mt-2 flex-wrap">
                        {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] text-neutral-600 border border-neutral-800 px-2 py-0.5 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default ProjectCard;
