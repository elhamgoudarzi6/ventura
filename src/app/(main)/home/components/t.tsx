'use client';

import { motion } from 'framer-motion';
import {
  Lightbulb, Target, FileText,
  TrendingUp, Handshake, BadgeCheck,
  ChevronLeft,
} from 'lucide-react';

const steps = [
  { icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />, title: 'درخواست مشاوره', desc: 'ثبت درخواست اولیه توسط استارتاپ' },
  { icon: <Target className="w-6 h-6 md:w-8 md:h-8" />, title: 'تحلیل بیزینس', desc: 'بررسی مدل کسب‌وکار و اهداف' },
  { icon: <FileText className="w-6 h-6 md:w-8 md:h-8" />, title: 'تدوین استراتژی', desc: 'تدوین پلن جذب سرمایه و اسناد مالی' },
  { icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />, title: 'معرفی به سرمایه‌گذار', desc: 'ارتباط با شبکه سرمایه‌گذاران تخصصی' },
  { icon: <Handshake className="w-6 h-6 md:w-8 md:h-8" />, title: 'جلسات و مذاکرات', desc: 'برگزاری جلسات و ارائه' },
  { icon: <BadgeCheck className="w-6 h-6 md:w-8 md:h-8" />, title: 'قرارداد نهایی', desc: 'انعقاد قرارداد سرمایه‌گذاری' },
];

export default function WorkProcess() {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="relative max-w-4xl mx-auto">

        {/* مسیر عمودی موبایل */}
        <svg
          className="md:hidden absolute left-1/2 top-0 h-full w-10 -translate-x-1/2 z-0"
          viewBox="0 0 100 1200"
          preserveAspectRatio="none"
        >
          <path
            d="M 50 0 Q 30 50, 50 100 T 50 200 T 50 300 T 50 400 T 50 500 T 50 600 T 50 700 T 50 800 T 50 900 T 50 1000 T 50 1100 T 50 1200"
            stroke="#06174c"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* مسیر افقی دسکتاپ */}
        <svg
          className="hidden md:block absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 z-0"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 50 Q 50 35, 100 54 T 200 50 T 300 50 T 400 50 T 500 50 T 600 50 T 700 50 T 800 50 T 900 50 T 1000 50"
            stroke="#06174c"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* فلش دسکتاپ */}
        <ChevronLeft
          size={40}
          className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 text-[#06174c]"
        />

        {/* آیتم‌ها */}
        <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center gap-12 md:gap-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex md:flex-col items-center justify-center w-full"
            >
              {/* موبایل */}
              <div className="flex md:hidden items-center justify-center gap-4 w-full">
                {index % 2 === 0 ? (
                  <>
                    {/* متن راست */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex-1 text-right"
                    >
                      <h3 className="text-sm font-bold text-[#15c4ae]">{step.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
                    </motion.div>
                    {/* آیکن وسط */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="shrink-0 w-12 h-12 p-3 rounded-full bg-[#15c4ae] text-[#06174c] flex items-center justify-center shadow-lg z-10"
                    >
                      {step.icon}
                    </motion.div>
                    <div className="flex-1" /> {/* فضای سمت چپ خالی */}
                  </>
                ) : (
                  <>
                    <div className="flex-1" /> {/* فضای سمت راست خالی */}
                    {/* آیکن وسط */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="shrink-0 w-12 h-12 p-3 rounded-full bg-[#15c4ae] text-[#06174c] flex items-center justify-center shadow-lg z-10"
                    >
                      {step.icon}
                    </motion.div>
                    {/* متن چپ */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex-1 text-left"
                    >
                      <h3 className="text-sm font-bold text-[#15c4ae]">{step.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
                    </motion.div>
                  </>
                )}
              </div>

              {/* دسکتاپ */}
              <div className="hidden md:flex flex-col items-center text-center">
                {index % 2 !== 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-7"
                  >
                    <h3 className="text-sm font-bold text-[#15c4ae]">{step.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
                  </motion.div>
                )}

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 p-4 rounded-full bg-[#15c4ae] text-[#06174c] flex items-center justify-center shadow-lg"
                >
                  {step.icon}
                </motion.div>

                {index % 2 === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mt-10"
                  >
                    <h3 className="text-sm font-bold text-[#15c4ae]">{step.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
