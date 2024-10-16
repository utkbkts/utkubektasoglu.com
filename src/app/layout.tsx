import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { ThemeProvider } from "next-themes";
import ToasterProvider from "@/provider/toaster-provider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-raleway",
});
export const metadata: Metadata = {
  title: "Utku Bektasoglu | Ana Sayfa",
  description: "resmi web sitesi | utku bektasoglu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${raleway.variable} antialiased bg-bggray min-h-screen dark:text-black dark:bg-[#1a1a1a]`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <div className="flex-grow min-h-screen">{children}</div>
          <ToasterProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
