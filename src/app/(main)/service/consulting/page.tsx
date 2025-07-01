
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
    {
        title: 'مشاوره راه‌اندازی کسب‌وکار، از ایده تا جذب سرمایه',
        text: `راه‌اندازی یک کسب‌وکار موفق، صرفاً به داشتن یک ایده جذاب خلاصه نمی‌شود. در مشاوره راه‌اندازی کسب‌وکار، متخصصان ونچرا به شما کمک می‌کنند تا ایده خود را اعتبارسنجی کرده، مدل کسب‌وکار مناسبی طراحی کرده و زیرساخت‌های لازم برای جذب سرمایه اولیه را فراهم کنید. ما با تمرکز بر اصول سرمایه‌گذاری خطرپذیر، مسیر راه‌اندازی را برای شما بهینه و هدفمند می‌کنیم.`,
        slogan: 'شروع حرفه‌ای کسب‌وکارت را همین امروز با ما آغاز کن',
        image: '/assets/images/service1.jpg',
    },
    {
        title: 'مشاوره رشد و توسعه کسب و کار، آماده‌سازی برای مقیاس‌پذیری و سرمایه‌گذاری',
        text: `وقتی کسب‌وکار شما از مرحله اولیه عبور کرد، زمان آن رسیده که برای رشد پایدار و مقیاس‌پذیر برنامه‌ریزی کنید. در این خدمت، به شما کمک می‌کنیم تا نقاط ضعف سیستم فعلی را شناسایی، فرآیندها را بهینه‌سازی، و استراتژی ورود به بازارهای جدید را طراحی کنید. این مشاوره به‌طور ویژه برای استارتاپ‌هایی طراحی شده که در آستانه ورود به مراحل رشد یا جذب سرمایه مرحله دوم هستند.`,
        slogan: 'وقتشه کسب‌وکارت رو به سطح بعدی ببری',
        image: '/assets/images/service1.jpg',
    },
    {
        title: 'مشاوره هم‌بنیانگذاری و شراکت، تشکیل تیم مؤسس قوی و هم‌راستا',
        text: `بسیاری از استارتاپ‌ها به دلیل عدم توافق میان هم‌بنیان‌گذاران شکست می‌خورند. در این خدمت، شما را در مسیر انتخاب هم‌بنیان‌گذار مناسب، تنظیم توافقات شراکت و ساختاردهی تیمی هم‌راستا با رشد و جذب سرمایه راهنمایی می‌کنیم. با استفاده از ابزارهای روان‌شناسی سازمانی، حقوقی و تجاری، به شما کمک می‌کنیم شریک مناسب را پیدا کرده، نقش‌ها را شفاف‌سازی کنید و توافقات کلیدی شراکت را به‌درستی تنظیم نمایید.`,
        slogan: 'شراکت حرفه‌ای یعنی نیمی از مسیر موفقیت',
        image: '/assets/images/service1.jpg',
    },
    {
        title: 'مشاوره حاکمیت شرکتی، ساختاردهی برای سرمایه‌پذیری',
        text: `حاکمیت شرکتی، دیگر فقط مخصوص شرکت‌های بزرگ نیست. سرمایه‌گذاران هوشمند، به دنبال کسب‌وکارهایی با ساختارهای تصمیم‌گیری شفاف و اصول پاسخگویی مشخص هستند. در ونچرا به شما کمک می‌کنیم ساختار هیئت‌مدیره، نظام تصمیم‌گیری و چارچوب‌های کنترل داخلی را به‌گونه‌ای طراحی کنید که با انتظارات سرمایه‌گذاران و رشد بلندمدت هم‌راستا باشد.`,
        slogan: 'ساختار حرفه‌ای برای آینده‌ای پایدار بساز',
        image: '/assets/images/service1.jpg',
    },
    {
        title: 'حقوقی تخصصی استارتاپ‌ها، قراردادها، سهام، سرمایه‌گذاری',
        text: `در فضای پرتلاطم استارتاپ‌ها، یک اشتباه حقوقی می‌تواند تمام دستاوردهای شما را به خطر بیندازد. در مشاوره حقوقی، تیم متخصص ونچرا شما را در زمینه تدوین قراردادهای مؤسسین، قراردادهای سرمایه‌گذاری، توافقات سهام‌داری، مالکیت فکری و شرایط خروج (exit) همراهی می‌کند. ما با ادبیات حقوقی استارتاپ‌ها و سرمایه‌گذاران خطرپذیر آشنا هستیم و دغدغه‌های هر دو طرف را می‌شناسیم.`,
        slogan: 'قبل از امضا، با مشاور حقوقی حرفه‌ای مشورت کن',
        image: '/assets/images/service1.jpg',
    },
];
export default function BusinessConsultingPage() {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto my-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#06174c] mb-20">
                مشاوره کسب‌وکار
            </h2>

            <div className="space-y-10">
                {services.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex flex-col md:flex-row items-center gap-10 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="md:w-1/2">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={400}
                                className="rounded-xl shadow w-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 space-y-4 text-justify">
                            <h3 className="text-xl font-bold text-[#15c4ae]">{item.title}</h3>

                            <p className="text-gray-600 whitespace-pre-line leading-loose">
                                {item.text}
                            </p>

                            <Link href="/request" className="flex justify-center">
                                <p className="bg-[#15c4ae]/10 text-[#15c4ae] mt-4 text-center px-5 py-3 rounded-lg font-semibold text-md border border-[#14b8a6] border-dashed max-w-max">
                                    {item.slogan}
                                </p>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}





// 'use client';

// import { motion } from 'framer-motion';

// const steps = [
//     {
//         id: '01',
//         text: 'لورم ایپسوم متن ساختگی برای طراحی است.',

//     },
//     {
//         id: '02',
//         text: 'لورم ایپسوم متن ساختگی برای طراحی است.',
//     },
//     {
//         id: '03',
//         text: 'لورم ایپسوم متن ساختگی برای طراحی است.',
//     },
//     {
//         id: '04',
//         text: 'لورم ایپسوم متن ساختگی برای طراحی است.',
//     },
// ];

// export default function ArrowSteps() {
//     return (
//         <section className="py-16 px-6 my-10">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-6">
//                 {steps.map((item, i) => (
//                     <div key={i} className='flex m-0'>
//                         <div className="clip-arrow w-7 bg-[#15c4ae]"></div>
//                         <div className="arrow-card bg-[#15c4ae] text-white p-6 rounded-xl shadow-3xl transition duration-300 hover:scale-105" >
//                             <div className="text-lg font-bold mb-2">{item.id}</div>
//                             <p className="text-sm leading-relaxed">{item.text}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
