"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, stagger } from "animejs";

const featuredProjects = [
  {
    index: "01",
    eyebrow: "Temporal graphs / fraud investigation",
    title: "FraudGraph",
    metric: "GRAPH",
    metricLabel: "transaction evidence",
    description: "A temporal graph fraud investigation workbench for ranking transactions, comparing model scores, and tracing shared infrastructure. The local staging release includes an analyst workspace and auditable case exports; benchmark limits are documented in the repository.",
    tags: [
      "Python",
      "GraphSAGE",
      "XGBoost",
      "FastAPI",
      "Next.js"
    ],
    facts: [
      { label: "Model", value: "GraphSAGE + XGBoost" },
      { label: "App", value: "FastAPI + Next.js" },
      { label: "Status", value: "Local staging" }
    ],
    githubHref: "https://github.com/neevj2006/FraudGraph",
    sourceLabel: "Source & setup",
    tone: "cyan"
  },
  {
    index: "02",
    eyebrow: "Code review / evidence retrieval",
    title: "SpecGuard",
    metric: "CITED",
    metricLabel: "file-and-line evidence",
    description: "A requirement-to-code review tool for JavaScript and TypeScript changes. It retrieves file-and-line evidence with BM25 and optional hybrid vector retrieval, with opt-in model assessments. This local development preview abstains when it cannot verify a claim and does not run reviewed code.",
    tags: [
      "Python",
      "TypeScript",
      "FastAPI",
      "Next.js",
      "BM25"
    ],
    facts: [
      { label: "Retrieval", value: "BM25 + hybrid" },
      { label: "Scope", value: "JS + TypeScript" },
      { label: "Status", value: "Local preview" }
    ],
    githubHref: "https://github.com/neevj2006/SpecGuard",
    sourceLabel: "Source & setup",
    tone: "coral"
  },
  {
    index: "03",
    eyebrow: "Monitoring / incident response",
    title: "DevRelay",
    metric: "201",
    metricLabel: "automated checks",
    description: "A multi-tenant monitoring and incident-response application with policy-based checks, public status pages, and retry-safe notifications. Release evidence covers 201 automated checks: 113 unit tests, 75 integration tests, and 13 Chromium scenarios. Explore the hosted demo with seeded data.",
    tags: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis / BullMQ",
      "QStash"
    ],
    facts: [
      { label: "Stack", value: "Next.js + NestJS" },
      { label: "Tests", value: "201 checks" },
      { label: "Status", value: "Live demo" }
    ],
    githubHref: "https://github.com/neevj2006/DevRelay",
    sourceLabel: "Source & setup",
    tone: "violet",
    demoHref: "https://devrelay-delta.vercel.app/"
  },
  {
    index: "04",
    eyebrow: "Race forecasting / model evaluation",
    title: "F1 Race Predictor",
    metric: "0.754",
    metricLabel: "mean Spearman · 5 test races",
    description: "A research MVP that predicts Formula 1 finishing orders before the weekend and after qualifying. The post-qualifying model averaged 0.754 Spearman correlation across five held-out 2026 races, rounds 7-11; rounds 1-6 were used for model selection. More unseen races are needed to judge performance.",
    tags: [
      "Python",
      "FastF1",
      "Ranking models",
      "Race simulation"
    ],
    facts: [
      { label: "Models", value: "Ranking + simulation" },
      { label: "Result", value: "0.754 Spearman · 5 races" },
      { label: "Status", value: "Research MVP" }
    ],
    githubHref: "https://github.com/neevj2006/F1_Race_Predictor",
    sourceLabel: "Source & results",
    tone: "coral"
  }
];

