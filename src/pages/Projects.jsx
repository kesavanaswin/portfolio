import "./Projects.css";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { FaGithub } from "react-icons/fa";
import { DoodleUnderline } from "../components/sketches/Sketches";
import {
  SketchBrowserAudit,
  SketchLaptopTerminal,
} from "../components/sketches/CyberSketches";

const projects = [
  {
    id: "container-security-posture-management",
    title: "Container Security Posture Management (CSPM)",
    problem:
      "Bringing container misconfigurations, vulnerabilities, runtime anomalies, and risk into one security view.",
    description:
      "A modular Python framework for container security posture analysis with policy checks, vulnerability analysis, IsolationForest anomaly detection, risk scoring, and alerting.",
    stack: ["Python", "Streamlit", "Docker", "IsolationForest"],
    note: "security posture, from findings to risk",
    art: SketchBrowserAudit,
    featured: true,
  },
  {
    id: "inventory-payroll-system",
    title: "Inventory with Payroll System",
    problem:
      "Managing stock, employee records, attendance, and payroll through a single application.",
    description: "A desktop management application built with VB.NET and MySQL, covering inventory, employee management, attendance, and salary calculation.",
    stack: ["VB.NET", "MySQL", "CRUD"],
    note: "connected records, clearer workflows",
    art: SketchLaptopTerminal,
  },
];

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <Reveal className="sec-head projects-head">
          <div className="sec-top">
            <span className="sec-mark">04 / case files</span>
            <span className="sec-rule" aria-hidden="true" />
          </div>
          <h2 className="sec-title reveal--focus">
            Things <span className="accent">I've Built</span>
          </h2>
          <DoodleUnderline className="title-scribble" />
          <p className="sec-lede">
            A collection of cybersecurity, AI and web development projects.
          </p>
        </Reveal>

        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={String(index + 1).padStart(2, "0")}
              id={project.id}
              title={project.title}
              problem={project.problem}
              description={project.description}
              stack={project.stack}
              note={project.note}
              links={project.links}
              art={project.art}
              featured={project.featured}
              delay={index === 0 ? 0 : 40}
            />
          ))}
        </div>

        <Reveal className="projects-more">
          <span className="hand">{"more in the drawer \u2014"}</span>
          <a
            className="hand-link"
            href="https://github.com/kesavanaswin"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/kesavanaswin <FaGithub aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;
