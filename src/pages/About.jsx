import "./About.css";
import Reveal from "../components/Reveal";
import {
  DoodleArrow,
  DoodleCircle,
  DoodleUnderline,
} from "../components/sketches/Sketches";
import { SketchSecurityNotebook } from "../components/sketches/CyberSketches";
import SkillSignature from "../components/SkillSignature";

const interests = [
  "Ethical Hacking",
  "Vulnerability Assessment",
  "Web Application Security",
  "Network Security",
  "Python / Scripting",
  "Secure Coding",
];

const skillGroups = [
  {
    label: "Security & Testing",
    items: [
      "OWASP Top 10",
      "Nmap",
      "Wireshark",
      "Web Application Security",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Secure Coding",
      "Threat Analysis",
      "Security Reporting",
    ],
  },
  {
    label: "Networking & Systems",
    items: ["Linux (Ubuntu)", "Networking", "TCP/IP", "DNS", "Wireshark", "Network Security Monitoring"],
  },
  {
    label: "Programming & Development",
    items: [
      "Python",
      "PHP",
      "C++",
      "VB.NET",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    label: "Security Operations",
    items: [
      "Cyber Defence",
      "Threat Analysis",
      "Security Operations Workflows",
      "Technical Documentation",
    ],
  },
];

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <Reveal className="sec-head about-head">
          <div className="sec-top">
            <span className="sec-mark">02 / about me</span>
            <span className="sec-rule" aria-hidden="true" />
          </div>
          <h2 className="sec-title reveal--focus">
            Break It <span className="accent">to Understand It</span>
          </h2>
          <DoodleUnderline className="title-scribble" />
        </Reveal>

        <div className="about-composition">
          <div className="about-bio">
            <Reveal as="p">
              I approach cybersecurity with a developer’s perspective. After building a foundation in frontend development during my BCA, I began focusing on ethical hacking, vulnerability assessment, and web application security. I’m pursuing an MSc in Cyber Security and learning to connect application code, business logic, and common implementation mistakes with practical security findings.
            </Reveal>

            <Reveal as="p" delay={80}>
              My hands-on training with Prodigy InfoTech introduced me to OWASP Top 10 issues, including XSS, SQL injection, and broken authentication in sample applications. I documented findings and remediation recommendations, with a focus on explaining risk clearly.
            </Reveal>

            <Reveal as="p" delay={140}>
              I’m currently targeting internships and entry-level opportunities in SOC operations, vulnerability assessment and penetration testing (VAPT), and web application security. I’m open to remote work and relocation.
            </Reveal>

            <Reveal className="about-annotation" delay={200}>
              <DoodleArrow className="about-arrow" />
              <span className="hand">two sides, one habit</span>
            </Reveal>
          </div>

          <div className="about-side">
            <Reveal
              as="aside"
              className="about-facts"
              delay={120}
              aria-label="Education and focus"
            >
              <p className="hand about-facts-title">the short version</p>

              <dl className="about-fact-list">
                <div className="about-fact">
                  <dt>education</dt>
                  <dd>MSc Cyber Security  · BCA </dd>
                </div>
                <div className="about-fact">
                  <dt>focus</dt>
                  <dd>Ethical Hacking · VAPT · Web Security</dd>
                </div>
                <div className="about-fact">
                  <dt>based in</dt>
                  <dd>Tamil Nadu, India</dd>
                </div>
                <div className="about-fact">
                  <dt>languages</dt>
                  <dd>Tamil · English</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>

        <Reveal className="about-block about-interests">
          <p className="hand about-block-title">interests</p>
          <div className="about-interest-layout">
            <ul className="interest-list">
              {interests.map((item, idx) => (
                <li key={item} className="interest-item">
                  <span className="interest-num" aria-hidden="true">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="interest-text">{item}</span>
                </li>
              ))}
            </ul>
            <Reveal as="figure" className="about-hack-art" delay={100} aria-hidden="true">
              <SketchSecurityNotebook />
            </Reveal>
          </div>
        </Reveal>

        <Reveal className="about-block about-skills">
          <p className="hand about-block-title">technical skills</p>

          <SkillSignature />

          <p className="mono-label skill-index-label">tools and topics / index</p>

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <section className="skill-group" key={group.label}>
                <h3>
                  {group.label}
                  <span className="skill-rule" aria-hidden="true" />
                </h3>
                <ul className="skill-list">
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="hand about-skills-note">all of it, still in progress</p>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
