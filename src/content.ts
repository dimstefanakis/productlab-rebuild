export const COPY = {
  hero: {
    headline: "The Human Platform Powering Frontier AI",
    subhead:
      "Access 250k+ vetted human experts to generate high-quality training data, advanced RLHF signals, and custom alignment — built for teams pushing the boundaries of AI safety, accuracy, and capability.",
    primaryCTA: "Start Your Project",
    badges: ["4M+ Tasks Completed", "99.9% accuracy rate", "Enterprise secure"],
  },

  whoWeAre: {
    title: "Who We Are",
    subtitle: "One of the world's largest networks of vetted AI training specialists",
    items: [
      {
        title: "250k+ Vetted Contributors",
        description: "Government ID validation guarantees no automated or bot traffic",
        icon: "users",
      },
      {
        title: "5 Countries",
        description: "US, Mexico, Canada, Australia, New Zealand",
        icon: "globe",
      },
      {
        title: "24/7 Availability",
        description: "Round-the-clock coverage across all time zones",
        icon: "clock",
      },
      {
        title: "Custom Tasks",
        description: "First party relationship allows for any type of task",
        icon: "settings",
      },
    ],
  },

  whyProductLab: {
    title: "Why ProductLab",
    items: [
      {
        title: "Frontier Expertise",
        description: "Team trained on cutting-edge AI models and requirements.",
        icon: "shield",
      },
      {
        title: "Quality Control",
        description: "Multi-layered QA processes ensure the highest standards.",
        icon: "check",
      },
      {
        title: "Fast & Scalable",
        description: "Rapid scaling without compromising quality or speed.",
        icon: "zap",
      },
      {
        title: "Secure & Compliant",
        description: "Enterprise security with NDA protection and compliance.",
        icon: "lock",
      },
    ],
    metrics: [
      { value: "99.9%", label: "Accuracy Rate" },
      { value: "24/7", label: "Support" },
      { value: "2018", label: "Founded" },
    ],
  },

  solutions: {
    title: "What We Deliver",
    featured: {
      title: "Reinforcement Learning with Human Feedback",
      description:
        "Make better models with better data. Our advanced RLHF implementation aligns your models with human preferences through sophisticated reward modeling and preference learning. We provide comprehensive feedback loops that improve output quality, reduce harmful outputs, and enhance model reliability at scale. From constitutional AI to value alignment, our expert annotators deliver the nuanced human judgment your frontier models need to perform safely and effectively in real-world applications.",
    },
    items: [
      {
        title: "Human-Labeled Training Data",
        description: "Expert annotators provide high-quality labeled datasets.",
      },
      {
        title: "Safety Evaluations",
        description: "Comprehensive testing for safe, reliable AI alignment.",
      },
      {
        title: "Custom Dataset Generation",
        description: "Bespoke datasets for specialized training requirements.",
      },
      {
        title: "Fine-Tuning Support",
        description: "Expert guidance for optimizing model performance.",
      },
    ],
  },

  whoWeHelp: {
    title: "Who We Help",
    teams: [
      "Frontier Model Labs",
      "LLM Product Teams",
      "Vision-Language & Multimodal Builders",
      "Perception & Robotics Innovators",
      "Applied-AI & Vertical SaaS Startups",
      "Academic & Non-Profit Research Labs",
    ],
  },

  contactSection: {
    headline: "Ready to Scale Your AI?",
    subhead: "Join leading AI teams who trust ProductLab for their most critical training data needs.",
    primaryCTA: "Get Started",
    title: "Get Started",
    successMessage: "Thanks! Expect a human reply in <4h.",
    fields: {
      name: "Name",
      email: "Email",
      company: "Company",
      project: "Project Details",
    },
  },
} as const
