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
      title: 'BookStore - Guntendex',
      technologies: ['Java', 'Spring Web', 'React'],
      websiteUrl: 'https://github.com/jkhlf/bookstore-front',
      imageUrl: '/images/badge.png',
      description: 'A full-stack web application for Alura Challenges. The application is built with Java, Spring Web, and React.',
      features: [
        {
          title: 'Resources',
          description: 'This project is a book search application developed using the Gutendex API, designed to display books from a database. The page limits the display to 32 books per page, with a search feature to filter books by title.'
        },
      ],
      githubUrl: 'https://github.com/jkhlf/bookstore'
    },
    {
      title: 'Money Converter',
      technologies: ['Java', 'ExchangeRate-API'],
      websiteUrl: 'https://github.com/jkhlf/money-converter',
      imageUrl: 'images/money-badge.png',
      description: 'This project is a currency converter developed in Java, using the public ExchangeRate-API for Alura Challenges. The converter allows users to make conversions between different currencies and displays a history of conversions made.',
      features: [
        {
          title: 'Resources',
          description: 'Allows you to convert between several currencies, such as Dollar, Brazilian Real, Argentine Peso and Colombian Peso. Conversion History: Displays a history of the last conversions made. Log Logging: Uses the java.time library to record the date and time of conversions performed.'
        },
      ],
      githubUrl: 'https://github.com/jkhlf/money-converter'
    },
    {
      title: 'API Explorer',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      websiteUrl: 'https://crud-five-alpha.vercel.app/',
      imageUrl: '/images/apihub.png',
      description: 'A simple and fun application for playing with APIs.',
      features: [
        {
          title: 'Resources',
          description: 'Valorant API for Agents and Abilities, OMDB API for Movies, Jikan API for Anime.'
        },
        {
          title: 'Features',
          description: 'Create, Read, Update and Delete.'
        }
      ],
      githubUrl: 'https://github.com/jkhlf/crud'
    },
    {
      title: 'Dolly Rebrand',
      technologies: ['Design', 'Figma'],
      websiteUrl: 'https://www.figma.com/design/mWJEn4i4mN6PzD3CTZ4MIo/Dolly-Rebranding?node-id=0-1&t=5gbY7aAw99iUUvwO-1',
      imageUrl: '/images/Dolly.png',
      description: 'A rebranding project for Dolly, a Brazilian soda brand. The project was made with Figma.',
      features: [
        {
          title: 'Resources',
          description: 'New logo, new color palette, new typography.'
        },
        {
          title: 'Features',
          description: 'This project was a collaboration between me and my classmate Luan Barbosa.'
        }
      ],
      githubUrl: ''
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