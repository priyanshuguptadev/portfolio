export interface Project {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    tags: string[];
    image: string;
    live: string;
    github: string;
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Live Attendance System - Websocket, Container, CI CD, No AI used",
        shortDescription: 'A live attendance system built using Express and WS (WebSockets) in pure TypeScript. It includes a robust backend with comprehensive unit testing and a full CI/CD pipeline.',
        description: 'A live attendance system built using Express and WS (WebSockets) in pure TypeScript. The project was built as a challenge to complete a complex technical task without any AI assistance, focusing on manual problem-solving and deep learning. It includes a robust backend with comprehensive unit testing and a full CI/CD pipeline for automated testing and deployment.',
        tags: ['TypeScript', 'Express', 'Websocket', 'Docker', 'CI CD', 'AWS', 'Nginx'],
        image: '/attendance-system.png',
        live: '#',
        github: 'https://github.com/priyanshuguptadev/realtime-attendence-system'
    },
    {
        id: 2,
        title: 'CF Contests Bot',
        shortDescription: 'A telegram bot that notifies users of upcoming Codeforces contests.',
        description: 'A telegram bot that notifies users of upcoming Codeforces contests. It uses the Codeforces API to fetch upcoming contests and sends notifications to users who have subscribed to the bot. It also provides a simple interface to subscribe and unsubscribe from the bot.',
        tags: ['Telegram Bot', 'Codeforces API', 'Nodejs', 'Vercel Cron'],
        image: '/cf-contests-bot.png',
        live: 'https://t.me/cfcontests_bot',
        github: 'https://github.com/priyanshuguptadev/telegram-bot'
    }
];
