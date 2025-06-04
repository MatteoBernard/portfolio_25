import "./globals.css";
import {getLocale} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import NavBar from "@/component/NavBar";
import Footer from "@/component/Footer";

const RootLayout = async ({children}: Readonly<{ children: React.ReactNode; }>) => {
    const locale = await getLocale();

    return (
        <html lang={locale}>
        <head>
            <title>Bernard Matteo</title>
        </head>
        <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider>
            <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <NavBar/>
            </header>
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </NextIntlClientProvider>
        </body>
        </html>
    );
}

export default RootLayout;