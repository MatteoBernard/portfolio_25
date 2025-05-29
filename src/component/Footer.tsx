"use client";

import {useTranslations} from "use-intl";
import {Code} from "lucide-react";
import Link from "next/link";

const Footer = () => {

    const t = useTranslations();

    return (
        <footer className="w-full py-6 bg-gray-100 dark:bg-gray-900">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
                    <div className="flex items-center gap-2">
                        <Code className="h-6 w-6 text-violet-600"/>
                        <p className="text-sm text-gray-500">{t('footer.copyright')}</p>
                    </div>
                    <nav className="flex gap-4 sm:gap-6">
                        <Link href='/about' className="text-sm font-medium hover:underline">
                            {t('footer.about')}
                        </Link>
                        <Link href={'/projects'} className="text-sm font-medium hover:underline">
                            {t('footer.projects')}
                        </Link>
                        <Link href='/skills' className="text-sm font-medium hover:underline">
                            {t('footer.skills')}
                        </Link>
                        <Link href='/contact' className="text-sm font-medium hover:underline">
                            {t('footer.contact')}
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;