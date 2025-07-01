'use client';

import { motion } from 'framer-motion';
import {
  FaHandHoldingUsd,
  FaChartLine,
  FaFileContract,
  FaHandshake,
  FaLaptop,
} from 'react-icons/fa';
import Link from 'next/link';

const steps = [
  {
    title: 'انتخاب روش تأمین مالی',
    desc:
      'در این بخش، ما به استارتاپ‌ها کمک می‌کنیم تا بین روش‌های مختلف تأمین مالی (سرمایه‌گذاری جسورانه، سرمایه فرشته، وام، بوت‌استرپینگ و...) مناسب‌ترین گزینه را انتخاب کنند.',
    icon: FaHandHoldingUsd,
  },
  {
    title: 'مشاوره ارائه به سرمایه‌گذار',
    desc:
      'ساخت یک ارائه حرفه‌ای برای جلسات سرمایه‌گذاری، نیازمند درک عمیق از زبان سرمایه‌گذاران است. ما در ونچرا به شما کمک می‌کنیم Deck جذاب بسازید و بدرخشید.',
    icon: FaLaptop,
  },
  {
    title: 'مشاوره مدل‌سازی مالی',
    desc:
      'سرمایه‌گذاران برای تصمیم‌گیری، به مدل مالی دقیق و قابل دفاع نیاز دارند. تیم ونچرا به شما در طراحی سناریوهای مالی کمک می‌کند.',
    icon: FaChartLine,
  },
  {
    title: 'ساختارهای توافق و مذاکره با سرمایه‌گذاران',
    desc:
      'با تحلیل Term Sheet و درک خواسته‌های سرمایه‌گذار، به شما کمک می‌کنیم تا در مذاکرات حرفه‌ای و دقیق عمل کنید.',
    icon: FaHandshake,
  },
  {
    title: 'مشاوره قراردادهای سرمایه‌گذاری',
    desc:
      'ما در تدوین، تحلیل و اصلاح قراردادهای سرمایه‌گذاری، واگذاری سهام، حق تقدم و شرایط خروج همراهی‌تان می‌کنیم.',
    icon: FaFileContract,
  },
];

export default function InvestmentConsultingPage() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto my-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#06174c] mb-8">
        مشاوره جذب سرمایه
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-20">
        در ونچرا، مشاوره جذب سرمایه را با نگاه تخصصی ارائه می‌دهیم؛ از انتخاب روش تأمین مالی تا مذاکره و عقد قرارداد با سرمایه‌گذاران. آماده جذب سرمایه حرفه‌ای شوید.
      </p>

      <div className="relative">
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-[#15c4ae]/30 z-0" />

        <div className="flex flex-col gap-5 z-10 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative z-10 flex flex-col md:flex-row items-center gap-5 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* محتوا */}
              <div className="md:w-1/2 space-y-3 text-justify p-7 bg-white shadow-md rounded-2xl border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-[#15c4ae] text-[#06174c] shadow">
                    <step.icon className='w-10 h-10' />
                  </div>
                  <h3 className="text-lg font-bold text-[#15c4ae]">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24 text-center space-y-6">
        <p className="text-xl font-semibold text-[#15c4ae]">
          آماده‌ای سرمایه‌گذار را متقاعد کنی؟
        </p>
        <p className="text-gray-700">
          از انتخاب بهترین روش تأمین مالی تا عقد قرارداد حرفه‌ای، ما کنارت هستیم.
        </p>
        <Link href="/request" className="inline-block bg-[#15c4ae] hover:bg-[#109d92] transition text-white px-6 py-3 rounded-xl text-lg font-bold shadow-md" >
          رزرو مشاوره تخصصی جذب سرمایه
        </Link>
      </div>
    </section>
  );
}



// 'use client';

