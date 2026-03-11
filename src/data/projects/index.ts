import { Project } from "../../types/project";
import { p1 } from "./p1";
import { p2 } from "./p2";
import { p3 } from "./p3";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "OpenSlop: Coding agent in your terminal",
    content: p3,
    tags: ["Ink", "OpenAI", "Next.js", "Nextra", "Vercel"],
    thumbnail: "/openslop.png",
  },
  {
    id: 2,
    title: "Live Attendance System - Websocket, Container, CI CD, No AI used",
    content: p1,
    tags: [
      "TypeScript",
      "Express",
      "Websocket",
      "Docker",
      "CI CD",
      "AWS",
      "Nginx",
    ],
    thumbnail: "/attendance-system.png",
  },
  {
    id: 3,
    title: "CF Contests Bot",
    content: p2,
    tags: ["Telegram Bot", "Codeforces API", "Nodejs", "Vercel Cron"],
    thumbnail: "/cf-contests-bot.png",
  },
];
