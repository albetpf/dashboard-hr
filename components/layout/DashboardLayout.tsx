'use client';

import { useState, useRef } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="flex h-screen overflow-hidden bg-[#F3F3F3] text-[#232127] relative"
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      <div className="absolute top-0 right-0 w-full h-[60vh] pointer-events-none overflow-hidden z-0 flex justify-end">
        <div className="absolute -top-[30%] -right-[10%] w-[700px] h-[700px] bg-[#482F92] rounded-full opacity-100 shadow-2xl"></div>
        <div className="absolute -top-[10%] -right-[5%] w-[450px] h-[450px] bg-[#00AEEF] rounded-full opacity-100 shadow-xl"></div>
      </div>

      <div className="z-20">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      <div
        ref={scrollContainerRef}
        className="flex-1 flex flex-col overflow-y-auto scroll-smooth relative z-10"
      >
        <Header scrollContainerRef={scrollContainerRef} />
        <main className="p-4 md:p-8 w-full max-w-7xl mx-auto min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
