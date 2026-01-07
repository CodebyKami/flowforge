import { redirect } from 'next/navigation'
import DashboardNav from '@/components/dashboard/nav'
import Sidebar from '@/components/dashboard/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO: Add authentication check
  // const session = await getServerSession()
  // if (!session) redirect('/login')

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