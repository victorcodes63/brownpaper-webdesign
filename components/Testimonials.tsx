'use client'

import { motion } from 'motion/react'

const testimonials = [
  {
    name: 'Winnie Mbugua',
    role: 'Manager, Eagle HR Consultants',
    quote:
      'Brown Paper transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations.',
  },
  {
    name: 'Michael Ochieng',
    role: 'Marketing Director, The Bar Next Door',
    quote:
      'Outstanding packaging design that boosted our product sales by 40%. Professional, timely, and incredibly creative.',
  },
  {
    name: 'Amina Hassan',
    role: 'Operations Manager, Civil Registration Services',
    quote:
      'From concept to final product, the team delivered exceptional quality. Our stationery is now a conversation starter.',
  },
  {
    name: 'David Kimani',
    role: 'Founder, Jaza Credit',
    quote:
      'Their design expertise and print quality are unmatched. They truly understand our vision and bring it to life.',
  },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-ink text-paper">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease }}
          className="mb-14 md:mb-20"
        >
          <p className="mono-label mb-4 text-paper/40">
            <span className="text-paper/55">(BP® — 05)</span> Clients
          </p>
          <h2 className="text-display max-w-2xl text-4xl md:text-5xl lg:text-6xl">
            What partners say about the work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: Math.min(0.08 * index, 0.24), ease }}
              className="border-t border-paper/15 pt-8"
            >
              <p className="text-display text-2xl leading-snug text-paper md:text-3xl">
                “{item.quote}”
              </p>
              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="block text-sm font-medium text-paper">{item.name}</span>
                  <span className="mt-1 block text-sm text-paper/45">{item.role}</span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
