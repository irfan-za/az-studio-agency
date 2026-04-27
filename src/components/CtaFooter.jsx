import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import HlsVideo from './HlsVideo'
import BlurText from './BlurText'

const CTA_VIDEO =
  'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

export default function CtaFooter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative overflow-hidden">
      {/* HLS Video background */}
      <HlsVideo
        src={CTA_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: '200px',
          background: 'linear-gradient(to bottom, black, transparent)',
        }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: '200px',
          background: 'linear-gradient(to top, black, transparent)',
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-20 flex flex-col items-center text-center px-6 py-40"
      >
        {/* Heading */}
        <BlurText
          text="Your next website starts here."
          className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] justify-center max-w-2xl mb-6"
          delay={120}
        />

        {/* Subtext */}
        <motion.p
          className="text-white/60 font-body font-light text-sm md:text-base max-w-sm mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Book a free strategy call. See what AI-powered design can do. No
          commitment, no pressure. Just possibilities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer">
            Book a Call
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="bg-white text-black rounded-full px-6 py-3 font-body font-medium text-sm hover:bg-white/90 transition-colors cursor-pointer">
            View Pricing
          </button>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="relative z-20 mt-32 px-6 lg:px-24 pb-12">
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <a
            href="https://jasawebsite.id/templates/az-studio-agency"
            target="_blank"
            className="text-white/40 text-xs font-body hover:text-white/70 transition-colors"
          >
            © {new Date().getFullYear()} jasawebsite.id
          </a>

          {/* Footer links */}
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/40 text-xs font-body hover:text-white/70 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
