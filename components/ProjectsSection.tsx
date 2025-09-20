
import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="bg-[#1E1E1E] rounded-lg p-6 shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B57170]/20">
            <h3 className="text-2xl font-semibold text-[#B57170] mb-3">{project.title}</h3>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </div>
    );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
