// // components/PaymentRequestForm.tsx
// 'use client'

// import { useState } from 'react';

// export default function Request() {
//     const [formData, setFormData] = useState({
//         name: 'Jenny Wilson',
//         email: '',
//         amount: '',
//         dueDate: '',
//         company: 'Pixsellz, Inc.',
//         account: ''
//     });

//     return (
//         <form className="max-w-2xl mx-auto mt-28 mb-10 bg-white border border-gray-300 rounded-xl p-6 space-y-6">
//             <h2 className="text-xl font-semibold">Payment Request</h2>

//             {/* Contact Details */}
//             <div>
//                 <h3 className="font-medium">Contact Details</h3>
//                 <div className="mt-3 flex gap-4">
//                     <input
//                         type="text"
//                         className="w-1/2 p-2 border border-gray-300 rounded-md"
//                         value={formData.name}
//                         placeholder="Name"
//                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     />
//                     <input
//                         type="email"
//                         className="w-1/2 p-2 border border-gray-300 rounded-md"
//                         placeholder="example@mail.com"
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}

//                     />
//                 </div>
//                 <div className="mt-3 flex gap-4">
//                     <input
//                         type="text"
//                         className="w-1/2 p-2 border border-gray-300 rounded-md"
//                         value={formData.name}
//                         placeholder="Name"
//                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     />
//                     <input
//                         type="email"
//                         className="w-1/2 p-2 border border-gray-300 rounded-md"
//                         placeholder="example@mail.com"
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}

//                     />
//                 </div>
//             </div>

//             {/* Request Details */}
//             <div>
//                 <h3 className="font-medium">Request Details</h3>
//                 <div className="flex gap-4 mt-2">
//                     <input
//                         type="number"
//                         placeholder="$ 0.00"
//                         className="w-1/2 p-2 border border-gray-300 rounded-md"
//                         onChange={(e) => setFormData({ ...formData, amount: e.target.value })}

//                     />
//                     <input
//                         type="date"
//                         className="w-1/2 p-2 border border-gray-300 rounded-md"
//                         onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}

//                     />
//                 </div>
//                 <input
//                     type="text"
//                     className="w-full p-2 mt-3 border border-gray-300 rounded-md"
//                     value={formData.company}
//                     readOnly
//                 />
//                 <select className="w-full mt-3 p-2 border border-gray-300 rounded-md">
//                     <option>Select account...</option>
//                 </select>
//                 <p className="text-xs text-gray-500 mt-1">
//                     Incoming payments are placed in a secure receiving account to keep destination account details anonymous.
//                 </p>
//                 <div className="bg-green-100 text-green-700 text-sm p-2 rounded-md mt-3">
//                     ⏱ Payment link expires on December 11, 2023
//                 </div>
//             </div>

//             {/* Actions */}
//             <div className="flex justify-between items-center">
//                 <button
//                     type="button"
//                     className="px-4 py-2 border border-gray-300 rounded-md"
//                 >
//                     Cancel
//                 </button>
//                 <button
//                     type="submit"
//                     className="px-4 py-2 bg-[#6de8cc] text-[#15171e] rounded-md hover:bg-orange-600"
//                 >
//                     Send Request
//                 </button>
//             </div>
//         </form>
//     );
// }


// 'use client'
// import { useState } from "react";
// import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";

// const BookingForm = () => {
//     const [formData, setFormData] = useState({
//         name: 'Jenny Wilson',
//         email: '',
//         amount: '',
//         dueDate: '',
//         company: 'Pixsellz, Inc.',
//         account: ''
//     });
//     return (
//         <div className="max-w-3xl mx-auto mt-30 mb-20  px-5">
//             <h1 className="text-3xl text-gray-700 text-center mb-10">send request form</h1>
//             <form className="grid grid-cols-1 md:grid-cols-2 gap-5 p-8 bg-white border border-gray-300 rounded-xl shadow">
//                 {/* Name */}
//                 <div>
//                     <label className="block mb-1 font-medium">Your Name *</label>
//                     <input
//                         type="text"
//                         placeholder="Ex. John Doe"
//                         className="w-full  border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                     <label className="block mb-1 font-medium">Phone *</label>
//                     <input
//                         type="tel"
//                         placeholder="Enter Phone Number"
//                         className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     />
//                 </div>
//                 <div>
//                     <label className="block mb-1 font-medium">Email *</label>
//                     <input
//                         type="email"
//                         className="w-full p-3 border border-gray-300 rounded-md"
//                         placeholder="example@mail.com"
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}

//                     />
//                 </div>
      

//                 {/* Services */}
//                 <div>
//                     <label className="block mb-1 font-medium">Preferred Services *</label>
//                     <select className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
//                         <option>Select Type</option>
//                         <option>Service A</option>
//                         <option>Service B</option>
//                     </select>
//                 </div>

//                 {/* Location */}
//                    <div className="md:col-span-2">
//                     <label className="block mb-1 font-medium">Location *</label>
//                     <input
//                         type="text"
//                         placeholder="Enter Location"
//                         className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     />
//                 </div>

//                 {/* Date */}
//                 <div className="relative">
//                     <label className="block mb-1 font-medium">Preferred Session Date*</label>
//                     <input
//                         type="date"
//                         className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     />
//                     <FiCalendar className="absolute right-3 top-10 text-gray-400" />
//                 </div>

//                 {/* Time */}
//                 <div className="relative">
//                     <label className="block mb-1 font-medium">Preferred Session Time*</label>
//                     <input
//                         type="time"
//                         className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     />
//                     <FiClock className="absolute right-3 top-10 text-gray-400" />
//                 </div>

//                 {/* Message - spans both columns */}
//                 <div className="md:col-span-2">
//                     <label className="block mb-1 font-medium">Your Message *</label>
//                     <textarea
//                         placeholder="Enter here.."
//                         className="w-full border border-gray-300 rounded-lg p-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                     ></textarea>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="md:col-span-2 flex justify-center pt-4">
//                     <button
//                         type="submit"
//                         className="px-10 py-2 font-extrabold bg-[#6de8cc] text-[#15171e] rounded-full">
//                         Send Request
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default BookingForm;



'use client';

import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

export default function BookConsultation() {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-16">
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

