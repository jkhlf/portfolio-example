import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  technologies: string[];
  websiteUrl: string;
  imageUrl: string;
  description: string;
  features?: { title: string; description: string }[];
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  technologies, 
  websiteUrl, 
  imageUrl, 
  description, 
  features, 
  githubUrl 
}) => {
  return (
    <article>
      <div className="mt-10 flex justify-between flex-col gap-4 sm:items-center sm:flex-row">
        <h2 className="m-0 normal-case text-[20px]">{title}</h2>
        <div className="flex items-center gap-4">
          {technologies.map(tech => (
            <div 
              key={tech} 
              className="ring-1 ring-zinc-950 dark:ring-zinc-300 px-2 py-1"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
      
      <a
        href={websiteUrl}
        target="_blank"
        className="group block overflow-hidden my-6 relative ring-1 ring-zinc-950"
      >
        <span className="z-10 absolute flex items-center transition-all gap-2 top-2 right-2 opacity-0 group-hover:opacity-100 text-zinc-100">
          Click to visit website <ArrowUpRight className="size-5" />
        </span>
        <div className="flex justify-center">
          <img
        className="w-50 h-80 group-hover:scale-105 transition-all"
        src={imageUrl}
        alt={`Logo for the ${title} website`}
          />
        </div>
      </a>
      
      <p className='py-5'>{description}</p>
      
      {features && (
        <ul className='space-y-4'>
          {features.map((feature, index) => (
            <li key={index}>
              <span className="font-semibold">{feature.title}: </span>
              {feature.description}
            </li>
          ))}
        </ul>
      )}
      
      <div className="items-center flex gap-4 mt-8">
        <a
          className="items-center flex gap-2"
          href={websiteUrl}
          target="_blank"
        >
          Visit website
          <ArrowUpRight className="size-5" />
        </a>
        <a
          className="items-center flex gap-2"
          href={githubUrl}
          target="_blank"
        >
          Code on GitHub
          <ArrowUpRight className="size-5" />
        </a>
      </div>
    </article>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Project One',
      technologies: ['Tech1', 'Tech2', 'Tech3'],
      websiteUrl: 'https://example.com/project-one',
      imageUrl: '/images/project-one.png',
      description: 'Description for Project One.',
      features: [
        {
          title: 'Feature One',
          description: 'Description for Feature One.'
        },
      ],
      githubUrl: 'https://github.com/example/project-one'
    },
    {
      title: 'Project Two',
      technologies: ['TechA', 'TechB', 'TechC'],
      websiteUrl: 'https://example.com/project-two',
      imageUrl: '/images/project-two.png',
      description: 'Description for Project Two.',
      features: [
        {
          title: 'Feature A',
          description: 'Description for Feature A.'
        },
      ],
      githubUrl: 'https://github.com/example/project-two'
    },
    {
      title: 'Project Three',
      technologies: ['TechX', 'TechY', 'TechZ'],
      websiteUrl: 'https://example.com/project-three',
      imageUrl: '/images/project-three.png',
      description: 'Description for Project Three.',
      features: [
        {
          title: 'Feature X',
          description: 'Description for Feature X.'
        },
        {
          title: 'Feature Y',
          description: 'Description for Feature Y.'
        }
      ],
      githubUrl: 'https://github.com/example/project-three'
    }
  ];

  return (
    <section className="space-y-16">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default ProjectsSection;
