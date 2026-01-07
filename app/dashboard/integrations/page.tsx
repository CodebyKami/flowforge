'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check, Plus } from 'lucide-react'

const integrations = [
  {
    name: 'Gmail',
    description: 'Send and receive emails, manage labels',
    logo: '📧',
    color: 'bg-red-500',
    connected: true,
    category: 'Email',
  },
  {
    name: 'Slack',
    description: 'Send messages, manage channels',
    logo: '💬',
    color: 'bg-purple-500',
    connected: true,
    category: 'Communication',
  },
  {
    name: 'Notion',
    description: 'Create pages, update databases',
    logo: '📝',
    color: 'bg-black dark:bg-white',
    connected: false,
    category: 'Productivity',
  },
  {
    name: 'GitHub',
    description: 'Manage repos, issues, and PRs',
    logo: '🐙',
    color: 'bg-gray-800',
    connected: true,
    category: 'Development',
  },
  {
    name: 'Google Sheets',
    description: 'Read and write spreadsheet data',
    logo: '📊',
    color: 'bg-green-500',
    connected: true,
    category: 'Productivity',
  },
  {
    name: 'Telegram',
    description: 'Send messages, create bots',
    logo: '✈️',
    color: 'bg-blue-500',
    connected: false,
    category: 'Communication',
  },
  {
    name: 'Discord',
    description: 'Post messages, manage servers',
    logo: '🎮',
    color: 'bg-indigo-500',
    connected: false,
    category: 'Communication',
  },
  {
    name: 'Trello',
    description: 'Create cards, manage boards',
    logo: '📋',
    color: 'bg-blue-600',
    connected: false,
    category: 'Project Management',
  },
]

export default function IntegrationsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Integrations</h1>
        <p className="text-muted-foreground">Connect your favorite apps and services</p>
      </div>

      {/* Connected Apps */}
      <div className="glass rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Connected Apps</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {integrations
            .filter((int) => int.connected)
            .map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-4 p-4 rounded-lg border"
              >
                <div className={`text-3xl p-3 rounded-xl ${integration.color}`}>
                  {integration.logo}
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{integration.name}</div>
                  <div className="text-xs text-green-500 flex items-center">
                    <Check className="h-3 w-3 mr-1" />
                    Connected
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Available Apps */}
      <div className="glass rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Available Apps</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations
            .filter((int) => !int.connected)
            .map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-4xl p-4 rounded-xl ${integration.color}`}>
                    {integration.logo}
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary">
                    {integration.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{integration.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {integration.description}
                </p>
                <Button className="w-full" variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Connect
                </Button>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  )
}