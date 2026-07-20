"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, stagger } from "animejs";

const featuredProjects = [
  {
    index: "01",
    eyebrow: "Computer vision / tracking",
    title: "Vehicle Speed Detection",
    metric: "YOLO",
    metricLabel: "+ DeepSORT tracking",
    description:
      "A multi-object tracking system that detects vehicles in recorded footage and estimates real-world speed from calibrated pixel displacement.",
    tags: ["Python", "OpenCV", "YOLO", "DeepSORT"],
    visualSteps: ["Detect", "Track", "Estimate"],
    githubHref: "https://github.com/neevj2006",
    tone: "cyan",
  },
  {
    index: "02",
    eyebrow: "Voice AI / natural language",
    title: "Gideon — Voice Assistant",
    metric: "NLP",
    metricLabel: "transformer intent",
    description:
      "An AI-powered voice assistant with speech recognition, transformer-based intent understanding, custom command classification, and response generation.",
    tags: ["Python", "Speech recognition", "NLP", "Transformers"],
    visualSteps: ["Listen", "Understand", "Respond"],
    githubHref: "https://github.com/neevj2006",
    tone: "coral",
  },
  {
    index: "03",
    eyebrow: "Monitoring / incident response",
    title: "DevRelay",
    metric: "178",
    metricLabel: "automated checks",
    description:
      "A multi-tenant monitoring and incident-response SaaS with scheduled HTTP checks, policy-based outage confirmation, public status pages, and retry-safe email and webhook notifications.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Redis / BullMQ", "QStash"],
    visualSteps: ["Monitor", "Confirm", "Respond"],
    githubHref: "https://github.com/neevj2006/DevRelay",
    productionHref: "https://devrelay-delta.vercel.app/",
    tone: "violet",
  },
];

const archiveProjects = [
  ["Personalized Learning Assistant", "Adaptive ML / education", "An adaptive learning web app that uses learner performance data to recommend lessons and quizzes, track knowledge growth, and target feedback."],
  ["Discord Clone", "Full stack", "Real-time messaging and user management with WebSockets and a database model for servers, channels, and messages."],
  ["Cryptojacking Attack Analysis", "Security research", "Attack-vector and defense analysis conducted under the guidance of Professor Maria Konte at Georgia Tech."],
  ["GenZ Script", "Language design", "A Python programming language with Gen Z-inspired keywords, built with a custom lexer and parser."],
];

const skills = {
  intelligence: [
    "Python",
    "Computer Vision",
    "OpenCV",
    "NLP",
    "Transformers",
    "Model evaluation",
    "Recommendations",
    "Predictive analytics",
    "Data visualization",
  ],
  interfaces: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "WebSockets",
    "MongoDB",
    "SQL",
  ],
};

