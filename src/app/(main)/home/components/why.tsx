
// const items = [
//   { id: "01", text: "And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help." },
//   { id: "02", text: "Up maids me an ample stood given. Certainty say suffering his him collected intention promotion." },
//   { id: "03", text: "Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom." },
// ];

// export default function Why() {
//   return (
//     <section className="py-16 px-6 bg-white">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
//               {/* Text Content */}
//         <div className="space-y-10">
//           {items.map((item, index) => (
//             <div key={index} className="flex items-start space-x-3">
//               <div className="flex items-center justify-center w-12 h-12 text-xl rounded-full bg-[#15c4ae] text-[#06174c] mx-auto">
//                 {item.id}
//               </div>
//               <p className="text-gray-600 max-w-md">{item.text}</p>
//             </div>
//           ))}
//         </div>


//         {/* Image Section */}
//         <div className="rounded-2xl overflow-hidden">
//           <video className="w-full shadow-2xl" autoPlay muted loop playsInline>
//             <source src="/assets/images/3.mp4" type="video/mp4" />
//           </video>
//         </div>


//       </div>
//     </section>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Gem, ShieldCheck, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: 'تجربه و تخصص',
    description: 'تیم ما متشکل از متخصصین با سابقه در حوزه سرمایه‌گذاری و استارتاپ است.',
    icon: Gem,
  },
  {
    title: 'امنیت و اعتماد',
    description: 'تمامی فرآیندها با رعایت اصول حرفه‌ای و محرمانگی کامل اجرا می‌شوند.',
    icon: ShieldCheck,
  },
  {
    title: 'رشد پایدار',
    description: 'هدف ما رشد بلندمدت و پایدار کسب‌وکار شما با رویکردی علمی و عملی است.',
    icon: TrendingUp,
  },
  {
    title: 'پشتیبانی اختصاصی',
    description: 'ما در تمام مراحل همراه شما هستیم، از ایده تا جذب سرمایه.',
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
        <div className="md:col-span-6 space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-[#06174c] text-right"
          >
            چرا <span className="text-[#15c4ae]">ونچرا؟</span>
          </motion.h2>

          <p className="text-sm text-gray-600 leading-relaxed text-right max-w-xl">
            ما به استارتاپ‌ها کمک می‌کنیم تا با آمادگی کامل، اعتماد سرمایه‌گذاران را جلب کنند. ترکیبی از تجربه، استراتژی و ابزارهای حرفه‌ای در کنار شماست.
          </p>

          <div className="space-y-5">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-[#15c4ae]/10 text-[#15c4ae] p-3 rounded-full">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-base font-semibold text-[#06174c]">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>



      </div>
    </section>
  );
}
