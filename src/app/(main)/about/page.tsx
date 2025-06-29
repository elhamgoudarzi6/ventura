import React from 'react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white text-gray-800 my-20 px-6 py-16 md:px-16">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="space-y-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">درباره ونچرا</h1>
                    <p className="mt-4 text-lg text-gray-600 text-justify mx-auto">
                        ونچرا جایی است که ایده‌های جسورانه با سرمایه‌ هوشمند می رسند. ما به استارتاپ‌های نوپا با سرمایه‌گذاری راهبردی، منتورینگ عملی و ذهنیتی مبتنی بر رشد قدرت می‌بخشیم.
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
            </div>
        </div>
    );
}