// import {
//   Banknote,
//   Presentation,
//   LineChart,
//   FileSignature,
//   FileCheck,
// } from 'lucide-react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const steps = [
//   {
//     title: 'انتخاب روش تأمین مالی',
//     desc:
//       'در این بخش، ما به استارتاپ‌ها کمک می‌کنیم تا بین روش‌های مختلف تأمین مالی (سرمایه‌گذاری جسورانه، سرمایه فرشته، وام، بوت‌استرپینگ و...) مناسب‌ترین گزینه را انتخاب کنند.',
//     icon: Banknote,
//   },
//   {
//     title: 'مشاوره ارائه به سرمایه‌گذار',
//     desc:
//       'ساخت یک ارائه حرفه‌ای برای جلسات سرمایه‌گذاری، نیازمند درک عمیق از زبان سرمایه‌گذاران است. ما در ونچرا به شما کمک می‌کنیم Deck جذاب بسازید و بدرخشید.',
//     icon: Presentation,
//   },
//   {
//     title: 'مشاوره مدل‌سازی مالی',
//     desc:
//       'سرمایه‌گذاران برای تصمیم‌گیری، به مدل مالی دقیق و قابل دفاع نیاز دارند. تیم ونچرا به شما در طراحی سناریوهای مالی کمک می‌کند.',
//     icon: LineChart,
//   },
//   {
//     title: 'ساختارهای توافق و مذاکره با سرمایه‌گذاران',
//     desc:
//       'با تحلیل Term Sheet و درک خواسته‌های سرمایه‌گذار، به شما کمک می‌کنیم تا در مذاکرات حرفه‌ای و دقیق عمل کنید.',
//     icon: FileSignature,
//   },
//   {
//     title: 'مشاوره قراردادهای سرمایه‌گذاری',
//     desc:
//       'ما در تدوین، تحلیل و اصلاح قراردادهای سرمایه‌گذاری، واگذاری سهام، حق تقدم و شرایط خروج همراهی‌تان می‌کنیم.',
//     icon: FileCheck,
//   },
// ];

// export default function InvestmentTimeline() {
//   return (
//     <section className="max-w-6xl mx-auto py-24 px-4 md:px-10 my-10">

//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl md:text-4xl font-bold text-center text-[#06174c] mb-5"
//       >
//         مشاوره جذب سرمایه
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="text-center text-gray-600 max-w-2xl mx-auto mb-10"
//       >
//         در ونچرا، مشاوره جذب سرمایه را با نگاه تخصصی ارائه می‌دهیم؛ از انتخاب روش تأمین مالی تا مذاکره و عقد قرارداد با سرمایه‌گذاران. آماده جذب سرمایه حرفه‌ای شوید.
//       </motion.p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
//         {steps.map((item, i) => {
//           const Icon = item.icon;
//           return (
//             <motion.div
//               key={i}
//               className="flex"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: i * 0.15 }}
//             >
//               <div className="clip-arrow w-7 bg-[#15c4ae]"></div>
//               <div className="arrow-card bg-[#15c4ae] text-white p-6 rounded-xl shadow-3xl flex-1">
//                 <div className="flex items-center gap-2 mb-3">
//                   <Icon className="w-10 h-10 text-white" />
//                   <h2 className="text-lg font-bold">{item.title}</h2>
//                 </div>
//                 <p className="text-sm leading-relaxed">{item.desc}</p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

// <motion.div
//   className="mt-28 text-center space-y-6"
//   initial={{ opacity: 0, y: 20 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.6, delay: 0.4 }}
// >
//   <p className="text-xl font-semibold text-[#15c4ae]">
//     آماده‌ای سرمایه‌گذار را متقاعد کنی؟
//   </p>
//   <p className="text-gray-700">
//     از انتخاب بهترین روش تأمین مالی تا عقد قرارداد حرفه‌ای، ما کنارت هستیم.
//   </p>
//   <Link
//     href="/request"
//     className="inline-block bg-[#15c4ae] hover:bg-[#109d92] transition text-white px-6 py-3 rounded-xl text-lg font-bold shadow-md"
//   >
//     رزرو مشاوره تخصصی جذب سرمایه
//   </Link>
// </motion.div>
//     </section>
//   );
// }




