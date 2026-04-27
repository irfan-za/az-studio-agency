import { motion } from 'motion/react'
import { ArrowUpRight, Play } from 'lucide-react'
import BlurText from './BlurText'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4'

const partners = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma']

export default function Hero() {
  return (
    <section
      className="relative overflow-visible"
      style={{ height: '1000px' }}
    >
      {/* ── Background video ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        className="absolute left-0 w-full h-auto object-contain z-0 pointer-events-none"
        style={{ top: '20%' }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />

      {/* Bottom gradient fade to black */}
      <div
        className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
        style={{
          height: '300px',
          background: 'linear-gradient(to bottom, transparent, black)',
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ paddingTop: '150px' }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
            New
          </span>
          <span className="text-white/80 text-xs font-body pr-3">
            Introducing AI-powered web design.
          </span>
        </motion.div>

        {/* Heading */}
        <BlurText
          text="The Website Your Brand Deserves"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl tracking-[-4px] justify-center mb-6"
          delay={100}
          initialDelay={0.3}
        />

        {/* Subtext */}
        <motion.p
          className="text-sm md:text-base text-white font-body font-light leading-tight max-w-md mb-8"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2.5 text-white font-body font-light text-sm cursor-pointer hover:text-white/80 transition-colors">
            <Play className="w-4 h-4 fill-white" />
            Watch the Film
          </button>
        </motion.div>

        {/* Partners bar */}
        <div className="mt-auto pt-16" style={{ marginTop: '80px' }}>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <div className="liquid-glass rounded-full px-3.5 py-1">
              <span className="text-white/50 text-xs font-body">
                Trusted by the teams behind
              </span>
            </div>
            <div className="flex items-center gap-12 md:gap-16 flex-wrap justify-center">
              {partners.map((name) => (
                <span
                  key={name}
                  className="text-2xl md:text-3xl font-heading italic text-white/80"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
