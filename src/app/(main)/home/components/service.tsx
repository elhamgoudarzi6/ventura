
'use client';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  FileText,
  Handshake,
  ShieldCheck,
  Scale,
} from 'lucide-react';
import Image from 'next/image';

const items = [
  {
    title: 'راه‌اندازی استارتاپ',
    description: 'از شکل‌گیری ایده تا اجرای موفق با نقشه راه دقیق و راهنمایی گام‌به‌گام',
    icon: Lightbulb,
  },
  {
    title: 'توسعه مدل کسب‌وکار',
    description: 'کمک به طراحی و تست مدل درآمدی پایدار با تمرکز بر ارزش پیشنهادی',
    icon: FileText,
  },
  {
    title: 'شراکت و هم‌بنیان‌گذاری',
    description: 'ساختار شفاف و توافق‌نامه‌های اصولی برای مؤسسان جهت حفظ تعادل و رشد',
    icon: Handshake,
  },
  {
    title: 'حاکمیت شرکتی',
    description: 'طراحی ساختار مدیریتی حرفه‌ای برای اطمینان از رشد بلندمدت کسب‌وکار',
    icon: ShieldCheck,
  },
  {
    title: 'مشاوره حقوقی',
    description: 'پوشش حقوقی تخصصی در مالکیت فکری، قراردادها و حفاظت از دارایی‌های معنوی',
    icon: Scale,
  },
];

export default function FeatureSection() {
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
          <h2 className="text-4xl font-bold text-[#06174c] mb-4">مشاوره کسب‌وکار</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            از اولین قدم‌های راه‌اندازی استارتاپ تا توسعه ساختار حقوقی و مدل درآمدی، ما همراه شما هستیم.
            این خدمات به‌صورت اختصاصی و با بررسی دقیق نیازهای هر تیم ارائه می‌شوند.
          </p>
        </motion.div>

        {/* گرید با دو ستون: لیست و عکس */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* لیست ویژگی‌ها */}
          <div className="md:col-span-6 space-y-5 h-full flex flex-col justify-center order-2 md:order-1">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5"
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

          {/* تصویر */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-6 flex justify-center h-full order-1 md:order-2"
          >
            <Image
              src="/assets/images/service1.jpg"
              alt="مشاوره کسب‌وکار"
              width={700}
              height={700}
              className="rounded-2xl shadow-lg object-cover w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
