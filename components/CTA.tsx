import Image from 'next/image'

export default function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-gradient-to-r from-tm-yellow/20 to-tm-yellow/10 rounded-3xl p-16 text-center border border-tm-yellow/30">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
            Let&apos;s <span className="text-tm-yellow">Build Together</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the most successful crypto projects advertising with Token Metrics. 
            Reach our engaged, crypto-native audience and drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:info@tokenmetrics.com"
              className="rounded-md bg-tm-yellow px-8 py-4 text-lg font-semibold text-black shadow-sm hover:bg-yellow-400 transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="#packages"
              className="text-lg font-semibold text-white hover:text-tm-yellow transition-colors"
            >
              View Packages Again
            </a>
          </div>

          <div className="text-gray-400 space-y-2">
            <p>Contact us at: <span className="text-tm-yellow">info@tokenmetrics.com</span></p>
            <p className="text-sm">Average response time: 24 hours</p>
            <p className="mt-4">Visit us at: <a href="https://tokenmetrics.com" target="_blank" rel="noopener noreferrer" className="text-tm-yellow hover:text-yellow-400 transition-colors">tokenmetrics.com</a></p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Token Metrics. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}