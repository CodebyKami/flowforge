'use client'

import Link from 'next/link'
import { Zap, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">FlowForge</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Automate your workflow and amplify your productivity with powerful integrations.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#features" className="hover:text-primary">Features</Link></li>
              <li><Link href="#integrations" className="hover:text-primary">Integrations</Link></li>
              <li><Link href="#pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link href="/changelog" className="hover:text-primary">Changelog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/docs" className="hover:text-primary">Documentation</Link></li>
              <li><Link href="/api" className="hover:text-primary">API Reference</Link></li>
              <li><Link href="/templates" className="hover:text-primary">Templates</Link></li>
              <li><Link href="/support" className="hover:text-primary">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 FlowForge. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="https://github.com" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}