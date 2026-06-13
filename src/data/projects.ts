import darrenImg from "@/asserts/portfolio/Darren-backend.png";
import dataGuysImg from "@/asserts/portfolio/Data-guys.png";
import magdalinaImg from "@/asserts/portfolio/magdalina-app.png";
import matchmakingImg from "@/asserts/portfolio/matchmaking-platform.png";
import vosloginImg from "@/asserts/portfolio/voslogin-frontend-design.png";
import xecoonAppImg from "@/asserts/portfolio/xecoon-app.png";
import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Cleaning Service App — Backend",
    description:
      "Backend for a cleaning-service marketplace with real-time messaging: role-based user management, full booking lifecycle, Socket.IO chat with typing indicators, JWT auth, and Stripe payments.",
    image: dataGuysImg,
    tags: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Stripe"],
    repoUrl: "https://github.com/HasanAlif",
    featured: true,
  },
  {
    title: "Saldo Finance App — Backend",
    description:
      "RESTful API for tracking personal finance accounts and transactions, with secure JWT auth, efficient database operations, and clean account-management features.",
    image: xecoonAppImg,
    tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
    repoUrl: "https://github.com/HasanAlif",
  },
  {
    title: "Velusy Beauty App — Backend",
    description:
      "Beauty-services platform backend for managing services and bookings: JWT auth, role-based authorization, RESTful APIs, and Cloudinary image uploads.",
    image: magdalinaImg,
    tags: ["Node.js", "Express.js", "MongoDB", "Cloudinary"],
    repoUrl: "https://github.com/HasanAlif",
  },
  {
    title: "Healthcare Provider — Backend",
    description:
      "Production backend for a healthcare provider site: structured API endpoints for service management and contact-form submissions, deployed to a live environment.",
    image: vosloginImg,
    tags: ["Node.js", "Express.js", "REST", "JavaScript"],
    liveUrl: "https://pg-65.com",
    repoUrl: "https://github.com/HasanAlif",
  },
  {
    title: "Real-time Chat Application",
    description:
      "Full-featured real-time chat showcasing WebSocket expertise: Socket.IO bidirectional communication, user-presence tracking, typing indicators, and read receipts.",
    image: matchmakingImg,
    tags: ["Node.js", "Socket.IO", "Express.js", "MongoDB"],
    repoUrl: "https://github.com/HasanAlif",
    featured: true,
  },
  {
    title: "API Authentication System",
    description:
      "Enterprise-grade authentication and authorization with JWT and OAuth: secure token management, role-based access control (RBAC), and pluggable auth strategies.",
    image: darrenImg,
    tags: ["Node.js", "JWT", "OAuth", "Express.js", "TypeScript"],
    repoUrl: "https://github.com/HasanAlif",
  },
];
