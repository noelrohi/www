import { projectURL } from "@/lib/constants";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { IBM_Plex_Mono, Newsreader, Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(projectURL),
  title: {
    default: "noel rohi",
    template: "%s | noel rohi",
  },
  description:
    "Software Engineer building modern web apps, mobile experiences, and AI-assisted tools.",
  openGraph: {
    title: "noel rohi",
    description:
      "Software Engineer building modern web apps, mobile experiences, and AI-assisted tools.",
    url: projectURL,
    siteName: "noel rohi",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "noel rohi",
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          id="stonks"
          src="https://assets.onedollarstats.com/stonks.js"
        />
      </head>
      <body
        className={`min-h-screen bg-background antialiased ${outfit.variable} ${newsreader.variable} ${ibmPlexMono.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <main className="mx-auto w-full py-4 md:py-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
