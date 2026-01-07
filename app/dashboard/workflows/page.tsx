'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Plus, Search, Filter } from 'lucide-react'
import Link from 'next/link'

export default function WorkflowsPage() {
  const workflows = [
    {
      id: 1,
      name: 'Gmail to Slack',
      description: 'Forward important emails to Slack channel',
      status: 'active',
      executions: 1247,
      lastRun: '2 mins ago',
      trigger: 'Gmail',
      actions: ['Slack'],
    },
    {
      id: 2,
      name: 'Notion to Sheets',
      description: 'Sync Notion database to Google Sheets',
      status: 'active',
      executions: 832,
      lastRun: '15 mins ago',
      trigger: 'Notion',
      actions: ['Google Sheets'],
    },
    {
      id: 3,
      name: 'GitHub to Discord',
      description: 'Post GitHub activity to Discord',
      status: 'paused',
      executions: 456,
      lastRun: '1 hour ago',
      trigger: 'GitHub',
      actions: ['Discord'],
    },
    {
      id: 4,
      name: 'Telegram Bot',
      description: 'Automated customer support bot',
      status: 'active',
      executions: 3421,
      lastRun: '5 mins ago',
      trigger: 'Telegram',
      actions: ['Telegram', 'Notion'],
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">Workflows</h1>
          <p className="text-muted-foreground">Manage and monitor your automation workflows</p>
        </div>
        <Link href="/dashboard/workflows/new">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Plus className="mr-2 h-5 w-5" />
            Create Workflow
          </Button>
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search workflows..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Workflows Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {workflows.map((workflow, index) => (
          <motion.div
            key={workflow.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-xl p-6 hover:shadow-xl transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-xl font-bold">{workflow.name}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      workflow.status === 'active'
                        ? 'bg-green-500/20 text-green-500'
                        : 'bg-gray-500/20 text-gray-500'
                    }`}
                  >
                    {workflow.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{workflow.description}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 mb-4 text-sm">
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-500">
                {workflow.trigger}
              </span>
              <span>→</span>
              {workflow.actions.map((action) => (
                <span key={action} className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-500">
                  {action}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{workflow.executions}</span> executions
                <span className="mx-2">•</span>
                Last run: {workflow.lastRun}
              </div>
              <Link href={`/dashboard/workflows/${workflow.id}`}>
                <Button variant="outline" size="sm">Edit</Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}