import { motion } from 'framer-motion'

const bubbles = [
  { className: 'bubble bubble-blue bubble-xl bubble-top-right', delay: 0 },
  { className: 'bubble bubble-soft bubble-md bubble-left', delay: 0.08 },
  { className: 'bubble bubble-white bubble-sm bubble-mid-right', delay: 0.16 },
  { className: 'bubble bubble-red bubble-xs bubble-mid-left', delay: 0.22 },
  { className: 'bubble bubble-blue bubble-md bubble-bottom-right', delay: 0.28 },
  { className: 'bubble bubble-red bubble-sm bubble-lower-left', delay: 0.18 },
  { className: 'bubble bubble-white bubble-xs bubble-lower-mid', delay: 0.24 },
]

export function DecorativeBubbles() {
  return (
    <div className="decorative-bubbles" aria-hidden="true">
      {bubbles.map((bubble) => (
        <motion.span
          key={bubble.className}
          className={bubble.className}
          initial={{ opacity: 0, scale: 0.72, y: 34 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: '-120px' }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: bubble.delay }}
        />
      ))}
    </div>
  )
}
