import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Next Gig",
  description: "Next Gig is your personal music booking platform. Discover, post and manage gigs easily.",
  metadataBase: new URL('https://home.next-gig.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Next Gig",
    description: "Find gigs faster, post your own, and manage bookings all in one place.",
    url: "https://home.next-gig.co.uk",
    siteName: "Next Gig",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  icons: {
    icon: "/Blue_LogoV2.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased dark:bg-gray-950 dark:text-foreground transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}