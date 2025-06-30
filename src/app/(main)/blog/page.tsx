'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from "next/image";

const categories = ['همه', 'سرمایه‌گذاری', 'استارتاپ', 'توسعه فردی',];

const blogs = [
  {
    id: 1,
    title: '۵ نکته برای جذب سرمایه موفق',
    excerpt: 'در این مقاله، با اصول کلیدی جذب سرمایه برای استارتاپ‌ها آشنا می‌شوید...',
    category: 'سرمایه‌گذاری',
    image: '/assets/images/blog.jpg',
  },
  {
    id: 2,
    title: 'چطور استارتاپ خود را ارائه دهیم؟',
    excerpt: 'آموزش ساخت پرزنتیشن حرفه‌ای برای جلسات سرمایه‌گذاری...',
    category: 'استارتاپ',
    image: '/assets/images/blog.jpg',
  },
  {
    id: 3,
    title: 'مهارت‌های ضروری بنیان‌گذاران',
    excerpt: 'چه مهارت‌هایی برای رشد شخصی یک فاوندر ضروری‌ست؟',
    category: 'توسعه فردی',
    image: '/assets/images/blog.jpg',
  },
];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState('همه');

  const filteredBlogs =
    activeCategory === 'همه'
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto my-10 py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-[#06174c] mb-10"
      >
        بلاگ ونچرا
      </motion.h2>

      {/* دسته‌بندی */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-300 ${activeCategory === cat
              ? 'bg-[#15c4ae] text-white border-[#15c4ae]'
              : 'text-gray-600 border-gray-300 hover:border-[#15c4ae]'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* لیست بلاگ‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog, idx) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={500}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-3">
              <span className="text-xs text-[#15c4ae] font-bold">
                {blog.category}
              </span>
              <h3 className="text-lg font-semibold text-[#06174c]">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {blog.excerpt}
              </p>
              <Link
                href={`/blog/${blog.id}`}
                className="inline-block text-[#15c4ae] text-sm font-medium hover:underline mt-2"
              >
                ادامه مطلب
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
