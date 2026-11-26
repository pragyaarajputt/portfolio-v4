import { links } from "@/data/content";
import { CountUp } from "./CountUp";
import { EmailActions } from "./EmailActions";

// Every line here restates a fact already on the site (content.ts and the previous design's sections).
const stats = [
  { value: "4", label: "live apps I built on my own" },
  { value: "250+", label: "backend tests on PostDrip AI" },
  { value: "80%", label: "less manual HR work from payslip automation" },
  { value: "19/19", label: "facts right on a real insurer’s policy" },
];

const habits = [
  { title: "Problem before schema", body: "Who’s stuck, and why, before I open an editor." },
  { title: "The whole product", body: "Screen, request, state and error case, designed together." },
  { title: "Finished, not just working", body: "Loading states, clear errors, keyboard focus." },
];

const exploring = ["LLM apps & evals", "RAG & vector search", "Realtime & WebSockets", "Queues & workers"];

const stack = ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "MongoDB", "Python", "FastAPI", "Gemini · Claude"];

const experience = [
  { when: "May 2025 — Now", what: "Jr. Software Developer", where: "CETIZION Verifica", dot: "#A9B4FF", stack: ["React", "Next.js", "Node.js", "MongoDB", "Python", "FastAPI"] },
  { when: "Jan — Mar 2025", what: "Web Developer Intern", where: "Tejo Tech Group", dot: "#8FD1AE", stack: ["React", "Tailwind CSS"] },
  { when: "2021 — 2025", what: "B.Tech, Computer Science & Engineering", where: "Manav Rachna University", dot: "#E2B98F", stack: [] as string[] },
];

export function About() {
  return (
    <section id="about" className="a-wrap" aria-labelledby="about-h">
      <div className="a-head">
        <p className="a-kicker">About</p>
        <h2 id="about-h">
          <span className="m-soft">Hey, I’m</span> Pragya, <span className="m-soft">a</span> <em>full&#8209;stack developer</em>{" "}
          <span className="m-soft">based in</span> New Delhi.
        </h2>
      </div>

      <div className="a-grid">
        {/* What I do */}
        <article className="a-tile a-lilac a-intro">
          <p className="a-label">What I do</p>
          <p className="a-lead">
            I build whole products: the data model, the API, and the screens people use every day, with AI where it actually helps.
          </p>
          <p>
            I started on the frontend at Tejo Tech, then moved across the whole stack at CETIZION Verifica. The work I like best removes
            a chore from someone’s month: payslips HR used to build by hand, meeting minutes nobody wanted to write, insurance policies
            nobody could read.
          </p>
          <ul className="a-chips" aria-label="Stack">
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </article>

        {/* Numbers */}
        <article className="a-tile a-lime a-stats" aria-label="In numbers">
          <p className="a-label">In numbers</p>
          <dl>
            {stats.map((s) => (
              <div key={s.label}>
                <dt>
                  <CountUp value={s.value} />
                </dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </article>

        {/* Experience */}
        <article className="a-tile a-ink a-exp">
          <p className="a-label">Experience</p>
          <ol>
            {experience.map((e) => (
              <li key={e.what}>
                <span className="a-dot" style={{ background: e.dot }} aria-hidden="true" />
                <span className="a-when">{e.when}</span>
                <span className="a-what">{e.what}</span>
                <span className="a-where">{e.where}</span>
                {e.stack.length > 0 && (
                  <span className="a-exp-stack">
                    {e.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </span>
                )}
              </li>
            ))}
          </ol>
          <a href={links.resume} target="_blank" rel="noopener noreferrer" className="a-link-light">
            Full résumé (PDF) ↗
          </a>
        </article>

        {/* How I work */}
        <article className="a-tile a-peach">
          <p className="a-label">How I work</p>
          <ul className="a-list">
            {habits.map((h) => (
              <li key={h.title}>
                <strong>{h.title}</strong>
                <span>{h.body}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Exploring */}
        <article className="a-tile a-sky">
          <p className="a-label">Exploring now</p>
          <ul className="a-tags">
            {exploring.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p className="a-note">What I’m learning right now.</p>
        </article>

        {/* Contact */}
        <article id="contact" className="a-tile a-pink a-contact">
          <span className="a-badge" aria-hidden="true">
            open to
            <br />
            full-time
            <br />
            roles ✦
          </span>
          <div>
            <p className="a-label">Let’s talk</p>
            <p className="a-cta-line">Open to full-time roles. Email is the fastest way to reach me.</p>
            <EmailActions email={links.email} />
          </div>
          <div className="a-cta">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="m-pill m-pill-line">
              LinkedIn ↗
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="m-pill m-pill-line">
              GitHub ↗
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
