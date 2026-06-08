export default function ProjectCard({ project }) {
  return (
    <div
      className="
        border
        border-zinc-800
        rounded-2xl
        p-8
        hover:border-blue-500/50
        transition
      "
    >
      <h3 className="text-2xl font-semibold">
        {project.title}
      </h3>

      <p className="mt-4 text-zinc-400">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="
              px-3
              py-1
              rounded-lg
              bg-zinc-900
              text-sm
            "
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <a
          href={project.github}
          className="text-blue-400"
        >
          GitHub →
        </a>

        <a
          href={project.demo}
          className="text-blue-400"
        >
          Demo →
        </a>
      </div>
    </div>
  );
}