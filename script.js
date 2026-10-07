const portfolioData = {
  roles: [
    "Agentic AI & LLM Systems Architect",
    "Multi-Agent & Meta-RL Researcher",
    "Deep Learning & Vision Engineer",
    "Full Stack AI Developer (React / FastAPI)",
  ],
  skills: [
    { name: "Python (AI / ML Core)", level: 90 },
    { name: "LangGraph & Multi-Agent", level: 92 },
    { name: "PyTorch & Deep Learning", level: 90 },
    { name: "LangChain & RAG Pipelines", level: 95 },
    { name: "Model Context Protocol (MCP)", level: 88 },
    { name: "Full Stack (React, Node, Express)", level: 84 },
    { name: "MongoDB & Database Systems", level: 80 },
    { name: "Java ", level: 95 },
    { name: "Git, GitHub & CI/CD", level: 95 },
  ],
  experience: [
    {
      date: "2025 - Present",
      title: "Gen AI & Multi-Agent Researcher",
      company: "Independent & Open Source",
      description:
        "Architecting autonomous multi-agent systems, Meta-RL coordination architectures, and custom Model Context Protocol (MCP) ecosystems. Built and deployed the Astrix production workspace platform.",
    },
    {
      date: "2025",
      title: "Gen AI Intern",
      company: "IBM",
      description:
        "Built generative AI solutions and intent-aware NLP pipelines with IBM Watsonx for enterprise automation and medical query intelligence.",
    },
    {
      date: "2024",
      title: "AI & Computer Vision Researcher",
      company: "VIT Amaravati",
      description:
        "Researched monocular 3D-aware object detection using Faster R-CNN, transformer-based contextual QA systems, and VizDoom reinforcement learning policies.",
    },
    {
      date: "2023 - 2024",
      title: "Full Stack Developer",
      company: "Personal & Web Projects",
      description:
        "Engineered modern responsive web experiences, authentication systems, and cloud-hosted portfolio platforms with performance-first design.",
    },
  ],
  projects: [
    {
      title: "Astrix AI & Full-Stack Workspace",
      category: "fullstack",
      badge: "Live Production App",
      badgeType: "live",
      description:
        "Production full-stack workspace and authentication platform. Features React 19, Vite, Express, and MongoDB, complete with Resend email OTP verification, password reset workflows, and Google/GitHub OAuth.",
      tags: ["React 19", "Vite", "Node.js", "Express", "MongoDB", "OAuth", "REST API"],
      links: [
        {
          label: "Live Demo",
          href: "https://astrix-app.me",
          type: "external",
          primary: true,
        },
        {
          label: "GitHub",
          href: "https://github.com/naveen457/AI-WORKSPACE",
          type: "github",
        },
      ],
    },
    {
      title: "Adaptive Multi-Agent System (Capstone)",
      category: "agents",
      badge: "Featured Capstone",
      badgeType: "featured",
      description:
        "Autonomous multi-agent framework designed for dynamic goal decomposition, multi-step planning, and intelligent task execution leveraging Retrieval-Augmented Generation (RAG) and vector knowledge bases.",
      tags: ["LangGraph", "LangChain", "Multi-Agent", "RAG", "Autonomous Planning", "Python"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/naveen457/Capstone-MultiAIAgentSystem",
          type: "github",
          primary: true,
        },
      ],
    },
    {
      title: "Meta-RL Adaptive Multi-Agent Architecture",
      category: "agents",
      badge: "AI Research",
      badgeType: "featured",
      description:
        "Research architecture implementing Meta-Reinforcement Learning for LLM-based multi-agent networks. Dynamically optimizes agent communication topologies, collaboration strategies, and rapid policy adaptation.",
      tags: ["Meta-RL", "LangGraph", "PyTorch", "FastAPI", "Multi-Agent", "Python 3.10+"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/naveen457/RL-based-adaptive-MAS",
          type: "github",
          primary: true,
        },
      ],
    },
    {
      title: "Efficient PPO Deep RL Agent in VizDoom",
      category: "rl-cv",
      badge: "Deep RL",
      badgeType: "featured",
      description:
        "Deep Reinforcement Learning agent leveraging Proximal Policy Optimization (PPO) in the VizDoom 3D environment. Learns tactical decision-making directly from raw visual frames with model checkpointing for accelerated convergence.",
      tags: ["Deep RL", "PPO", "VizDoom", "PyTorch", "Gymnasium", "Computer Vision"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/naveen457/VizDoom",
          type: "github",
          primary: true,
        },
      ],
    },
    {
      title: "Real-Time 3D-Aware Object Detection",
      category: "rl-cv",
      badge: "Computer Vision",
      badgeType: "featured",
      description:
        "3D spatial object detection fusing monocular depth estimation (NYU Depth) with Faster R-CNN (ResNet50-FPN) on COCO 2017. Predicts real-time 3D geometry and metric spatial distances from monocular video cameras.",
      tags: ["Faster R-CNN", "ResNet50", "Monocular Depth", "PyTorch", "COCO", "OpenCV"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/naveen457/Real-Time-3D-Object-Detection",
          type: "github",
          primary: true,
        },
      ],
    },
    {
      title: "Model Context Protocol (MCP) Ecosystem",
      category: "fullstack",
      badge: "Protocol & Tooling",
      badgeType: "featured",
      description:
        "End-to-end implementation of Anthropic's Model Context Protocol (MCP). Features custom client drivers for remote MCP server communication and servers integrating Manim mathematical animations for agents.",
      tags: ["MCP SDK", "Python", "JSON-RPC", "Manim Engine", "AsyncIO", "Agent Tooling"],
      links: [
        {
          label: "MCP Server",
          href: "https://github.com/naveen457/MCP",
          type: "github",
          primary: true,
        },
        {
          label: "MCP Client",
          href: "https://github.com/naveen457/mcp-client",
          type: "github",
        },
      ],
    },
    {
      title: "Agentic AI Frameworks & Observability",
      category: "agents",
      badge: "Agentic Stack",
      badgeType: "featured",
      description:
        "Comprehensive suite of agent implementations: cyclic state graphs with LangGraph, tool-augmented reasoning chains with LangChain, and production-grade LLM tracing, error isolation, and latency evaluation with LangSmith.",
      tags: ["LangGraph", "LangChain", "LangSmith", "LLM Tracing", "RAG Evaluation"],
      links: [
        {
          label: "LangGraph",
          href: "https://github.com/naveen457/LangGraph",
          type: "github",
          primary: true,
        },
        {
          label: "LangChain",
          href: "https://github.com/naveen457/LangChain",
          type: "github",
        },
        {
          label: "LangSmith",
          href: "https://github.com/naveen457/LangSmith",
          type: "github",
        },
      ],
    },
    {
      title: "Medical Intent AI Chatbot",
      category: "agents",
      badge: "Live Demo",
      badgeType: "live",
      description:
        "Conversational healthcare assistant built with IBM Watsonx and intent-aware NLP for clinical query triage, symptom guidance, and interactive medical information dissemination.",
      tags: ["NLP", "IBM Watsonx", "Healthcare AI", "JavaScript", "Vercel"],
      links: [
        {
          label: "Live Demo",
          href: "https://medical-chatbot-liard-tau.vercel.app/",
          type: "external",
          primary: true,
        },
        {
          label: "GitHub",
          href: "https://github.com/naveen457/medical_chatbot",
          type: "github",
        },
      ],
    },
    {
      title: "ML Challenge & Predictive Modeling Suite",
      category: "rl-cv",
      badge: "Machine Learning",
      badgeType: "featured",
      description:
        "Competitive machine learning solutions featuring high-performance feature engineering pipelines, stratified cross-validation architectures, and ensemble gradient boosting (XGBoost) for predictive benchmarks.",
      tags: ["Scikit-Learn", "XGBoost", "Feature Engineering", "Data Pipelines", "Python"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/naveen457/ML-CHALLENGE",
          type: "github",
          primary: true,
        },
      ],
    },
    {
      title: "Modern Glassmorphic AI Portfolio",
      category: "fullstack",
      badge: "Live Portfolio",
      badgeType: "live",
      description:
        "Responsive, dynamic personal web portfolio featuring dark-mode glassmorphism, reactive category filtering, live GitHub project synchronization, and fluid interactive animations.",
      tags: ["HTML5", "CSS3 Glassmorphism", "Vanilla JavaScript", "Responsive UI", "Vercel"],
      links: [
        {
          label: "Live Demo",
          href: "https://personal-portfolio-pi-navy.vercel.app/",
          type: "external",
          primary: true,
        },
        {
          label: "GitHub",
          href: "https://github.com/naveen457/personal-portfolio",
          type: "github",
        },
      ],
    },
  ],
  interests: [
    "Adaptive Multi-Agent Frameworks & Autonomous Planning",
    "Meta-Reinforcement Learning for Dynamic Agent Coordination",
    "Model Context Protocol (MCP) & Custom Agent Tooling",
    "Cyclic State Graphs with LangGraph & Tool Chaining",
    "Deep Reinforcement Learning (PPO in VizDoom 3D)",
    "Computer Vision & 3D Monocular Spatial Perception",
    "Production Full-Stack AI Platforms (Astrix, React, FastAPI)",
    "LLM Observability, Telemetry & RAG Tracing (LangSmith)",
  ],
  certifications: [
    { title: "IBM Gen AI Internship", provider: "IBM" },
    { title: "Python for Data Science", provider: "Cognitive Classes" },
    { title: "AI & Machine Learning Fundamentals", provider: "Coursera" },
  ],
  resumeTimeline: [
    {
      year: "2026",
      role: "Agentic AI & Systems Engineering",
      detail:
        "Architecting adaptive multi-agent coordination frameworks (LangGraph, Meta-RL), expanding MCP server ecosystems, and shipping production SaaS applications.",
    },
    {
      year: "2025",
      role: "Gen AI Internship & Multi-Agent Research",
      detail:
        "Completed IBM Gen AI internship with Watsonx; engineered Capstone autonomous multi-agent RAG system and launched Astrix full-stack application.",
    },
    {
      year: "2024",
      role: "Deep Learning & Reinforcement Learning",
      detail:
        "Researched monocular 3D spatial perception with Faster R-CNN, implemented VizDoom PPO reinforcement learning agents, and achieved 9.00 CGPA at VIT Amaravati.",
    },
  ],
};

