// TEMPLATE FOR UPDATING YOUR CONSTANTS.JS FILE
// Copy the sections below to replace corresponding sections in your constants.js

// 1. BIO SECTION - Replace the entire Bio object
export const Bio = {
  name: "Parth Dhanaba",
  roles: [
    "Data Engineer",
    "Big Data Developer", 
    "Python Developer",
    "Cloud Engineer"
  ],
  description:
    "I am a Data Engineer with 3 years of experience designing and developing large-scale data pipelines, ETL frameworks, and big data solutions. I have a strong background in Python, PySpark, Kubernetes, Kafka, Airflow and AWS cloud services. Passionate about creating scalable data architectures, improving performance, and using cloud technologies to solve complex problems.",
  github: "https://github.com/bhushankorg",
  resume: "https://drive.google.com/file/d/YOUR_RESUME_ID/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/bhushan-waingankar-b021131a6/",
  insta: "https://www.instagram.com/parthhhhh__7/",
};

// 2. SKILLS SECTION - Replace the skills array with data engineering focused skills
export const skills = [
  {
      title: "Big Data & Analytics",
      skills: [
        {
          name: "Apache Spark",
          image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
        },
        {
          name: "PySpark",
          image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
        },
        {
          name: "Apache Kafka",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Apache_Kafka_logo.svg/120px-Apache_Kafka_logo.svg.png",
        },
        {
          name: "Apache Airflow",
          image: "https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png",
        },
      ],
    },
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "SQL", 
        image: "https://www.svgrepo.com/show/255832/sql.svg",
      },
      {
        name: "Scala",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg",
      },
      {
        name: "Java",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      }
    ],
  },
  {
      title: "DevOps",
      skills: [
        {
          name: "AWS",
          image:
            "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
        },
        {
          name: "Docker",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
        },
        {
          name: "Grafana",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/1200px-Grafana_logo.svg.png",
        },
        {
          name: "Kubernetes",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/0/00/Kubernetes_%28container_engine%29.png",
        },
        {
          name: "Prometheus",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/1200px-Prometheus_software_logo.svg.png",
        },
      ],
    },
  {
    title: "Cloud Platforms",
    skills: [
      {
        name: "AWS",
        image: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
      },
      {
        name: "AWS S3",
        image: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*xHL2RC4I-oNmLPfz.png",
      },
      {
        name: "AWS Lambda", 
        image: "https://static-00.iconduck.com/assets.00/aws-lambda-icon-1951x2048-4g8nq8ul.png",
      },
      {
        name: "AWS Glue",
        image: "https://static-00.iconduck.com/assets.00/aws-glue-icon-455x512-zse8wlcz.png",
      },
      {
        name: "EKS",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Kubernetes_%28container_engine%29.png",
      }
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MySQL",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB", 
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Iceberg",
        image: "https://iceberg.apache.org/assets/images/favicon-96x96.png",
      }
    ],
  }
];

// 3. EXPERIENCES SECTION - Add your work experience
export const experiences = [
  {
    id: 0,
    img: "	https://static.vecteezy.com/system/resources/thumbnails/014/414/694/small/apple-colorful-logo-on-transparent-background-free-vector.jpg",
    role: "Big Data Developer (Onsite Vendor)",
    company: "Apple Inc. (deployed by Infosys)",
    date: "June 2022 - Present",
    desc: "At Apple I Worked on extracting data from various sources, transforming it into a graph format (nodes and edges), and storing it in Iceberg tables. Writing and deploying Spark (Scala) code to handle data ingestion and transformation, and orchestrating workflows using Airflow",
    skills: [
      "Python",
      "PySpark", 
      "AWS",
      "Kafka",
      "Airflow",
      "Docker",
      "Kubernetes"
    ],
  },
    {
      id: 1,
      img: "https://static.vecteezy.com/system/resources/thumbnails/020/190/476/small/infosys-logo-infosys-icon-free-free-vector.jpg",
      role: "Big Data Developer",
      company: "Infosys Ltd.",
      date: "June 2022 - Present",
      desc: "I’ve contributed in multiple projects, including the development of scalable ingestion frameworks, improving metadata quality using machine learning models, and deploying robust cloud solutions on platforms like AWS EKS using Kubernetes and Docker.",
      skills: [
        "Python",
        "PySpark",
        "AWS",
        "Kafka",
        "Airflow",
        "Docker",
        "Kubernetes"
      ],
    },
];

// 4. EDUCATION SECTION - Add your educational background  
export const education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXh_8fw-BpAmkESmlq-GwD6sC7wZKp9jtg5Gftwcg-siFfaGnEbVYFsihw3risVs_Wkek&usqp=CAU",
    school: "Mumbai University",
    date: "August 2018 - May 2022",
    grade: "8.80",
    desc: "Completed Electrical Engineering degree with 8.80 CGPA",
    degree: "Electrical Engineering - FAMT, Ratnagiri",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXh_8fw-BpAmkESmlq-GwD6sC7wZKp9jtg5Gftwcg-siFfaGnEbVYFsihw3risVs_Wkek&usqp=CAU",
    school: "Mumbai University",
    date: "June 2016 - May 2018",
    grade: "8.80",
    desc: "Completed HSC with 80.88% with major in electronics science",
    degree: "Electrical Engineering - AKJC, Ratnagiri",
  },
];

// 5. PROJECTS SECTION - Add your data engineering projects
export const projects = [
  {
    id: 0,
    title: "Credit card fraud detection using Spark ML",
    date: "August 2022",
    description: "Your prior spending habits will be learned. Like how much amount you spend, at which merchant you spend, at what frequency you spend, what do you purchase, etc. Based on this learning, your current credit transaction will be predicted as fraud if it deviates from your earlier spending habits otherwise it will be treated as a genuine transaction. And fraud transaction will be alerted in the dashboard.",
    image: "PROJECT_IMAGE_URL",
    tags: ["Scala-Spark", "Spark ML-lib", "AWS", "PostgreSQL"],
    category: "data engineering", 
    github: "https://github.com/bhushankorg/credit-card-fraud-detection-spark",
    webapp: "https://github.com/bhushankorg/credit-card-fraud-detection-spark",
  },
    {
      id: 0,
      title: "Credit card fraud detection using Spark ML",
      date: "July 2025",
      description: "An AI-powered voice chatbot that enables natural conversation through speech recognition and text-to-speech capabilities. The system features a modern React frontend with voice controls and a FastAPI backend for extensible AI model integration.",
      image: "https://raw.githubusercontent.com/bhushankorg/audio-chatbot/refs/heads/main/data/ui-snapshot-2.png",
      tags: ["LLM", "React", "FastAPI", "OpenRouter Llama-3-8b-instruct"],
      category: "machine learning",
      github: "https://github.com/bhushankorg/audio-chatbot",
      webapp: "https://github.com/bhushankorg/audio-chatbot",
    },
  // Add more projects
];
