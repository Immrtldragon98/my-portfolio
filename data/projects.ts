export type Project = { slug: string; title: string; category: string; status: string; summary: string; stack: string[]; problem: string; work: string[]; lesson: string; next: string; repo?: string };

export const projects: Project[] = [
  {
    "slug": "market-memory",
    "title": "Market Memory Pro",
    "category": "Trading systems",
    "status": "Active development",
    "summary": "A focused market journal and alerts workspace that turns observations into a reviewable decision history.",
    "stack": [
      "Python",
      "FastAPI",
      "C++",
      "JavaScript",
      "PostgreSQL"
    ],
    "problem": "Trading observations lose their context when prices, decisions and lessons live in separate places.",
    "work": [
      "Built a journal and alert workflow around captured observations and structured decision reviews.",
      "Evolved the backend toward validation, idempotency, transactions and a native C++ calculation module.",
      "Extended the discovery experience toward asset search, watchlists and capture actions."
    ],
    "lesson": "Reliability starts with explicit data contracts and reproducible decisions. A paper workflow is not a live brokerage system.",
    "next": "Continue validating provider coverage, live-price freshness and operational behavior. No real broker execution is claimed.",
    "repo": "https://github.com/logan9e7/Market_memory_pro"
  },
  {
    "slug": "humanos",
    "title": "HumanOS",
    "category": "Applied AI / ML",
    "status": "Active development",
    "summary": "A conversation-first memory experiment with evidence-linked hypotheses and a clear correction loop.",
    "stack": [
      "TypeScript",
      "React",
      "Cloudflare Workers",
      "D1",
      "scikit-learn"
    ],
    "problem": "A useful personal model must distinguish a passing mood from a lasting preference and remain open to correction.",
    "work": [
      "Developed a server-side catalog of 50 parameters with per-user records and versioned hypotheses.",
      "Added a trained GoEmotions text classifier and optional structured provider inference.",
      "Designed consent, memory controls, export and correction-versus-change feedback."
    ],
    "lesson": "Unknowns should remain unknown. Text classification scores are not clinical assessments or validated personality measurements.",
    "next": "Evaluate usefulness and inference quality with users; the repository documents a publication gap for version 1.1.0.",
    "repo": "https://github.com/logan9e7/HumanOS"
  },
  {
    "slug": "hypeframe",
    "title": "Hypeframe",
    "category": "Consumer product",
    "status": "Active development",
    "summary": "An anime moments discovery product exploring search, clip previews and community submissions.",
    "stack": [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Supabase",
      "YouTube API"
    ],
    "problem": "Finding a memorable anime scene should be easier than searching through disconnected video links.",
    "work": [
      "Built a cinematic browsing experience with anime metadata integrations.",
      "Added YouTube discovery and embedded previews rather than hosting video files.",
      "Implemented email sign-in and a submission workflow in source."
    ],
    "lesson": "A deployed interface and a working community are different milestones. Authentication, moderation and upstream APIs need separate verification.",
    "next": "Verify the latest auth release and finish moderation and discussion workflows.",
    "repo": "https://github.com/logan9e7/Hypeframe"
  },
  {
    "slug": "minime-lab",
    "title": "MiniMe Lab",
    "category": "Educational product",
    "status": "Prototype / active build",
    "summary": "An interactive learning project exploring reproduction, genetics and probability through approachable tools.",
    "stack": [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI"
    ],
    "problem": "Biology concepts become easier to explore when learners can interact with scenarios and understand uncertainty.",
    "work": [
      "Explored fertility timing, genetics and probability-based learning modules.",
      "Iterated toward a concise homepage with separate topic pages and sub-tabs.",
      "Worked on separating frontend modules and extending the educational content model."
    ],
    "lesson": "Educational simulations need clear limits and reviewed sources; they should not promise personal medical predictions.",
    "next": "Review source quality and module behavior before making health-related accuracy claims.",
    "repo": "https://github.com/logan9e7/MiniMe-Lab"
  },
  {
    "slug": "asset-intelligence",
    "title": "Asset Tracking Intelligence",
    "category": "Industrial software",
    "status": "Active development",
    "summary": "A maintenance-focused software project connecting equipment records with clearer operational workflows.",
    "stack": [
      "Maintenance workflows",
      "Asset records",
      "UI / UX"
    ],
    "problem": "Equipment history is harder to use when maintenance records and operational views are fragmented.",
    "work": [
      "Developed the project around practical asset and maintenance information needs.",
      "Iterated on dashboard navigation and screen-level usability.",
      "Used shop-floor experience to shape the questions a maintenance interface should answer."
    ],
    "lesson": "A useful dashboard must support the next maintenance decision, beyond simply displaying records.",
    "next": "Continue validating workflows against actual maintenance use cases.",
    "repo": "https://github.com/Immrtldragon98/Asset_tracking_intelligence"
  },
  {
    "slug": "wrm4",
    "title": "15 TPH Wire Rod Mill Commissioning",
    "category": "Mechanical engineering",
    "status": "In progress · reported work",
    "summary": "Coordinating mechanical execution, contractors, permits and interfaces for WRM #4 commissioning.",
    "stack": [
      "Execution planning",
      "PTW / LOTO",
      "Contractor coordination",
      "SAP PM / MM"
    ],
    "problem": "Commissioning requires equipment installation, shared utilities and multiple teams to progress in a controlled sequence.",
    "work": [
      "Coordinating mechanical, operations, electrical and contractor interfaces.",
      "Developed a 60–90 day execution plan with dependencies, manpower and inspection hold points.",
      "Prioritized coiler readiness, including fleeter replacement and gearbox work."
    ],
    "lesson": "Sequence, access and readiness matter as much as individual task completion.",
    "next": "Continue installation and inspection against the approved execution sequence; commissioning completion is not claimed."
  },
  {
    "slug": "main-shear",
    "title": "Main Shear Base Modification",
    "category": "Maintenance improvement",
    "status": "Implemented · reported work",
    "summary": "A base modification designed around the existing EOT crane to remove dependence on Hydra availability.",
    "stack": [
      "Mechanical design",
      "Maintainability",
      "Lifting access"
    ],
    "problem": "Main shear assembly and disassembly depended on an external Hydra, creating availability and scheduling constraints.",
    "work": [
      "Reworked the base concept to enable handling with the existing EOT crane.",
      "Addressed crane dependency, maintenance access and manpower requirements.",
      "Identified potential replication across other wire rod mill lines."
    ],
    "lesson": "Designing for maintenance access can improve both execution and scheduling.",
    "next": "Validate the targeted maintenance-time reduction from 7 to 4 hours and line-by-line replication. Targets are not presented as measured savings."
  },
  {
    "slug": "dot-space",
    "title": "Dot Space",
    "category": "Product exploration",
    "status": "Concept",
    "summary": "A quiet presence signal for close connections: a dot that says “I am here; I remember you.”",
    "stack": [
      "Minimal interaction",
      "Product design"
    ],
    "problem": "Keeping in touch can feel like another noisy messaging obligation.",
    "work": [
      "Defined a presence-first interaction without an AI feature requirement.",
      "Explored a minimal visual identity and a deliberately quiet experience."
    ],
    "lesson": "The smallest meaningful interaction can be the product.",
    "next": "Prototype the presence interaction and test whether people find it meaningful before expanding scope."
  }
];
