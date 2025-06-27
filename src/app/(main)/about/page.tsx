// app/about/page.tsx
import React from 'react';
import Image from 'next/image';

const team = [
    {
        name: 'Ali Ebrahimi',
        role: 'Founder & CEO',
        image: '/assets/images/user.jpg',
    },
    {
        name: 'Sara Nazari',
        role: 'Investment Strategist',
        image: '/assets/images/user.jpg',
    },
    {
        name: 'Reza Mahdavi',
        role: 'Product Advisor',
        image: '/assets/images/user.jpg',
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white text-gray-800 my-20 px-6 py-16 md:px-16">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center space-y-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">درباره ونچرا</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        ونچرا جایی است که ایده‌های جسورانه با سرمایه‌ هوشمند تلاقی می‌کنند. ما به استارتاپ‌های نوپا با سرمایه‌گذاری راهبردی، منتورینگ عملی و ذهنیتی مبتنی بر رشد قدرت می‌بخشیم.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">🎯 ماموریت ما</h2>
                        <p className="mt-3 text-gray-600 text-justify">
                            حمایت از بنیان‌گذاران بلندپرواز در مسیر ساخت کسب‌وکارهایی اثرگذار، مقیاس‌پذیر و آماده جذب سرمایه، از طریق تأمین سرمایه، راهبری تخصصی و ایجاد یک اکوسیستم استارتاپی مطمئن.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">🚀 چشم‌انداز ما</h2>
                        <p className="mt-3 text-gray-600 text-justify">
                            تبدیل‌شدن به پیشروترین پلتفرم پشتیبانی از استارتاپ‌ها در منطقه خاورمیانه، با پرورش نسل آینده یونیکورن‌های فناوری‌محور.

                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">تیم ما</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {team.map((member) => (
                            <div key={member.name} className="bg-white rounded-xl p-4 text-center border border-gray-300 shadow-md hover:shadow-lg transition">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={500}       // عرض به پیکسل
                                    height={300}      // ارتفاع به پیکسل
                                    priority          // اگر می‌خوای اولویت لود بالاتر باشه
                                    className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-white shadow"

                                />
                                <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
