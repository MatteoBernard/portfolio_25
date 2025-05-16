"use server";

import { cookies } from "next/headers";
import { defaultLocale } from "@/i18n/config";
import { Locale } from "@/i18n/config";

const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale(): Promise<Locale> {
    const locale = (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;

    if (locale === "en" || locale === "fr") {
        return locale;
    }

    return defaultLocale;
}

export async function setUserLocale(locale: Locale) {
    (await cookies()).set(COOKIE_NAME, locale);
}