const typingElement = document.getElementById("typing-text");
const roleTexts = portfolioData.roles;

let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRoles() {
  const current = roleTexts[typingIndex];
  const displayed = current.slice(0, charIndex);
  typingElement.textContent = displayed;

  if (!isDeleting && charIndex <= current.length) {
    charIndex += 1;
  } else if (isDeleting && charIndex >= 0) {
    charIndex -= 1;
  }

  if (charIndex === current.length + 1) {
    isDeleting = true;
    setTimeout(typeRoles, 1200);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typingIndex = (typingIndex + 1) % roleTexts.length;
  }

  const delay = isDeleting ? 45 : 90;
  setTimeout(typeRoles, delay);
}

function buildSkills() {
  const skillsGrid = document.getElementById("skills-grid");
  skillsGrid.innerHTML = "";
  portfolioData.skills.forEach((skill) => {
    const card = document.createElement("article");
    card.className = "skill-card reveal-up reveal-visible";
    card.innerHTML = `
      <h3>${skill.name}</h3>
      <div class="skill-progress"><span style="width: ${skill.level}%;"></span></div>
      <p>${skill.level}% proficiency</p>
    `;
    skillsGrid.appendChild(card);
  });
}

function buildTimeline(sectionId, items) {
  const container = document.getElementById(sectionId);
  container.innerHTML = "";
  items.forEach((item) => {
    const element = document.createElement("article");
    element.className = "timeline-item reveal-up reveal-visible";
    element.innerHTML = `
      <time>${item.date || item.year}</time>
      <h3>${item.title || item.role}</h3>
      <p>${item.company || item.detail}</p>
      ${item.description ? `<p>${item.description}</p>` : ""}
    `;
    container.appendChild(element);
  });
}

