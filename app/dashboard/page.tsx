'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Plus, Zap, Clock, CheckCircle, XCircle } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const stats = [
    { label: 'Total Workflows', value: '12', icon: Zap, color: 'text-purple-500' },
    { label: 'Active', value: '8', icon: CheckCircle, color: 'text-green-500' },
    { label: 'Executions Today', value: '247', icon: Clock, color: 'text-blue-500' },
    { label: 'Failed', value: '3', icon: XCircle, color: 'text-red-500' },
  ]

  const recentWorkflows = [
    { id: 1, name: 'Gmail to Slack', status: 'active', executions: 45, lastRun: '2 mins ago' },
    { id: 2, name: 'Notion to Sheets', status: 'active', executions: 32, lastRun: '15 mins ago' },
    { id: 3, name: 'GitHub to Discord', status: 'paused', executions: 18, lastRun: '1 hour ago' },
    { id: 4, name: 'Telegram Bot', status: 'active', executions: 152, lastRun: '5 mins ago' },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your automation overview.</p>
        </div>
        <Link href="/dashboard/workflows/new">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Plus className="mr-2 h-5 w-5" />
            New Workflow
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Recent Workflows */}
      <div className="glass rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Recent Workflows</h2>
          <Link href="/dashboard/workflows">
            <Button variant="ghost">View All</Button>
          </Link>
        </div>
        <div className="space-y-4">
          {recentWorkflows.map((workflow) => (
            <div
              key={workflow.id}
              className="flex items-center justify-between p-4 rounded-lg border hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-2 h-2 rounded-full ${workflow.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`} />
                <div>
                  <div className="font-semibold">{workflow.name}</div>
                  <div className="text-sm text-muted-foreground">Last run: {workflow.lastRun}</div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-sm">
                  <span className="font-semibold">{workflow.executions}</span>
                  <span className="text-muted-foreground ml-1">executions</span>
                </div>
                <Link href={`/dashboard/workflows/${workflow.id}`}>
                  <Button variant="outline" size="sm">View</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}