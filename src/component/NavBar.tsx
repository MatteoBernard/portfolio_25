"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { useTranslations } from "use-intl";
import Link from "next/link";
import LanguageSwitcher from "@/component/LanguageSwitcher";
import { Code, Menu, XCircle } from "lucide-react";

const NavBar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
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
        <div className="flex items-center justify-between w-full px-6">
            <div className="flex items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Code className="h-6 w-6 text-violet-600" />
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

            <div className="hidden md:block">
                <LanguageSwitcher />
            </div>

            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <XCircle className="h-5 w-5 text-white" />
                    ) : (
                        <Menu className="h-5 w-5 text-white" />
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-black z-50 p-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 border rounded mb-4"
                    >
                        <XCircle className="h-5 w-5 text-white" />
                    </button>
                    <nav className="flex flex-col gap-4 text-lg">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                onClick={() => setIsOpen(false)}
                                className={`transition-colors hover:text-gray-400 ${
                                    route.active ? "text-gray-400 font-bold" : "text-white"
                                } flex items-center space-x-2`}
                            >
                                <span>{route.label}</span>
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-6">
                        <LanguageSwitcher />
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;