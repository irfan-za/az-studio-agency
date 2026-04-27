import { useEffect, useRef } from 'react'

/**
 * HlsVideo — plays HLS streams via hls.js with native fallback for Safari.
 * Passes all extra props (autoPlay, loop, muted, playsInline, className, style…)
 * directly to the underlying <video> element.
 */
export default function HlsVideo({ src, className = '', style = {}, ...props }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video || !src) return

    let hls = null

    const initHls = async () => {
      const Hls = (await import('hls.js')).default

      if (Hls.isSupported()) {
        hls = new Hls({
          lowLatencyMode: false,
          enableWorker: true,
        })
        hls.loadSource(src)
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {
            // autoplay may be blocked — silently ignore
          })
        })
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        video.src = src
        video.addEventListener('loadedmetadata', () => {
          video.play().catch(() => {})
        })
      }
    }

    initHls()

    return () => {
      if (hls) {
        hls.destroy()
      }
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      {...props}
    />
  )
}