const archiveProjects = [
  {
    name: "Gideon",
    category: "Local assistant / voice + CLI",
    detail: "A Windows personal assistant with voice and command-line interfaces, direct command handling, reminders, and SQLite storage. Model requests can use Ollama locally, with optional OpenAI or OpenRouter fallback. Runs locally; setup is in the repository.",
    githubHref: "https://github.com/neevj2006/Gideon"
  },
  {
    name: "TransitPulse",
    category: "Transit data / full-stack",
    detail: "An MBTA transit application built around static GTFS imports, GTFS-Realtime polling, feed diagnostics, and Server-Sent Events. Its interface distinguishes scheduled, live, and uncertain information. Explore routes, stops, and the map in the hosted demo.",
    githubHref: "https://github.com/neevj2006/TransitPulse",
    demoHref: "https://transit-pulse-web.vercel.app"
  },
  {
    name: "Discord Clone",
    category: "Real-time communication",
    detail: "A Next.js communication app with server and channel management, real-time messaging through Socket.io, Prisma-backed data, and voice/video features through LiveKit. Source code and local setup are available on GitHub.",
    githubHref: "https://github.com/neevj2006/discord-clone"
  },
  {
    name: "Vehicle Speed Detection",
    category: "Computer vision / video tracking",
    detail: "A recorded-video workflow using YOLOv8, DeepSORT, and OpenCV to detect and track vehicles, then estimate speed from pixel displacement and a perspective-based pixel-to-meter conversion. Built for Google Colab; measurements depend on the video calibration.",
    githubHref: "https://github.com/neevj2006/Vehicle_Speed_Detection"
  }
];

