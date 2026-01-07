'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const integrations = [
  { name: 'Gmail', logo: '📧', color: 'bg-red-500' },
  { name: 'Slack', logo: '💬', color: 'bg-purple-500' },
  { name: 'Notion', logo: '📝', color: 'bg-black dark:bg-white' },
  { name: 'GitHub', logo: '🐙', color: 'bg-gray-800' },
  { name: 'Sheets', logo: '📊', color: 'bg-green-500' },
  { name: 'Telegram', logo: '✈️', color: 'bg-blue-500' },
  { name: 'Discord', logo: '🎮', color: 'bg-indigo-500' },
  { name: 'Trello', logo: '📋', color: 'bg-blue-600' },
  { name: 'Airtable', logo: '🗂️', color: 'bg-yellow-500' },
  { name: 'Dropbox', logo: '📦', color: 'bg-blue-700' },
  { name: 'Twitter', logo: '🐦', color: 'bg-sky-500' },
  { name: 'LinkedIn', logo: '💼', color: 'bg-blue-800' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Connect Your
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Favorite Apps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            50+ integrations and growing. Connect the tools you already use.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="glass rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all cursor-pointer"
            >
              <div className={`text-4xl mb-3 p-4 rounded-xl ${integration.color}`}>
                {integration.logo}
              </div>
              <span className="font-semibold text-sm">{integration.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            And many more... <span className="text-primary font-semibold">Request an integration →</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}