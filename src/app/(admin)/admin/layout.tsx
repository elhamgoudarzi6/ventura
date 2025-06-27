import "@/app/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "venture way panel",
  description: "راه خطر پذیر",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <body>
        <main className="bg-gray-100">
          {children}
        </main>
      </body>
    </html>
  );
}