import Layout from "../components/Layout";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Layout>
      <h1>Proyectos</h1>

      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </Layout>
  );
}