'use client';

import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Plan With Precision and Pivot With Agility",
    description:
      "Forecast revenue and expenses, project cash flow, plan for new hires and easily update your models when things change.",
    icon: "/assets/images/goal.png",
  },
  {
    title: "Build Detailed Budgets as a Team",
    description:
      "Break down planning silos, create budgets based on any requirement, drill into your data to analyze variances and more.",
    icon: "/assets/images/budget.png",
  },
  {
    title: "Report in Real Time",
    description:
      "Deliver accurate financial and management reports and quickly share strategic insights with stakeholders across your business.",
    icon: "/assets/images/report.png",
  },
  {
    title: "Close Your Books With Speed and Accuracy",
    description:
      "Streamline every step of your close from consolidations and account reconciliations to tax provisioning and final reviews.",
    icon: "/assets/images/ch.png",
  },
];

export default function Card() {
  return (
    <section className="bg-gray-50 flex items-center justify-center px-4 py-20">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-6 max-w-7xl w-full">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="h-24 flex justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg text-center font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-justify text-sm">{feature.description}</p>
            </div>

            <div className="mt-6 flex justify-end">
              <button className="w-10 h-10 rounded-full cursor-pointer border border-[#15c4ae] text-[#15c4ae] flex items-center justify-center hover:bg-[#15c4ae] hover:text-white transition">
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
