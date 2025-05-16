import "./globals.css";
import {getLocale} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import NavBar from "@/component/NavBar";

const RootLayout = async ({children}: Readonly<{ children: React.ReactNode; }>) => {

    const locale = await getLocale();

    return (
    <html lang={locale}>
      <body>
      <NextIntlClientProvider>
          <header
              className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                  <NavBar />
              </div>
          </header>
          {children}
      </NextIntlClientProvider>
      </body>
    </html>
    );
}

export default RootLayout;