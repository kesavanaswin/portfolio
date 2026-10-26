import "./Experience.css";
import Reveal from "../components/Reveal";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  DoodleUnderline,
  SketchShield,
  SketchSpine,
} from "../components/sketches/Sketches";

const entries = [
  {
    org: "Triarch Private Limited",
    when: "Jun 2026",
    title: "Cybersecurity & DevOps Intern",
    desc: "Completed a 21-day intensive internship covering cybersecurity and DevOps fundamentals, Linux environments, system administration, and security operations workflows.",
  },
  {
    org: "Prodigy InfoTech",
    when: "Dec 2025 — Jan 2026",
    title: "Cybersecurity Intern",
    desc: "Performed web application vulnerability assessment and basic penetration testing; used Python, Wireshark, and Nmap for network monitoring and threat analysis, then documented findings and recommendations.",
  },
  {
    org: "InTermPe",
    when: "Jun 2025 — Jul 2025",
    title: "Web Developer Intern",
    desc: "Developed responsive web applications using HTML, PHP, and JavaScript, strengthening the development knowledge now applied to web security.",
  },
  {
    org: "Aspro Technologies",
    when: "Nov 2023 — Apr 2024",
    title: "Business Development Executive",
    desc: "Supported client acquisition and lead-generation activities, building communication, outreach, and stakeholder coordination skills.",
  },
  {
    org: "Independent Projects",
    when: "Ongoing",
    title: "Cybersecurity Research & Lab Practice",
    desc: "Building security-focused projects, documenting findings, and practising vulnerability assessment in controlled environments.",
  },
];

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <Reveal className="sec-head experience-head">
          <div className="sec-top">
            <span className="sec-mark">05 / experience</span>
            <span className="sec-rule" aria-hidden="true" />
          </div>
          <h2 className="sec-title reveal--focus">
            Experience
          </h2>
          <DoodleUnderline className="title-scribble" />
          <p className="sec-lede">
            Roles, internships and hands-on training — a working log of the
            practice behind the certifications.
          </p>
        </Reveal>

        <div className="exp-track">
          <div className="exp-spine" aria-hidden="true">
            <SketchSpine />
          </div>

          <ol className="exp-list">
            {entries.map((entry, index) => (
              <Reveal
                as="li"
                key={entry.title}
                className={`exp-item exp-item--${
                  index % 2 === 0 ? "left" : "right"
                }`}
                delay={index * 70}
              >
                <span className="exp-mark" aria-hidden="true" />

                <p className="hand exp-when">{entry.when}</p>
                <p className="mono-label exp-org">{entry.org}</p>
                <h3 className="exp-title">{entry.title}</h3>
                {entry.desc ? <p className="exp-desc">{entry.desc}</p> : null}

                {entry.link && (
                  <a
                    className="hand-link exp-link"
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {entry.linkLabel} <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                )}
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="exp-tail">
          <span className="hand">the log continues</span>
          <figure className="exp-tail-art" aria-hidden="true">
            <SketchShield />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
