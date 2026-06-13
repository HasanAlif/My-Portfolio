export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "SQL", "Go"],
  },
  {
    title: "Backend Frameworks",
    skills: ["Node.js", "Express.js", "Nest.js"],
  },
  {
    title: "Databases & ORMs",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Mongoose"],
  },
  {
    title: "Real-time & APIs",
    skills: ["REST", "GraphQL", "Socket.IO", "WebSocket"],
  },
  {
    title: "Auth & Security",
    skills: ["JWT", "OAuth", "Zod", "RBAC"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "AWS", "Linux", "Git", "Postman", "CI/CD"],
  },
];

export type Proficiency = {
  name: string;
  value: number;
};

export const proficiencies: Proficiency[] = [
  { name: "Backend API Development", value: 92 },
  { name: "Database Architecture", value: 88 },
  { name: "Real-time Systems (WebSocket)", value: 85 },
  { name: "System Design & DevOps", value: 78 },
];
