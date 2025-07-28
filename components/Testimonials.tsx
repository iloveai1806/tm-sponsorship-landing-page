export default function Testimonials() {
  const testimonials = [
    {
      name: 'Justin V.',
      content: "I've tried a lot of crypto newsletters, but Token Metrics Daily has been the real deal. 100% crypto-native insights, actionable trends, and alpha that's actually helped me double my portfolio. No fluff-just results."
    },
    {
      name: 'Pamela B.',
      content: "Token Metrics Daily connects me to crypto's most savvy community-builders, investors, and trendsetters. Their insights help me stay ahead of the curve. If you're serious about crypto, this is where you want to be."
    },
    {
      name: 'Michael C.',
      content: "Following Token Metrics Daily is like having an early warning system for the next big thing in crypto. Their trend predictions and quant research have made a HUGE difference in my strategy. It's my daily must-read."
    }
  ]

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            What Our <span className="text-tm-yellow">Readers Say</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join thousands of satisfied readers and successful advertisers
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 border border-gray-700"
            >
              <div className="mb-4">
                <div className="flex text-tm-yellow mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </div>
              <div className="mt-6">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">Verified Subscriber</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}