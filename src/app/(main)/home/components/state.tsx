
'use client';
import { motion } from 'framer-motion';
import { UserCheck, Briefcase, Star, Rocket } from 'lucide-react';

const stats = [
  { icon: <UserCheck className="w-8 h-8" />, value: "250+", label: "مشتری راضی" },
  { icon: <Briefcase className="w-8 h-8" />, value: "120+", label: "پروژه انجام‌شده" },
  { icon: <Rocket className="w-8 h-8" />, value: "15+", label: "استارتاپ همراه‌شده" },
  { icon: <Star className="w-8 h-8" />, value: "98%", label: "رضایت کاربران" },
];

export default function StatsSection() {
  return (
      <section className="max-w-6xl mx-auto py-15 px-5">
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <div className="bg-[#15c4ae] text-[#06174c] p-3 rounded-full">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-bold text-[#06174c]">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  );
}

