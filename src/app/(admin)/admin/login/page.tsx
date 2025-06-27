"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { adminApi } from "@/services/admin/adminApi";
import { saveUser } from "@/storage/local-storage";
import MessageBox from "@/ui/messagebox";

export default function AdminLogin() {
  const router = useRouter();
  const [messageBox, setMessageBox] = useState<{ type: "success" | "error"; message: string; }>({ type: "success", message: "" });
  const [showMessage, setShowMessage] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const showMessageBox = (type: "success" | "error", message: string) => {
    setMessageBox({ type, message });
    setShowMessage(true);
  };

  const handleLogin = async () => {
    if (userName.trim() === "" || password.trim() === "") {
      showMessageBox("error", "اطلاعات را بطور کامل وارد کنید.");
      return;
    }
    try {
      const res = await adminApi.login(userName, password);
      if (res.success === true) {
        saveUser(res.data, res.token);
        router.push("/admin");
      } else {
        showMessageBox("error", "نام کاربری یا رمز عبور صحیح نمی باشد.");
      }
    } catch (err) {
      console.log(err)
      showMessageBox("error", "خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white px-10 py-15 rounded-xl shadow-md w-md">
        <h2 className="text-xl font-semibold text-center mb-7">ورود به پنل مدیریت</h2>
        <input
          type="text"
          placeholder="نام کاربری"
          className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="رمز عبور"
          className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full mt-2 bg-black text-white p-2 rounded-lg" onClick={handleLogin}>
          ورود
        </button>
      </div>

      {showMessage && (
        <div className="fixed top-10 mx-auto z-50">
          <MessageBox
            type={messageBox.type}
            message={messageBox.message}
            onClose={() => setShowMessage(false)}
          />
        </div>
      )}
    </div>
  );
}
