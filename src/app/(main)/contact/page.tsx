"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 max-w-6xl mx-auto mt-30 mb-20 px-4">
            {/* Left Section - Contact Info */}
            <motion.div
                className="p-10 space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-[#15171e]">Get In Touch With Us</h2>
                <p className="text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="space-y-4 mt-5">
                    <div className="flex items-start space-x-4">
                        <div className="bg-[#14c5ae] text-[#15171e] p-3 rounded-xl">
                            <FaMapMarkerAlt className="text-xl" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700">Our Location</h4>
                            <p className="text-gray-500 text-sm">99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-[#14c5ae] text-[#2e3282] p-3 rounded-xl">
                            <FaPhone className="text-xl" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700">Phone Number</h4>
                            <p className="text-gray-500 text-sm">(+62) 81 414 257 9980</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-[#14c5ae] text-[#2e3282] p-3 rounded-xl">
                            <FaEnvelope className="text-xl" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700">Email Address</h4>
                            <p className="text-gray-500 text-sm">info@yourdomain.com</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Section - Contact Form */}
            <motion.div
                className="space-y-4 p-14 bg-[#15c4ae] rounded-xl shadow"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <motion.input
                    className="w-full p-3 bg-gray-100 rounded-full mt-5"
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    whileFocus={{ scale: 1.03 }}
                />
                <motion.input
                    className="w-full p-3 bg-gray-100 rounded-full"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    whileFocus={{ scale: 1.03 }}
                />
                <motion.input
                    className="w-full p-3 bg-gray-100 rounded-full"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    whileFocus={{ scale: 1.03 }}
                />
                <motion.textarea
                    className="w-full p-3 bg-gray-100 rounded-2xl"
                    rows={3}
                    placeholder="How can we help?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                    className="w-full bg-[#06174c] text-[#15c4ae] font-extrabold p-3 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Send Message
                </motion.button>
            </motion.div>
        </section>
    );
}
