"use client";

import { useEffect, useState } from "react";
import {
  GoHome,
  GoGear,
  GoBell,
  GoSignOut,
  GoTasklist,
} from "react-icons/go";
import { HiBars3 } from "react-icons/hi2";
import { PiArticle } from "react-icons/pi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Dashboard from "./components/dashboard";
import Articles from "./components/articles";
import SettingsPage from "./components/setting";
import Requests from "./components/requests";
import Cats from "./components/cats";

import { getUser, logout } from "@/storage/local-storage";

const menuItems = [
  { id: "dashboard", title: "Dashboard", icon: <GoHome /> },
  { id: "cats", title: "Cats", icon: <PiArticle /> },
  { id: "articles", title: "Articles", icon: <PiArticle /> },
  { id: "requests", title: "Requests", icon: <GoTasklist /> },
  { id: "settings", title: "Settings", icon: <GoGear /> },
];

const Admin = () => {
  const router = useRouter();
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = getUser("admin");
    console.log("user:", user);
    if (!user) {
      router.push("/admin/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    logout("admin");
    router.push("/admin/login");
  };

  const renderSection = () => {
    switch (active) {
      case "dashboard": return <Dashboard />;
      case "cats": return <Cats />;
      case "requests": return <Requests />;
      case "articles": return <Articles />;
      case "settings": return <SettingsPage />;
      default: return null;
    }
  };

  if (loading) return null; // یا spinner ساده

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          } md:hidden`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 w-64 h-full bg-white shadow-md transform transition-transform p-6 space-y-6 md:relative md:translate-x-0 md:top-auto md:left-auto md:rounded-2xl md:shadow-md md:m-4 md:h-[calc(100vh-2rem)] ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center space-y-2 mb-6">
          <Image
            src="/assets/images/user.png"
            alt="Admin Avatar"
            width={64}
            height={64}
            className="rounded-full object-cover h-15 w-15"
          />
          <span className="text-sm font-medium text-gray-700 mt-3">Razieh Goudarzi</span>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center w-full cursor-pointer px-4 py-2 rounded-lg transition-colors text-right ${active === item.id
                ? "bg-gray-100 text-gray-900"
                : "hover:bg-gray-100 text-gray-700"
                }`}
              onClick={() => {
                setActive(item.id);
                setSidebarOpen(false);
              }}
            >
              <span className="ml-2 text-2xl">{item.icon}</span>
              <span className="font-medium text-sm">{item.title}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center cursor-pointer w-full px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <span className="mr-2 text-xl">
              <GoSignOut />
            </span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Toolbar */}
        <div className="bg-white shadow rounded-xl px-6 py-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-gray-600 text-2xl"
              onClick={() => setSidebarOpen(true)}
            >
              <HiBars3 />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">Admin Panel</h1>
          </div>
          <div className="flex items-center gap-4">
            <GoBell className="text-xl text-gray-500 hover:text-red-500 cursor-pointer" />
            <div className="text-sm text-gray-600 hidden sm:inline">Hi! Admin</div>
          </div>
        </div>

        {/* Page content */}
        <div className="bg-white shadow-md rounded-2xl p-6 min-h-[400px]">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Admin;
