'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import DashboardNav from '@/components/dashboard/nav'
import Sidebar from '@/components/dashboard/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check authentication
    const user = localStorage.getItem('user')
    if (!user) {
      router.push('/login')
    } else {
      setLoading(false)
    }
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardNav />
        <main className="flex-1 p-8 bg-secondary/20">
          {children}
        </main>
      </div>
    </div>
  )
}