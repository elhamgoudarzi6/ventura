import { CheckCircle, XCircle, X } from "lucide-react";

interface MessageBoxProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

export default function MessageBox({ type, message, onClose }: MessageBoxProps) {
  const Icon = type === "success" ? CheckCircle : XCircle;

  return (
    <div
      className={`relative rounded shadow-lg px-7 py-5 max-w-md w-full flex items-center gap-3
        ${type === "success" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}
      `}
    >
      {/* آیکون بستن در گوشه بالا چپ */}
      <button
        onClick={onClose}
        className="absolute top-1 left-1 text-black"
        aria-label="بستن"
      >
        <X className="w-3 h-3" />
      </button>

      <Icon className={`w-6 h-6 ${type === "success" ? "text-green-500" : "text-red-500"}`} />
      <p className="text-sm text-gray-800">{message}</p>
    </div>
  );
}
