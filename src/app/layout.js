import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sai Pranav Nishtala",
  description: "Portfolio V2 built using Next.js",
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="48x48" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased justify-center`}
      >
        <Header />
        <main className="content mt-16 text-sm sm:text-lg mb-16 m-auto font-sans max-w-[60rem] min-h-screen" >
          {children}
        </main>
      </body>
    </html>
  );
}
