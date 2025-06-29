"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 max-w-6xl mx-auto mt-30 mb-20 px-4">
            {/* بخش سمت چپ - اطلاعات تماس */}
            <motion.div
                className="p-10 space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-[#15171e]">با ما در تماس باشید</h2>
                <p className="text-gray-500">
                    اگر سوالی دارید یا نیاز به مشاوره دارید، از طریق فرم زیر با ما در ارتباط باشید. تیم ما در کوتاه‌ترین زمان پاسخگوی شما خواهد بود.
                </p>

                <div className="space-y-4 mt-5">
                    <div className="flex items-start space-x-4">
                        <div className="bg-[#14c5ae] text-[#15171e] p-3 rounded-xl">
                            <FaMapMarkerAlt className="text-xl" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700">آدرس</h4>
                            <p className="text-gray-500 text-sm">لرستان، خرم‌آباد، خیابان شصت متری، جنب پل روگذر، کارخانه نوآوری لرستان</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-[#14c5ae] text-[#2e3282] p-3 rounded-xl">
                            <FaPhone className="text-xl" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700">شماره تماس</h4>
                            <p className="text-gray-500 text-sm">09106521341</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-[#14c5ae] text-[#2e3282] p-3 rounded-xl">
                            <FaEnvelope className="text-xl" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700">ایمیل</h4>
                            <p className="text-gray-500 text-sm">venturewayofficial@gmail.com</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* بخش سمت راست - فرم تماس */}
            <motion.div
                className="space-y-4 p-14 bg-[#15c4ae] rounded-xl shadow"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <motion.input
                    className="w-full p-3 bg-gray-100 rounded-full mt-5 text-right"
                    placeholder="نام و نام خانوادگی"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    whileFocus={{ scale: 1.03 }}
                />
                <motion.input
                    className="w-full p-3 bg-gray-100 rounded-full text-right"
                    placeholder="ایمیل"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    whileFocus={{ scale: 1.03 }}
                />
                <motion.input
                    className="w-full p-3 bg-gray-100 rounded-full text-right"
                    placeholder="شماره تماس"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    whileFocus={{ scale: 1.03 }}
                />
                <motion.textarea
                    className="w-full p-3 bg-gray-100 rounded-2xl text-right"
                    rows={3}
                    placeholder="چطور می‌توانیم کمکتان کنیم؟"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                    className="w-full bg-[#06174c] text-[#15c4ae] font-extrabold p-3 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    ارسال پیام
                </motion.button>
            </motion.div>
        </section>
    );
}
