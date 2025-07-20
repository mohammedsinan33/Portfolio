import { BrainCircuit, Briefcase, Code, Cpu, Star, Zap } from 'lucide-react';

export const portfolioData = {
    name: import.meta.env.VITE_FULL_NAME,
    title: import.meta.env.VITE_TITLE,
    email: import.meta.env.VITE_EMAIL,
    phone: import.meta.env.VITE_PHONE,
    linkedin: import.meta.env.VITE_LINKEDIN_LINK,
    github: import.meta.env.VITE_GITHUB_LINK,
    skills: {
        technical: [
            { name: "React", icon: <Code size={18} /> },
            { name: "Node.js", icon: <Code size={18} /> },
            { name: "Flutter", icon: <Code size={18} /> },
            { name: "Java", icon: <Code size={18} /> },
            { name: "Python", icon: <Code size={18} /> },
            { name: "Supabase", icon: <Code size={18} /> },
            { name: "Firebase", icon: <Code size={18} /> },
            { name: "HTML/CSS", icon: <Code size={18} /> },
            { name: "Git", icon: <Code size={18} /> },
            { name: "Three.js", icon: <Code size={18} /> },
        ],
        soft: [
            { name: "Critical Thinking", icon: <BrainCircuit size={18} /> },
            { name: "Problem Solving", icon: <Zap size={18} /> },
            { name: "Team Work", icon: <Briefcase size={18} /> },
            { name: "Leadership", icon: <Star size={18} /> },
        ],
        interests: [
            { name: "Machine Learning", icon: <Cpu size={18} /> },
            { name: "Cyber Security", icon: <Zap size={18} /> },
            { name: "Data Analysis", icon: <BrainCircuit size={18} /> },
        ],
    },
    projects: [
        {
            title: "Solace",
            role: "Full Stack Developer",
            description: "A disaster management website to streamline tracking, allocation, and management of essential supplies for relief camps.",
            technologies: ["React JS", "Supabase", "Gemini API"],
        },
        { title: "Saporis", role: "Frontend Developer", description: "An app that provides personalized food recommendations using artificial intelligence.", technologies: ["React", "Supabase", "Gemini LLM", "FastAPI"], },
        { title: "DiagramFlow", role: "Frontend Developer", description: "An analyser for GitHub projects that creates organized formats and interactive discussions with diagrams for clarity.", technologies: ["React", "Gemini LLM", "FastAPI", "ChromaDB"], },
        { title: "G-Rehab", role: "Frontend Developer", description: "A healthcare app that analyses knee and elbow angles of injured individuals and recommends workout plans.", technologies: ["Flutter", "Firebase", "Git"], },
    ],
    achievements: [
        { title: "3rd Position, TinkHack 2.0 2025", description: "An overnight hackathon organised by Tinkerhub MEC.", },
        { title: "Participant, .Hack 2.0 2023", description: "An overnight hackathon organised by IEEE MACE SB.", },
        { title: "Participant, Chackravyuha 2023", description: "An overnight hackathon organised by IEEE NSS SB.", },
        { title: "Participant, TinkHack 2024", description: "Kerala's largest GenAI hackathon organised by Tinkerhub MEC.", },
    ],
};