import { Toaster } from "@/components/ui/sonner"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

import { CurrentUserProvider } from "@/hooks/currentUserContext"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <body className="min-h-screen bg-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CurrentUserProvider>
            <div className="relative flex min-h-screen flex-col items-center">
              <Header />
              <main className="container flex flex-1 flex-col bg-[#F6F6EF] py-3 md:w-3/4">
                {children}
              </main>
            </div>
            <Toaster />
          </CurrentUserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