const skills = {
  intelligence: [
    "Python",
    "pandas / NumPy",
    "scikit-learn",
    "PyTorch",
    "GraphSAGE / XGBoost",
    "Model evaluation",
    "BM25 / vector retrieval",
    "Ollama / LLM APIs",
    "OpenCV / YOLO"
  ],
  interfaces: [
    "TypeScript / JavaScript",
    "React / Next.js",
    "Node.js / NestJS",
    "FastAPI",
    "PostgreSQL / Prisma",
    "Redis / BullMQ",
    "WebSockets / SSE",
    "Vitest / Playwright"
  ]
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
      <a className="skip-link" href="#work">Skip to projects</a>
      <div className="scroll-progress" aria-hidden="true" />
      <NetworkField />

      <nav className="site-nav" aria-label="Portfolio navigation">
        <a className="monogram" href="#top" aria-label="Neev Jain, back to top">NJ<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Projects</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
        </div>
        <div>
          <a className="nav-resume" href="/Resume.pdf" download="Neev_Jain_AI_ML_Resume.pdf" aria-label="Download Neev Jain AI/ML resume">AI/ML resume <ArrowIcon /></a>{" "}
          <a className="nav-resume" href="/Resume-FullStack.pdf" download="Neev_Jain_FullStack_Resume.pdf" aria-label="Download Neev Jain full-stack resume">Full-stack resume <ArrowIcon /></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="live-dot" /> Boston University · Computer Engineering</div>
          <h1>
            <span>Neev</span>
            <span>Jain</span>
          </h1>
          <div className="hero-role" aria-label="AI and machine learning, and web development">
            <span>AI/ML</span><strong>x</strong><span>Web Developer</span>
          </div>
          <p className="hero-tagline">From models to working software.</p>
          <p className="hero-intro">
            I am a Computer Engineering student at Boston University, building machine learning tools and full-stack applications. I am seeking Summer 2027 internships in AI/ML and full-stack software engineering.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">See my projects <ArrowIcon /></a>
            <a className="text-link" href="#about">About my work <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="portrait-stage" aria-label="Portrait of Neev Jain">
          <div className="portrait-grid" aria-hidden="true" />
          <div className="scan-beam" aria-hidden="true" />
          <div className="data-label data-label-one" aria-hidden="true"><span>01</span> Machine learning</div>
          <div className="data-label data-label-two" aria-hidden="true"><span>02</span> Full-stack apps</div>
          <div className="data-label data-label-three" aria-hidden="true"><span>03</span> Local AI tools</div>
          <div className="portrait-frame">
            <Image
              src="/neev-jain.jpeg"
              alt="Neev Jain in glasses and a dark blazer"
              fill
              priority
              unoptimized
              sizes="(max-width: 780px) 72vw, 390px"
            />
          </div>
          <div className="portrait-meta">
            <span>B.Sc. Computer Engineering</span>
            <span>Boston University</span>
          </div>
          <div className="impact-card">
            <span>Engineering approach</span>
            <strong>BUILD → TEST</strong>
            <small>Code · evidence · clear limits</small>
          </div>
        </div>

        <div className="hero-proof" aria-label="Education facts">
          <div><strong>BU</strong><span>Computer Engineering · ML concentration</span></div>
          <div><strong>3.7/4.0</strong><span>GPA · Dean&apos;s List</span></div>
          <div><strong>DEC&apos;27</strong><span>expected graduation</span></div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>PYTHON ✦ TYPESCRIPT ✦ MACHINE LEARNING ✦ NEXT.JS ✦ FASTAPI ✦ POSTGRESQL ✦ RETRIEVAL ✦ PYTHON ✦ TYPESCRIPT ✦ MACHINE LEARNING ✦</div>
      </div>

      <section className="section work-section" id="work">
        <header className="section-header" data-reveal>
          <div><span className="section-number">01</span><span className="eyebrow">Selected projects</span></div>
          <h2>Models, tools, and <em>the software</em> around them.</h2>
        </header>

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <article
              className={`project-card ${project.tone}`}
              key={project.title}
              onPointerMove={tilt}
              onPointerLeave={resetTilt}
              data-index={project.index}
              aria-label={project.title}
              aria-describedby={`project-facts-${project.index} project-metric-${project.index} project-description-${project.index}`}
              data-reveal
            >
              <div className="project-top"><span>{project.index}</span><span>{project.eyebrow}</span><ArrowIcon /></div>
              <div className="project-visual" aria-hidden="true">
                <div className="visual-grid" />
                <div className="signal-path" id={`project-facts-${project.index}`}>
                  {project.facts.map((fact) => (
                    <div className="signal-step" key={fact.label}>
                      <small>{fact.label}</small>
                      <strong>{fact.value}</strong>
                    </div>
                  ))}
                </div>
                <div className="metric" id={`project-metric-${project.index}`}><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
              </div>
              <div className="project-copy">
                <h3><a href={project.githubHref} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub`}>{project.title}</a></h3>
                <p id={`project-description-${project.index}`}>{project.description}</p>
                <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <div className="project-actions">
                  {project.demoHref ? (
                    <a className="project-cta" href={project.demoHref} target="_blank" rel="noopener noreferrer" aria-label={`Open the ${project.title} live demo`}>
                      Live demo <ArrowIcon />
                    </a>
                  ) : null}
                  <a className="project-cta" href={project.githubHref} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub`}>
                    {project.sourceLabel} <ArrowIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="archive" data-reveal>
          <div className="archive-label"><span className="eyebrow">More projects</span><span>Code, setup, and demos</span></div>
          {archiveProjects.map(({ name, category, detail, githubHref, demoHref }, index) => (
            <article className="archive-row" key={name}>
              <span>{String(index + 5).padStart(2, "0")}</span>
              <h3><a href={githubHref} target="_blank" rel="noopener noreferrer" aria-label={`View ${name} source on GitHub`}>{name}</a></h3>
              <span>{category}</span>
              <p>
                {detail}
                <br />
                {demoHref ? (
                  <a className="text-link" href={demoHref} target="_blank" rel="noopener noreferrer" aria-label={`Open the ${name} live demo`}>Live demo <ArrowIcon /></a>
                ) : (
                  <a className="text-link" href={githubHref} target="_blank" rel="noopener noreferrer" aria-label={`View ${name} source on GitHub`}>GitHub <ArrowIcon /></a>
                )}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <header className="section-header compact" data-reveal>
          <div><span className="section-number">02</span><span className="eyebrow">About &amp; skills</span></div>
          <h2>Machine learning meets software engineering.</h2>
        </header>
        <div className="about-grid">
          <div className="about-statement" data-reveal>
            <p className="large-copy">I build models and the tools people use to work with them.</p>
            <p>I study Computer Engineering at Boston University with a machine learning concentration. My projects span fraud investigation, evidence-grounded code review, local voice tools, and real-time web applications. I am interested in internships where I can contribute across model evaluation, backend systems, and user-facing software.</p>
            <a className="text-link" href="mailto:neevj2006@gmail.com">Email me about an internship <ArrowIcon /></a>
          </div>
          <div className="skill-lab" data-reveal>
            <div className="skill-switch" role="group" aria-label="Technical skills">
              <button className={skillMode === "intelligence" ? "active" : ""} onClick={() => setSkillMode("intelligence")} aria-pressed={skillMode === "intelligence"}>AI / ML</button>
              <button className={skillMode === "interfaces" ? "active" : ""} onClick={() => setSkillMode("interfaces")} aria-pressed={skillMode === "interfaces"}>Full stack</button>
            </div>
            <div className="skill-panel" aria-live="polite">
              <div className="skill-panel-head">
                <span>Tools I use</span>
                <strong>{skillMode === "intelligence" ? "MODELS & DATA" : "WEB & SYSTEMS"}</strong>
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
          <div><span className="section-number">03</span><span className="eyebrow">Experience &amp; education</span></div>
          <h2>What I have built, and where I am learning.</h2>
        </header>
        <div className="timeline" data-reveal>
          <article>
            <div className="timeline-date">May 2026 - Present</div>
            <div><span>SportsExcitement</span><h3>Software Engineering Intern</h3></div>
            <p>Built user-facing features and backend integrations, worked on authentication flows, and added 43 automated tests. Contributed across React, Next.js, TypeScript, and Node.js in a collaborative engineering workflow.</p>
          </article>
          <article>
            <div className="timeline-date">May 2025 - Apr 2026</div>
            <div><span>SeamsFriendly · Delhi, India</span><h3>AI &amp; Machine Learning Intern</h3></div>
            <p>Built workflow automation with self-hosted n8n and Claude agents, contributed to a Next.js/PostgreSQL order-management application, and migrated the Shopify storefront to Next.js.</p>
          </article>
          <article>
            <div className="timeline-date">Expected Dec 2027</div>
            <div><span>Boston University · Boston, MA</span><h3>B.Sc. Computer Engineering</h3></div>
            <p>Machine learning concentration. GPA: 3.7/4.0. Dean&apos;s List. Building a foundation across computing, machine learning, and software systems.</p>
          </article>
        </div>
        <div className="credentials" data-reveal>
          <div><span className="eyebrow">Engineering practices</span></div>
          <article><span>Evaluation</span><h3>Report the limits</h3><p>Chronological test splits and scoped benchmark claims.</p></article>
          <article><span>Evidence</span><h3>Make work reviewable</h3><p>Source code, setup steps, and documented results.</p></article>
          <article><span>Reliability</span><h3>Test the failure paths</h3><p>Unit, integration, and browser checks.</p></article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-kicker" data-reveal><span className="live-dot" /> Summer 2027 internships · AI/ML + full stack</div>
        <h2 data-reveal>Hiring for Summer 2027?<br /><em>Let&apos;s talk.</em></h2>
        <a className="contact-email" href="mailto:neevj2006@gmail.com" aria-label="Email Neev Jain at neevj2006@gmail.com">neevj2006@gmail.com <ArrowIcon /></a>
        <div className="contact-links">
          <a href="mailto:nj2006@bu.edu" aria-label="Email Neev Jain at his BU email, nj2006@bu.edu">BU email <ArrowIcon /></a>
          <a href="https://www.linkedin.com/in/neevj2006" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowIcon /></a>
          <a href="https://github.com/neevj2006" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon /></a>
          <a href="/Resume.pdf" download="Neev_Jain_AI_ML_Resume.pdf" aria-label="Download Neev Jain AI/ML resume">AI/ML resume <ArrowIcon /></a>
          <a href="/Resume-FullStack.pdf" download="Neev_Jain_FullStack_Resume.pdf" aria-label="Download Neev Jain full-stack resume">Full-stack resume <ArrowIcon /></a>
        </div>
      </section>

      <footer>
        <span>© 2026 Neev Jain</span>
        <span>Computer Engineering at BU. Code and results linked above.</span>
        <div className="footer-links">
          <a href="https://github.com/neevj2006" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon /></a>
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </main>
  );
}
