'use client';
import { motion } from 'framer-motion';
import {
  FileText,
  BarChart,
  Table,
  Clipboard,
  CheckCircle,
} from 'lucide-react';
import Image from 'next/image';
const items = [
  {
    title: 'Pitch Deck',
    description: 'طراحی حرفه‌ای فایل ارائه برای جلسات سرمایه‌گذاری',
    icon: FileText,  // نمایانگر سند و ارائه
  },
  {
    title: 'Financial Projection',
    description: 'پیش‌بینی مالی با جزئیات چندساله',
    icon: BarChart,  // نمودار مالی و پیش‌بینی
  },
  {
    title: 'Cap Table',
    description: 'جدول سهام‌داری شفاف و دقیق',
    icon: Table,     // جدول و داده‌ها
  },
  {
    title: 'Business Plan',
    description: 'نقشه راه کسب‌وکار با جزئیات اجرایی',
    icon: Clipboard, // برنامه‌ریزی و یادداشت‌ها
  },
  {
    title: 'Feasibility Study',
    description: 'مطالعه امکان‌سنجی برای ارزیابی واقع‌بینانه پروژه',
    icon: CheckCircle, // ارزیابی و تأیید
  },
];
export default function Service2() {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* عنوان وسط کل عرض */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#06174c] mb-4">آماده‌سازی مستندات</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            داشتن مستندات حرفه‌ای و دقیق، اولین گام جلب اعتماد سرمایه‌گذاران است. ما ابزارهای لازم برای جذب موفق را به شما می‌دهیم.
          </p>
        </motion.div>

        {/* گرید با دو ستون: لیست و عکس */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          {/* لیست ویژگی‌ها */}
          <div className="md:col-span-6 space-y-5 h-full">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5">
                  <div className="text-[#15171e] bg-[#15c4ae] p-3 rounded-full shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[#06174c] font-semibold text-base mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>


          {/* تصویر */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-6 flex justify-center h-full"
          >
            <Image
              src="/assets/images/service3.jpg"
              alt="مشاوره کسب‌وکار"
              width={700}
              height={700}
              className="rounded-2xl shadow-lg object-cover w-full max-w-lg"
            />
          </motion.div>


        </div>
      </div>
    </section>
  );
}
