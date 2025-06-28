
import { Sparkles, ShieldCheck, Rocket, Users } from 'lucide-react';

const features = [
  {
    title: 'سرمایه‌گذاری هوشمند',
    description: 'ما با تحلیل دقیق و مشاوره تخصصی، استارتاپ‌ها را برای جذب سرمایه هدفمند آماده می‌کنیم.',
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: 'شبکه منتورینگ قوی',
    description: 'دسترسی به منتورها و سرمایه‌گذاران مطرح اکوسیستم کارآفرینی.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: 'شتاب‌دهی تخصصی',
    description: 'ما در مسیر رشد، از MVP تا جذب سرمایه، همراهتان هستیم.',
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    title: 'پلتفرم یکپارچه',
    description: 'تمام ابزارها و خدمات موردنیاز برای رشد استارتاپ شما در یک بستر.',
    icon: <Sparkles className="w-8 h-8" />,
  },
];

export default function FeaturesPage() {
  return (
    <div className=" px-6 py-20 md:px-16 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">ویژگی‌های ما</h1>
          <p className="text-gray-600 text-lg">
            در ونچـــرا ما مجموعه‌ای از خدمات و امکانات ویژه را برای رشد سریع‌تر استارتاپ‌ها فراهم کرده‌ایم.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 border border-gray-300 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-[#15c4ae] text-[#06174c] p-3 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-md md:text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
