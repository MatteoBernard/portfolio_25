"use client";

import {Skill} from "@/constants/skills";
import {useLocale} from "use-intl";

type SkillCardProps = {
    skill: Skill;
}

const SkillCard = ({skill}: SkillCardProps) => {
    const locale = useLocale();

    return (
        <div className="rounded-xl border bg-white dark:bg-gray-900 p-6 flex flex-col gap-3 shadow-sm w-screen/4">
            <div className="flex flex-row items-center justify-between">
                <span className="text-lg font-bold">{skill.name}</span>
                {skill.icon}
            </div>
            <div className="h-1 rounded-full border-0 bg-violet-600 my-2"/>
            <div className="flex flex-col gap-1">
                <span className="text-base">
                    {locale == "fr" ? skill.mastery_fr : skill.mastery_en}
                </span>
            </div>
        </div>
    );
}

export default SkillCard;