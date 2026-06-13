export type Experience = {
  company: string;
  location: string;
  link?: string;
  role: string;
  description: string;
  start: string; // ISO date
  end: string; // ISO date or "current"
};

export const experiences: Experience[] = [
  {
    company: "Betopia Group",
    location: "Dhaka",
    link: "https://betopiagroup.com",
    role: "Junior Backend Developer",
    description:
      "Building scalable backend systems with Node.js, Express.js, and MongoDB. Implementing RESTful APIs, JWT authentication, and database optimization, and deploying applications on AWS with modern DevOps practices and clean system architecture.",
    start: "2025-04-01",
    end: "current",
  },
  {
    company: "Devcraft Technologies",
    location: "Dhaka",
    role: "Full-Stack Developer Intern",
    description:
      "Developed backend APIs with Node.js and Express.js, worked with MongoDB and PostgreSQL, implemented authentication systems, integrated payment gateways, and collaborated with the frontend team to deliver end-to-end solutions.",
    start: "2025-02-01",
    end: "2025-04-30",
  },
];
