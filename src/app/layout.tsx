import { projectURL } from "@/lib/constants";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import { ThemeProvider } from "next-themes";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
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
        className={`min-h-screen bg-background antialiased ${rubik.variable}`}
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
