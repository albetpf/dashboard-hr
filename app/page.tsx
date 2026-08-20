"use client";

import { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { Lock } from "lucide-react";

import DashboardOverview from "@/components/views/DashboardOverview";
import HrReport from "@/components/views/HrReport";
import HrActivity from "@/components/views/HrActivity";
import HrInformation from "@/components/views/HrInformation";

export default function SinglePageDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // STATE PENCARIAN GLOBAL
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const userRole = "admin"; 

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <DashboardOverview searchQuery={searchQuery} />;
      case "HR Information":
        return userRole === "admin" ? <HrInformation searchQuery={searchQuery} /> : <RestrictedAccess />;
      case "HR Activity":
        return userRole === "admin" ? <HrActivity searchQuery={searchQuery} /> : <RestrictedAccess />;
      case "HR Report":
        return <HrReport searchQuery={searchQuery} />;
      default:
        return <DashboardOverview searchQuery={searchQuery} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white text-[#232127] relative" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      
      {/* POLA BULAT GEOMETRIS (TRANSPARAN) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[50rem] h-[50rem] rounded-full bg-[#482F92]/[0.03]"></div>
        <div className="absolute top-20 -right-20 w-[40rem] h-[40rem] rounded-full bg-[#00B49C]/[0.03]"></div>
        <div className="absolute -bottom-60 left-1/4 w-[60rem] h-[60rem] rounded-full bg-[#00AEEF]/[0.02]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#482F92]/[0.04]"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#00B49C]/[0.04]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-[#00AEEF]/[0.04]"></div>
      </div>

      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div ref={scrollContainerRef} className="flex-1 flex flex-col overflow-y-auto scroll-smooth relative z-10">
        <Header 
          scrollContainerRef={scrollContainerRef} 
          activeTab={activeTab} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        
        <main className="p-4 md:p-8 w-full max-w-7xl mx-auto min-h-screen"> 
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

function RestrictedAccess() {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-500">
      <div className="w-24 h-24 bg-[#DA1C5C]/10 text-[#DA1C5C] flex items-center justify-center rounded-full mb-6">
        <Lock size={48} />
      </div>
      <h2 className="text-3xl font-bold text-[#232127] mb-2" style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}>Akses Ditolak</h2>
      <p className="text-gray-500 text-center max-w-md">
        Anda tidak memiliki izin yang diperlukan untuk melihat modul ini. Silakan hubungi Administrator Sistem jika ini adalah sebuah kesalahan.
      </p>
    </div>
  );
}