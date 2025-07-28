import Image from 'next/image'

export default function WhatMakesTMSpecial() {
  const features = [
    {
      number: '1',
      title: 'For crypto natives, by crypto',
      description: 'Token Metrics Daily is the ultimate source of crypto truth and the flagship media product of the Token Metrics suite. It\'s likely the only newsletter with 100% crypto-native readers, thanks to a crypto-savvy acquisition strategy.',
      icon: ''
    },
    {
      number: '2',
      title: 'A diverse audience of crypto leaders',
      description: 'Our audience includes high-earning crypto-literate readers from Western countries: investors, industry execs, trad-fi veterans, crypto natives, newbies, creators, builders, and a large retail crypto audience.',
      icon: ''
    },
    {
      number: '3',
      title: 'Actionable insights & alpha',
      description: 'We deliver real value with actionable insights and alpha that our readers can use immediately. Our content has helped thousands double their portfolios with data-driven strategies.',
      icon: ''
    }
  ]

  return (
    <section className="py-24 sm:py-32 bg-black/50 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            What makes <span className="text-tm-yellow">TM Daily</span> special?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.number} className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 border border-gray-700 hover:border-tm-yellow/50 transition-all h-full">
                <div className="mb-4">
                  <span className="text-4xl font-bold text-tm-yellow">{feature.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}