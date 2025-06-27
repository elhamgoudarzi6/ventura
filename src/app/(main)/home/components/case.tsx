"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Image from 'next/image';
import { ArrowLeft } from "lucide-react";
import Link from 'next/link';

const caseStudies = [
  {
    title: "مشاوره کسب و کار🚀",
    summary: " ما از پایه‌ترین مراحل تا توسعه ساختار حرفه‌ای همراه شما هستیم. مشاوره‌های ما، مسیر رشد کسب‌وکارتان را هدفمند می‌سازد.",
    image: "/assets/images/report.png",
    link: "/about"
  },
  {
    title: "مشاوره جذب سرمایه 🌱",
    summary: "سرمایه‌گذاری فقط پول نیست، بلکه شراکت هوشمندانه است. ما کمک می‌کنیم دقیق، حرفه‌ای و هدفمند وارد این مسیر شوید.",
    image: "/assets/images/budget.png",
    link: "/about"

  },
  {
    title: "آماده سازی مستندات 📈",
    summary: "داشتن مستندات حرفه‌ای و دقیق، اولین گام جلب اعتماد سرمایه‌گذاران است. ما ابزارهای لازم برای جذب موفق را به شما می‌دهیم.",
    image: "/assets/images/ch.png",
    link: "/about"

  },
];

export default function CaseStudies() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-[#15171e]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        خدمات ما
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudies.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative rounded-xl overflow-hidden bg-[#ffffff10] cursor-pointer shadow p-6 group border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={96}
              height={96}
              className="w-full h-24 object-contain mt-5"
            />
            <h3 className="mt-10 text-xl text-center font-bold text-[#2e3282]">{item.title}</h3>
            <p className="text-gray-600 text-justify mt-2">{item.summary}</p>

            <div className="mt-6 flex justify-end my-1">
              <Link href={item.link} className="w-full rounded-full cursor-pointer px-5 py-3 border bg-[#15c4ae] text-white flex items-center justify-center hover:bg-[#15c4ae] hover:text-white transition">
                <h2 className="text-sm">مشاهده جزییات</h2>
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Link>
            </div>
            <FaCheckCircle className="absolute top-5 right-5 text-[#14c5ae] text-xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

