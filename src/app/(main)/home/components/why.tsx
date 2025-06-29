
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Gem, ShieldCheck, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: 'تجربه‌ی اثبات‌شده در سطح ملی و منطقه‌ای',
    icon: Gem,
  },
  {
    title: 'شبکه‌ای قدرتمند از سرمایه‌گذاران',
    icon: ShieldCheck,
  },
  {
    title: 'مشاوره‌های کاملاً سفارشی‌سازی‌شده',
    icon: TrendingUp,
  },
  {
    title: 'همراهی کامل از ایده تا تأمین سرمایه',
    icon: CheckCircle,
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

        {/* تصویر */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-6 flex justify-center"
        >
          <Image
            src="/assets/images/why.jpg"
            alt="چرا ونچرا"
            width={600}
            height={600}
            className="rounded-2xl shadow-xl object-cover w-full"
          />
        </motion.div>

        {/* متن و ویژگی‌ها */}
        <div className="md:col-span-6 space-y-5">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-[#06174c] text-right"
          >
            چرا <span className="text-[#15c4ae]">ونچرا؟</span>
          </motion.h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify max-w-xl">
            ونچرا را انتخاب کنید، چون:
            تجربه‌ی اثبات‌شده در سطح ملی و منطقه‌ای داریم، شبکه‌ای قدرتمند از سرمایه‌گذاران را در اختیار شما قرار می‌دهیم،
            مشاوره‌های ما کاملاً سفارشی‌سازی‌شده بر اساس نیاز هر تیم استارتاپی است، و در تمام مراحل، از ایده تا تأمین سرمایه، همراه شما هستیم.
          </p>

          <div className="space-y-3">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-[#15c4ae]/10 text-[#15c4ae] p-3 rounded-full">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#06174c]">{item.title}</h3>
                </motion.div>
              );
            })}
          </div>
     <div className="text-center md:text-left mt-5">
  <Link
    href="/request"
    className="bg-[#15c4ae] hover:bg-[#12b3a0] transition-colors duration-300 text-[#06174c] text-md px-7 py-2 rounded-full"
  >
    مشاوره رایگان
  </Link>
</div>
        </div>
      </div>
    </section>
  );
}
