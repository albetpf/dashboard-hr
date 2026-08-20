import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HR Dashboard - PT. BEK",
  description: "Next Generation HR Web Dashboard",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* Tidak ada lagi DashboardLayout di sini, semua dipindah ke page.tsx agar tidak ribet */}
        {children}
      </body>
    </html>
  );
}