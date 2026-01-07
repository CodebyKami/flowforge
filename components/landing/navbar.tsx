'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Zap, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass border-b"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            FlowForge
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#integrations" className="hover:text-primary transition-colors">
            Integrations
          </Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/docs" className="hover:text-primary transition-colors">
            Docs
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}