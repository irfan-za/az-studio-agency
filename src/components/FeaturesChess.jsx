import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import { useInView } from 'motion/react'
import BlurText from './BlurText'

function FeatureRow({ reverse = false, title, body, cta, gifSrc, gifFallback }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-12 md:gap-16`}
    >
      {/* Text content */}
      <div className="flex-1 space-y-5">
        <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-[0.95]">
          {title}
        </h3>
        <p className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed">
          {body}
        </p>
        <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer">
          {cta}
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* GIF preview */}
      <div className="flex-1 w-full">
        <div className="liquid-glass rounded-2xl overflow-hidden aspect-video">
          <img
            src={gifSrc}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to external URL if local placeholder fails
              if (e.target.src !== gifFallback) {
                e.target.src = gifFallback
              }
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturesChess() {
  return (
    <section className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col items-center text-center mb-20">
        <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
          <span className="text-xs font-medium text-white font-body">
            Capabilities
          </span>
        </div>
        <BlurText
          text="Pro features. Zero complexity."
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] justify-center max-w-xl"
          delay={120}
        />
      </div>

      {/* Alternating rows */}
      <div className="space-y-24">
        <FeatureRow
          title="Designed to convert. Built to perform."
          body="Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all."
          cta="Learn more"
             gifSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
          gifFallback="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
        />
        <FeatureRow
          reverse
          title="It gets smarter. Automatically."
          body="Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever."
          cta="See how it works"
           gifSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
          gifFallback="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
        />
      </div>
    </section>
  )
}
