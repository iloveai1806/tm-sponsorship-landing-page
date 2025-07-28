import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import NewsletterGrowth from '@/components/NewsletterGrowth'
import WhatMakesTMSpecial from '@/components/WhatMakesTMSpecial'
import Packages from '@/components/Packages'
import Testimonials from '@/components/Testimonials'
import FeaturedMedia from '@/components/FeaturedMedia'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black">
      <Hero />
      <Stats />
      <NewsletterGrowth />
      <WhatMakesTMSpecial />
      <Packages />
      <Testimonials />
      <FeaturedMedia />
      <CTA />
    </main>
  )
}