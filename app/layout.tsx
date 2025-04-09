import { fetchUser } from "@/lib/hn-api-fetcher"
import { getCurrentUserId } from "@/lib/session"
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
  const userId = getCurrentUserId()
  const user = userId ? await fetchUser(userId) : null

  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CurrentUserProvider currentUser={user}>
            <div className="relative flex min-h-screen flex-col items-center">
              <Header user={user} />
              <main className="bg-#F6F6EF container flex flex-1 flex-col py-3 md:w-3/4">
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
