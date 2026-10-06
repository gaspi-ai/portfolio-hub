export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  category: 'AI & ML' | 'Cloud & DevOps' | 'Fintech & Web3' | 'DevTools';
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  metrics: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // percentage 1-100
    iconName: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Elena Vance",
    role: "Principal Full-Stack & AI Systems Architect",
    status: "Available for Q4 contracts & advisory",
    location: "San Francisco, CA / Remote",
    experienceYears: "8+",
    avatar: "/avatar.jpg",
    bio: "Pioneering the intersection of distributed web architectures and production AI systems. I design, scale, and deliver resilient digital products with obsession for performance, accessibility, and visual polish.",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      email: "elena.vance@example.com",
    },
    metrics: [
      { label: "Production Apps", value: "45+", change: "+12 this year" },
      { label: "Years Experience", value: "8+", change: "Senior / Staff" },
      { label: "Community Stars", value: "12k+", change: "Open Source" },
      { label: "Uptime Reliability", value: "99.99%", change: "Mission-critical" },
    ],
  },

  projects: [
    {
      id: "neural-canvas",
      title: "Neural Canvas AI",
      tagline: "Interactive Deep Learning Architecture Playground & Real-Time Profiler",
      description: "An intuitive web-based canvas for visualizing, designing, and benchmarking complex transformer architectures. Features real-time layer tensor inspection, activation heatmaps, and one-click PyTorch/ONNX export.",
      image: "/projects/neural-canvas.jpg",
      tags: ["Next.js 15", "TypeScript", "PyTorch", "WebGL", "Tailwind CSS", "FastAPI"],
      category: "AI & ML",
      demoUrl: "https://neural-canvas-demo.vercel.app",
      githubUrl: "https://github.com/example/neural-canvas-ai",
      featured: true,
      metrics: "64% faster model debug cycle",
      highlights: [
        "Real-time WebGL canvas rendering over 100k nodes at 60 FPS",
        "Integrated dynamic gradient flow and activation tracking",
        "Distributed backend inference cluster telemetry"
      ],
    },
    {
      id: "cloud-nebula",
      title: "Kube-Observe Cloud",
      tagline: "Next-Gen Microservices Observability & eBPF Telemetry Engine",
      description: "Enterprise Kubernetes observability platform delivering sub-millisecond p99 request tracing, automated pod bottleneck detection, and predictive failover analytics.",
      image: "/projects/cloud-nebula.jpg",
      tags: ["Go", "Kubernetes", "React", "Prometheus", "eBPF", "Tailwind CSS"],
      category: "Cloud & DevOps",
      demoUrl: "https://kube-observe-preview.vercel.app",
      githubUrl: "https://github.com/example/kube-observe",
      featured: true,
      metrics: "4.2M metrics/sec processed",
      highlights: [
        "Zero-overhead kernel probes with Linux eBPF telemetry",
        "Automated root-cause analysis powered by anomaly scoring models",
        "Multi-cluster federated visualization with interactive heatmaps"
      ],
    },
    {
      id: "quantum-pay",
      title: "Alpha Terminal DEX",
      tagline: "Institutional Algorithmic Trading Workstation & Order Routing",
      description: "High-frequency algorithmic trading workstation offering sub-10ms order book updates, custom risk analytics models, and simulated execution engines for crypto derivatives.",
      image: "/projects/quantum-pay.jpg",
      tags: ["Next.js", "Rust", "WebSockets", "Tailwind CSS", "Solana", "ECharts"],
      category: "Fintech & Web3",
      demoUrl: "https://alpha-terminal.vercel.app",
      githubUrl: "https://github.com/example/alpha-terminal-dex",
      featured: true,
      metrics: "$120M+ volume simulated",
      highlights: [
        "Sub-10ms bi-directional WebSockets order stream sync",
        "Deterministic backtesting engine built in WebAssembly & Rust",
        "Hardware-accelerated candlestick charting with 100+ technical indicators"
      ],
    },
    {
      id: "agentmesh-swarm",
      title: "AgentMesh Swarm",
      tagline: "Autonomous Multi-Agent Orchestration & Evaluation Engine",
      description: "Distributed execution framework enabling heterogeneous LLM agent clusters to collaboratively decompose, debate, and execute complex engineering tasks with automated critic loops and consensus voting.",
      image: "/projects/agentmesh-swarm.jpg",
      tags: ["TypeScript", "Python", "LangGraph", "FastAPI", "Next.js 16", "vLLM"],
      category: "AI & ML",
      demoUrl: "https://agentmesh-swarm.vercel.app",
      githubUrl: "https://github.com/example/agentmesh-swarm",
      featured: true,
      metrics: "88% autonomous task success rate",
      highlights: [
        "Dynamic directed acyclic graph (DAG) scheduler handling 500+ parallel agent steps",
        "Automated critic-agent consensus protocol reducing hallucination rates by 72%",
        "Sub-50ms inter-agent message bus built on Redis Streams and gRPC"
      ],
    },
    {
      id: "aura-engine",
      title: "Aura Component Engine",
      tagline: "Accessible, Headless Design System with Generative Theme Tokens",
      description: "A comprehensive modern component architecture built with strict WCAG AAA accessibility, ergonomic TypeScript APIs, and zero runtime CSS overhead.",
      image: "/projects/neural-canvas.jpg",
      tags: ["React 19", "TypeScript", "Tailwind CSS", "Radix UI", "Storybook"],
      category: "DevTools",
      demoUrl: "https://aura-engine-docs.vercel.app",
      githubUrl: "https://github.com/example/aura-component-engine",
      featured: false,
      metrics: "8.5k+ active developers",
      highlights: [
        "100% keyboard navigability with screen reader optimized ARIA announcements",
        "Dynamic OKLCH color palette generator with automatic contrast enforcement",
        "Modular bundle footprint under 4.2kB gzipped per core component"
      ],
    },
  ] as Project[],

  skillCategories: [
    {
      title: "Frontend Engineering",
      description: "Crafting fluid, high-frame-rate user interfaces with modern React, strict type safety, and modern styling architectures.",
      skills: [
        { name: "React 19 & Next.js 15", level: 98, iconName: "Layers", description: "App Router, Server Actions, Suspense, Concurrent Mode" },
        { name: "TypeScript", level: 96, iconName: "Code2", description: "Advanced type generics, AST parsing, strict safety" },
        { name: "Tailwind CSS & Styling Systems", level: 95, iconName: "Palette", description: "Design tokens, CSS variables, fluid responsive layouts" },
        { name: "State & Data Fetching", level: 92, iconName: "Zap", description: "TanStack Query, Zustand, optimistic UI updates" },
      ],
    },
    {
      title: "Backend & Distributed Systems",
      description: "Architecting cloud-native backends capable of serving millions of concurrent requests with low latency.",
      skills: [
        { name: "Node.js & TypeScript API", level: 95, iconName: "Server", description: "High-throughput asynchronous event loops & microservices" },
        { name: "Python / FastAPI", level: 92, iconName: "Terminal", description: "Async REST & gRPC endpoints, tensor pipeline integrations" },
        { name: "PostgreSQL & Redis", level: 90, iconName: "Database", description: "Query optimization, connection pooling, cache invalidation" },
        { name: "Go & Cloud Runtimes", level: 86, iconName: "Cpu", description: "Concurrent workers, lightweight daemons, CLI tooling" },
      ],
    },
    {
      title: "AI & Machine Learning Systems",
      description: "Integrating frontier LLMs and computer vision into robust production software pipelines.",
      skills: [
        { name: "LLM Orchestration & RAG", level: 94, iconName: "BrainCircuit", description: "Hybrid vector search, function calling, agentic flows" },
        { name: "Vector Databases", level: 90, iconName: "Binary", description: "Pinecone, pgvector, Qdrant, embedding quantization" },
        { name: "Model Inference Optimization", level: 88, iconName: "Gauge", description: "vLLM, TensorRT-LLM, KV cache management" },
        { name: "Evaluation & Guardrails", level: 89, iconName: "ShieldCheck", description: "Automated regression benchmarks, semantic sanitization" },
      ],
    },
    {
      title: "Cloud, DevOps & Observability",
      description: "Ensuring zero-downtime continuous deployment and full-stack operational clarity.",
      skills: [
        { name: "Docker & Kubernetes", level: 92, iconName: "Boxes", description: "Container lifecycle, Helm, ingress controllers, autoscaling" },
        { name: "CI/CD & Infrastructure as Code", level: 90, iconName: "GitBranch", description: "GitHub Actions, Terraform, automated staging environments" },
        { name: "Observability & Tracing", level: 88, iconName: "Activity", description: "OpenTelemetry, Prometheus, Datadog dashboards" },
        { name: "Zero-Trust Security", level: 87, iconName: "Lock", description: "mTLS, OAuth2/OIDC, secrets encryption, CSP headers" },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      period: "2023 - Present",
      role: "Principal AI Systems Architect",
      company: "HyperScale Intelligence",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-Time",
      summary: "Spearheaded the core platform engineering team building generative AI agent workflows and distributed real-time visualization tools.",
      achievements: [
        "Architected real-time streaming pipeline reducing LLM time-to-first-token by 52%",
        "Led cross-functional migration to Next.js 15 App Router, boosting Lighthouse score to 99",
        "Mentored team of 14 senior engineers across distributed systems and modern UI practices"
      ],
      technologies: ["Next.js 15", "TypeScript", "Python", "Kubernetes", "OpenTelemetry", "Tailwind CSS"],
    },
    {
      period: "2021 - 2023",
      role: "Lead Full-Stack Engineer",
      company: "CloudPulse Systems",
      location: "New York, NY (Remote)",
      type: "Full-Time",
      summary: "Owned frontend and API infrastructure for the core enterprise observability product, serving Fortune 500 engineering teams.",
      achievements: [
        "Engineered real-time telemetry dashboard rendering 50k datapoints at 60fps",
        "Reduced production bundle payload by 43% through dynamic code-splitting and server components",
        "Pioneered internal design system adopted across 6 distinct micro-frontends"
      ],
      technologies: ["React", "TypeScript", "Go", "Docker", "PostgreSQL", "Tailwind CSS"],
    },
    {
      period: "2018 - 2021",
      role: "Senior Software Engineer",
      company: "Vanguard Labs",
      location: "Austin, TX",
      type: "Full-Time",
      summary: "Designed and scaled high-volume fintech web applications, real-time analytics dashboards, and developer SDKs.",
      achievements: [
        "Delivered algorithmic trading interface handling over $50M daily transactional throughput",
        "Implemented automated end-to-end testing pipeline achieving 94% regression test coverage",
        "Won internal annual engineering innovation award for low-latency WebSocket client engine"
      ],
      technologies: ["TypeScript", "Node.js", "React", "Redis", "WebSocket", "AWS"],
    },
  ] as ExperienceItem[],

  testimonials: [
    {
      quote: "Elena operates at an elite level. She can architect a fault-tolerant distributed backend in the morning and build an aesthetically breathtaking, pixel-perfect frontend in the afternoon.",
      name: "Marcus Sterling",
      role: "VP of Product",
      company: "HyperScale AI",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    {
      quote: "Her attention to detail on interaction design, typography, and performance is unmatched. Elena elevated our entire engineering standard.",
      name: "Sophia Zhang",
      role: "Chief Technology Officer",
      company: "CloudPulse Systems",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      quote: "One of the rarest engineers who pairs deep algorithmic rigor with impeccable design intuition. The systems she built for us still run flawlessly.",
      name: "David Kim",
      role: "Engineering Director",
      company: "Vanguard Labs",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
  ] as Testimonial[],
};
