import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RandomKeygen - Free Secure Password & Key Generator",
  description:
    "Professional keygen toolkit: generate secure passwords, API keys, UUIDs, JWT secrets, encryption keys, and more. Free, open-source, runs entirely in your browser.",
  keywords:
    "keygen,password generator,random key generator,API key,UUID generator,JWT secret,encryption key,secure password,key generation",
};

export default function RootLayout({ children }) {
  const themeLoaderScript = `
    (function() {
      try {
        const theme = localStorage.getItem('theme') || 'system';
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (theme === 'dark' || (theme === 'system' && systemDark)) {
          document.documentElement.classList.add('dark');
          document.documentElement.style.colorScheme = 'dark';
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.style.colorScheme = 'light';
        }
      } catch (e) {}
    })();
  `;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeLoaderScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-(--background) text-(--foreground)">
        <Header />
        <main className="flex-1 pt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
