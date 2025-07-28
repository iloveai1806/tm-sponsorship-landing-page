import Image from 'next/image'

export default function Stats() {
  const stats = [
    { label: 'Newsletter Subscribers', value: '160K+' },
    { label: 'Average Open Rate', value: '30%' },
    { label: 'Daily Impressions', value: '145K+' },
    { label: 'Community Members', value: '350K+' },
    { label: 'YouTube Subscribers', value: '169K+' },
    { label: 'Average Video Views', value: '56K+' },
  ]

  const platforms = [
    { name: 'X/Twitter', followers: '140k+', icon: '/logos/X(twitter)_icon.svg.png', link: 'https://x.com/tokenmetricsinc' },
    { name: 'YouTube', followers: '169k+', icon: '/logos/youtube-color-svgrepo-com.svg', link: 'https://www.youtube.com/@TokenMetrics' },
    { name: 'Discord', members: '8k+', icon: '/logos/discord-v2-svgrepo-com.svg', link: 'https://discord.gg/3XMM6zUf' },
  ]

  return (
    <section id="stats" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Big Numbers, <span className="text-tm-yellow">Big Conversions</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join the most successful crypto projects advertising with Token Metrics
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 border border-gray-700 hover:border-tm-yellow/50 transition-colors"
            >
              <p className="text-3xl font-bold text-tm-yellow">{stat.value}</p>
              <p className="mt-2 text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Our Communities</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {platforms.map((platform) => (
              <a 
                key={platform.name} 
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center hover:scale-110 transition-transform"
              >
                <div className="relative h-12 w-12 mx-auto mb-2">
                  <Image
                    src={platform.icon}
                    alt={platform.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xl font-semibold text-tm-yellow">{platform.followers || platform.members}</p>
                <p className="text-gray-300">{platform.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}