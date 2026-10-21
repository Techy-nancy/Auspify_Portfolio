import { Link } from "react-router-dom";
import { profile, projects, skillCards } from "../data";
import ProjectCard from "../components/ProjectCard";
import { usePageTitle } from "../usePageTitle";

export default function Home() {
  usePageTitle("");

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>Software Engr.</h1>
          <p className="lead">{profile.intro}</p>
          <Link className="btn btn-ghost" to="/contact">
            Let’s connect
          </Link>
        </div>
        <div className="hero-photo">
          <img src="/sonia-home.png" alt="Sonia" />
        </div>
      </section>

      <div className="page">
        <section className="skill-block" aria-labelledby="skill-heading">
          <h2 id="skill-heading">Technical expertise</h2>
          <div className="skill-cards">
            {skillCards.map((card) => (
              <article key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="work-block" aria-labelledby="work-heading">
          <div className="section-head">
            <h2 id="work-heading">Projects</h2>
            <Link className="text-link" to="/projects">
              All projects
            </Link>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
