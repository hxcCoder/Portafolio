import { Project } from '../data/projects';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-900">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
        </div>
        <div className="mt-4 flex gap-2 flex-wrap">
          {project.tags?.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <Button href={project.github}>GitHub</Button>
          <Button href={project.demo}>Demo</Button>
        </div>
      </div>
    </div>
  );
}
