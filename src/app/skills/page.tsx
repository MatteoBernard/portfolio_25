"use client";

import {useTranslations} from "use-intl";
import {skills} from "@/constants/skills";
import SkillCard from "@/component/SkillCard";

const Skills = () => {
    const t = useTranslations();

    const frontendSkills = skills.filter(skill => skill.category === 'frontend');
    const backendSkills = skills.filter(skill => skill.category === 'backend');
    const otherSkills = skills.filter(skill => skill.category === 'other');

    return (
        <div className="flex flex-col items-center justify-center">
            <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white flex flex-col items-center justify-center">
                <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('skills.title')}</h1>
                            <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {t('skills.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
                <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
                    <div className="grid gap-10 w-full">

                        {/* Frontend */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
                            <div className="col-span-full space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter text-left">{t('skills.frontend.title')}</h2>
                                <p className="text-muted-foreground text-left">{t('skills.frontend.description')}</p>
                            </div>
                            {frontendSkills.map((skill, index) => (
                                <SkillCard key={index} skill={skill}/>
                            ))}
                        </div>

                        {/* Backend */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mt-10">
                            <div className="col-span-full space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter text-left">{t('skills.backend.title')}</h2>
                                <p className="text-muted-foreground text-left">{t('skills.backend.description')}</p>
                            </div>
                            {backendSkills.map((skill, index) => (
                                <SkillCard key={index} skill={skill}/>
                            ))}
                        </div>

                        {/* Other */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mt-10">
                            <div className="col-span-full space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter text-left">{t('skills.other.title')}</h2>
                                <p className="text-muted-foreground text-left">{t('skills.other.description')}</p>
                            </div>
                            {otherSkills.map((skill, index) => (
                                <SkillCard key={index} skill={skill}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;