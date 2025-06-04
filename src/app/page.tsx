"use client"

import {useLocale, useTranslations} from "use-intl";
import {Github, Linkedin, Mail, ArrowRight} from "lucide-react";
import {Skill, skills} from "@/constants/skills";
import {Project, projects} from "@/constants/projects";
import Link from "next/link";

const Home = () => {
    const t = useTranslations();
    const locale = useLocale() as "fr" | "en";

    return (
        <div className="flex flex-col">
            <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col md:flex-row gap-6 lg:gap-12 justify-around mx-auto">
                        <div
                            className="flex flex-col justify-center space-y-4 items-center text-center lg:items-start lg:text-left order-1 lg:order-none">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('home.hero.title')}</h1>
                                <p className="max-w-[600px] text-gray-300 md:text-xl mx-auto lg:mx-0">{t('home.hero.subtitle')}</p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center items-center">
                                <Link
                                    href="/contact"
                                    className="w-44 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded flex items-center gap-2 justify-center"
                                >
                                    <p>{t('home.hero.contactButton')}</p>
                                    <ArrowRight className="h-5 w-5"/>
                                </Link>
                                <Link
                                    href="/projects"
                                    className="w-44 border border-violet-500 text-violet-500 hover:bg-violet-950 px-4 py-2 rounded justify-center flex items-center"
                                >
                                    {t('home.hero.projectsButton')}
                                </Link>
                            </div>
                            <div className="flex gap-8">
                                <Link
                                    href="https://github.com/MatteoBernard"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-violet-400"
                                >
                                    <span className="sr-only">GitHub</span>
                                    <Github className="h-5 w-5"/>
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/matt%C3%A9o-bernard-00137a255/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-violet-400"
                                >
                                    <span className="sr-only">LinkedIn</span>
                                    <Linkedin className="h-5 w-5"/>
                                </Link>
                                <Link
                                    href="mailto:bernard.matteo.travail@gmail.com"
                                    className="text-white hover:text-violet-400"
                                >
                                    <span className="sr-only">Email</span>
                                    <Mail className="h-5 w-5"/>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div
                                className="relative w-48 h-48 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-[350px] lg:h-[350px] rounded-full bg-gradient-to-br from-violet-600 to-violet-900 p-1">
                                <div
                                    className="absolute inset-0 rounded-full shadow-all-around overflow-hidden bg-violet-600 opacity-80">
                                    <img
                                        src="/images/me.png"
                                        alt={t('home.hero.portraitAlt')}
                                        width={350}
                                        height={350}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('home.about.title')}</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl">{t('home.about.description')}</p>
                        </div>
                        <Link
                            href="/about"
                            className="border border-violet-500 rounded p-2 text-violet-700 hover:bg-violet-100 dark:text-violet-300 dark:hover:bg-violet-900/20"
                        >
                            {t('home.about.button')}
                        </Link>
                    </div>
                </div>
            </section>

            <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('home.skills.title')}</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">{t('home.skills.description')}</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                            {skills.map((skill: Skill) => (
                                skill.inMainPage &&
                                <div key={skill.name}
                                     className="flex items-center justify-center p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                                    <p key={skill.name}
                                       className="inline-block rounded-2xl bg-violet-100 px-3 py-1 text-sm text-violet-900 dark:bg-violet-900/20 dark:text-violet-300 border border-violet-500">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <Link
                            href="/skills"
                            className="border border-violet-500 text-violet-700 hover:bg-violet-100 dark:text-violet-300 dark:hover:bg-violet-900/20 mt-8 px-4 py-2 rounded"
                        >
                            {t('home.skills.button')}
                        </Link>
                    </div>
                </div>
            </section>

            <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('home.projects.title')}</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">{t('home.projects.description')}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {projects.slice(0, 3).map((project: Project, index) => (
                            <div key={index}
                                 className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col">
                                <div className="flex items-center justify-center aspect-square p-4">
                                    <img
                                        src={project.icon}
                                        alt={project.name}
                                        width={400}
                                        height={200}
                                        className="object-contain rounded-lg"
                                    />
                                </div>
                                <div className="p-4 flex-1 flex flex-col">
                                    <h3 className="font-bold text-lg mb-1">{project.name}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-2">
                                        {project.description[locale].map((line, i) => (
                                            <span key={i}>{line}<br/></span>
                                        ))}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.tags.map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="bg-violet-100 text-violet-800 dark:bg-violet-900/20 dark:text-violet-300 px-2 py-1 rounded text-xs"
                                            >
                                              {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        href={project.url || "/projects"}
                                        className="mt-auto text-violet-700 hover:text-violet-900 hover:bg-violet-100 dark:text-violet-300 dark:hover:bg-violet-900/20 px-2 py-1 rounded flex items-center gap-1 w-fit"
                                    >
                                        {t('home.projects.viewButton')}
                                        <ArrowRight className="h-4 w-4"/>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <Link
                            href="/projects"
                            className="border border-violet-500 text-violet-700 hover:bg-violet-100 dark:text-violet-300 dark:hover:bg-violet-900/20 mt-8 px-4 py-2 rounded"
                        >
                            {t('home.projects.allProjectsButton')}
                        </Link>
                    </div>
                </div>
            </section>

            <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('home.contact.title')}</h2>
                            <p className="max-w-[900px] text-gray-300 md:text-xl">{t('home.contact.description')}</p>
                        </div>
                        <div className="w-full max-w-sm space-y-2 mt-4">
                            <Link
                                href="/contact"
                                className="border border-violet-500 text-violet-700 hover:bg-violet-100 dark:text-violet-300 dark:hover:bg-violet-900/20 mt-8 px-4 py-2 rounded"
                            >
                                {t('home.contact.button')}
                            </Link>
                        </div>
                        <div className="flex gap-8 mt-4">
                            <Link
                                href="https://github.com/MatteoBernard"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-violet-400"
                            >
                                <span className="sr-only">GitHub</span>
                                <Github className="h-5 w-5"/>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/matt%C3%A9o-bernard-00137a255/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-violet-400"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-5 w-5"/>
                            </Link>
                            <Link
                                href="mailto:bernard.matteo.travail@gmail.com"
                                className="text-white hover:text-violet-400"
                            >
                                <span className="sr-only">Email</span>
                                <Mail className="h-5 w-5"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;