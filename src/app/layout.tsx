import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keepio.fr"),
  title: "Keepio — Organize your projects with clarity",
  description:
    "A beautiful, intuitive app to manage your projects, tasks, and notes. No account needed. Synced across all your Apple devices.",
  keywords: [
    "project management",
    "task manager",
    "notes app",
    "iOS app",
    "productivity",
    "Keepio",
  ],
  authors: [{ name: "Carolane Lefebvre" }],
  openGraph: {
    title: "Keepio — Organize your projects with clarity",
    description:
      "A beautiful, intuitive app to manage your projects, tasks, and notes.",
    url: "https://keepio.fr",
    siteName: "Keepio",
    images: [{ url: "/preview.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keepio — Organize your projects with clarity",
    description:
      "A beautiful, intuitive app to manage your projects, tasks, and notes.",
    images: ["/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
