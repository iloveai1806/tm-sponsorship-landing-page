'use client'

import { useEffect, useRef } from 'react'

export default function NewsletterGrowth() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    // Get the actual display size
    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    
    // Set the internal size to match the display size, accounting for device pixel ratio
    canvas.width = rect.width * dpr
    canvas.height = 400 * dpr
    
    // Scale the drawing context to match device pixel ratio
    ctx.scale(dpr, dpr)
    
    // Use display size for drawing calculations
    const displayWidth = rect.width
    const displayHeight = 400

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Chart data
    const data = [
      { quarter: 'Q1 2024', value: 85000 },
      { quarter: 'Q2 2024', value: 105000 },
      { quarter: 'Q3 2024', value: 125000 },
      { quarter: 'Q4 2024 - Present', value: 160000 },
    ]

    // Chart dimensions
    const padding = 80
    const chartWidth = displayWidth - padding * 2
    const chartHeight = displayHeight - padding * 2
    const maxValue = 200000

    // Draw axes
    ctx.strokeStyle = '#6B7280'
    ctx.lineWidth = 2
    
    // Y-axis
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, displayHeight - padding)
    ctx.stroke()

    // X-axis
    ctx.beginPath()
    ctx.moveTo(padding, displayHeight - padding)
    ctx.lineTo(displayWidth - padding, displayHeight - padding)
    ctx.stroke()

    // Draw horizontal grid lines and labels
    ctx.fillStyle = '#9CA3AF'
    ctx.font = '14px Inter'
    const steps = 4
    for (let i = 0; i <= steps; i++) {
      const y = padding + (chartHeight / steps) * i
      const value = maxValue - (maxValue / steps) * i

      // Grid lines
      ctx.strokeStyle = '#374151'
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(displayWidth - padding, y)
      ctx.stroke()

      // Y-axis labels
      ctx.fillStyle = '#9CA3AF'
      ctx.textAlign = 'right'
      ctx.fillText(value.toLocaleString(), padding - 15, y + 5)
    }

    // Draw data line
    ctx.strokeStyle = '#FFCF30'
    ctx.lineWidth = 3
    ctx.beginPath()

    data.forEach((point, index) => {
      const x = padding + (chartWidth / (data.length - 1)) * index
      const y = padding + chartHeight - (point.value / maxValue) * chartHeight

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.stroke()

    // Draw data points and labels
    data.forEach((point, index) => {
      const x = padding + (chartWidth / (data.length - 1)) * index
      const y = padding + chartHeight - (point.value / maxValue) * chartHeight

      // Star points
      ctx.fillStyle = '#FFCF30'
      ctx.font = '24px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      // Draw star shape
      ctx.beginPath()
      const size = 8
      for (let i = 0; i < 10; i++) {
        const angle = (i * Math.PI) / 5
        const radius = i % 2 === 0 ? size : size / 2
        const px = x + radius * Math.cos(angle - Math.PI / 2)
        const py = y + radius * Math.sin(angle - Math.PI / 2)
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.fill()

      // X-axis labels
      ctx.fillStyle = '#9CA3AF'
      ctx.font = '14px Inter'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'top'
      ctx.fillText(point.quarter, x, displayHeight - padding + 10)
    })
  }, [])

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mb-16 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            TM Newsletter readers <span className="text-tm-yellow">by the numbers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tell your story to crypto&apos;s most engaged readers — the ultimate decision-makers, 
            link clickers, and early on-chain adopters.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-tm-yellow/20 via-blue-600/20 to-tm-yellow/20 blur-3xl opacity-50" />
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-10 border border-gray-700 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            <div className="relative">
              <div className="mb-8">
                <span className="bg-tm-yellow text-black px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider shadow-lg">
                  Subscriber Count
                </span>
              </div>
              <div className="bg-black/30 rounded-xl p-4">
                <canvas 
                  ref={canvasRef} 
                  className="w-full"
                  style={{ maxWidth: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}