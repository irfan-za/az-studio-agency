import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

/**
 * BlurText — animates text word-by-word with a gaussian blur dissolve.
 * Triggered by IntersectionObserver when element enters the viewport.
 *
 * @param {string}  text      — the text to animate
 * @param {string}  className — Tailwind classes applied to the wrapper <div>
 * @param {number}  delay     — ms stagger delay between each word (default 200)
 * @param {string}  direction — "bottom" (default) | "top"
 * @param {number}  initialDelay — seconds before the first word starts (default 0)
 */
export default function BlurText({
  text,
  className = '',
  delay = 200,
  direction = 'bottom',
  initialDelay = 0,
}) {
  const words = text.split(' ')
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const yFrom = direction === 'bottom' ? 50 : -50

  return (
    <div ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-[0.28em] last:mr-0 inline-block"
          initial={{
            filter: 'blur(10px)',
            opacity: 0,
            y: yFrom,
          }}
          animate={
            isVisible
              ? {
                  filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                  opacity: [0, 0.5, 1],
                  y: [yFrom, -5, 0],
                }
              : {}
          }
          transition={{
            delay: initialDelay + (i * delay) / 1000,
            duration: 0.7,
            ease: 'easeOut',
            times: [0, 0.5, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
