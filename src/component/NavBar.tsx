"use client";

import { usePathname } from "next/navigation";
import {useState} from "react";
import { useTranslations } from "use-intl";
import Link from "next/link";
import LanguageSwitcher from "@/component/LanguageSwitcher";
import { Code, Menu, XCircle } from "lucide-react";

const NavBar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const t = useTranslations();

    const routes = [
        {
            href: "/about",
            label: t("navbar.about"),
            active: pathname === "/about",
        },
        {
            href: "/projects",
            label: t("navbar.projects"),
            active: pathname === "/projects",
        },
        {
            href: "/skills",
            label: t("navbar.skills"),
            active: pathname === "/skills",
        },
        {
            href: "/contact",
            label: t("navbar.contact"),
            active: pathname === "/contact",
        },
    ];

    return (
        <div className="relative flex items-center justify-around w-full p-4 border-b border-white">
            <div className="flex items-center justify-between">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Code className="h-6 w-6 text-violet-600"/>
                    <span className="hidden font-bold sm:inline-block">Bernard Matteo</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={`transition-colors hover:text-violet-600 ${
                                route.active ? "text-violet-600 font-bold" : "text-foreground"
                            } flex items-center space-x-2`}
                        >
                            <span>{route.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="hidden md:block ">
                <LanguageSwitcher/>
            </div>

            <div className="md:hidden flex items-center space-x-2">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <XCircle className="h-5 w-5 text-white"/>
                    ) : (
                        <Menu className="h-5 w-5 text-white"/>
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-black z-50 p-4 border-t">
                    <nav className="flex flex-col gap-4 text-lg text-right">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                onClick={() => setIsOpen(false)}
                                className={`transition-colors hover:text-gray-400 ${
                                    route.active ? "text-gray-400 font-bold" : "text-white"
                                } flex items-center justify-end space-x-2`}
                            >
                                <span>{route.label}</span>
                            </Link>
                        ))}
                        <div className="flex justify-end">
                            <LanguageSwitcher />
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default NavBar;