import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/ui/header";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({subsets:["latin"]});
export const metadata = {
  title: "SkillSage",
  description: "AI Career Coach",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider __internal_clerk_debug={false}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header/>
            <main className="min-h-screen">{children}</main>
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with 💗 by Hafiza</p>
              </div>
            </footer>
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
