import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const accent = 'emerald'

export default function Home() {
  return (
    <div className="">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2000&auto=format&fit=crop"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-white text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Elevate Your Step
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="mt-4 text-gray-300 max-w-xl"
          >
            Premium, minimalist footwear engineered for performance and crafted for style.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="mt-8 flex gap-3"
          >
            <Link className={`inline-flex items-center justify-center px-6 py-3 rounded-md bg-${accent}-600 text-white hover:bg-${accent}-700 transition-colors`} to="/products">Shop Collection</Link>
            <a className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors" href="#featured">Explore</a>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>
      </section>

      <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Featured</h2>
          <Link to="/products" className={`text-${accent}-600 hover:text-${accent}-700`}>View all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[1,2,3].map((i) => (
            <motion.a key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              href={`/product/${i}`}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <img src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop`} alt="shoe"
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Apex Runner {i}</h3>
                    <p className="text-sm text-gray-500">Men • Running</p>
                  </div>
                  <div className={`font-semibold text-${accent}-600`}>$189</div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_0,rgba(16,185,129,0.06),transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
              className="rounded-xl shadow-xl"
            />
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h3 className="text-3xl font-bold tracking-tight">Engineered for Comfort</h3>
              <p className="mt-4 text-gray-600">Breathable knit uppers, responsive midsoles, and precision traction—our footwear keeps you grounded and going.</p>
              <Link to="/products" className={`mt-6 inline-flex px-5 py-3 rounded-md border border-${accent}-600 text-${accent}-700 hover:bg-${accent}-50 transition-colors`}>Discover more</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