const githubSvg = `<svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>`;
const externalSvg = `<svg viewBox="0 0 16 16"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2zm6.5 0h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V4.56L8.53 9.03a.75.75 0 0 1-1.06-1.06l4.47-4.47h-1.69a.75.75 0 0 1 0-1.5z"></path></svg>`;

function buildProjects(filter = "all") {
  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = "";

  const filteredProjects =
    filter === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === filter);

  filteredProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card reveal-up reveal-visible";
    const tags = project.tags
      .map((tag) => `<span class="project-tag">${tag}</span>`)
      .join("");
    const links = project.links
      .map(
        (link) =>
          `<a href="${link.href}" target="_blank" rel="noreferrer" class="${link.primary ? "primary-link" : ""}">
            ${link.type === "github" ? githubSvg : externalSvg}
            <span>${link.label}</span>
          </a>`,
      )
      .join("");

    const badgeHtml = project.badge
      ? `<span class="project-badge ${project.badgeType === "live" ? "live" : ""}">${project.badge}</span>`
      : "";

    card.innerHTML = `
      <div class="project-card-content">
        <div class="project-card-header">
          <h3>${project.title}</h3>
          ${badgeHtml}
        </div>
        <div class="project-tags">${tags}</div>
        <p>${project.description}</p>
        <div class="project-links">${links}</div>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".projects-filter-bar .filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      buildProjects(category);
    });
  });
}

function buildCards(sectionId, items, cardClass) {
  const container = document.getElementById(sectionId);
  container.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = `${cardClass} reveal-up reveal-visible`;
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.provider}</p>
    `;
    container.appendChild(card);
  });
}

