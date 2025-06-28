'use client';

import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

export default function BookConsultation() {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-16 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 flex justify-center items-center gap-2">
          <CalendarDays className="w-6 h-6 text-[#15c4ae]" />
          Book a Consultation
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Fill out the form below to schedule a free consultation with our investment experts.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8 grid gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Your request has been submitted ✅");
        }}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#15c4ae]"
          />
          <input
            type="email"
            placeholder="Work Email"
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#15c4ae]"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Startup Name"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#15c4ae]"
          />
          <input
            type="text"
            placeholder="Industry / Sector"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#15c4ae]"
          />
        </div>
        <select
          required
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#15c4ae]"
        >
          <option value="">Stage of Your Startup</option>
          <option>Idea</option>
          <option>MVP</option>
          <option>Traction / Revenue</option>
          <option>Fundraising</option>
        </select>
        <textarea
          placeholder="Tell us briefly about your challenge or goal"
          rows={4}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#15c4ae]"
        />
        <input
          type="datetime-local"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#15c4ae]"
        />
        <button
          type="submit"
          className="bg-[#15c4ae] hover:bg-[#13b8a2] text-white font-semibold py-2 px-6 rounded-md transition"
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
}

