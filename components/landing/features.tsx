'use client'

import { motion } from 'framer-motion'
import { Zap, GitBranch, Clock, Shield, BarChart, Webhook } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Execute workflows in milliseconds with our optimized engine',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: GitBranch,
    title: 'Visual Builder',
    description: 'Drag and drop interface to create complex workflows easily',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Smart Scheduling',
    description: 'Run workflows on schedule, webhooks, or manual triggers',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption for all your data and credentials',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: BarChart,
    title: 'Real-time Analytics',
    description: 'Monitor workflow performance with detailed insights',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Webhook,
    title: 'Powerful Webhooks',
    description: 'Trigger workflows from any external service instantly',
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Automate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make automation simple, fast, and reliable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}