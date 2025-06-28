"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, DollarSign,FileText, Lightbulb, Menu, X } from "lucide-react";
import { Drawer } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";


const submenuData = [
  {
    title: "مشاوره کسب و کار",
    description: "مشاوره‌های ما، مسیر رشد کسب‌وکارتان را هدفمند می‌سازد.",
    icon: Lightbulb,
    href: "#",
  },
  {
    title: "راه‌اندازی استارتاپ",
    description: "از شکل‌گیری ایده تا اجرای موفق با نقشه راه دقیق و راهنمایی گام‌به‌گام",
    icon: Check,
    href: "#",
  },
  {
    title: "توسعه مدل کسب‌وکار",
    description: "کمک به طراحی و تست مدل درآمدی پایدار با تمرکز بر ارزش پیشنهادی",
    icon: Check,
    href: "#",
  },
  {
    title: "شراکت و هم‌بنیان‌گذاری",
    description: "ساختار شفاف و توافق‌نامه‌های اصولی برای مؤسسان جهت حفظ تعادل و رشد",
    icon: Check,
    href: "#",
  },
  {
    title: "مشاوره جذب سرمایه",
    description: "سرمایه‌گذاری فقط پول نیست، بلکه شراکت هوشمندانه است.",
    icon: DollarSign,
    href: "#",
  },
  {
    title: "انتخاب روش تأمین مالی",
    description: "بدهی یا سهام؟ بهترین گزینه برای شما کدام است؟",
    icon: Check,
    href: "#",
  },
  {
    title: "آماده‌سازی برای ارائه به سرمایه‌گذار",
    description: "ساختاردهی ارائه و پاسخ به سوالات کلیدی",
    icon: Check,
    href: "#",
  },
  {
    title: "مدل‌سازی مالی",
    description: "پیش‌بینی دقیق درآمد، هزینه و سود",
    icon: Check,
    href: "#",
  },
  {
    title: "آماده سازی مستندات",
    description: " مستندات حرفه‌ای و دقیق، اولین گام جلب اعتماد سرمایه‌گذاران است.",
    icon: FileText,
    href: "#",
  },
  {
    title: "Pitch Deck",
    description: "طراحی حرفه‌ای فایل ارائه برای جلسات سرمایه‌گذاری",
    icon: Check,
    href: "#",
  },
  {
    title: "Financial Projection",
    description: "پیش‌بینی مالی با جزئیات چندساله",
    icon: Check,
    href: "#",
  },
  {
    title: "Cap Table",
    description: "جدول سهام‌داری شفاف و دقیق",
    icon: Check,
    href: "#",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <header className="w-full fixed top-0 left-0 z-50 py-2 transition-all duration-300 bg-[#06174c]">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between text-xs items-center">
        <button onClick={() => setMenuOpen(true)} className="md:hidden cursor-pointer text-[#15c4ae]">
          <Menu className="w-9 h-9" />
        </button>

        <Link href="/">
          <Image src="/assets/images/logo.png" alt="venture way" width={64} height={56} />
        </Link>

        {/* منو دسکتاپ */}
        <nav className="hidden md:flex gap-2 items-center text-sm text-[#15c4ae] px-2 py-2">
          <Link href="/" className="px-4 py-1 hover:underline underline-offset-15 decoration-[#15c4ae] decoration-1 transition">
            صفحه اصلی
          </Link>

          {/* Mega Menu */}
          <div className="relative group">
            <button className="cursor-pointer px-4 py-1 hover:underline underline-offset-15 decoration-[#15c4ae] decoration-1 transition">
              خدمات
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[850px] rounded-xl shadow-xl bg-white text-gray-900 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
              <div className="grid grid-cols-3 gap-7 p-10">
                {Array.from({ length: Math.ceil(submenuData.length / 4) }).map((_, colIndex) => (
                  <div key={colIndex} className="space-y-4">
                    {submenuData
                      .slice(colIndex * 4, colIndex * 4 + 4)
                      .map((item, i) => (
                        <Link key={i} href={item.href} className="flex gap-3 items-start hover:text-[#15c4ae]">
                          <item.icon className="w-6 h-6 max-w-6 max-h-6 mt-1 text-[#15c4ae] shrink-0" />
                          <div>
                            <div className="font-bold text-[#15c4ae] mb-1">{item.title}</div>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" prefetch className="px-4 py-1 hover:underline underline-offset-15 decoration-[#15c4ae] decoration-1 transition">
            درباره ما
          </Link>
          <Link href="/about" prefetch className="px-4 py-1 hover:underline underline-offset-15 decoration-[#15c4ae] decoration-1 transition">
            بلاگ
          </Link>
          <Link href="/contact" prefetch className="px-4 py-1 hover:underline underline-offset-15 decoration-[#15c4ae] decoration-1 transition">
            تماس با ما
          </Link>
        </nav>

        {/* دکمه لاگین */}
        <div className="hidden md:block">
          <button className="bg-[#15c4ae] text-[#06174c] text-md px-6 py-3 rounded-full font-semibold" >
            رزرو جلسه رایگان
          </button>
        </div>

        {isMobile && (
          <Drawer
            anchor="right"
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            slotProps={{
              paper: {
                sx: { backgroundColor: "#06174c", width: 300 },
              },
            }}
          >
            <div className="flex flex-col gap-5 p-6 text-[#15c4ae] uppercase text-lg">
              <button onClick={() => setMenuOpen(false)} className="self-end">
                <X className="w-6 h-6" />
              </button>
              <Link href="/" onClick={() => setMenuOpen(false)}>صفحه اصلی</Link>
              <Link href="/about" prefetch onClick={() => setMenuOpen(false)}>خدمات</Link>
              <Link href="/about" prefetch onClick={() => setMenuOpen(false)}>درباره ما</Link>
              <Link href="/blog" prefetch onClick={() => setMenuOpen(false)}>بلاگ</Link>
              <Link href="/contact" prefetch onClick={() => setMenuOpen(false)}>ارتباط با ما</Link>
            </div>
          </Drawer>
        )}
      </div>

    </header>
  );
};

export default Header;
