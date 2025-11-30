export const siteConfig = {
  name: "Desmond Kao",
  title: "Software Engineer, Data Scientist, AI Engineer, Quant, Classical Pianist",
  description: "Portfolio website of Desmond Kao - Software Engineer and Data Scientist",
  accentColor: "#1d4ed8",
  social: {
    email: "dmk9535@nyu.edu",
    linkedin: "https://www.linkedin.com/in/desmond-kao",
    twitter: "",
    github: "https://github.com/desmondkao",
  },
  aboutMe:
    "I'm a Computer Science and Data Science student at NYU with a passion for building intelligent systems that solve real-world problems. My work spans full-stack development, machine learning, and quantitative finance, where I've delivered solutions that significantly improve efficiency and accuracy. From building AI-powered financial dashboards to developing enterprise data platforms, I thrive at the intersection of engineering and data science. Beyond code, I'm a classical pianist with 16 years of experience and enjoy exploring Muay Thai and music production.",
  skills: {
    languages: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C++", "C#", "R", "MATLAB", "HTML/CSS"],
    cloud: ["AWS (EC2, S3, Lambda)", "Azure", "Snowflake", "Firebase", "Docker", "Kubernetes"],
    frameworks: ["React", "Node.js", "Express", "FastAPI", "Flask", "Angular", "Spark", "PySpark", "Streamlit"],
    aiml: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "SciPy", "HuggingFace", "LangGraph", "RAG", "NLP", "Deep Learning", "Time Series", "Statistics", "A/B Testing", "Causal Inference", "Matplotlib", "Seaborn", "Plotly", "Vector DB"],
    tools: ["PostgreSQL", "MySQL", "Git", "PowerBI", "Tableau", "Jupyter", "Excel", "Datadog", "CI/CD"],
  },
  projects: [
    {
      name: "Compass – AI Financial Dashboard",
      description:
        "Built React + RAG dashboard automating factor report generation for equities team. Developed Snowflake vector DB indexing large-scale financial documents for instant natural-language retrieval. Deployed full-stack app on AWS serving daily users with secure authentication and low-latency queries.",
      link: "",
      skills: ["Python", "Grok API", "RAG", "Snowflake", "React", "AWS"],
    },
    {
      name: "DataLens – Enterprise Data Quality Dashboard",
      description:
        "Built ETL monitoring pipeline validating schema integrity and detecting anomalies across millions of records daily. Developed PowerBI dashboard tracking data freshness and pipeline health for multiple datasets. Significantly reduced manual audit time with automated alerts and LLM-generated anomaly summaries.",
      link: "",
      skills: ["Python", "SQL", "PySpark", "PowerBI", "Azure"],
    },
    {
      name: "Traffixplorer – Traffic Forecasting Platform",
      description:
        "Developed hybrid LSTM–ARIMA model for urban traffic forecasting, significantly improving prediction accuracy on large-scale traffic datasets. Built interactive React dashboard visualizing congestion trends as indicators of retail and transport activity. Recognized by Point72 Hackathon for innovative time-series modeling and data-driven economic analysis.",
      link: "",
      skills: ["Python", "TensorFlow", "ARIMA", "React"],
    },
    {
      name: "Full-Stack Psychoanalysis App",
      description:
        "Published cross-platform app on App Store for AI-driven dream interpretation and journaling. Implemented Firebase encrypted backend for secure psychoanalytic data and user insights. Architected unified Express/SwiftUI design using TCA patterns for scalable feature delivery.",
      link: "",
      skills: ["Swift", "JavaScript", "Express", "Firebase", "React", "SwiftUI"],
    },
    {
      name: "AI Email Generator",
      description:
        "Created Chrome extension generating contextual replies via Pinecone RAG, dramatically reducing email response time. Built embedding pipeline in Python processing large template libraries with high semantic relevance. Deployed extension with CI/CD updates and privacy-safe local caching.",
      link: "",
      skills: ["Python", "TypeScript", "Pinecone", "RAG", "Chrome APIs"],
    },
  ],
  experience: [
    {
      company: "AlphaQuest",
      title: "Software Engineering Intern (Full-Stack & LLM Apps)",
      dateRange: "June 2025 - Present",
      bullets: [
        "Built AI chatbot in Python/FastAPI with Snowflake RAG + OpenAI API, significantly reducing research time for investment staff",
        "Developed AI-driven commentary pipeline automating daily report generation, synthesizing news, research, and portfolio data",
        "Created full-stack investor relations platform in React/Python automating chart generation, analysis reports, and ad hoc queries, streamlining all IR workflows for client communications",
      ],
    },
    {
      company: "Catenary Alternatives Asset Management",
      title: "Software Engineering Intern (Data Platforms)",
      dateRange: "Dec 2024 - May 2025",
      bullets: [
        "Developed firmwide Flask/SQL research API enabling teams to query live data with dramatically improved retrieval speeds",
        "Built autonomous LLM scraping pipeline in Flask/Azure with daily data collection, significantly reducing research time",
        "Created AI Excel assistant in Python using Perplexity + Tavily APIs, automating large-scale data entry tasks",
      ],
    },
    {
      company: "Neue Urban",
      title: "Data / ML Engineering Intern",
      dateRange: "Nov 2024 - Feb 2025",
      bullets: [
        "Developed ML valuation API in Python, significantly improving property pricing accuracy and reducing appraisal costs",
        "Automated end-to-end valuation pipeline from data ingestion to prediction, dramatically reducing review time",
        "Integrated live market/listing APIs to enrich model features, improving valuation precision across portfolios",
      ],
    },
    {
      company: "Arthur L. Carter Journalism Institute",
      title: "Research Assistant",
      dateRange: "Nov 2024 - Mar 2025",
      bullets: [
        "Built LLM/NLP pipeline in Python/HuggingFace analyzing large-scale social media posts for sentiment trends",
        "Developed large-scale document scraper with LLM-based summarization, significantly reducing publication review time",
        "Created automated bias detection system in Python evaluating news articles for neutrality and language framing",
      ],
    },
    {
      company: "Yale University (HP Funded Research)",
      title: "Machine Learning Engineering Intern",
      dateRange: "June 2024 - July 2024",
      bullets: [
        "Built lightweight LLM with TensorFlow/Keras, using pruning and quantization for low-power on-device inference",
        "Benchmarked model latency and power consumption across CPU/GPU setups, optimizing for sustainable local deployment",
        "Led ML/AI sustainability workshop for industry professionals, sharing practical techniques for efficient model design",
      ],
    },
  ],
  education: [
    {
      school: "New York University",
      degree: "B.A. in Computer Science and Data Science",
      dateRange: "Sep 2023 - May 2027",
      achievements: [
        "GPA: 3.75",
        "Coursework: Data Structures, Basic Algorithms, Database Management, Linear Algebra, Discrete Mathematics, Calculus I & II, Principles of Data Science I & II, Causal Inference, AI Ethics",
        "Member of BUGS (Open Source Club @ NYU)",
      ],
    },
  ],
};
