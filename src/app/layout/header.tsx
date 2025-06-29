"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

import {
  Menu, X,
  Lightbulb,
  BarChart2,
  BookText,
  Clipboard,
  FileText,
  Handshake,
  Layers3,
  LayoutDashboard,
  Presentation,
  Scale,
  ScrollText,
  ShieldCheck,
  Users,
  DollarSign,
  Table,
} from 'lucide-react';

const megaMenu = [
  {
    title: 'مشاوره کسب‌وکار', href: "",
    icon: Lightbulb,
    children: [
      { title: 'راه‌اندازی استارتاپ', icon: Layers3, href: '#' },
      { title: 'توسعه مدل کسب‌وکار', icon: LayoutDashboard, href: '#' },
      { title: 'شراکت و هم‌بنیان‌گذاری', icon: Users, href: '#' },
      { title: 'حاکمیت شرکتی', icon: ShieldCheck, href: '#' },
      { title: 'مشاوره حقوقی', icon: Scale, href: '#' },
    ],
  },
  {
    title: 'مشاوره جذب سرمایه', href: "",
    icon: DollarSign,
    children: [
      { title: 'انتخاب روش تأمین مالی', icon: DollarSign, href: '#' },
      { title: 'آماده‌سازی برای ارائه به سرمایه‌گذار', icon: Presentation, href: '#' },
      { title: 'مدل‌سازی مالی', icon: BarChart2, href: '#' },
      { title: 'ساختار توافق و مذاکره', icon: Handshake, href: '#' },
      { title: 'قراردادهای سرمایه‌گذاری', icon: ScrollText, href: '#' },
    ],
  },
  {
    title: 'آماده‌سازی مستندات', href: "",
    icon: FileText,
    children: [
      { title: 'فایل ارائه به سرمایه گذار', icon: Presentation, href: '#' },
      { title: 'پیش بینی های مالی', icon: BarChart2, href: '#' },
      { title: 'جدول سهامداری', icon: Table, href: '#' },
      { title: 'طرح کسب و کار', icon: Clipboard, href: '#' },
      { title: 'طرح توجیهی کسب و کار', icon: BookText, href: '#' },
    ],
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
            <Link href="" className="cursor-pointer px-4 py-1 hover:underline underline-offset-15 decoration-[#15c4ae] decoration-1 transition">
              خدمات
            </Link>

            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[800px] rounded-xl shadow-xl bg-white text-gray-900 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
              <div className="grid grid-cols-3 gap-6 p-8">
                {megaMenu.map((column, index) => (
                  <div key={index} className="space-y-4">
                    {/* عنوان اصلی ستون */}
                    <Link href={column.href} className="flex items-center gap-2 border-b border-gray-200 pb-2 mb-2">
                      <column.icon className="text-[#15c4ae] w-5 h-5" />
                      <span className="text-base font-bold text-[#06174c]">{column.title}</span>
                    </Link>

                    {/* زیرخدمات */}
                    {column.children.map((item, idx) => (
                      <Link key={idx} href={item.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#15c4ae] transition">
                        <item.icon className="text-[#15c4ae] w-4 h-4 shrink-0" />
                        <span>{item.title}</span>
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
          <Link href="request" className="bg-[#15c4ae] text-[#06174c] text-md px-10 py-3 rounded-full font-semibold" >
            مشاوره رایگان
          </Link>
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
