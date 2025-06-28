
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-[#06174c] text-white px-10 py-24 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl mt-5 font-bold leading-tight">
            مشاور <span className="text-[#15c4ae]">جذب سرمایه</span> برای استارتاپ شما
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            ما به استارتاپ‌های بلندپرواز کمک می‌کنیم تا با جذب سرمایه، مسیر رشد خود را هموار کنند.
          </p>
          <div className="flex flex-col md:flex-row justify-start items-center text-center gap-5 px-10 md:px-0 mt-10">
            <Link href="request" prefetch className="bg-[#15c4ae] text-[#06174c] px-6 py-3 rounded-full w-full md:w-1/3 font-semibold transition">
              مشاوره رایگان
            </Link>
            <Link href="about" prefetch className="border border-[#15c4ae] text-[#15c4ae] px-6 py-3 rounded-full w-full md:w-1/3 hover:bg-[#15c4ae]/10 transition">
            دریافت کاتالوگ
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image
            src="/assets/images/bar.png"
            alt="Startup illustration"
            width={500}
            height={500}
            className="w-full max-w-md mx-auto"
          />
          {/* <video className="w-full rounded-2xl" autoPlay muted loop playsInline>
            <source src="/assets/images/3.mp4" type="video/mp4" />
          </video> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