function buildInterests() {
  const container = document.getElementById("ai-interests-list");
  container.innerHTML = "";
  portfolioData.interests.forEach((interest) => {
    const card = document.createElement("article");
    card.className = "interest-card reveal-up reveal-visible";
    card.innerHTML = `<h3>${interest}</h3>`;
    container.appendChild(card);
  });
}

function createRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  document.querySelectorAll(".reveal-up, .reveal-right").forEach((element) => {
    observer.observe(element);
  });
}

function handleScrollEffects() {
  const header = document.querySelector(".site-header");
  const backToTop = document.getElementById("back-to-top");
  if (window.scrollY > 40) {
    header?.classList.add("scrolled");
  } else {
    header?.classList.remove("scrolled");
  }
  if (window.scrollY > 420) {
    backToTop?.classList.add("show");
  } else {
    backToTop?.classList.remove("show");
  }
}

function highlightNavOnScroll() {
  const sections = document.querySelectorAll("main section[id]");
  const scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (scrollPos >= top && scrollPos < top + height) {
      link?.classList.add("active");
    } else {
      link?.classList.remove("active");
    }
  });
}

function initMobileNavigation() {
  const toggle = document.getElementById("mobile-toggle");
  const nav = document.getElementById("site-nav");
  toggle?.addEventListener("click", () => {
    nav?.classList.toggle("open");
    toggle?.classList.toggle("open");
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav?.classList.remove("open");
      toggle?.classList.remove("open");
    });
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (status) {
      status.textContent = "Thanks! Your message is queued and ready to send.";
    }
    form.reset();
  });
}

function initBackToTop() {
  const button = document.getElementById("back-to-top");
  button?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function hideLoader() {
  const loader = document.getElementById("page-loader");
  loader?.classList.add("hidden");
  setTimeout(() => loader?.remove(), 600);
}

function initPortfolio() {
  buildSkills();
  buildTimeline("experience-timeline", portfolioData.experience);
  buildProjects("all");
  initProjectFilters();
  buildCards(
    "certifications-list",
    portfolioData.certifications,
    "certification-card",
  );
  buildTimeline("resume-timeline", portfolioData.resumeTimeline);
  buildInterests();
  createRevealObserver();
  initMobileNavigation();
  initContactForm();
  initBackToTop();
  handleScrollEffects();
  highlightNavOnScroll();
  typeRoles();

  window.addEventListener("scroll", () => {
    handleScrollEffects();
    highlightNavOnScroll();
  });
  window.addEventListener("load", hideLoader);
}

document.addEventListener("DOMContentLoaded", initPortfolio);
