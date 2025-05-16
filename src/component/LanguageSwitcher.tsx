"use client";

import React, { useState, useEffect } from "react";
import { getUserLocale, setUserLocale } from "@/i18n/locale";
import { Locale } from "@/i18n/config";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState<Locale>("en");

    useEffect(() => {
        const fetchLocale = async () => {
            const locale = await getUserLocale();
            setCurrentLang(locale);
        };
        fetchLocale();
    }, []);

    const switchLanguage = async (lang: Locale) => {
        if (currentLang === lang) return;

        await setUserLocale(lang);
        setCurrentLang(lang);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 flex items-center"
            >
                <Globe className="h-5 w-5 text-white" />
                <span className="sr-only">Switch language</span>
            </button>
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-black border border-gray-700 rounded shadow-md">
                    <button
                        onClick={() => {
                            switchLanguage("fr");
                            setIsOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 hover:bg-gray-800 ${
                            currentLang === "fr" ? "text-gray-400" : "text-white"
                        }`}
                    >
                        Français
                    </button>
                    <button
                        onClick={() => {
                            switchLanguage("en");
                            setIsOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 hover:bg-gray-800 ${
                            currentLang === "en" ? "text-gray-400" : "text-white"
                        }`}
                    >
                        English
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;