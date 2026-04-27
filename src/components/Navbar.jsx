import { ArrowUpRight } from 'lucide-react'

const navLinks = ['Home', 'Services', 'Work', 'Process', 'Pricing']

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-white/90 font-body font-semibold font-serif text-sm flex items-center gap-2">AZ-Studio</h1>
        </div>

        {/* Center nav pill — desktop only */}
        <div className="hidden md:flex items-center">
          <div className="liquid-glass rounded-full px-1.5 py-1 flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="px-3 py-2 text-sm font-medium text-white/90 font-body rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
            {/* Get Started CTA */}
            <a
              href="#"
              className="ml-1 flex items-center gap-1.5 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium font-body hover:bg-white/90 transition-colors duration-200"
            >
              Get Started
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Mobile: right CTA only */}
        <div className="flex md:hidden">
          <a
            href="#"
            className="flex items-center gap-1.5 bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body"
          >
            Get Started
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </nav>
  )
}
