import Image from "next/image";
import {
  TbBrandInstagram,
  TbBrandTelegram,
  TbBrandWhatsapp,
  TbBrandLinkedin,
  TbPhoneCall,
} from "react-icons/tb";

const Footer = () => {
  const icons = [
    {
      icon: <TbBrandInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/ventureway.ir",
    },
    {
      icon: <TbBrandTelegram className="w-6 h-6" />,
      href: "https://t.me/ventureway",
    },
    {
      icon: <TbBrandWhatsapp className="w-6 h-6" />,
      href: "https://wa.me/989106521341",
    },
    {
      icon: <TbBrandLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/company/venture-way",
    },
    {
      icon: <TbPhoneCall className="w-6 h-6" />,
      href: "tel:09106521341",
    },
  ];


  return (
    <footer className="bg-[#06174c] text-gray-300 pt-14 pb-7 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-7 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4 md:col-span-3">
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/images/logo.png"
              width={100}
              height={100}
              alt="Venture Way Logo"
              className="h-8 w-8 object-cover"
            />
            <h2 className="text-xl font-semibold text-[#15c4ae]" style={{ fontFamily: "logo" }}>
              Venture Way
            </h2>
          </div>
          <p className="text-sm text-gray-200 text-justify leading-relaxed">
            ونچرا ارائه‌دهنده خدمات تخصصی مشاوره در حوزه جذب سرمایه استارتاپ‌هاست. ما با ترکیبی از تجربه، دانش و شبکه گسترده، به استارتاپ‌ها کمک می‌کنیم تا برای جذب سرمایه و مذاکره با سرمایه‌گذاران آماده و مستندات حرفه‌ای، دقیق و کاملی را ارائه دهند.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3">
            {icons.map((item, idx) => (
              <a
                href={item.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#15c4ae] text-xl hover:scale-110 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-1">
          <h3 className="font-semibold mb-3">لینک‌ها</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-1">
          <h3 className="font-semibold mb-3">خدمات</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>مشاوره کسب‌وکار</li>
            <li>جذب سرمایه</li>
            <li>مستندسازی</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-2">
          <h3 className="font-semibold mb-3">راه‌های ارتباطی</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>09106521341</li>
            <li>venturewayofficial@gmail.com</li>
            <li>ایران، خرم‌آباد، کارخانه نوآوری لرستان</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-800 pt-6 flex justify-center items-center text-xs text-gray-400">
        <p>
          © کلیه حقوق برای <span className="text-white font-medium">ونچرا</span> محفوظ است.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
