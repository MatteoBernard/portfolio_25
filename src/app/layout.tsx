import "./globals.css";
import {getLocale} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";

const RootLayout = async ({children}: Readonly<{ children: React.ReactNode; }>) => {

    const locale = await getLocale();

    return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
            {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;