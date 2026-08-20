"use client";

import { useState, useEffect } from "react";
import { Scale, BookOpen, ClipboardList, Newspaper, ChevronRight, FileText } from "lucide-react";

export default function HrInformation({ searchQuery = "" }: any) {
  const [newsSlide, setNewsSlide] = useState(0);

  const filterData = (data: any[]) => data.filter(item => 
    Object.values(item).some(val => String(val).toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const newsList = [
    { id: 1, title: "Pembaruan Kebijakan Fasilitas Kesehatan 2026", date: "12 Ags 2026", category: "Pengumuman", urgent: true, imgUrl: "/assets/1.jpg" },
    { id: 2, title: "Undangan Pertemuan Rutin HR Q3", date: "10 Ags 2026", category: "Acara", urgent: false, imgUrl: "/assets/2.jpg" },
    { id: 3, title: "Pemeliharaan Sistem HRIS Akhir Bulan", date: "08 Ags 2026", category: "IT Support", urgent: false, imgUrl: "/assets/3.jpg" },
    { id: 4, title: "Pembukaan Pendaftaran Beasiswa Pendidikan", date: "05 Ags 2026", category: "Pendidikan", urgent: false, imgUrl: "/assets/4.jpg" },
    { id: 5, title: "Revisi Standar Gaji & Tunjangan Operasional", date: "01 Ags 2026", category: "Pengumuman", urgent: true, imgUrl: "/assets/5.jpg" },
    { id: 6, title: "Sosialisasi Keamanan Tambang Bawah Tanah", date: "28 Jul 2026", category: "HSE", urgent: false, imgUrl: "/assets/6.jpg" },
  ];

  useEffect(() => {
    const timer = setInterval(() => setNewsSlide((prev) => (prev === 0 ? 1 : 0)), 6000);
    return () => clearInterval(timer);
  }, [newsSlide]);

  const regulations = [
    { id: "REG-001", title: "Peraturan Perusahaan 2026-2028 (Revisi Final)", size: "2.4 MB" },
    { id: "REG-002", title: "Kebijakan Cuti Tahunan & Khusus", size: "1.1 MB" },
    { id: "REG-003", title: "Standar Keselamatan Kerja (HSE)", size: "3.5 MB" },
    { id: "REG-004", title: "Pedoman Disiplin Karyawan", size: "1.2 MB" },
    { id: "REG-005", title: "Prosedur Dinas Luar Kota", size: "950 KB" },
    { id: "REG-006", title: "Panduan Seragam & Penampilan", size: "1.8 MB" },
    { id: "REG-007", title: "Fasilitas Perumahan Karyawan", size: "2.1 MB" },
  ];

  const sops = [
    { id: "SOP-HR-01", title: "Proses Rekrutmen & Penerimaan Karyawan", size: "1.8 MB" },
    { id: "SOP-HR-02", title: "Pengajuan Klaim Biaya Medis", size: "900 KB" },
    { id: "SOP-HR-03", title: "Mekanisme Penilaian Kinerja (KPI)", size: "1.2 MB" },
    { id: "SOP-HR-04", title: "Prosedur Pemutusan Hubungan Kerja", size: "1.5 MB" },
    { id: "SOP-HR-05", title: "SOP Pelatihan & Sertifikasi", size: "1.1 MB" },
    { id: "SOP-HR-06", title: "Proses Promosi & Demosi", size: "850 KB" },
    { id: "SOP-HR-07", title: "Manajemen Krisis HR", size: "2.0 MB" },
  ];

  const workInstructions = [
    { id: "WI-001", title: "Cara Mengakses Slip Gaji Online", size: "500 KB" },
    { id: "WI-002", title: "Panduan Pengisian Lembar Waktu (Timesheet)", size: "750 KB" },
    { id: "WI-003", title: "Langkah-langkah Pengajuan Cuti di Portal", size: "600 KB" },
    { id: "WI-004", title: "Cara Klaim Lembur Mingguan", size: "650 KB" },
    { id: "WI-005", title: "Instruksi Pemakaian APD Tambang", size: "1.4 MB" },
    { id: "WI-006", title: "Penggunaan Aplikasi Presensi Mobile", size: "800 KB" },
    { id: "WI-007", title: "Cara Melaporkan Insiden K3", size: "950 KB" },
  ];

  const handleViewAll = (moduleName: string) => alert(`Membuka Halaman Detail untuk: ${moduleName}`);

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500 pb-10 overflow-hidden">
      
      <div className="bg-[#F3F3F3] rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-200 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="p-3.5 bg-[#DA1C5C] rounded-xl text-white shadow-md"><Newspaper size={24} /></div>
          <div>
            <h2 className="text-2xl font-bold text-[#232127]" style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}>Informasi & Pengumuman Terbaru</h2>
            <p className="text-gray-500 text-sm mt-0.5">Berita dan pembaruan penting seputar instansi perusahaan.</p>
          </div>
        </div>
        <button onClick={() => handleViewAll("Semua Berita")} className="bg-white hover:bg-gray-50 text-[#232127] border border-gray-200 text-sm font-bold px-6 py-3 rounded-full hidden md:block transition-all shadow-sm active:scale-95 hover:-translate-y-0.5">
          Lihat Semua Berita
        </button>
      </div>

      <div className="relative w-full pb-8">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${newsSlide * 100}%)` }}>
          
          {/* SLIDE 1 */}
          <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-5 px-1">
            {filterData(newsList.slice(0, 3)).map((news) => (
              <div key={news.id} className="group relative h-48 rounded-[1.5rem] overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-offset-2 hover:ring-[#DA1C5C]">
                <img src={news.imgUrl} alt={news.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 bg-gray-200" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#232127] via-[#232127]/60 to-transparent"></div>
                <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm backdrop-blur-sm bg-white/90 text-[#232127]">
                      {news.category}
                    </span>
                    {news.urgent && <span className="bg-[#DA1C5C] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase animate-pulse shadow-sm">Mendesak</span>}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gray-200 transition-colors line-clamp-2 leading-snug drop-shadow-md">{news.title}</h3>
                    <p className="text-[11px] text-gray-300 font-bold">{news.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SLIDE 2 */}
          <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-5 px-1">
            {filterData(newsList.slice(3, 6)).map((news) => (
              <div key={news.id} className="group relative h-48 rounded-[1.5rem] overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-offset-2 hover:ring-[#DA1C5C]">
                <img src={news.imgUrl} alt={news.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 bg-gray-200" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#232127] via-[#232127]/60 to-transparent"></div>
                <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm backdrop-blur-sm bg-white/90 text-[#232127]">
                      {news.category}
                    </span>
                    {news.urgent && <span className="bg-[#DA1C5C] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase animate-pulse shadow-sm">Mendesak</span>}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gray-200 transition-colors line-clamp-2 leading-snug drop-shadow-md">{news.title}</h3>
                    <p className="text-[11px] text-gray-300 font-bold">{news.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
          <button onClick={() => setNewsSlide(0)} className={`h-2 rounded-full transition-all duration-300 ${newsSlide === 0 ? "w-6 bg-[#DA1C5C]" : "w-2 bg-gray-300"}`} />
          <button onClick={() => setNewsSlide(1)} className={`h-2 rounded-full transition-all duration-300 ${newsSlide === 1 ? "w-6 bg-[#DA1C5C]" : "w-2 bg-gray-300"}`} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DocumentCard 
          title="Peraturan HR" desc="Kebijakan & Regulasi" icon={Scale} 
          headerColor="bg-[#00AEEF]" borderColor="border-t-[#00AEEF]" shadowColor="shadow-[#00AEEF]/15" 
          hoverColor="hover:border-[#00AEEF] hover:ring-[#00AEEF]" textColor="group-hover:text-[#00AEEF]" iconColor="group-hover:text-[#00AEEF]"
          data={filterData(regulations)} onViewAll={() => handleViewAll("Peraturan HR")} 
        />
        <DocumentCard 
          title="SOP" desc="Standar Operasional Prosedur" icon={BookOpen} 
          headerColor="bg-[#482F92]" borderColor="border-t-[#482F92]" shadowColor="shadow-[#482F92]/15" 
          hoverColor="hover:border-[#482F92] hover:ring-[#482F92]" textColor="group-hover:text-[#482F92]" iconColor="group-hover:text-[#482F92]"
          data={filterData(sops)} onViewAll={() => handleViewAll("SOP")} 
        />
        <DocumentCard 
          title="Instruksi Kerja" desc="Panduan Detail Operasional" icon={ClipboardList} 
          headerColor="bg-[#00B49C]" borderColor="border-t-[#00B49C]" shadowColor="shadow-[#00B49C]/15" 
          hoverColor="hover:border-[#00B49C] hover:ring-[#00B49C]" textColor="group-hover:text-[#00B49C]" iconColor="group-hover:text-[#00B49C]"
          data={filterData(workInstructions)} onViewAll={() => handleViewAll("Instruksi Kerja")} 
        />
      </div>
    </div>
  );
}

// PERBAIKAN: Komponen Download (Ikon) dihapus dari DocumentCard
function DocumentCard({ title, desc, icon: Icon, headerColor, borderColor, shadowColor, hoverColor, textColor, iconColor, data, onViewAll }: any) {
  return (
    <div className={`bg-[#F3F3F3] rounded-[2rem] p-7 shadow-xl ${shadowColor} border border-gray-200 border-t-8 ${borderColor} flex flex-col h-full`}>
      
      <div className="flex items-start space-x-4 mb-6">
        <div className={`p-3.5 rounded-2xl shadow-md text-white flex-shrink-0 ${headerColor}`}>
          <Icon size={24} />
        </div>
        <div className="flex-1 h-12 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-[#232127]" style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}>{title}</h3>
          <p className="text-xs font-bold text-gray-500 mt-0.5 line-clamp-1">{desc}</p>
        </div>
      </div>

      <div className="flex-1 space-y-3 max-h-[340px] overflow-y-auto custom-scrollbar pr-2 py-2 px-1">
        {data.length > 0 ? data.map((doc: any, index: number) => (
          <div key={index} className={`group flex items-center p-4 rounded-xl bg-white border border-gray-200 transition-all duration-300 cursor-pointer gap-3 hover:-translate-y-1 hover:shadow-md hover:ring-1 ${hoverColor}`}>
            <FileText size={18} className={`text-gray-400 flex-shrink-0 transition-colors ${iconColor}`} />
            
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-bold text-[#232127] truncate transition-colors ${textColor}`}>{doc.title}</p>
              
              <div className="flex items-center mt-1 w-full overflow-hidden">
                <span className="text-[10px] font-bold text-gray-500 whitespace-nowrap">{doc.id}</span>
                <span className="text-gray-300 text-[10px] mx-1.5 flex-shrink-0">•</span>
                <span className="text-[10px] font-bold text-gray-400 whitespace-nowrap">{doc.size}</span>
              </div>
            </div>
          </div>
        )) : <p className="text-center text-xs font-bold text-gray-400 py-6">Data tidak ditemukan.</p>}
      </div>

      <button onClick={onViewAll} className="w-full mt-6 py-3.5 rounded-xl font-bold text-sm text-[#232127] bg-white border border-gray-200 transition-all flex items-center justify-center space-x-2 hover:bg-gray-50 active:scale-95 hover:shadow-sm">
        <span>Buka Direktori Penuh</span>
        <ChevronRight size={18} />
      </button>
    </div>
  );
}