'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Slogan() {
  return (
    <section className="relative bg-[#06174c] text-white py-24 px-6 text-center overflow-hidden">
      <div className="mx-auto z-10 relative max-w-5xl">
        {/* تیتر انیمیشنی */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold leading-tight mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          جایی که <span className="text-[#15c4ae]">ایده‌ها</span>، به{' '}
          <span className="text-[#15c4ae]">سرمایه‌های هوشمند</span> می‌رسند.
        </motion.h2>

        {/* دکمه انیمیشنی */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/request"
            className="bg-[#15c4ae] hover:bg-[#12b3a0] transition-colors duration-300 text-[#06174c] text-md px-10 py-3 rounded-full font-semibold shadow-md"
          >
            همین حالا اقدام کن
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
