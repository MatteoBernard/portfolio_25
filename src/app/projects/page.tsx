"use client";

import {useLocale, useTranslations} from "use-intl";
import {projects} from "@/constants/projects";
import Link from "next/link";
import {Github} from "lucide-react";

const Projects = () => {
    const t = useTranslations();
    const locale = useLocale() as "fr" | "en";

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("projects.title")}</h1>
                                <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    {t("projects.description")}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="grid grid-cols-1 gap-10">
                            {projects.map((project, index) => (
                                <div key={index} className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <h2 className="text-3xl font-bold tracking-tighter">{project.name}</h2>
                                            {
                                                project.icon &&
                                                <img src={project.icon} alt={project.name} height={30} width={30}
                                                     className={"rounded"}/>
                                            }
                                        </div>
                                        <div className="text-muted-foreground">
                                            {project.description[locale].map((line, i) => (
                                                <p key={i}>{line}</p>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="bg-violet-100 text-violet-800 dark:bg-violet-900/20 dark:text-violet-300 px-2 py-1 rounded text-xs"
                                                >
                                                  {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap gap-4 pt-4">
                                            {project.url && (
                                                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                                      <span
                                                          className="inline-flex items-center gap-2 border border-violet-300 hover:bg-violet-100 hover:text-violet-700 px-4 py-2 rounded text-sm font-medium transition">
                                                        <Github className="h-4 w-4"/>
                                                          {t("projects.sourceButton")}
                                                      </span>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                    <div className="overflow-hidden rounded-xl border flex items-center justify-center aspect-video w-full min-h-[180px] sm:min-h-[220px] md:min-h-[300px] bg-white dark:bg-gray-900 p-4">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            width={800}
                                            height={400}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Projects;