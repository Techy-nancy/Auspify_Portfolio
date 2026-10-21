import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";
import { usePageTitle } from "../usePageTitle";

export default function Projects() {
  usePageTitle("Projects");

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Projects</p>
        <h1>Showcase</h1>
        <p className="lead">
          Selected work, starting with Elevate. Open a project for what it does and which tools it
          uses.
        </p>
      </header>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
