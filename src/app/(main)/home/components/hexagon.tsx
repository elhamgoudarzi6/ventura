import React from "react";
import { FaChartBar, FaEuroSign, FaPiggyBank } from 'react-icons/fa';
import { BsFillBarChartFill } from "react-icons/bs";
import Image from 'next/image';
const steps = [
    {
        title: 'ANALYSIS',
        desc: 'Lorem ipsum do ilor sity vitae risuis purus praeir',
        icon: <FaChartBar className="w-7 h-7" />,
    },
    {
        title: 'INVESTMENT',
        desc: 'Lorem ipsum do ilor sity vitae risuis purus praeir',
        icon: <FaEuroSign className="w-7 h-7" />,
    },
    {
        title: 'GROWTH',
        desc: 'Lorem ipsum do ilor sity vitae risuis purus praeir',
        icon: <FaPiggyBank className="w-7 h-7" />,
    },
    {
        title: 'BENEFITS',
        desc: 'Lorem ipsum do ilor sity vitae risuis purus praeir',
        icon: <BsFillBarChartFill className="w-7 h-7" />,
    },
];

const Timeline = () => {
    return (
        <div className="max-w-6xl mx-auto my-14 px-5 grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
            {/* تصویر سمت چپ */}
          <Image
            src="/assets/images/users.jpg"
            alt="Startup illustration"
            width={500}
            height={500}
            className="hexagon-img w-full h-100"
          />
            {/* تایم‌لاین سمت راست */}
            <div className="flex flex-col space-y-4">
                {steps.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                        {/* آیکون داخل شش‌ضلعی */}
                        <div className="flex items-center justify-center hexagon p-7 bg-[#6de8cc] text-[#15171e] text-2xl">
                            {item.icon}
                        </div>
                        {/* متن */}
                        <div className="hexagon-bar ml-4 py-5 px-10 bg-gray-100 rounded-xl shadow-sm">
                            <h3 className="text-sm md:text-lg font-bold text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 text-xs md:text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;