'use client';

import { motion } from 'framer-motion';
import { FileText, Video, Globe2, Headphones } from 'lucide-react';

const features = [
  {
    title: 'تهیه مستندات استاندارد، حرفه‌ای، بروز',
    description: '',
    icon: <FileText className="w-7 h-7 text-[#06174c]" />,
  },
  {
    title: 'مشاوره آنلاین و حضوری',
    description: '',
    icon: <Video className="w-7 h-7 text-[#06174c]" />,
  },
  {
    title: 'دسترسی آنلاین لحظه‌ای به تغییرات مستندات',
    description: '',
    icon: <Globe2 className="w-7 h-7 text-[#06174c]" />,
  },
  {
    title: 'پشتیبانی ۲۴ ساعته',
    description: '',
    icon: <Headphones className="w-7 h-7 text-[#06174c]" />,
  },
];

export default function Features() {
  return (
    <section className="bg-[#06174c] my-10 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* عنوان */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">ویژگی‌های ما</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            در ونچـــرا، مجموعه‌ای از خدمات و امکانات یکپارچه برای رشد سریع‌تر استارتاپ‌ها فراهم کرده‌ایم.
          </p>
        </motion.div>

        {/* کارت‌ها */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-[#15c4ae] p-3 rounded-full">
                  {feature.icon}
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-md">{feature.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
