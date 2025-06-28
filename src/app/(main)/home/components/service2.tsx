
'use client';
import { motion } from 'framer-motion';
import {
  DollarSign,
  Presentation,
  BarChart2,
  Handshake,
  ScrollText
} from 'lucide-react';
import Image from 'next/image';
const items = [
  {
    title: 'انتخاب روش تأمین مالی',
    description: 'بدهی یا سهام؟ بهترین گزینه برای شما کدام است؟',
    icon: DollarSign,
  },
  {
    title: 'آماده‌سازی برای ارائه به سرمایه‌گذار',
    description: 'ساختاردهی ارائه و پاسخ به سوالات کلیدی',
    icon: Presentation,
  },
  {
    title: 'مدل‌سازی مالی',
    description: 'پیش‌بینی دقیق درآمد، هزینه و سود',
    icon: BarChart2,
  },
  {
    title: 'ساختار توافق و مذاکره',
    description: 'آماده‌سازی برای مذاکرات و پیش‌نویس قراردادها',
    icon: Handshake,
  },
  {
    title: 'قراردادهای سرمایه‌گذاری',
    description: 'تحلیل و طراحی قراردادهای برد-برد',
    icon: ScrollText,
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
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-[#06174c] mb-4">مشاوره جذب سرمایه</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            سرمایه‌گذاری فقط پول نیست، بلکه شراکت هوشمندانه است. ما کمک می‌کنیم دقیق، حرفه‌ای و هدفمند وارد این مسیر شوید.
          </p>
        </motion.div>

        {/* گرید با دو ستون: لیست و عکس */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* تصویر */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-6 flex justify-center h-full"
          >
            <Image
              src="/assets/images/service2.jpg"
              alt="مشاوره کسب‌وکار"
              width={700}
              height={700}
              className="rounded-2xl shadow-lg object-cover w-full"
            />
          </motion.div>

          {/* لیست ویژگی‌ها */}
          <div className="md:col-span-6 space-y-5 h-full flex flex-col justify-center">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
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


        </div>
      </div>
    </section>
  );
}
