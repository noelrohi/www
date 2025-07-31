import { projectURL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL(projectURL),
  title: {
    default: "noel rohi",
    template: "%s | noel rohi",
  },
  description: "a vibe coder, prompt engineer, context engineer, whatever",
  openGraph: {
    title: "noel rohi",
    description: "a vibe coder, prompt engineer, context engineer, whatever",
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
        {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js" async /> */}
        <script
          defer
          id="stonks"
          src="https://assets.onedollarstats.com/stonks.js"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <main className="mx-auto w-full py-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
