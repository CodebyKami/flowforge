import { redirect } from 'next/navigation'
import Hero from '@/components/landing/hero'
import Features from '@/components/landing/features'
import Integrations from '@/components/landing/integrations'
import Pricing from '@/components/landing/pricing'
import CTA from '@/components/landing/cta'
import Navbar from '@/components/landing/navbar'
import Footer from '@/components/landing/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Integrations />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}