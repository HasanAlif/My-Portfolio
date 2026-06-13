import {
  apiIntegrationIcon,
  backendDevelopment,
  customDevelopment,
  fullStackIcon,
  mernStackIcon,
} from "@/asserts/icons/Icons";
import { TServices } from "@/helpers/types";

export const services: TServices[] = [
  {
    _id: "api",
    icon: backendDevelopment,
    title: "REST & GraphQL API Development",
    description:
      "Design and build secure, well-documented, and scalable APIs with Node.js, Express.js, and Nest.js — with versioning, validation, and pagination built in.",
    rules: ["Node.js", "Express.js", "Nest.js", "REST", "GraphQL"],
  },
  {
    _id: "database",
    icon: mernStackIcon,
    title: "Database Design & Optimization",
    description:
      "Schema design, indexing, and query optimization for SQL and NoSQL databases. I build efficient data layers that stay fast as your data grows.",
    rules: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Mongoose"],
  },
  {
    _id: "realtime",
    icon: customDevelopment,
    title: "Real-time Systems",
    description:
      "Real-time messaging, presence, typing indicators, and live updates using Socket.IO and WebSocket — reliable bidirectional communication at scale.",
    rules: ["Socket.IO", "WebSocket", "Redis", "Pub/Sub"],
  },
  {
    _id: "auth",
    icon: fullStackIcon,
    title: "Authentication & Security",
    description:
      "Robust auth and authorization: JWT, OAuth, role-based access control, request validation with Zod, and security best practices end to end.",
    rules: ["JWT", "OAuth", "RBAC", "Zod", "Bcrypt"],
  },
  {
    _id: "integration",
    icon: apiIntegrationIcon,
    title: "Third-party Integrations",
    description:
      "Seamless integration of payment gateways, file storage, and external services so your backend connects cleanly to the tools your product needs.",
    rules: ["Stripe", "Cloudinary", "AWS S3", "Webhooks"],
  },
  {
    _id: "devops",
    icon: customDevelopment,
    title: "Backend Deployment & DevOps",
    description:
      "Containerize, deploy, and monitor production backends on AWS and cloud platforms with Docker, CI/CD pipelines, and Linux server management.",
    rules: ["Docker", "AWS (EC2, S3)", "CI/CD", "Linux"],
  },
];
