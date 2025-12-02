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
    "Originally from San Francisco, I'm now a Computer Science and Data Science student at NYU building AI systems that solve tangible business problems across New York City's financial and tech landscape. I've engineered full-stack platforms and machine learning pipelines for NYC hedge funds, built automated pricing models for real estate companies, and developed NLP tools for academic research centers including NYU's Carter Journalism Institute and Yale. Whether it's automating investment research workflows that process millions of data points daily, or building AI systems that help teams answer complex questions in seconds instead of hours, I love turning messy data challenges into production-ready solutions. Beyond engineering, I'm a classical pianist with 16 years of experience, and I explore creative outlets through Muay Thai and music production.",
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
        "Built equities-focused AI dashboard with Python/FastAPI integrating Grok API for factor report generation. Developed statistical analysis engine using SciPy for traditional quant metrics and portfolio analytics. Deployed full-stack system combining LLM capabilities with rigorous statistical methods for investment research.",
      link: "",
      skills: ["Python", "FastAPI", "Grok API", "React", "SciPy", "Statistics", "RAG"],
    },
    {
      name: "Hedge Fund Data Intelligence Platform",
      description:
        "Built firmwide AI chatbot with Python/FastAPI connecting directly to Snowflake for flexible querying across all company data. Integrated Grok API and PostgreSQL for natural language queries enabling instant access to research reports, market data, and internal documents. Production system serving entire investment staff.",
      link: "",
      skills: ["Python", "FastAPI", "RAG", "Snowflake", "Grok API", "PostgreSQL"],
    },
    {
      name: "Iris – Investor Relations Platform",
      description:
        "Developed full-stack investor relations tool for NYC hedge fund connected to Snowflake data warehouse. Built automated data validation pipelines with PostgreSQL backend and report generation system that exports client-ready documents in existing formats, eliminating manual data pulling and validation. One-stop platform for generating all client-facing investment reports.",
      link: "",
      skills: ["Python", "React", "Snowflake", "FastAPI", "PostgreSQL", "Data Validation"],
    },
    {
      name: "Cornell AI Hackathon – AI Email Generator",
      description:
        "Created AI-powered email generator using Pinecone vector database and OpenAI API for contextual response generation. Built interactive Streamlit dashboard for real-time email composition with semantic search across email templates, dramatically reducing response time and improving communication quality.",
      link: "https://github.com/desmondkao/VectorMail",
      skills: ["Python", "Pinecone", "OpenAI API", "Streamlit", "RAG"],
    },
    {
      name: "Point72 Hackathon – Traffic Forecasting Platform",
      description:
        "Developed hybrid LSTM–ARIMA model for urban traffic forecasting, significantly improving prediction accuracy on large-scale traffic datasets. Built interactive React dashboard visualizing congestion trends as indicators of retail and transport activity. Recognized for innovative time-series modeling and data-driven economic analysis.",
      link: "https://github.com/desmondkao/point72_2025",
      skills: ["Python", "TensorFlow", "ARIMA", "React"],
    },
    {
      name: "HP Research @ Yale – Custom Sustainable LLM",
      description:
        "Built custom lightweight LLM from scratch using TensorFlow and Keras as part of HP-funded research at Yale. Implemented sustainable AI optimization techniques including model pruning, quantization, and efficient training strategies. Created interactive Streamlit dashboard demonstrating model performance and energy efficiency metrics, showcasing practical approaches to environmentally conscious AI development.",
      link: "https://github.com/desmondkao/DIYAI.git",
      skills: ["Python", "TensorFlow", "Keras", "Streamlit", "Model Optimization"],
    },
    {
      name: "ML Stock Price Predictor – Short Seller Analysis",
      description:
        "Developed machine learning models predicting stock price movements following short seller report releases. Built feature engineering pipeline extracting signals from report text using NLP and combining with market data. Implemented and compared logistic regression and deep Q-learning (DQL) models for binary classification of post-report price direction, achieving strong predictive performance for trading strategy development.",
      link: "",
      skills: ["Python", "Scikit-learn", "Deep Learning", "NLP", "Feature Engineering", "Logistic Regression"],
    },
    {
      name: "Property Distress Prediction Model",
      description:
        "Built logistic regression model predicting property distress for real estate portfolio management. Developed automated pipeline processing and scoring properties daily with strong predictive accuracy, enabling proactive risk assessment and investment decisions.",
      link: "",
      skills: ["Python", "Scikit-learn", "Logistic Regression", "Feature Engineering"],
    },
    {
      name: "2Fish – AI Psychoanalysis App",
      description:
        "Published cross-platform app on App Store for AI-driven dream interpretation and journaling. Implemented Firebase encrypted backend for secure psychoanalytic data and user insights. Architected unified Express/SwiftUI design using TCA patterns for scalable feature delivery.",
      link: "https://2fish.app",
      skills: ["Swift", "JavaScript", "Express", "Firebase", "React", "SwiftUI"],
    },
    {
      name: "J&J Hackathon – AI Talent Acquisition Dashboard",
      description:
        "Developed talent acquisition dashboard using AI agents and blockchain technology to revolutionize recruiting workflows. Built intelligent matching system and decentralized credential verification for streamlined hiring processes.",
      link: "https://github.com/desmondkao/HoneyBee",
      skills: ["Python", "AI Agents", "Blockchain", "React", "NLP"],
    },
    {
      name: "Intra IQ – Enterprise RAG Platform",
      description:
        "Built enterprise document intelligence platform using Claude API and RAG architecture for natural language querying across company knowledge bases. Developed secure document ingestion pipeline processing multiple file formats with intelligent chunking and embedding strategies. Created full-stack interface enabling teams to instantly surface insights from internal documentation, reducing information retrieval time and improving organizational knowledge access.",
      link: "https://github.com/desmondkao/Intra-IQ",
      skills: ["Python", "Claude API", "RAG", "FastAPI", "React", "Vector DB"],
    },
    {
      name: "NLP Web Scraping API",
      description:
        "Built NLP API for extracting structured data from unstructured sources using Gemini and Claude APIs. Developed automated web scraping pipeline with intelligent feature extraction and validation, transforming raw web data into clean, actionable datasets. Containerized with Docker for scalable deployment.",
      link: "",
      skills: ["Python", "Gemini API", "Claude API", "NLP", "Web Scraping", "FastAPI", "Docker"],
    },
    {
      name: "DataLens – Enterprise Data Quality Dashboard",
      description:
        "Built ETL monitoring pipeline validating schema integrity and detecting anomalies across millions of records daily. Developed PowerBI dashboard tracking data freshness and pipeline health for multiple datasets. Significantly reduced manual audit time with automated alerts and LLM-generated anomaly summaries.",
      link: "",
      skills: ["Python", "SQL", "PySpark", "PowerBI", "Azure"],
    },
  ],
  experience: [
    {
      company: "AlphaQuest",
      title: "Software & AI Engineering Intern",
      dateRange: "June 2025 - Present",
      bullets: [
        "Built AI chatbot in Python/FastAPI with Snowflake RAG + OpenAI API, significantly reducing research time for investment staff",
        "Developed AI-driven commentary pipeline automating daily report generation, synthesizing news, research, and portfolio data",
        "Created full-stack investor relations platform in React/Python automating chart generation, analysis reports, and ad hoc queries, streamlining all IR workflows for client communications",
      ],
      technologies: ["Python", "FastAPI", "React", "Snowflake", "OpenAI API", "RAG"],
    },
    {
      company: "Catenary Alternatives Asset Management",
      title: "Software & Data Engineering Intern",
      dateRange: "Dec 2024 - May 2025",
      bullets: [
        "Developed firmwide Flask/SQL research API enabling teams to query live data with dramatically improved retrieval speeds",
        "Built autonomous LLM scraping pipeline in Flask/Azure with daily data collection, significantly reducing research time",
        "Created AI Excel assistant in Python using Perplexity + Tavily APIs, automating large-scale data entry tasks",
      ],
      technologies: ["Python", "Flask", "SQL", "Azure", "NLP"],
    },
    {
      company: "Neue Urban",
      title: "ML & Data Engineering Intern",
      dateRange: "Nov 2024 - Feb 2025",
      bullets: [
        "Developed ML valuation API in Python, significantly improving property pricing accuracy and reducing appraisal costs",
        "Automated end-to-end valuation pipeline from data ingestion to prediction, dramatically reducing review time",
        "Integrated live market/listing APIs to enrich model features, improving valuation precision across portfolios",
      ],
      technologies: ["Python", "Scikit-learn", "FastAPI", "Machine Learning"],
    },
    {
      company: "Arthur L. Carter Journalism Institute",
      title: "AI Research Engineering Intern",
      dateRange: "Nov 2024 - Mar 2025",
      bullets: [
        "Built LLM/NLP pipeline in Python/HuggingFace analyzing large-scale social media posts for sentiment trends",
        "Developed large-scale document scraper with LLM-based summarization, significantly reducing publication review time",
        "Created automated bias detection system in Python evaluating news articles for neutrality and language framing",
      ],
      technologies: ["Python", "NLP", "HuggingFace", "Web Scraping"],
    },
    {
      company: "Yale University (HP Funded Research)",
      title: "ML Engineering Intern",
      dateRange: "June 2024 - July 2024",
      bullets: [
        "Built lightweight LLM with TensorFlow/Keras, using pruning and quantization for low-power on-device inference",
        "Benchmarked model latency and power consumption across CPU/GPU setups, optimizing for sustainable local deployment",
        "Led ML/AI sustainability workshop for industry professionals, sharing practical techniques for efficient model design",
      ],
      technologies: ["Python", "TensorFlow", "Keras", "Machine Learning"],
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
