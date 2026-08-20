"use client";

import { useState, useEffect } from "react";
import { Bell, Search, UserCircle } from "lucide-react";

export default function Header({ activeTab, searchQuery, setSearchQuery, scrollContainerRef }: any) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = scrollContainerRef?.current;
    if (!element) return;

    const handleScroll = () => {
      if (element.scrollTop <= 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();

    element.addEventListener("scroll", handleScroll);
    return () => element.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  return (
    <header 
      className={`sticky mx-4 md:mx-8 z-40 bg-white/80 backdrop-blur-md border border-gray-100 p-4 md:px-8 flex items-center justify-between transition-all duration-300 rounded-[2rem] shadow-sm ${
        isVisible 
          ? "top-4 translate-y-0 opacity-100" 
          : "top-4 -translate-y-[150%] opacity-0 pointer-events-none"
      }`}
    >
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-[#482F92] capitalize drop-shadow-sm" style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}>
          {activeTab}
        </h1>
        <p className="text-[10px] md:text-xs text-gray-500 font-bold mt-0.5 tracking-wide uppercase">
          PT. BEK Human Resources
        </p>
      </div>

      <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input 
          type="text" 
          placeholder={`Search in ${activeTab || 'Dashboard'}...`} 
          className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 text-sm font-bold text-[#232127] rounded-full outline-none focus:ring-2 focus:ring-[#00B49C]/50 focus:border-[#00B49C] transition-all placeholder:text-gray-400 placeholder:font-normal"
          value={searchQuery || ''}
          onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex items-center space-x-3 md:space-x-5">
        <button className="relative p-2.5 text-gray-400 hover:text-[#DA1C5C] hover:bg-red-50 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#DA1C5C] rounded-full border-2 border-white animate-pulse"></span>
        </button>

        <div className="hidden md:flex items-center space-x-3 pl-5 border-l border-gray-200">
          <div className="text-right">
            <p className="text-sm font-bold text-[#232127]">Admin HR</p>
            <p className="text-[10px] font-bold text-[#00B49C] uppercase tracking-wider flex items-center justify-end gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B49C]"></span> Online
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#482F92]/10 text-[#482F92] flex items-center justify-center border border-[#482F92]/20 shadow-sm cursor-pointer hover:bg-[#482F92]/20 transition-colors">
            <UserCircle size={26} />
          </div>
        </div>
      </div>
    </header>
  );
}