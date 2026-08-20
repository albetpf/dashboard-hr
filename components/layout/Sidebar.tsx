"use client";

import { 
  LayoutDashboard, 
  Info, 
  Activity, 
  FileBarChart, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  UserCircle
} from "lucide-react";

export default function Sidebar({ isCollapsed, setIsCollapsed, activeTab, setActiveTab }: any) {
  
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "HR Information", icon: Info },
    { name: "HR Activity", icon: Activity },
    { name: "HR Report", icon: FileBarChart },
  ];

  return (
    <div 
      className={`relative flex flex-col bg-[#482F92] h-[calc(100vh-2rem)] my-4 ml-4 rounded-3xl transition-all duration-300 z-50 shadow-2xl ${
        isCollapsed ? "w-24" : "w-72"
      }`}
    >
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-4 top-12 bg-white border border-gray-100 rounded-full p-1.5 shadow-md hover:shadow-lg text-[#482F92] hover:text-[#00B49C] hover:scale-110 active:scale-90 transition-all z-50"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      <div className={`relative flex items-center justify-center bg-white rounded-t-3xl transition-all duration-300 z-10 flex-shrink-0 ${
        isCollapsed ? 'h-24 px-2' : 'h-24 px-6'
      }`}>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdYap22UK_102ppMshvv_4c_OBjAoaBlIq5xyNYXkxw&s" 
          alt="Logo BEK" 
          className="object-contain w-full h-14 transition-all duration-300"
        />
      </div>

      <div className="flex-1 py-6 flex flex-col gap-2 overflow-y-auto custom-scrollbar px-4">
        <p className={`text-[10px] font-bold text-white/50 uppercase tracking-wider mb-2 px-2 transition-all ${isCollapsed ? 'opacity-0 h-0 hidden' : 'opacity-100 block'}`}>
          Menu Utama
        </p>
        
        {menuItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              title={isCollapsed ? item.name : ""}
              className={`relative flex items-center w-full px-3 py-3.5 rounded-xl transition-all duration-300 group ${
                isActive 
                  ? "bg-[#00B49C] text-white shadow-md shadow-[#00B49C]/20 translate-x-1" 
                  : "text-white/70 hover:bg-[#00B49C]/80 hover:text-white"
              } ${isCollapsed ? 'justify-center px-0' : 'justify-start'}`}
            >
              <item.icon 
                size={22} 
                className={`flex-shrink-0 text-white transition-all duration-300 ${
                  isActive ? 'scale-110' : 'group-hover:scale-110'
                }`} 
              />
              {!isCollapsed && (
                <span className="ml-3 text-sm font-bold truncate">
                  {item.name}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="p-4 border-t border-white/10 flex flex-col gap-2 bg-black/15 rounded-b-3xl flex-shrink-0">
        
        <button
          title={isCollapsed ? "Pengaturan" : ""}
          className={`flex items-center w-full px-3 py-2.5 rounded-xl transition-all duration-300 text-white/70 hover:bg-[#00B49C]/80 hover:text-white hover:shadow-sm active:scale-95 group ${isCollapsed ? 'justify-center px-0' : 'justify-start'}`}
        >
          <Settings size={20} className="flex-shrink-0 text-white group-hover:rotate-90 transition-transform" />
          {!isCollapsed && <span className="ml-3 text-sm font-bold truncate">Pengaturan Sistem</span>}
        </button>
        
        <button
          title={isCollapsed ? "Keluar" : ""}
          className={`flex items-center w-full px-3 py-2.5 rounded-xl transition-all duration-300 text-white/70 hover:bg-[#DA1C5C] hover:text-white hover:shadow-md active:scale-95 group ${isCollapsed ? 'justify-center px-0' : 'justify-start'}`}
        >
          <LogOut size={20} className="flex-shrink-0 text-white transition-colors" />
          {!isCollapsed && <span className="ml-3 text-sm font-bold truncate">Keluar (Log Out)</span>}
        </button>

        <div className={`mt-3 flex items-center bg-white/5 border border-white/10 rounded-xl p-2.5 shadow-sm hover:bg-white/10 transition-colors cursor-pointer ${isCollapsed ? 'justify-center' : 'justify-start space-x-3'}`}>
          <div className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center flex-shrink-0">
            <UserCircle size={22} />
          </div>
          {!isCollapsed && (
            <div className="min-w-0 flex-1 text-left">
              <p className="text-xs font-bold text-white truncate">Admin HR Pusat</p>
              <p className="text-[10px] font-bold text-white/60 truncate mt-0.5">Superadmin</p>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}