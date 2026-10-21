import { Link } from "react-router-dom";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectVisual title={project.title} />
      <div className="project-copy">
        <p className="kicker">
          {project.year ? `${project.kind} · ${project.year}` : project.kind}
        </p>
        <h2>
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h2>
        <p>{project.summary}</p>
        <ul className="pills">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link className="text-link" to={`/projects/${project.slug}`}>
          View project
        </Link>
      </div>
    </article>
  );
}
