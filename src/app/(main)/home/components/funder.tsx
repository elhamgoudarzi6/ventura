import { FaDollarSign, FaRoute } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { TbBulbFilled } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";

const Funder = () => {
    const steps = [
        {
            icon: <AiFillThunderbolt />,
            title: "ایده‌پردازی",
            description: "تحقیق بازار و مدل اولیه.",
        },
        {
            icon: <FaRoute />,
            title: "طرح کسب‌وکار",
            description: "بیزینس پلن و پیش‌بینی مالی.",
        },
        {
            icon: <FaDollarSign />,
            title: "سرمایه اولیه",
            description: "جلسات با سرمایه‌گذاران اولیه.",
        },
        {
            icon: <TbBulbFilled />,
            title: "MVP و تست",
            description: "ساخت محصول اولیه و تست بازار.",
        },
        {
            icon: <FaSackDollar />,
            title: "سری A",
            description: "جذب سرمایه برای مقیاس‌پذیری.",
        },
    ];

    return (
        <div className="container mx-auto text-center py-20">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 px-10 md:px-0">
                {steps.map((step, index) => (
                    <div key={index} className="relative">
                        {/* Arrow for mobile */}
                        {index < steps.length - 1 && (
                            <div className="md:hidden relative flex justify-center">
                                <div className="w-px h-6 bg-gray-300" />
                                <div className="w-2 h-2 border-r-2 border-b-2 border-gray-400 rotate-45 mt-[-1px]" />
                            </div>
                        )}
                        {/* Arrow for desktop */}
                        {index < steps.length - 1 && (
                            <div className="hidden md:block absolute top-1/2 left-[-35px] w-10 h-1 border-t-2 border-dashed border-gray-300 -z-5">
                                <div className="absolute left-0 -top-1 w-2 h-2 border-b-2 border-l-2 border-gray-400 rotate-45"></div>
                            </div>
                        )}

                        <div className="bg-white rounded-2xl border border-gray-300 shadow-xl  p-6 h-full">
                            <div className="flex items-center justify-center text-3xl w-14 h-14 rounded-full text-[#15171e] bg-[#15c4ae] mb-4 mx-auto">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#15171e]">{step.title}</h3>
                            <p className="text-gray-600 mt-2 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Funder;
