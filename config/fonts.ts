import { NextFont } from "next/dist/compiled/@next/font";
import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import localFont from "next/font/local"

export const myFont1: NextFont = localFont({ src: "../public/fonts/IRANSansWeb.woff" });

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