// 'use client';

// import { motion } from 'framer-motion';
// import {
//   Banknote,
//   Presentation,
//   LineChart,
//   FileSignature,
//   FileCheck,
// } from 'lucide-react';
// import Link from 'next/link';

// const steps = [
//   {
//     title: 'انتخاب روش تأمین مالی',
//     desc:
//       'در این بخش، ما به استارتاپ‌ها کمک می‌کنیم تا بین روش‌های مختلف تأمین مالی (سرمایه‌گذاری جسورانه، سرمایه فرشته، وام، بوت‌استرپینگ و...) مناسب‌ترین گزینه را انتخاب کنند.',
//     icon: Banknote,
//   },
//   {
//     title: 'مشاوره ارائه به سرمایه‌گذار',
//     desc:
//       'ساخت یک ارائه حرفه‌ای برای جلسات سرمایه‌گذاری، نیازمند درک عمیق از زبان سرمایه‌گذاران است. ما در ونچرا به شما کمک می‌کنیم Deck جذاب بسازید و بدرخشید.',
//     icon: Presentation,
//   },
//   {
//     title: 'مشاوره مدل‌سازی مالی',
//     desc:
//       'سرمایه‌گذاران برای تصمیم‌گیری، به مدل مالی دقیق و قابل دفاع نیاز دارند. تیم ونچرا به شما در طراحی سناریوهای مالی کمک می‌کند.',
//     icon: LineChart,
//   },
//   {
//     title: 'ساختارهای توافق و مذاکره با سرمایه‌گذاران',
//     desc:
//       'با تحلیل Term Sheet و درک خواسته‌های سرمایه‌گذار، به شما کمک می‌کنیم تا در مذاکرات حرفه‌ای و دقیق عمل کنید.',
//     icon: FileSignature,
//   },
//   {
//     title: 'مشاوره قراردادهای سرمایه‌گذاری',
//     desc:
//       'ما در تدوین، تحلیل و اصلاح قراردادهای سرمایه‌گذاری، واگذاری سهام، حق تقدم و شرایط خروج همراهی‌تان می‌کنیم.',
//     icon: FileCheck,
//   },
// ];

// export default function Funder() {
//   return (
//     <div className="max-w-6xl mx-auto text-center py-20 my-10">
//       <div className="grid grid-cols-1 gap-10 px-10 md:px-0">
//         {steps.map((step, index) => (
//           <div key={index} className="relative">

//             {index < steps.length - 1 && (
//               <div className="absolute left-1/2 top-full h-10 border-l-2 border-dashed border-gray-300 -z-5 flex justify-center">
//                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-r-2 border-b-2 border-gray-400 rotate-45"></div>
//               </div>
//             )}


//             <div className="bg-white rounded-2xl border border-gray-300 shadow-xl  p-6 h-full">
//               <div className="flex items-center justify-center text-3xl w-14 h-14 rounded-full text-[#15171e] bg-[#15c4ae] mb-4 mx-auto">
//                 <step.icon />
//               </div>
//               <h3 className="text-xl font-bold text-[#15171e]">{step.title}</h3>
//               <p className="text-gray-600 mt-2 text-sm leading-relaxed">{step.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <motion.div
//         className="mt-28 text-center space-y-6"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//       >
//         <p className="text-xl font-semibold text-[#15c4ae]">
//           آماده‌ای سرمایه‌گذار را متقاعد کنی؟
//         </p>
//         <p className="text-gray-700">
//           از انتخاب بهترین روش تأمین مالی تا عقد قرارداد حرفه‌ای، ما کنارت هستیم.
//         </p>
//         <Link
//           href="/request"
//           className="inline-block bg-[#15c4ae] hover:bg-[#109d92] transition text-white px-6 py-3 rounded-xl text-lg font-bold shadow-md"
//         >
//           رزرو مشاوره تخصصی جذب سرمایه
//         </Link>
//       </motion.div>
//     </div>
//   );
// };