function NetworkField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let animation = 0;
    const pointer = { x: -1000, y: -1000 };
    const nodes = Array.from({ length: 42 }, (_, index) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00016,
      vy: (Math.random() - 0.5) * 0.00016,
      accent: index % 13 === 0,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      nodes.forEach((node) => {
        if (!reduced) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > 1) node.vx *= -1;
          if (node.y < 0 || node.y > 1) node.vy *= -1;
        }
      });

      for (let a = 0; a < nodes.length; a += 1) {
        const nodeA = nodes[a];
        const ax = nodeA.x * width;
        const ay = nodeA.y * height;
        for (let b = a + 1; b < nodes.length; b += 1) {
          const nodeB = nodes[b];
          const bx = nodeB.x * width;
          const by = nodeB.y * height;
          const distance = Math.hypot(ax - bx, ay - by);
          if (distance < 150) {
            context.beginPath();
            context.moveTo(ax, ay);
            context.lineTo(bx, by);
            context.strokeStyle = `rgba(86, 230, 225, ${0.13 * (1 - distance / 150)})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
        const pointerDistance = Math.hypot(ax - pointer.x, ay - pointer.y);
        if (pointerDistance < 190) {
          context.beginPath();
          context.moveTo(ax, ay);
          context.lineTo(pointer.x, pointer.y);
          context.strokeStyle = `rgba(255, 118, 95, ${0.32 * (1 - pointerDistance / 190)})`;
          context.stroke();
        }
        context.beginPath();
        context.arc(ax, ay, nodeA.accent ? 2.8 : 1.2, 0, Math.PI * 2);
        context.fillStyle = nodeA.accent ? "#ff765f" : "rgba(242, 236, 217, .68)";
        context.fill();
      }
      if (!reduced) animation = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    return () => {
      window.cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas className="network-field" ref={canvasRef} aria-hidden="true" />;
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [skillMode, setSkillMode] = useState<keyof typeof skills>("intelligence");

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animeAnimations: Array<{ revert: () => void }> = [];
    const revealVisibleBlocks = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        if (element.dataset.animated === "true") return;
        const bounds = element.getBoundingClientRect();
        if (bounds.top > window.innerHeight * 0.88 || bounds.bottom < 0) return;
        element.dataset.animated = "true";
        if (reducedMotion) {
          element.classList.add("is-visible");
          return;
        }
        animeAnimations.push(
          animate(element, {
            opacity: { from: 0, to: 1 },
            y: { from: "2.5rem", to: 0 },
            clipPath: {
              from: "inset(0 100% 0 0)",
              to: "inset(0 0% 0 0)",
            },
            duration: 950,
            ease: "outExpo",
            onComplete: () => {
              element.classList.add("is-visible");
              element.style.removeProperty("opacity");
              element.style.removeProperty("transform");
              element.style.removeProperty("clip-path");
            },
          }),
        );
      });
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", `${max > 0 ? (window.scrollY / max) * 100 : 0}%`);
      revealVisibleBlocks();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (!reducedMotion) {
      animeAnimations.push(
        animate(".hero h1 > span", {
          opacity: { from: 0 },
          y: { from: "85%" },
          rotate: { from: "3deg" },
          delay: stagger(90),
          duration: 1050,
          ease: "outExpo",
        }),
        animate(".hero-eyebrow, .hero-role, .hero-tagline, .hero-intro, .hero-actions", {
          opacity: { from: 0 },
          y: { from: "1.5rem" },
          delay: stagger(110, { start: 220 }),
          duration: 800,
          ease: "outExpo",
        }),
        animate(".portrait-stage", {
          opacity: { from: 0 },
          scale: { from: 0.86 },
          rotate: { from: "4deg" },
          duration: 1250,
          delay: 180,
          ease: "outExpo",
        }),
        animate(".scan-beam", {
          x: { from: "-120%", to: "250%" },
          duration: 4200,
          loop: true,
          ease: "linear",
        }),
        animate(".data-label", {
          opacity: { from: 0.35, to: 1 },
          y: { from: "-.35rem", to: ".35rem" },
          delay: stagger(240),
          duration: 1800,
          loop: true,
          alternate: true,
          ease: "inOutSine",
        }),
      );
    }

    return () => {
      animeAnimations.forEach((animation) => animation.revert());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animation = animate(".skill-block", {
      opacity: { from: 0 },
      scale: { from: 0.88 },
      y: { from: "1.25rem" },
      delay: stagger(55, { from: "center" }),
      duration: 620,
      ease: "outExpo",
    });
    return () => {
      animation.revert();
    };
  }, [skillMode]);

  const tilt = (event: React.PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--rx", `${((event.clientY - rect.top) / rect.height - 0.5) * -5}deg`);
    element.style.setProperty("--ry", `${((event.clientX - rect.left) / rect.width - 0.5) * 7}deg`);
  };

  const resetTilt = (event: React.PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <main>
      <a className="skip-link" href="#work">Skip to selected work</a>
      <div className="scroll-progress" aria-hidden="true" />
      <NetworkField />

      <nav className="site-nav" aria-label="Main navigation">
        <a className="monogram" href="#top" aria-label="Neev Jain, home">NJ<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
        </div>
        <a className="nav-resume" href="/Resume.pdf" download>Résumé <ArrowIcon /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="live-dot" /> Boston-based builder · BU CE ’27</div>
          <h1>
            <span>Neev</span>
            <span>Jain</span>
          </h1>
          <div className="hero-role" aria-label="Web developer and AI/ML engineer">
            <span>Web Developer</span><strong>×</strong><span>AI/ML Engineer</span>
          </div>
          <p className="hero-tagline">Engineering intelligence into interfaces.</p>
          <p className="hero-intro">
            I&apos;m <strong>Neev Jain</strong>, a web developer and AI/ML engineer building systems where thoughtful interfaces meet measurable machine intelligence.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore selected work <ArrowIcon /></a>
            <a className="text-link" href="#about">More about me <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="portrait-stage" aria-label="Portrait of Neev Jain">
          <div className="portrait-grid" aria-hidden="true" />
          <div className="scan-beam" aria-hidden="true" />
          <div className="data-label data-label-one" aria-hidden="true"><span>01</span> Computer vision</div>
          <div className="data-label data-label-two" aria-hidden="true"><span>02</span> Web systems</div>
          <div className="data-label data-label-three" aria-hidden="true"><span>03</span> Automation</div>
          <div className="portrait-frame">
            <Image
              src="/neev-jain.jpeg"
              alt="Neev Jain wearing glasses and a dark blazer"
              fill
              priority
              unoptimized
              sizes="(max-width: 780px) 72vw, 390px"
            />
          </div>
          <div className="portrait-meta">
            <span>Computer Engineering</span>
            <span>Boston University</span>
          </div>
          <div className="impact-card">
            <span>Working principle</span>
            <strong>IDEA→SYSTEM</strong>
            <small>Intelligent · useful · human-centered</small>
          </div>
        </div>

        <div className="hero-proof" aria-label="Key facts">
          <div><strong>30%</strong><span>workflow improvement</span></div>
          <div><strong>3.7/4.0</strong><span>GPA / Dean&apos;s List</span></div>
          <div><strong>6</strong><span>featured projects</span></div>
          <div><strong>DEC ’27</strong><span>expected graduation</span></div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>PYTHON ✦ REACT ✦ COMPUTER VISION ✦ NEXT.JS ✦ NLP ✦ WEBSOCKETS ✦ OPENCV ✦ PYTHON ✦ REACT ✦ COMPUTER VISION ✦</div>
      </div>

      <section className="section work-section" id="work">
        <header className="section-header" data-reveal>
          <div><span className="section-number">01</span><span className="eyebrow">Selected systems</span></div>
          <h2>Work that moves from <em>experiment</em> to evidence.</h2>
        </header>

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <article
              className={`project-card ${project.tone}`}
              key={project.title}
              onPointerMove={tilt}
              onPointerLeave={resetTilt}
              data-index={project.index}
              data-reveal
            >
              <div className="project-top"><span>{project.index}</span><span>{project.eyebrow}</span><ArrowIcon /></div>
              <div className="project-visual" aria-hidden="true">
                <div className="visual-grid" />
                <div className="signal-path">
                  {project.visualSteps.map((step, index) => (
                    <div className="signal-step" key={step}>
                      <small>{String(index + 1).padStart(2, "0")}</small>
                      <strong>{step}</strong>
                      {index < project.visualSteps.length - 1 ? <span>→</span> : null}
                    </div>
                  ))}
                </div>
                <div className="metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
              </div>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <div className="project-actions">
                  {project.productionHref ? (
                    <a className="project-cta" href={project.productionHref} target="_blank" rel="noreferrer">
                      View production <ArrowIcon />
                    </a>
                  ) : null}
                  <a className="project-cta" href={project.githubHref} target="_blank" rel="noreferrer">
                    View GitHub <ArrowIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="archive" data-reveal>
          <div className="archive-label"><span className="eyebrow">Project archive</span><span>From the résumé</span></div>
          {archiveProjects.map(([name, category, detail], index) => (
            <article className="archive-row" key={name}>
              <span>{String(index + 4).padStart(2, "0")}</span>
              <h3>{name}</h3>
              <span>{category}</span>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <header className="section-header compact" data-reveal>
          <div><span className="section-number">02</span><span className="eyebrow">Capability lab</span></div>
          <h2>One engineer, two connected modes.</h2>
        </header>
        <div className="about-grid">
          <div className="about-statement" data-reveal>
            <p className="large-copy">I build intelligent systems that bridge software engineering and artificial intelligence.</p>
            <p>My interests span machine learning, computer vision, automation, and real-time web applications—with a focus on turning ideas into scalable, useful, and human-centered technology.</p>
            <a className="text-link" href="mailto:neevj2006@gmail.com">Start a conversation <ArrowIcon /></a>
          </div>
          <div className="skill-lab" data-reveal>
            <div className="skill-switch" role="group" aria-label="Skill category">
              <button className={skillMode === "intelligence" ? "active" : ""} onClick={() => setSkillMode("intelligence")} aria-pressed={skillMode === "intelligence"}>Intelligence</button>
              <button className={skillMode === "interfaces" ? "active" : ""} onClick={() => setSkillMode("interfaces")} aria-pressed={skillMode === "interfaces"}>Interfaces</button>
            </div>
            <div className="skill-panel" aria-live="polite">
              <div className="skill-panel-head">
                <span>Active capability set</span>
                <strong>{skillMode === "intelligence" ? "AI / ML" : "WEB"}</strong>
              </div>
              <div className="skill-blocks">
              {skills[skillMode].map((skill, index) => (
                <span className="skill-block" key={skill}><small>{String(index + 1).padStart(2, "0")}</small>{skill}</span>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <header className="section-header compact" data-reveal>
          <div><span className="section-number">03</span><span className="eyebrow">Experience</span></div>
          <h2>Learning by shipping.</h2>
        </header>
        <div className="timeline" data-reveal>
          <article>
            <div className="timeline-date">May — Aug 2025</div>
            <div><span>SeamsFriendly · Delhi, India</span><h3>AI Automation Intern</h3></div>
            <p>Built AI-assisted Python automation pipelines across inventory, order processing, and team communication, reducing manual handling and turnaround time by more than 30%.</p>
          </article>
          <article>
            <div className="timeline-date">Apr — May 2022</div>
            <div><span>TalentHome Solutions LLP · Mumbai</span><h3>Student Intern</h3></div>
            <p>Collaborated in a four-person team on career-guidance web applications, contributing across front-end and back-end functionality.</p>
          </article>
          <article>
            <div className="timeline-date">Expected Dec 2027</div>
            <div><span>Boston University · Boston</span><h3>B.E. Computer Engineering</h3></div>
            <p>Dean&apos;s List student with a 3.7/4.0 GPA, focused on systems that connect software engineering, data, and intelligent behavior.</p>
          </article>
        </div>
        <div className="credentials" data-reveal>
          <div><span className="eyebrow">Certifications</span></div>
          <article><span>Aug 2022</span><h3>Web Development Bootcamp</h3><p>Udemy</p></article>
          <article><span>Jul 2021</span><h3>Python</h3><p>Code With Mosh</p></article>
          <article><span>Jul 2021</span><h3>SQL</h3><p>Code With Mosh</p></article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-kicker" data-reveal><span className="live-dot" /> Web development · AI/ML engineering · Boston</div>
        <h2 data-reveal>Have a hard problem?<br /><em>Let&apos;s make it move.</em></h2>
        <a className="contact-email" href="mailto:neevj2006@gmail.com">neevj2006@gmail.com <ArrowIcon /></a>
        <div className="contact-links">
          <a href="mailto:nj2006@bu.edu">BU email <ArrowIcon /></a>
          <a href="https://www.linkedin.com/in/neevj2006" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
          <a href="https://github.com/neevj2006" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
          <a href="/Resume.pdf" download>Résumé <ArrowIcon /></a>
        </div>
      </section>

      <footer>
        <span>© 2026 Neev Jain</span>
        <span>Designed around evidence, built with motion.</span>
        <div className="footer-links">
          <a href="https://github.com/neevj2006" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
