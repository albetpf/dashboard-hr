"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Users, UserPlus, HeartPulse, PieChart, Clock, Newspaper, FileText, ChevronRight, CheckCircle2, X, Search, Download } from "lucide-react";

export default function DashboardOverview({ searchQuery = "" }: any) {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredContract, setHoveredContract] = useState<string | null>(null);
  
  const [activeModal, setActiveModal] = useState<{ title: string; headers: string[]; data: any[] } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filterData = (data: any[]) => data.filter(item => 
    Object.values(item).some(val => String(val).toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const banners = [
    { id: 1, title: "Building a Greener Future", desc: "Pantau kehadiran hari ini, atur jadwal pelatihan, dan awasi perkembangan perusahaan dengan akurat.", btnText: "Buat Laporan", btnColor: "bg-white text-[#482F92]", imgUrl: "/assets/1.jpg" },
    { id: 2, title: "2026 Annual HR Virtual Meeting", desc: "Bergabunglah dalam acara virtual kami. Temukan kebijakan HR terbaru, fasilitas karyawan, dan ulasan Q3.", btnText: "Daftar Sekarang", btnColor: "bg-white text-[#482F92]", imgUrl: "/assets/2.jpg" },
    { id: 3, title: "Wellness & Mental Health Program", desc: "Perusahaan kini memfasilitasi konseling gratis untuk seluruh karyawan. Daftarkan diri Anda melalui portal.", btnText: "Pelajari Lebih Lanjut", btnColor: "bg-white text-[#482F92]", imgUrl: "/assets/3.jpg" },
    { id: 4, title: "Executive Leadership Training", desc: "Tingkatkan skill manajerial Anda dengan bergabung dalam program akselerasi kepemimpinan tahun ini.", btnText: "Daftar Pelatihan", btnColor: "bg-white text-[#482F92]", imgUrl: "/assets/4.jpg" }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1)), 6000);
    return () => clearInterval(timer);
  }, [banners.length, currentSlide]);

  const attendanceData = [
    { day: "Sen", date: "10 Ags", present: 95, presentCount: "1,185", overtime: 45, overtimeHours: "320" },
    { day: "Sel", date: "11 Ags", present: 92, presentCount: "1,148", overtime: 30, overtimeHours: "215" },
    { day: "Rab", date: "12 Ags", present: 88, presentCount: "1,098", overtime: 60, overtimeHours: "450" },
    { day: "Kam", date: "13 Ags", present: 96, presentCount: "1,198", overtime: 20, overtimeHours: "150" },
    { day: "Jum", date: "14 Ags", present: 85, presentCount: "1,060", overtime: 75, overtimeHours: "580" },
    { day: "Sab", date: "15 Ags", present: 45, presentCount: "561", overtime: 85, overtimeHours: "620" }, 
    { day: "Min", date: "16 Ags", present: 30, presentCount: "374", overtime: 90, overtimeHours: "710" }, 
  ];

  const contractData = [
    { id: "tetap", label: "Tetap (PKWTT)", percentage: 55, count: 686, color: "#482F92", offset: 0 },
    { id: "kontrak", label: "Kontrak (PKWT)", percentage: 25, count: 312, color: "#00AEEF", offset: -55 },
    { id: "probation", label: "Masa Percobaan", percentage: 15, count: 187, color: "#00B49C", offset: -80 },
    { id: "magang", label: "Magang / Trainee", percentage: 5, count: 63, color: "#EAB308", offset: -95 },
  ];

  const activeContract = hoveredContract ? contractData.find(c => c.id === hoveredContract) : { label: "Total Karyawan", count: "1,248", color: "#232127" };

  const modalConfig: Record<string, { headers: string[], data: any[] }> = {
    "Total Active Employees": {
      headers: ["ID Karyawan", "Nama Lengkap", "Departemen", "Status"],
      data: [
        { col1: "EMP-001", col2: "Budi Santoso", col3: "Operasi Tambang", col4: "Aktif" },
        { col1: "EMP-002", col2: "Siti Aminah", col3: "Finance", col4: "Aktif" },
        { col1: "EMP-003", col2: "Andi Saputra", col3: "HSE", col4: "Cuti" },
        { col1: "EMP-004", col2: "Rina Melati", col3: "Human Resources", col4: "Aktif" },
      ]
    },
    "MPP Fulfillment": {
      headers: ["Departemen", "Target Posisi", "Karyawan Aktual", "Status Pemenuhan"],
      data: [
        { col1: "Operasi Tambang", col2: "500 Posisi", col3: "450 Orang", col4: "Tersedia" },
        { col1: "Finance", col2: "50 Posisi", col3: "40 Orang", col4: "Tersedia" },
        { col1: "HSE", col2: "260 Posisi", col3: "250 Orang", col4: "Penuh" },
        { col1: "IT Support", col2: "45 Posisi", col3: "45 Orang", col4: "Penuh" },
      ]
    },
    "Overtime Budget (Q3)": {
      headers: ["Departemen", "Total Jam Lembur", "Estimasi Biaya", "Status Anggaran"],
      data: [
        { col1: "Operasi Tambang", col2: "1,240 Jam", col3: "Rp 45.2 Juta", col4: "Over" },
        { col1: "Teknik & Sipil", col2: "450 Jam", col3: "Rp 15.8 Juta", col4: "Aman" },
        { col1: "Finance", col2: "120 Jam", col3: "Rp 4.5 Juta", col4: "Aman" },
        { col1: "Human Resources", col2: "80 Jam", col3: "Rp 2.1 Juta", col4: "Aman" },
      ]
    },
    "MCU Schedule": {
      headers: ["Nama Karyawan", "Jenis MCU", "Tanggal Pelaksanaan", "Lokasi / RS"],
      data: [
        { col1: "Joko Susanto", col2: "MCU Tahunan", col3: "15 Agu 2026", col4: "Siloam Hospital" },
        { col1: "Rina Melati", col2: "Pasca Sakit", col3: "18 Agu 2026", col4: "Klinik Medika" },
        { col1: "Rizky Pratama", col2: "MCU Tahunan", col3: "22 Agu 2026", col4: "RS Hermina" },
        { col1: "Ahmad Fauzi", col2: "Pra-Kerja", col3: "25 Agu 2026", col4: "RS Pertamina" },
      ]
    }
  };

  const handleCardClick = (title: string) => {
    if (modalConfig[title]) {
      setActiveModal({ 
        title, 
        headers: modalConfig[title].headers, 
        data: modalConfig[title].data 
      });
    }
  };

  const getStatusColor = (status: string) => {
    if (status === "Aktif" || status === "Aman" || status === "Penuh") return "bg-[#00B49C]/10 text-[#00B49C]";
    if (status === "Over" || status === "Cuti") return "bg-[#DA1C5C]/10 text-[#DA1C5C]";
    return "bg-[#00AEEF]/10 text-[#00AEEF]"; // Default/Tersedia
  };

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500 pb-10">
      
      <div className="relative w-full min-h-[240px] rounded-[2rem] overflow-hidden shadow-md bg-[#482F92]">
        <div className="flex transition-transform duration-700 ease-out h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {banners.map((banner) => (
            <div key={banner.id} className="w-full flex-shrink-0 relative min-h-[240px] flex items-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#232127]/90 via-[#232127]/60 to-[#232127]/20 z-0"></div>
              <img src={banner.imgUrl} alt={banner.title} className="absolute inset-0 w-full h-full object-cover z-[-1] bg-gray-200" />
              <div className="relative z-10 p-10 md:p-12 text-white max-w-2xl">
                <h2 className="text-4xl font-bold mb-3 tracking-wide drop-shadow-lg" style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}>{banner.title}</h2>
                <p className="text-white/90 text-sm mb-6 max-w-lg leading-relaxed drop-shadow-sm">{banner.desc}</p>
                <button className={`${banner.btnColor} text-sm font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:bg-gray-50 hover:-translate-y-1 active:scale-95`}>
                  {banner.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
          {banners.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? "w-8 bg-[#00B49C]" : "w-2.5 bg-white/50 hover:bg-white"}`} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <SparklineCard onClick={() => handleCardClick("Total Active Employees")} title="Total Active Employees" value="1,248" trend="+12 Bln Ini" icon={Users} color="#482F92" sparklineData="M0,40 L10,35 L20,45 L30,25 L40,30 L50,10 L60,15" />
        <SparklineCard onClick={() => handleCardClick("MPP Fulfillment")} title="MPP Fulfillment" value="92.4%" trend="Tersisa 72 Posisi" icon={PieChart} color="#00AEEF" sparklineData="M0,20 L10,25 L20,15 L30,20 L40,10 L50,15 L60,5" />
        <SparklineCard onClick={() => handleCardClick("Overtime Budget (Q3)")} title="Overtime Budget (Q3)" value="Rp 245M" trend="Terpakai 68%" icon={Clock} color="#DA1C5C" sparklineData="M0,10 L10,20 L20,15 L30,35 L40,25 L50,45 L60,40" />
        <SparklineCard onClick={() => handleCardClick("MCU Schedule")} title="MCU Schedule" value="18" trend="Bulan Agustus" icon={HeartPulse} color="#00B49C" sparklineData="M0,50 L10,40 L20,45 L30,25 L40,15 L50,20 L60,5" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#F3F3F3] rounded-[2rem] p-7 shadow-sm border border-gray-200 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#232127]" style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}>Attendance vs Overtime Trend</h3>
              <p className="text-xs text-gray-500 mt-1">Perbandingan harian dalam satu minggu terakhir</p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-bold bg-white px-3 py-2 rounded-lg border border-gray-100 shadow-sm">
              <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-[#482F92]"></div> Kehadiran</span>
              <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-[#DA1C5C]"></div> Beban Lembur</span>
            </div>
          </div>
          
          <div className="flex-1 flex mt-4 min-h-[220px]">
            <div className="flex flex-col justify-between text-[10px] font-bold text-gray-400 text-right pr-4 pb-6 w-10 shrink-0">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>
            
            <div className="relative flex-1">
              <div className="absolute inset-0 flex flex-col justify-between pb-6 pointer-events-none z-0">
                <div className="w-full border-t border-dashed border-gray-200"></div> 
                <div className="w-full border-t border-dashed border-gray-200"></div> 
                <div className="w-full border-t border-dashed border-gray-200"></div> 
                <div className="w-full border-t border-dashed border-gray-200"></div> 
                <div className="w-full border-t border-gray-300"></div>
              </div>

              <div className="absolute inset-0 flex items-end justify-between pb-6 z-10 px-2 sm:px-6">
                {attendanceData.map((data, idx) => (
                  <div key={idx} className="relative flex flex-col items-center justify-end group w-full h-full">
                    
                    <div className="absolute -top-16 opacity-0 group-hover:opacity-100 bg-[#232127] text-white p-2.5 rounded-xl text-[10px] whitespace-nowrap z-30 pointer-events-none transition-all duration-300 shadow-lg translate-y-2 group-hover:translate-y-0">
                      <p className="font-bold mb-1.5 text-[#00AEEF]">{data.day}, {data.date}</p>
                      <div className="flex justify-between gap-4">
                        <span>Kehadiran:</span> <span className="font-bold">{data.presentCount} org ({data.present}%)</span>
                      </div>
                      <div className="flex justify-between gap-4 mt-0.5">
                        <span>Total Lembur:</span> <span className="font-bold">{data.overtimeHours} Jam</span>
                      </div>
                    </div>
                    
                    <div className="flex items-end justify-center w-full gap-0.5 sm:gap-1.5 h-full">
                      <div className="w-3 sm:w-5 md:w-6 bg-[#482F92] rounded-t-md transition-all duration-300 group-hover:bg-[#362173]" style={{ height: `${data.present}%` }}></div>
                      <div className="w-3 sm:w-5 md:w-6 bg-[#DA1C5C] rounded-t-md transition-all duration-300 group-hover:bg-[#B01549]" style={{ height: `${data.overtime}%` }}></div>
                    </div>
                    
                    <span className="absolute -bottom-5 text-[10px] sm:text-xs font-bold text-gray-500 group-hover:text-[#232127] transition-colors">{data.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 bg-[#F3F3F3] rounded-[2rem] p-7 shadow-sm border border-gray-200 flex flex-col items-center justify-between">
          <div className="w-full flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-[#232127]" style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}>Contract Composition</h3>
            <div className="p-2 bg-white rounded-lg shadow-sm text-gray-400"><PieChart size={16} /></div>
          </div>
          
          <div className="relative w-44 h-44 my-4 flex items-center justify-center">
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 transition-all duration-300">
                <span className="text-2xl font-black transition-colors duration-300" style={{ color: activeContract.color }}>
                  {activeContract.count}
                </span>
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider text-center px-4 leading-tight mt-0.5">
                  {activeContract.label}
                </span>
             </div>

             <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90 drop-shadow-sm overflow-visible">
               {contractData.map((d) => {
                 const isHovered = hoveredContract === d.id;
                 const isFaded = hoveredContract && hoveredContract !== d.id;
                 return (
                   <circle
                     key={d.id}
                     cx="20" cy="20" r="15.91549431"
                     fill="none" 
                     stroke={d.color}
                     strokeWidth={isHovered ? "6" : "4"}
                     strokeDasharray={`${d.percentage} 100`}
                     strokeDashoffset={d.offset}
                     className="transition-all duration-300 cursor-pointer origin-center"
                     style={{ opacity: isFaded ? 0.3 : 1, pointerEvents: 'painted' }}
                     onMouseEnter={() => setHoveredContract(d.id)}
                     onMouseLeave={() => setHoveredContract(null)}
                   />
                 );
               })}
             </svg>
          </div>

          <div className="w-full space-y-2.5 mt-2">
             {contractData.map(d => (
               <div 
                  key={d.id} 
                  className={`flex items-center justify-between w-full p-1.5 rounded-lg transition-colors cursor-pointer ${hoveredContract === d.id ? 'bg-white shadow-sm' : 'hover:bg-gray-100'}`}
                  onMouseEnter={() => setHoveredContract(d.id)}
                  onMouseLeave={() => setHoveredContract(null)}
                >
                 <div className="flex items-center gap-2">
                   <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: d.color }}></div>
                   <span className="text-[10px] font-bold text-gray-600">{d.label}</span>
                 </div>
                 <span className="text-[11px] font-extrabold text-[#232127]">{d.percentage}%</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryWidget 
          title="Pending Tasks" icon={CheckCircle2} headerColor="bg-[#00B49C]" hoverColor="hover:border-[#00B49C] hover:ring-[#00B49C]"
          items={filterData([
            { title: "Pengajuan Cuti - Rina", desc: "Menunggu Persetujuan Manajer", isUrgent: true },
            { title: "Verifikasi Klaim Lembur", desc: "Dept. Operasi Tambang", isUrgent: false },
            { title: "Review Hasil MCU", desc: "Andi Saputra - Siloam", isUrgent: false },
            { title: "Persetujuan PKWT Baru", desc: "Budi Santoso - Engineer", isUrgent: true },
            { title: "Cuti Melahirkan", desc: "Siti Aminah - Finance", isUrgent: false },
            { title: "Klaim Kacamata Medis", desc: "Bambang Pamungkas", isUrgent: false },
          ])} 
        />
        <SummaryWidget 
          title="Internal Announcements" icon={Newspaper} headerColor="bg-[#DA1C5C]" hoverColor="hover:border-[#DA1C5C] hover:ring-[#DA1C5C]"
          items={filterData([
            { title: "Sosialisasi K3 Tambang", desc: "Wajib untuk seluruh tim lapangan", isUrgent: true },
            { title: "Pembaruan Fasilitas BPJS", desc: "Berlaku mulai 1 September 2026", isUrgent: false },
            { title: "Jadwal Townhall Q3", desc: "Link Zoom telah dikirim via email", isUrgent: false },
            { title: "Maintenance Server HRIS", desc: "Sabtu, 22 Ags (Pukul 01:00 - 05:00)", isUrgent: false },
            { title: "Panduan Parkir Area Barat", desc: "Perubahan jalur keluar masuk", isUrgent: false },
          ])} 
        />
        <SummaryWidget 
          title="Automated Reports" icon={FileText} headerColor="bg-[#482F92]" hoverColor="hover:border-[#482F92] hover:ring-[#482F92]"
          items={filterData([
            { title: "Rekap Kehadiran (Mingguan)", desc: "Dihasilkan sistem 2 jam lalu", isUrgent: false },
            { title: "Analisis Turnover Bulan Ini", desc: "Format PDF siap diunduh", isUrgent: false },
            { title: "Data Penggunaan Anggaran", desc: "Sinkronisasi dari tim Finance", isUrgent: false },
            { title: "Status MCU Karyawan", desc: "Update 10 Agustus 2026", isUrgent: true },
            { title: "Evaluasi Magang & Trainee", desc: "Dihasilkan otomatis kemarin", isUrgent: false },
          ])} 
        />
      </div>

      {mounted && activeModal && createPortal(
        <div className="fixed inset-0 z-[9999] bg-[#232127]/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-[2rem] w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            
            <div className="bg-[#F3F3F3] p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200 flex-shrink-0">
              <div>
                <h3 className="text-2xl font-bold text-[#482F92]" style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}>
                  Detail: {activeModal.title}
                </h3>
                <p className="text-xs text-gray-500 font-bold mt-1">Pratinjau data (menampilkan 10 baris dari total ribuan data asli)</p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" placeholder="Cari data spesifik..." className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-xs font-bold text-[#232127] outline-none focus:border-[#00B49C] focus:ring-1 focus:ring-[#00B49C] transition-all placeholder:font-normal" />
                </div>
                <button className="p-2.5 bg-white border border-gray-200 rounded-full hover:text-[#00B49C] hover:bg-green-50 text-gray-500 transition-colors shadow-sm" title="Export CSV">
                  <Download size={18} />
                </button>
                <button onClick={() => setActiveModal(null)} className="p-2.5 bg-white border border-gray-200 rounded-full hover:text-[#DA1C5C] hover:bg-red-50 text-gray-400 transition-colors shadow-sm" title="Tutup">
                  <X size={18} />
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-auto bg-white custom-scrollbar relative">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead className="sticky top-0 bg-white shadow-sm z-10">
                  <tr className="text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-200 bg-gray-50/50">
                    {activeModal.headers.map((header, idx) => (
                      <th key={idx} className={`px-6 py-4 ${idx === 3 ? 'text-right' : ''}`}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {Array.from({ length: 10 }).map((_, idx) => {
                    const row = activeModal.data[idx % activeModal.data.length];
                    return (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors group cursor-default">
                        <td className="px-6 py-4 text-xs font-bold text-[#482F92]">{row.col1}</td>
                        <td className="px-6 py-4 text-xs font-bold text-[#232127]">{row.col2}</td>
                        <td className="px-6 py-4 text-xs text-gray-500">{row.col3}</td>
                        <td className="px-6 py-4 text-right">
                          <span className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${getStatusColor(row.col4)}`}>
                            {row.col4}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-gray-200 bg-[#F3F3F3] flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
              <span className="text-xs text-gray-500 font-bold">Menampilkan 1 hingga 10 dari <span className="text-[#232127]">1,248</span> entri</span>
              <div className="flex items-center gap-1.5">
                <button className="px-3 py-2 border border-gray-200 bg-gray-100 text-gray-400 rounded-lg text-xs font-bold cursor-not-allowed">Sebelumnnya</button>
                <button className="px-3.5 py-2 bg-[#482F92] text-white rounded-lg text-xs font-bold shadow-sm">1</button>
                <button className="px-3.5 py-2 border border-gray-200 bg-white text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors">2</button>
                <button className="px-3.5 py-2 border border-gray-200 bg-white text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors">3</button>
                <span className="px-2 text-gray-400">...</span>
                <button className="px-3.5 py-2 border border-gray-200 bg-white text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors">125</button>
                <button className="px-3 py-2 border border-gray-200 bg-white text-[#482F92] rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors">Selanjutnya</button>
              </div>
            </div>

          </div>
        </div>,
        document.body
      )}

    </div>
  );
}

