export const Bio = {
  name: "Bhushan Waingankar",
  roles: ["Distributed Systems Engineer", "Data Engineer", "Backend Engineer"],
  description:
    "Software Engineer with 4+ years building large-scale platforms at Walmart and Apple. I design fault-tolerant data workflows, distributed processing systems, and backend services for multi-terabyte workloads across AWS and Google Cloud.",
  github: "https://github.com/bhushankorg",
  resume: `${process.env.PUBLIC_URL}/Bhushan-Waingankar-Resume.pdf`,
  linkedin: "https://www.linkedin.com/in/bhushan-waingankar-b021131a6/",
  email: "bhushanwaingankar.bw@gmail.com",
};

export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "C++", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
      { name: "Java", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
      { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "Scala", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg" },
    ],
  },
  {
    title: "Distributed Systems & Data",
    skills: [
      { name: "Apache Spark", image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" },
      { name: "Kafka", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Apache_Kafka_logo.svg/120px-Apache_Kafka_logo.svg.png" },
      { name: "Airflow", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png" },
      { name: "Iceberg", image: "https://iceberg.apache.org/assets/images/favicon-96x96.png" },
      { name: "Flink", image: "" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", image: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png" },
      { name: "Google Cloud", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg" },
      { name: "Kubernetes", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Docker", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
    ],
  },
  {
    title: "Backend, Data & Observability",
    skills: [
      { name: "GraphQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg" },
      { name: "REST APIs", image: "" },
      { name: "BigQuery", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg" },
      { name: "PostgreSQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
      { name: "Prometheus", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/1200px-Prometheus_software_logo.svg.png" },
      { name: "Grafana", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/1200px-Grafana_logo.svg.png" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://cdn.simpleicons.org/walmart/0071CE",
    role: "Software Engineer III — Distributed Systems",
    company: "Walmart Global Tech · Third-Party Data · Bengaluru",
    date: "July 2026 - Present",
    highlights: [
      "Built an enterprise vulnerability-scanning platform across 142 repositories; deterministic SAST and LLM detection surfaced 1,213 high-priority vulnerabilities.",
      "Moved vendor ingestion to direct BigQuery sharing, cutting data availability latency by 45% and pipeline costs by 20%.",
      "Designed a fault-tolerant, bidirectional Mastercard integration on Google Cloud for multi-terabyte workflows.",
      "Built schema-aware ingestion for third-party market-share feeds, handling schema evolution and enabling cross-team access.",
    ],
    skills: ["Google Cloud", "BigQuery", "Dataproc", "Distributed Systems", "LLM-assisted SAST"],
  },
  {
    id: 1,
    img: "https://cdn.simpleicons.org/infosys/007CC3",
    role: "Software Engineer — AppleCare Digital",
    company: "Apple (via Infosys) · Bengaluru",
    date: "May 2022 - July 2026",
    highlights: [
      "Built Spark, Iceberg, and Airflow systems for multi-terabyte search and recommendation workloads.",
      "Led graph-processing workflows for 50+ GB/day of search interactions and built GraphQL/REST services serving 1M+ records daily.",
      "Developed ML and knowledge-graph pipelines that improved search relevance by 15%.",
      "Built cross-cloud workflows across GCP and AWS; contributed DataHub SDKs, ingestion integrations, and lineage sync for Oracle, Snowflake, and Spark.",
    ],
    skills: ["Spark", "Scala", "Iceberg", "Airflow", "GraphQL", "AWS", "GCP", "DataHub"],
  },
];

export const education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXh_8fw-BpAmkESmlq-GwD6sC7wZKp9jtg5Gftwcg-siFfaGnEbVYFsihw3risVs_Wkek&usqp=CAU",
    school: "Finolex Academy of Management & Technology",
    date: "August 2018 - May 2022",
    grade: "8.80 CGPA",
    desc: "Bachelor’s degree in Electrical Engineering, affiliated with Mumbai University.",
    degree: "Electrical Engineering · Ratnagiri",
  },
];

export const projects = [
  {
    id: 0,
    title: "Credit Card Fraud Detection with Spark ML",
    date: "August 2022",
    description:
      "A Spark ML project that learns patterns from a cardholder’s transaction history and flags transactions that differ from those patterns. The results are made available for review in a fraud-monitoring dashboard.",
    image: "",
    tags: ["Scala", "Apache Spark MLlib", "AWS", "PostgreSQL"],
    category: "data engineering",
    github: "https://github.com/bhushankorg/credit-card-fraud-detection-spark",
    webapp: "https://github.com/bhushankorg/credit-card-fraud-detection-spark",
  },
  {
    id: 1,
    title: "Audio Chatbot",
    date: "July 2025",
    description:
      "A voice-enabled chatbot with speech recognition and text-to-speech, built with a React interface and FastAPI backend. It connects to an OpenRouter language model for conversational responses.",
    image: "https://raw.githubusercontent.com/bhushankorg/audio-chatbot/refs/heads/main/data/ui-snapshot-2.png",
    tags: ["LLM", "React", "FastAPI", "OpenRouter"],
    category: "AI applications",
    github: "https://github.com/bhushankorg/audio-chatbot",
    webapp: "https://github.com/bhushankorg/audio-chatbot",
  },
];
