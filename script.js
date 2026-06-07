const portfolioData = {
  roles: [
    "Generative AI Engineer",
    "NLP Researcher",
    "Deep Learning Builder",
    "Full Stack Developer",
  ],
  skills: [
    { name: "Java", level: 95 },
    { name: "Python", level: 70 },
    { name: "C++", level: 80 },
    { name: "JavaScript", level: 50 },
    { name: "React", level: 50 },
    { name: "Node.js", level: 50 },
    { name: "MongoDB", level: 80 },
    { name: "AI/ML", level: 95 },
    { name: "Deep Learning", level: 90 },
    { name: "NLP", level: 80 },
    { name: "Git/GitHub", level: 90 },
  ],
  experience: [
    {
      date: "2025",
      title: "Gen AI Intern",
      company: "IBM",
      description:
        "Built generative AI solutions and optimized NLP pipelines for enterprise automation and research applications.",
    },
    {
      date: "2024",
      title: "AI Research Project",
      company: "VIT Amaravati",
      description:
        "Developed transformer-based models for contextual question answering and NLP-driven data insights.",
    },
    {
      date: "2023",
      title: "Full Stack Developer",
      company: "Personal Portfolio",
      description:
        "Designed and shipped a modern AI-focused portfolio with interactive UX, responsive design, and performance optimizations.",
    },
  ],
  projects: [
    {
      title: "AI Portfolio Website",
      description:
        "A polished AI/ML portfolio combining modern glassmorphism design, smooth animations, and dynamic content.",
      tags: ["AI/ML", "Web", "React-ready"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/naveen457/personal-portfolio",
        },
        {
          label: "Live Demo",
          href: "https://personal-portfolio-pi-navy.vercel.app/",
        },
      ],
    },
    {
      title: "3D Object Detection",
      description:
        "Implemented real-time 3D detection using YOLO and depth estimation for immersive machine perception.",
      tags: ["Deep Learning", "Computer Vision"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/naveen457/Real-Time-3D-Object-Detection",
        },
      ],
    },
    {
      title: "Medical Chatbot",
      description:
        "Built an intent-aware healthcare assistant with IBM Watsonx for improved medical query understanding.",
      tags: ["NLP", "AI", "Chatbot"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/naveen457/medical_chatbot",
        },
        {
          label: "Live Demo",
          href: "https://medical-chatbot-liard-tau.vercel.app/",
        },
      ],
    },
  ],
  interests: [
    "Generative AI research and prompt engineering",
    "LLMs for conversational intelligence",
    "Deep learning model design and training",
    "NLP systems for semantic understanding",
    "AI-powered web and SaaS products",
    "Open source collaboration and contribution",
  ],
  certifications: [
    { title: "IBM Gen AI Internship", provider: "IBM" },
    { title: "Python for Data Science", provider: "Cognitive Classes" },
    { title: "AI & Machine Learning Fundamentals", provider: "Coursera" },
  ],
  resumeTimeline: [
    {
      year: "2026",
      role: "AI/ML Growth",
      detail:
        "Expanding AI product capabilities, building scalable LLM-powered experiences, and improving model deployment workflows.",
    },
    {
      year: "2025",
      role: "Gen AI Internship",
      detail:
        "Delivered generative AI proof-of-concepts at IBM and contributed to enterprise AI infrastructure.",
    },
    {
      year: "2024",
      role: "Research & Projects",
      detail:
        "Published advanced NLP research prototypes and led AI-driven project development for web applications.",
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
  portfolioData.skills.forEach((skill) => {
    const card = document.createElement("article");
    card.className = "skill-card reveal-up";
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
  items.forEach((item) => {
    const element = document.createElement("article");
    element.className = "timeline-item reveal-up";
    element.innerHTML = `
      <time>${item.date || item.year}</time>
      <h3>${item.title || item.role}</h3>
      <p>${item.company || item.detail}</p>
      ${item.description ? `<p>${item.description}</p>` : ""}
    `;
    container.appendChild(element);
  });
}

function buildProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  portfolioData.projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card reveal-up";
    const tags = project.tags
      .map((tag) => `<span class="project-tag">${tag}</span>`)
      .join("");
    const links = project.links
      .map(
        (link) =>
          `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`,
      )
      .join("");

    card.innerHTML = `
      <div class="project-card-content">
        <h3>${project.title}</h3>
        <div class="project-tags">${tags}</div>
        <p>${project.description}</p>
        <div class="project-links">${links}</div>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

function buildCards(sectionId, items, cardClass) {
  const container = document.getElementById(sectionId);
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = `${cardClass} reveal-up`;
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.provider}</p>
    `;
    container.appendChild(card);
  });
}

function buildInterests() {
  const container = document.getElementById("ai-interests-list");
  portfolioData.interests.forEach((interest) => {
    const card = document.createElement("article");
    card.className = "interest-card reveal-up";
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
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  if (window.scrollY > 420) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
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
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.classList.toggle("open");
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "Thanks! Your message is queued and ready to send.";
    form.reset();
  });
}

function initBackToTop() {
  const button = document.getElementById("back-to-top");
  button.addEventListener("click", () => {
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
  buildProjects();
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
