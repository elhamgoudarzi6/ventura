
'use client';

import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { TbCalendarEvent, TbTag } from 'react-icons/tb';
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: '۵ نکته کلیدی برای جذب سرمایه موفق',
    category: 'جذب سرمایه',
    date: '1403/04/25',
    cover: '/assets/images/blog.jpg',
    content: `
      در این مقاله به مهم‌ترین نکات برای جذب سرمایه برای استارتاپ‌ها می‌پردازیم...
      جذب سرمایه در مراحل اولیه بسیار چالش‌برانگیز است، اما با آماده‌سازی مستندات،
      داشتن پلن شفاف و ارائه حرفه‌ای، می‌توان اعتماد سرمایه‌گذاران را جلب کرد.
    `,
  },

];

export default function BlogDetail() {
  const params = useParams();
  const id = Number(params.id); // تبدیل به عدد
  const blog = blogPosts.find((post) => post.id === id);


  if (!blog) return notFound();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-4xl mx-auto my-20 px-6 py-16 space-y-6">
      <motion.div
      >
        <Image
          src={blog.cover}
          alt={blog.title}
          width={500}
          height={500}
          className="w-full h-100 object-cover rounded-xl shadow-lg"
        />

      </motion.div>

      <div className="space-y-3 text-right">
        <h1 className="text-2xl md:text-3xl font-bold text-[#06174c]">{blog.title}</h1>
        <p className="flex text-sm text-gray-500">
          <TbCalendarEvent className='w-5 h-5 ml-2' /> {blog.date} |<TbTag className='w-5 h-5 mx-2' /> {blog.category}
        </p>
        <p
          className="text-gray-700 leading-loose mt-6 text-justify"
        >
          {blog.content}
        </p>
      </div>
    </motion.section>
  );
}
