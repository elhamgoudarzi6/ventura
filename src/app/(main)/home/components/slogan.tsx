'use client';

import { motion } from 'framer-motion';

export default function Slogan() {
  return (
    <section className="relative bg-[#06174c] text-white py-20 px-6 text-center overflow-hidden">
      <div className="max-w-3xl mx-auto z-10 relative">
        <motion.h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}>
          جایی که <span className="text-[#15c4ae]">ایده‌ها</span>، به{' '}
          <span className="text-[#15c4ae]">سرمایه‌های هوشمند</span> می‌رسند.
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          ونچـــرا پلی است بین استارتاپ‌های خلاق و سرمایه‌گذاران آینده نگر
        </motion.p>
      </div>
    </section>
  );
}
