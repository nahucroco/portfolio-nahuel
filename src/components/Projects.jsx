import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <span className="text-blue-400 text-sm tracking-widest">
        03 / PROYECTOS
      </span>

      <h2 className="mt-6 text-4xl md:text-6xl font-bold">
        Algunos proyectos
        <span className="text-blue-500">
          {" "}destacados
        </span>
      </h2>

      <p className="mt-6 text-zinc-400 max-w-2xl">
        Productos y sistemas en los que trabajé,
        enfocados en resolver problemas reales.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 mt-16">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}