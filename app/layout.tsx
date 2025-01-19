

import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import localFont from "next/font/local"
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { NextFont } from "next/dist/compiled/@next/font";


const myFont1: NextFont = localFont({ src: "../public/fonts/IRANSansWeb.woff" });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fa" dir="rtl">
      <head />
      <body
        // className={clsx(
        //   "min-h-screen bg-background font-sans antialiased",
        //   fontSans.variable,
        // )}
        className={myFont1.className}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://www.irisaco.com/"
                title="irisa homepage"
              >
                <p className="text-primary">IRISA</p>
                <span className="text-default-600">Powered by</span>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