function SparklineCard({ title, value, trend, icon: Icon, color, sparklineData, onClick }: any) {
  return (
    <div onClick={onClick} className="relative bg-[#F3F3F3] rounded-[2rem] p-6 shadow-sm border border-gray-200 overflow-hidden group cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-gray-300 transition-all duration-300">
      <div className="relative z-10 flex justify-between items-start mb-2">
        <div>
          <p className="text-gray-500 font-bold text-[10px] uppercase tracking-wider mb-1 line-clamp-1">{title}</p>
          <h3 className="text-3xl font-extrabold text-[#232127] leading-none">{value}</h3>
        </div>
        <div className="p-3 rounded-2xl bg-white shadow-sm text-white transition-transform duration-300 group-hover:rotate-12" style={{ color: color }}>
          <Icon size={20} />
        </div>
      </div>
      <p className="relative z-10 text-[11px] font-bold mt-4" style={{ color: color }}>{trend}</p>
      
      <svg className="absolute bottom-0 right-0 w-32 h-16 opacity-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-20" viewBox="0 0 70 50" preserveAspectRatio="none">
        <path d={sparklineData} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function SummaryWidget({ title, icon: Icon, headerColor, hoverColor, items }: any) {
  return (
    <div className={`bg-[#F3F3F3] rounded-[2rem] p-6 shadow-sm border border-gray-200 flex flex-col h-full`}>
      <div className="flex items-center space-x-3 mb-4">
        <div className={`p-2.5 rounded-xl text-white shadow-sm ${headerColor}`}><Icon size={18} /></div>
        <h3 className="text-base font-bold text-[#232127]">{title}</h3>
      </div>
      
      <div className="flex-1 space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar p-2 pt-3 -mx-2">
        {items.length > 0 ? items.map((item: any, idx: number) => (
          <div key={idx} className={`group flex items-center justify-between p-3.5 rounded-xl bg-white border border-gray-100 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-md hover:ring-1 ${hoverColor} mx-2`}>
            <div className="min-w-0 pr-4">
              <p className="text-[13px] font-bold text-[#232127] truncate mb-0.5">{item.title}</p>
              <p className="text-[10px] text-gray-500 truncate">{item.desc}</p>
            </div>
            {item.isUrgent ? (
              <span className="w-2.5 h-2.5 rounded-full bg-[#DA1C5C] shadow-[0_0_8px_rgba(218,28,92,0.6)] animate-pulse flex-shrink-0"></span>
            ) : (
              <ChevronRight size={16} className="text-gray-300 group-hover:text-[#232127] transition-colors flex-shrink-0" />
            )}
          </div>
        )) : <p className="text-center text-xs font-bold text-gray-400 py-4">Data tidak ditemukan.</p>}
      </div>
      
      <button className="w-full mt-4 py-2.5 text-[11px] font-bold text-gray-500 border border-gray-200 bg-white hover:text-[#232127] hover:bg-gray-50 rounded-xl transition-all shadow-sm active:scale-95">
        Lihat Semua
      </button>
    </div>
  );
}