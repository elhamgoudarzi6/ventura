'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const articles = [
  {
    author: 'علی جعفری',
    date: '۲۰ فروردین ۱۴۰۳',
    title: 'فراتر از تراکنش: نقش حیاتی سیستم‌های فروش در رشد استارتاپ‌ها',
    desc: 'سیستم‌های فروش (POS) تنها برای پرداخت نیستند. آن‌ها ابزارهای کلیدی برای تحلیل داده، رفتار مشتری و بهینه‌سازی عملکرد کسب‌وکار هستند.',
    image: '/assets/images/blog.jpg',
  },
  {
    author: 'نگار رضایی',
    date: '۲۵ فروردین ۱۴۰۳',
    title: 'ادغام فروشگاه فیزیکی با آنلاین: مسیر یکپارچه‌سازی هوشمند',
    desc: 'ترکیب فروش حضوری و آنلاین می‌تواند رشد شما را چند برابر کند؛ اما نیاز به استراتژی دقیق و زیرساخت درست دارد.',
    image: '/assets/images/blog.jpg',
  },
  {
    author: 'سینا محمدی',
    date: '۳۰ فروردین ۱۴۰۳',
    title: 'امنیت در اولویت: محافظت از داده‌ها در سیستم‌های مالی استارتاپ',
    desc: 'اطمینان از امنیت اطلاعات مشتریان و تراکنش‌ها، یک اصل کلیدی در جذب اعتماد سرمایه‌گذاران و کاربران است.',
    image: '/assets/images/blog.jpg',
  },
];

export default function Blogs() {
    return (
        <section className="py-16 px-4 md:px-16 bg-white">
            <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-gray-900">آخرین مقالات ما</h2>
            </motion.div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                {articles.map((article, idx) => (
                    <motion.div
                        key={idx}
                        className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full h-56 relative">
                            <Image
                                src={article.image}
                                alt={article.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-xl"
                            />
                        </div>
                        <div className="p-4">
                            <div className="text-xs text-gray-400 mb-2">{article.date}</div>
                            <h3 className="text-lg font-semibold text-gray-800 leading-tight line-clamp-2">
                                {article.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-2 line-clamp-2">{article.desc}</p>
                            <div className="mt-4 flex justify-end">
                                <a href="#" className="mt-4 inline-flex justify-end items-center text-[#15c4ae] font-medium">
                                    جزییات بیشتر<ArrowLeft className="w-4 h-4 mr-1" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
