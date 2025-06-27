"use client";
import { useEffect, useState } from "react";
import { IoChevronUpSharp } from "react-icons/io5";

const GoToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        if (window.scrollY > 350) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    return (
        <button onClick={scrollToTop} aria-label="Go to Top"
            className={`fixed bottom-6 right-6 z-50 cursor-pointer bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <IoChevronUpSharp className="w-5 h-5" />
        </button>
    );
};

export default GoToTop;
