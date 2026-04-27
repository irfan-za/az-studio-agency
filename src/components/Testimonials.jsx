import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'
import BlurText from './BlurText'

const testimonials = [
  {
    quote: "A complete rebuild in five days. The result outperformed everything we\u2019d spent months building before.",
    name: 'Sarah Chen',
    role: 'CEO, Luminary',
  },
  {
    quote: "Conversions up 4x. That\u2019s not a typo. The design just works differently when it\u2019s built on real data.",
    name: 'Marcus Webb',
    role: 'Head of Growth, Arcline',
  },
  {
    quote: "They didn\u2019t just design our site. They defined our brand. World-class doesn\u2019t begin to cover it.",
    name: 'Elena Voss',
    role: 'Brand Director, Helix',
  },
]

function TestimonialCard({ quote, name, role, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className="liquid-glass rounded-2xl p-8 flex flex-col gap-6"
    >
      <div className="text-white/20 font-heading text-5xl leading-none select-none">
        &ldquo;
      </div>

      <p className="text-white/80 font-body font-light text-sm italic leading-relaxed -mt-4">
        {quote}
      </p>

      <div className="border-t border-white/10 pt-4 flex flex-col gap-0.5">
        <span className="text-white font-body font-medium text-sm">{name}</span>
        <span className="text-white/50 font-body font-light text-xs">{role}</span>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-14">
        <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
          <span className="text-xs font-medium text-white font-body">
            What They Say
          </span>
        </div>
        <BlurText
          text="Don't take our word for it."
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] justify-center max-w-xl"
          delay={120}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} {...t} index={i} />
        ))}
      </div>
    </section>
  )
}
