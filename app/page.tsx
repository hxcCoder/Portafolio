import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <Section>
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-extrabold">
            Hola, soy <span className="text-primary">Benjamin</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Desarrollador web full-stack, apasionado por crear experiencias digitales modernas y funcionales.
          </p>
        </div>
      </Section>

      {/* Proyectos */}
      <Section title="Proyectos">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}
