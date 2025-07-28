import Image from 'next/image'

export default function FeaturedMedia() {
  const media = [
    { name: 'Bloomberg', logo: '/logos/bloomberg.svg' },
    { name: 'CNN', logo: '/logos/cnn.png' },
    { name: 'Forbes', logo: '/logos/forbes-logo.svg' },
    { name: 'CNBC', logo: '/logos/cnbc-logo.svg' },
  ]

  const featuredProjects = [
    { name: 'Polygon', logo: '/logos/polygon.png' },
    { name: 'Multicoin Capital', logo: '/logos/multicoin_capital1675419937276.png' },
    { name: 'Dragonfly Capital', logo: '/logos/dragon_fly_capital1660640000289.png' },
    { name: 'LayerZero Labs', logo: '/logos/layerzero-labs.png' },
    { name: 'Avalanche', logo: '/logos/avalanche-logo.png' },
    { name: 'Davincij15', logo: '/logos/davincj15.png' },
  ]

  return (
    <section className="py-24 sm:py-32 bg-black/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-12">
            As Featured <span className="text-tm-yellow">On</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {media.map((outlet) => (
              <div
                key={outlet.name}
                className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all"
              >
                <Image
                  src={outlet.logo}
                  alt={outlet.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Trusted by <span className="text-tm-yellow">Leading Projects</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.name}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700 hover:border-tm-yellow/50 transition-all hover:scale-105"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}