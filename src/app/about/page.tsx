"use client";

import { useTranslations } from "use-intl";
import { Github, Linkedin, Mail, Pin } from "lucide-react";

const About = () => {
    const t = useTranslations();

    return (
        <div className="flex flex-col">
            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6 mx-auto max-w-screen-xl">
                    <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4 md:w-1/3">
                            <div className="relative h-[250px] w-[250px] rounded-full bg-gradient-to-br from-violet-600 to-violet-900 p-1">
                                <div className="absolute inset-0 rounded-full shadow-all-around overflow-hidden bg-violet-600 opacity-80">
                                    <img
                                        src="/images/me.png?height=250&width=250"
                                        alt={"bernard-matteo"}
                                        width={250}
                                        height={250}
                                        className="object-cover"
                                        loading="eager"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2 text-center md:text-left">
                                <h1 className="text-3xl font-bold">{t("about.name")}</h1>
                                <p className="text-xl text-muted-foreground">{t("about.role")}</p>
                            </div>
                            <div className="flex flex-col gap-2 w-full max-w-xs">
                                <div className="flex items-center gap-2">
                                    <Pin className="h-5 w-5" />
                                    <span>{t("about.location")}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="h-5 w-5" />
                                    <span>{t("about.email")}</span>
                                </div>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-violet-300 p-2 hover:bg-violet-100 hover:text-violet-700"
                                >
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-violet-300 p-2 hover:bg-violet-100 hover:text-violet-700"
                                >
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                                <a
                                    href="mailto:contact@example.com"
                                    className="rounded-full border border-violet-300 p-2 hover:bg-violet-100 hover:text-violet-700"
                                >
                                    <Mail className="h-5 w-5" />
                                    <span className="sr-only">Email</span>
                                </a>
                            </div>
                        </div>
                        <div className="space-y-8 md:w-2/3">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold tracking-tight">{t("about.aboutMe.title")}</h2>
                                <div className="space-y-4 text-muted-foreground">
                                    {t.raw("about.aboutMe.paragraphs").map((paragraph: string, index: number) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold tracking-tight">{t("about.experience.title")}</h2>
                                <div className="grid gap-6">
                                    {t.raw("about.experience.items").map(
                                        (experience: {
                                            title: string;
                                            company: string;
                                            period: string;
                                            description: string;
                                        }, index: number) => (
                                            <div
                                                key={index}
                                                className="border rounded-lg p-4 bg-white dark:bg-gray-900"
                                            >
                                                <div className="font-bold">{experience.title}</div>
                                                <div className="text-sm text-gray-500">
                                                    {experience.company} | {experience.period}
                                                </div>
                                                <div className="mt-2">{experience.description}</div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold tracking-tight">{t("about.education.title")}</h2>
                                <div className="grid gap-6">
                                    {t.raw("about.education.items").map(
                                        (education: {
                                            degree: string;
                                            institution: string;
                                            period: string;
                                        }, index: number) => (
                                            <div
                                                key={index}
                                                className="border rounded-lg p-4 bg-white dark:bg-gray-900"
                                            >
                                                <div className="font-bold">{education.degree}</div>
                                                <div className="text-sm text-gray-500">
                                                    {education.institution} | {education.period}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;