import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlowForge - Automate Your Workflow',
  description: 'Connect your apps and automate workflows without code. Build powerful integrations in minutes.',
  keywords: ['automation', 'workflow', 'integration', 'no-code', 'zapier alternative'],
  authors: [{ name: 'FlowForge Team' }],
  openGraph: {
    title: 'FlowForge - Automate Your Workflow',
    description: 'Connect your apps and automate workflows without code',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}