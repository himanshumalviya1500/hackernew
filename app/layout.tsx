import { Header } from "@/components/common/header"
import { ThemeProvider } from "@/components/common/theme-provider"

import "./globals.css"

import { Footer } from "@/components/common/footer"

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
          <div className="relative flex min-h-screen flex-col items-center">
            <main className="container flex flex-1 flex-col bg-[#F6F6EF] px-0 md:w-3/4">
              <Header />
              {children}
              <Footer />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
