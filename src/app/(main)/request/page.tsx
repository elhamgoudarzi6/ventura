'use client';

import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import { useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import "react-multi-date-picker/styles/layouts/mobile.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function BookConsultation() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <section className="bg-gray-50 py-10 px-4 md:px-16 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 flex justify-center items-center gap-2">
          <CalendarDays className="w-6 h-6 text-[#15c4ae]" />
          رزرو جلسه مشاوره
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          فرم زیر را پر کنید تا درخواست مشاوره شما ثبت شود.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-white border border-gray-200 shadow-md rounded-xl p-10 grid gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert(`درخواست با تاریخ ارسال شد ✅`);
        }}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="نام و نام خانوادگی"
            required
            className="border border-gray-300 rounded-md px-4 py-3 outline-none text-sm focus:border-[#15c4ae] focus:ring-2 focus:ring-[#15c4ae]"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="شماره موبایل"
            maxLength={11}
            required
            className="border border-gray-300 text-right rounded-md px-4 py-3 outline-none text-sm focus:border-[#15c4ae] focus:ring-2 focus:ring-[#15c4ae]"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            placeholder="ایمیل"
            required
            className="border border-gray-300 rounded-md px-4 py-3 outline-none text-sm focus:border-[#15c4ae] focus:ring-2 focus:ring-[#15c4ae]"
          />
          <input
            type="text"
            name="website"
            placeholder="وب‌سایت"
            className="border border-gray-300 rounded-md px-4 py-3 outline-none text-sm focus:border-[#15c4ae] focus:ring-2 focus:ring-[#15c4ae]"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="companyName"
            placeholder="نام استارتاپ | شرکت"
            className="border border-gray-300 rounded-md px-4 py-3 outline-none text-sm focus:border-[#15c4ae] focus:ring-2 focus:ring-[#15c4ae]"
          />
          {/* <label className="block mb-2 text-sm font-medium text-gray-700">تاریخ پیشنهادی برای جلسه</label> */}
          <DatePicker
            value={selectedDate}
            onChange={() => setSelectedDate(selectedDate)}
            calendar={persian}
            locale={persian_fa}
            format="YYYY/MM/DD"
            inputClass="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#15c4ae]"
            placeholder="تاریخ را انتخاب کنید"
          />
        </div>
        <textarea
          name="description"
          placeholder="شرح درخواست یا چالش شما"
          rows={6}
          className="border border-gray-300 rounded-md px-4 py-3 outline-none text-sm focus:border-[#15c4ae] focus:ring-2 focus:ring-[#15c4ae]"
        />


        {/* Submit */}
        <button
          type="submit"
          className="bg-[#15c4ae] hover:bg-[#13b8a2] text-white font-semibold py-3 px-6 rounded-md transition"
        >
          ارسال درخواست
        </button>
      </motion.form>
    </section>
  );
}
