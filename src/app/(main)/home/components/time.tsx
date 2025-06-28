'use client';
import { motion } from 'framer-motion';
import {
    Lightbulb, Target, FileText,
    TrendingUp, Handshake, BadgeCheck
} from 'lucide-react';
import { ChevronLeft, ChevronDown } from 'lucide-react';

const steps = [
    {
        icon: <Lightbulb className="w-8 h-8" />,
        title: 'درخواست مشاوره',
        desc: 'ثبت درخواست اولیه توسط استارتاپ',
    },
    {
        icon: <Target className="w-8 h-8" />,
        title: 'تحلیل بیزینس',
        desc: 'بررسی مدل کسب‌وکار و اهداف',
    },
    {
        icon: <FileText className="w-8 h-8" />,
        title: 'تدوین استراتژی',
        desc: 'تدوین پلن جذب سرمایه و اسناد مالی',
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: 'معرفی به سرمایه‌گذار',
        desc: 'ارتباط با شبکه سرمایه‌گذاران تخصصی',
    },
    {
        icon: <Handshake className="w-8 h-8" />,
        title: 'جلسات و مذاکرات',
        desc: 'برگزاری جلسات و ارائه',
    },
    {
        icon: <BadgeCheck className="w-8 h-8" />,
        title: 'قرارداد نهایی',
        desc: 'انعقاد قرارداد سرمایه‌گذاری',
    },
];

export default function ProcessTimeline() {
    return (
        <section className="py-16 px-4 bg-white">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                روند مشاوره و جذب سرمایه
            </h2>

            <div className="relative max-w-6xl mx-auto">
                {/* خط تایم‌لاین */}

                {/* دسکتاپ: خط افقی با فلش سمت چپ */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    className="hidden md:flex absolute top-8 left-0 w-full h-1 rounded-full z-0 bg-[#06174c]"
                >
                    <ChevronLeft
                        size={40}
                        className="absolute -left-4 top-1/2 -translate-y-1/2 text-[#06174c]"
                    />
                </motion.div>

                {/* <div className="hidden md:flex absolute top-8 right-0 w-full h-0.5 border-t-2 border-dashed border-[#06174c] z-0">
                    <ChevronLeft
                        size={30}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-[#06174c]"
                    />
                </div> */}


                {/* موبایل: خط عمودی با فلش پایین */}
                <div className="md:hidden absolute right-9 top-0 w-1 h-full bg-[#06174c] rounded-full z-0">
                    <ChevronDown
                        size={40}
                        className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-[#06174c]"
                    />
                </div>

                <div className="flex flex-col md:flex-row justify-between relative z-10 gap-y-16 md:gap-y-0">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className="relative w-full md:w-1/6 flex flex-col items-center md:items-center group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.15 }}
                            viewport={{ once: true }}
                        >
                            {/* حالت دسکتاپ */}
                            <motion.div className="hidden md:flex w-16 h-16 p-4 rounded-full bg-[#15c4ae] text-[#06174c] items-center justify-center shadow-lg">
                                {step.icon}
                            </motion.div>
                            <div className="hidden md:block mt-6 text-center">
                                <h3 className="text-md font-extrabold  text-[#15c4ae]">{step.title}</h3>
                                <p className="text-sm text-gray-500 mt-3">{step.desc}</p>
                            </div>

                            {/* حالت موبایل */}
                            <div className="md:hidden flex items-start gap-4 w-full px-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-12 h-12 p-3 rounded-full bg-[#15c4ae] text-[#06174c] flex items-center justify-center shadow-lg">
                                        {step.icon}
                                    </div>
                                </div>
                                <div className="text-right rtl text-[#15c4ae]">
                                    <h3 className="text-base font-semibold">{step.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>


        </section>
    );
}
