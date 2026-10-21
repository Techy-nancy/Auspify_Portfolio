import { Link, useParams } from "react-router-dom";
import { findProject } from "../data";
import { usePageTitle } from "../usePageTitle";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = findProject(slug);
  usePageTitle(project ? project.title : "Project");

  if (!project) {
    return (
      <div className="page">
        <header className="page-head">
          <h1>Project not found</h1>
          <p className="lead">That page is not part of this showcase.</p>
          <Link className="text-link" to="/projects">
            Back to projects
          </Link>
        </header>
      </div>
    );
  }

  return (
    <div className="page">
      <p className="eyebrow">
        <Link to="/projects">Projects</Link>
        <span aria-hidden="true"> / </span>
        {project.title}
      </p>
      <header className="page-head">
        <h1>{project.title}</h1>
        <p className="role-line">
          {project.year ? `${project.kind} · ${project.year}` : project.kind}
        </p>
        <p className="lead">{project.summary}</p>
      </header>

      <div className="detail-grid">
        <section>
          <h2>What it does</h2>
          <ul className="points">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
        <aside className="detail-side">
          <h2>Tools</h2>
          <ul className="pills">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {project.live ? (
            <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">
              {project.linkLabel}
            </a>
          ) : (
            <Link className="btn btn-ghost" to="/">
              You are on this site
            </Link>
          )}
        </aside>
      </div>
    </div>
  );
}
