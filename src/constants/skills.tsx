import { ReactNode } from "react";
import { Code, Cpu, Layout, Server, Smartphone } from "lucide-react";

export type Skill = {
    name: string;
    category: "frontend" | "backend" | "other";
    icon: ReactNode;
    mastery_fr: string;
    mastery_en: string;
    inMainPage: boolean;
}

export const skills: Skill[] = [
    {
        name: "TypeScript",
        category: "frontend",
        icon: <Code className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Très bonne maîtrise, utilisé dans la plupart de mes projets.",
        mastery_en: "Very good mastery of TypeScript, used in most of my projects.",
        inMainPage: true,
    },
    {
        name: "JavaScript",
        category: "frontend",
        icon: <Code className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Bonne maîtrise.",
        mastery_en: "Good mastery.",
        inMainPage: true,
    },
    {
        name: "React",
        category: "frontend",
        icon: <Layout className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Très bonne maîtrise du framework et de ses librairies.",
        mastery_en: "Very good mastery of the framework and its libraries.",
        inMainPage: true,
    },
    {
        name: "React Native",
        category: "frontend",
        icon: <Smartphone className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Bonne maîtrise, du framework et de ses librairies.",
        mastery_en: "Good mastery of the framework and its libraries.",
        inMainPage: true,
    },
    {
        name: "Tailwind CSS",
        category: "frontend",
        icon: <Layout className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Bonne maîtrise, utilisé dans la plupart de mes projets web.",
        mastery_en: "Good mastery, used in most of my web projects.",
        inMainPage: true,
    },
    {
        name: "Vaadin",
        category: "frontend",
        icon: <Layout className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Très bonne maîtrise.",
        mastery_en: "Very good mastery.",
        inMainPage: false,
    },

    {
        name: "Next.js",
        category: "backend",
        icon: <Server className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Maîtrise décente, encore en cours d'apprentissage.",
        mastery_en: "Decent mastery, still learning.",
        inMainPage: true,
    },
    {
        name: "Node.js",
        category: "backend",
        icon: <Server className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Maîtrise correcte.",
        mastery_en: "Correct mastery.",
        inMainPage: true,
    },
    {
        name: "Java",
        category: "backend",
        icon: <Code className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Très bonne maîtrise.",
        mastery_en: "Very good mastery.",
        inMainPage: true,
    },
    {
        name: "Spring Boot",
        category: "backend",
        icon: <Server className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Bonne maîtrise.",
        mastery_en: "Good mastery.",
        inMainPage: true,
    },
    {
        name: "PHP",
        category: "backend",
        icon: <Code className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Maîtrise correcte.",
        mastery_en: "Correct mastery.",
        inMainPage: true,
    },
    {
        name: "Laravel",
        category: "backend",
        icon: <Server className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Maîtrise correcte.",
        mastery_en: "Correct mastery.",
        inMainPage: true,
    },
    {
        name: "Python",
        category: "backend",
        icon: <Code className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Maîtrise correcte.",
        mastery_en: "Correct mastery.",
        inMainPage: false,
    },

    {
        name: "Git",
        category: "other",
        icon: <Cpu className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Bonne maîtrise, utilisé dans tous mes projets.",
        mastery_en: "Good mastery, used in all my projects.",
        inMainPage: true,
    },
    {
        name: "GitHub",
        category: "other",
        icon: <Cpu className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Bonne maîtrise.",
        mastery_en: "Good mastery.",
        inMainPage: false,
    },
    {
        name: "Docker",
        category: "other",
        icon: <Cpu className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Maîtrise décente.",
        mastery_en: "Decent mastery.",
        inMainPage: false,
    },
    {
        name: "Selenium",
        category: "other",
        icon: <Code className="h-6 w-6 text-violet-600" />,
        mastery_fr: "Maîtrise correcte.",
        mastery_en: "Correct mastery.",
        inMainPage: false,
    }
];