'use client';

import {
  FaChartPie,
  FaChartLine,
  FaFilePowerpoint,
  FaClipboardList,
  FaFolderOpen,
} from 'react-icons/fa';
import Image from "next/image";
import Link from 'next/link';

const documents = [
  {
    type: "text",
    title: 'فایل ارائه به سرمایه‌گذار (Pitch Deck)',
    icon: FaFilePowerpoint,
  },
  { type: "image", icon: "" },
  {
    type: "text",
    title: 'فایل پیش‌بینی‌های مالی (Financial Projection)',
    icon: FaChartLine
  },
  { type: "image", icon: "" },
  {
    type: "text",
    title: 'جدول سهامداری (Cap-Table)',
    icon: FaChartPie
  },
  { type: "image", icon: "" },
  {
    type: "text",
    title: 'طرح کسب‌وکار (Business Plan)',
    icon: FaClipboardList,
  },
  { type: "image", icon: "" },
  {
    type: "text",
    title: 'طرح توجیهی (Feasibility Study)',
    icon: FaFolderOpen,
  },
];

export default function GridSection() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto my-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#06174c] mb-8">
        آماده سازی مستندات
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-20">
        آماده‌سازی مستندات تخصصی برای جذب سرمایه، مستندات مالی، حقوقی و تجاری استارتاپ
        برای جذب سرمایه‌گذار حرفه‌ای، مستندات دقیق و استاندارد ضروری‌اند. در ونچرا، انواع فایل‌های کلیدی مانند Pitch Deck، مدل مالی، طرح کسب‌وکار و جدول سهامداری را با دقت و استانداردهای بین‌المللی آماده می‌کنیم.      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-15 md:gap-0">
        {documents.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center">
            {item.type === "text" ? (
              <>
                <div className='bg-[#15c4ae] p-4 rounded-full text-center text-[#06174c] shadow' >
                  <item.icon className='w-10 h-10' />
                </div>
                <h2 className="text-lg font-bold text-teal-500 mt-4">{item.title}</h2>
              </>
            ) : (
              <Image
                src="/assets/images/venture.jpg"
                alt="Sample"
                className="object-cover w-full h-full rounded"
                width={400}
                height={400}
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-20 text-center space-y-8">
        <p className="text-xl font-semibold text-[#15c4ae]">
          سرمایه‌گذارها به مستندات حرفه‌ای اعتماد می‌کنند.
        </p>
        <p className="text-gray-700">
          از Pitch Deck تا پیش‌بینی مالی، مستندات کلیدی استارتاپت رو با استانداردهای جهانی آماده کن.
        </p>
        <Link href="/request" prefetch className="bg-[#15c4ae] hover:bg-[#109d92] transition text-white px-6 py-3 rounded-xl text-lg font-bold shadow-md">
          درخواست تهیه مستندات جذب سرمایه
        </Link>
      </div>
    </section>
  );
}
