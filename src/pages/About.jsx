import { profile, skillGroups } from "../data";
import { usePageTitle } from "../usePageTitle";

export default function About() {
  usePageTitle("About");

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">About</p>
        <h1>About me</h1>
      </header>

      <div className="about-grid">
        <img
          className="about-photo"
          src="/sonia-about.png"
          alt="Sonia standing beside a desk with a laptop"
        />
        <div>
          <div className="prose">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="skill-panel">
            <h2>Skills</h2>
            {skillGroups.map((group) => (
              <section key={group.label}>
                <h3>{group.label}</h3>
                <ul className="pills">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
