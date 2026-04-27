import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'
import { Zap, Palette, BarChart3, Shield } from 'lucide-react'
import BlurText from './BlurText'

const features = [
  {
    icon: Zap,
    title: 'Days, Not Months',
    body: "Concept to launch at a pace that redefines fast. Because waiting isn\u2019t a strategy.",
  },
  {
    icon: Palette,
    title: 'Obsessively Crafted',
    body: 'Every detail considered. Every element refined. Design so precise, it feels inevitable.',
  },
  {
    icon: BarChart3,
    title: 'Built to Convert',
    body: 'Layouts informed by data. Decisions backed by performance. Results you can measure.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    body: 'Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.',
  },
]

function FeatureCard({ icon: Icon, title, body, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="liquid-glass rounded-2xl p-6 flex flex-col gap-4"
    >
      {/* Icon circle */}
      <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-white" />
      </div>

      <div>
        <h3 className="text-white font-body font-medium text-base mb-2">
          {title}
        </h3>
        <p className="text-white/60 font-body font-light text-sm leading-relaxed">
          {body}
        </p>
      </div>
    </motion.div>
  )
}

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
          <span className="text-xs font-medium text-white font-body">
            Why Us
          </span>
        </div>
        <BlurText
          text="The difference is everything."
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] justify-center max-w-xl"
          delay={120}
        />
      </div>

      {/* 4-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <FeatureCard key={f.title} {...f} index={i} />
        ))}
      </div>
    </section>
  )
}
