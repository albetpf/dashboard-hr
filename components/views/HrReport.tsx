'use client';

import { useState } from 'react';
import {
  FileText,
  UserPlus,
  Presentation,
  Users,
  Clock,
  Download,
  Filter,
  BarChart,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  FileSpreadsheet,
  CheckCircle2,
} from 'lucide-react';

export default function HrReport({ searchQuery = '' }: any) {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedDept, setSelectedDept] = useState('Semua Departemen');

  const filterData = (data: any[]) =>
    data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

  const departments = [
    'Semua Departemen',
    'Operasi Tambang',
    'HSEC',
    'Human Resources',
    'Finance',
    'IT Support',
    'Eksplorasi',
    'Teknik & Sipil',
  ];

  const recruitmentData = [
    { role: 'Mining Engineer', dept: 'Operasi Tambang', target: 5, applied: 142, interviewed: 12, hired: 2, status: 'Berjalan' },
    { role: 'HSEC Officer', dept: 'HSEC', target: 2, applied: 56, interviewed: 5, hired: 2, status: 'Terpenuhi' },
    { role: 'HR Staff', dept: 'Human Resources', target: 1, applied: 89, interviewed: 8, hired: 0, status: 'Berjalan' },
    { role: 'Finance Analyst', dept: 'Finance', target: 2, applied: 120, interviewed: 15, hired: 1, status: 'Berjalan' },
    { role: 'IT Network Engineer', dept: 'IT Support', target: 1, applied: 45, interviewed: 3, hired: 1, status: 'Terpenuhi' },
    { role: 'Geologist', dept: 'Eksplorasi', target: 3, applied: 67, interviewed: 9, hired: 1, status: 'Berjalan' },
  ];

  const mppData = [
    { dept: 'Operasi Tambang', quota: 500, actual: 450, color: 'bg-[#482F92]', text: 'text-[#482F92]' },
    { dept: 'HSEC', quota: 260, actual: 250, color: 'bg-[#00AEEF]', text: 'text-[#00AEEF]' },
    { dept: 'Teknik & Sipil', quota: 150, actual: 150, color: 'bg-[#00B49C]', text: 'text-[#00B49C]' },
    { dept: 'Human Resources', quota: 50, actual: 45, color: 'bg-[#DA1C5C]', text: 'text-[#DA1C5C]' },
    { dept: 'Finance', quota: 50, actual: 40, color: 'bg-[#00AEEF]', text: 'text-[#00AEEF]' },
    { dept: 'IT Support', quota: 45, actual: 40, color: 'bg-[#482F92]', text: 'text-[#482F92]' },
  ];

  const overtimeData = [
    { dept: 'Operasi Tambang', hours: '1,240 Jam', trend: 'up', percentage: '+12%', cost: 'Rp 45.2M' },
    { dept: 'Teknik & Sipil', hours: '450 Jam', trend: 'down', percentage: '-5%', cost: 'Rp 15.8M' },
    { dept: 'Human Resources', hours: '120 Jam', trend: 'up', percentage: '+2%', cost: 'Rp 4.5M' },
    { dept: 'HSEC', hours: '210 Jam', trend: 'down', percentage: '-8%', cost: 'Rp 7.1M' },
  ];

  const trainingReports = [
    { title: 'Sertifikasi K3 Umum (Batch 2)', date: '10 Agu 2026', participants: 25, size: '1.2 MB', dept: 'HSEC' },
    { title: 'Keterampilan Kepemimpinan & Manajemen', date: '05 Agu 2026', participants: 15, size: '2.4 MB', dept: 'Semua Departemen' },
    { title: 'Pelatihan Perangkat Lunak Tambang', date: '28 Jul 2026', participants: 10, size: '850 KB', dept: 'Operasi Tambang' },
    { title: 'Penyegaran SOP Keamanan Operasional', date: '15 Jul 2026', participants: 45, size: '3.1 MB', dept: 'Operasi Tambang' },
    { title: 'Training Dasar ISO 9001:2015', date: '02 Jul 2026', participants: 30, size: '1.8 MB', dept: 'Semua Departemen' },
    { title: 'Pelatihan Tanggap Darurat Bencana', date: '20 Jun 2026', participants: 50, size: '4.2 MB', dept: 'HSEC' },
    { title: 'Workshop Analisa Data HRIS', date: '12 Jun 2026', participants: 8, size: '900 KB', dept: 'Human Resources' },
    { title: 'Seminar Pajak Keuangan', date: '05 Jun 2026', participants: 12, size: '1.5 MB', dept: 'Finance' },
  ];

  // DATA DUMMY BARU: Riwayat Ekspor Data CSV
  const recentExports = [
    { name: "Data_KPI_Q2_2026.csv", size: "2.4 MB", date: "15 Agu 2026", type: "CSV" },
    { name: "Aset_Karyawan_Aktif.xlsx", size: "1.1 MB", date: "10 Agu 2026", type: "Excel" },
    { name: "Demografi_Q1-Q2.csv", size: "3.8 MB", date: "01 Agu 2026", type: "CSV" },
    { name: "Rekap_Lembur_Juli.csv", size: "950 KB", date: "05 Agu 2026", type: "CSV" },
    { name: "Data_MCU_Tahunan.xlsx", size: "5.2 MB", date: "28 Jul 2026", type: "Excel" },
  ];

  const filteredRecruitment = filterData(selectedDept === 'Semua Departemen' ? recruitmentData : recruitmentData.filter((d) => d.dept === selectedDept));
  const filteredMpp = filterData(selectedDept === 'Semua Departemen' ? mppData : mppData.filter((d) => d.dept === selectedDept));
  const filteredOvertime = filterData(selectedDept === 'Semua Departemen' ? overtimeData : overtimeData.filter((d) => d.dept === selectedDept));
  const filteredTraining = filterData(selectedDept === 'Semua Departemen' ? trainingReports : trainingReports.filter((d) => d.dept === selectedDept || d.dept === 'Semua Departemen'));

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500 pb-12">
      <div className="bg-[#F3F3F3] rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between md:items-center gap-4 relative">
        <div className="flex items-center space-x-4">
          <div className="p-3.5 bg-[#482F92] rounded-xl text-white shadow-md">
            <BarChart size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#232127]" style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}>
              Pusat Laporan HR
            </h2>
            <p className="text-gray-500 text-sm mt-0.5">
              Menampilkan data: <strong className="text-[#482F92]">{selectedDept}</strong>
            </p>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className={`font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 flex items-center space-x-2 border ${
              showFilter ? 'bg-[#482F92] text-white border-[#482F92]' : 'bg-white text-[#482F92] border-gray-200 hover:border-[#482F92]'
            }`}
          >
            <Filter size={18} />
            <span>Filter Laporan</span>
          </button>

          {showFilter && (
            <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 animate-in slide-in-from-top-2">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Pilih Departemen</h4>
              <div className="space-y-1">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => {
                      setSelectedDept(dept);
                      setShowFilter(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-bold transition-colors ${
                      selectedDept === dept ? 'bg-[#482F92]/10 text-[#482F92]' : 'text-[#232127] hover:bg-gray-50'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="bg-[#F3F3F3] rounded-[2rem] p-7 shadow-xl shadow-[#00AEEF]/15 border border-gray-200 border-t-8 border-t-[#00AEEF] flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-[#00AEEF] text-white shadow-sm">
                <UserPlus size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#232127]" style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}>
                Recruitment
              </h3>
            </div>
            <button className="p-2.5 bg-white rounded-full text-gray-400 hover:text-[#00AEEF] shadow-sm active:scale-90 transition-all">
              <Download size={18} />
            </button>
          </div>

          <div className="space-y-4 flex-1 max-h-[380px] overflow-y-auto custom-scrollbar pr-3 py-2 px-1 -mr-2">
            {filteredRecruitment.length > 0 ? (
              filteredRecruitment.map((data, idx) => {
                const progress = (data.hired / data.target) * 100;
                return (
                  <div key={idx} className="group bg-white rounded-2xl p-5 transition-all duration-300 cursor-pointer border border-gray-200 hover:border-[#00AEEF] hover:ring-1 hover:ring-[#00AEEF] hover:-translate-y-1 hover:shadow-md">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-sm font-bold text-[#232127] group-hover:text-[#00AEEF] transition-colors">{data.role}</h4>
                        <p className="text-[11px] font-bold text-gray-500 mt-0.5">{data.dept}</p>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 ${data.status === 'Terpenuhi' ? 'bg-[#F3F3F3] text-[#00B49C] border border-[#00B49C]/30' : 'bg-[#F3F3F3] text-[#00AEEF] border border-[#00AEEF]/30'}`}>
                        {data.status === 'Terpenuhi' && <CheckCircle2 size={12} />}
                        {data.status}
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-[10px] font-bold text-gray-400 mb-1.5">
                        <span>Progres Penerimaan</span>
                        <span className={data.hired >= data.target ? 'text-[#00B49C]' : 'text-[#232127]'}>{data.hired} / {data.target} Hired</span>
                      </div>
                      <div className="w-full bg-[#F3F3F3] rounded-full h-1.5 overflow-hidden">
                        <div className={`h-1.5 rounded-full ${data.hired >= data.target ? 'bg-[#00B49C]' : 'bg-[#00AEEF]'} transition-all duration-1000`} style={{ width: `${progress}%` }}></div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-sm font-bold text-gray-400 mt-10">Data tidak tersedia untuk pencarian ini.</p>
            )}
          </div>
        </div>

        <div className="bg-[#F3F3F3] rounded-[2rem] p-7 shadow-xl shadow-[#482F92]/15 border border-gray-200 border-t-8 border-t-[#482F92] flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-[#482F92] text-white shadow-sm">
                <Users size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#232127]" style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}>
                Main Power Plan
              </h3>
            </div>
            <button className="p-2.5 bg-white rounded-full text-gray-400 hover:text-[#482F92] shadow-sm active:scale-90 transition-all">
              <Download size={18} />
            </button>
          </div>

          <div className="space-y-4 flex-1 max-h-[380px] overflow-y-auto custom-scrollbar pr-3 py-2 px-1 -mr-2">
            {filteredMpp.length > 0 ? (
              filteredMpp.map((data, idx) => {
                const percentage = Math.round((data.actual / data.quota) * 100);
                return (
                  <div key={idx} className="group bg-white rounded-2xl p-5 transition-all duration-300 cursor-pointer border border-gray-200 hover:border-[#482F92] hover:ring-1 hover:ring-[#482F92] hover:-translate-y-1 hover:shadow-md">
                    <div className="flex justify-between items-end mb-3">
                      <div>
                        <h4 className="text-sm font-bold text-[#232127] group-hover:text-[#482F92] transition-colors">{data.dept}</h4>
                        <p className="text-[11px] font-bold text-gray-500 mt-1">Terisi <span className="text-[#232127]">{data.actual}</span> dari Target <span className="text-[#232127]">{data.quota}</span></p>
                      </div>
                      <span className={`text-2xl font-bold ${data.text}`}>{percentage}%</span>
                    </div>
                    <div className="w-full bg-[#F3F3F3] rounded-full h-2 overflow-hidden shadow-inner">
                      <div className={`h-2 rounded-full ${data.color} transition-all duration-1000 ease-out`} style={{ width: `${percentage}%` }}></div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-sm font-bold text-gray-400 mt-10">Data tidak tersedia untuk pencarian ini.</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-1 bg-[#F3F3F3] rounded-[2rem] p-7 shadow-xl shadow-[#DA1C5C]/15 border border-gray-200 border-t-8 border-t-[#DA1C5C] flex flex-col h-full">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 rounded-xl bg-[#DA1C5C] text-white shadow-sm">
              <Clock size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#232127]" style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}>
              Overtime
            </h3>
          </div>
          <div className="space-y-4 flex-1 max-h-[380px] overflow-y-auto custom-scrollbar pr-2 py-2 px-1 -mr-2">
            {filteredOvertime.length > 0 ? (
              filteredOvertime.map((data, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-5 transition-all duration-300 cursor-pointer border border-gray-200 hover:border-[#DA1C5C] hover:ring-1 hover:ring-[#DA1C5C] hover:-translate-y-1 hover:shadow-md">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider group-hover:text-[#DA1C5C] transition-colors mb-3">{data.dept}</h4>
                  <div className="flex justify-between items-end">
                    <span className="text-2xl font-bold text-[#232127] leading-none">{data.hours}</span>
                    <div className={`flex items-center space-x-1 text-xs font-bold px-2 py-1 rounded-md ${data.trend === 'up' ? 'bg-[#F3F3F3] text-[#DA1C5C] border border-[#DA1C5C]/20' : 'bg-[#F3F3F3] text-[#00B49C] border border-[#00B49C]/20'}`}>
                      {data.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      <span>{data.percentage}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-[10px] font-bold group-hover:border-gray-200 transition-colors">
                    <span className="text-gray-400">Estimasi Biaya:</span>
                    <span className="text-[#232127] bg-[#F3F3F3] border border-gray-200 px-2 py-1 rounded">{data.cost}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-sm font-bold text-gray-400 mt-10">Data tidak tersedia.</p>
            )}
          </div>
        </div>

        <div className="lg:col-span-1 bg-[#F3F3F3] rounded-[2rem] p-7 shadow-xl shadow-[#00B49C]/15 border border-gray-200 border-t-8 border-t-[#00B49C] flex flex-col h-full">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 rounded-xl bg-[#00B49C] text-white shadow-sm">
              <Presentation size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#232127]" style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}>
              Training Report
            </h3>
          </div>
          <div className="space-y-4 flex-1 max-h-[380px] overflow-y-auto custom-scrollbar pr-3 py-2 px-1 -mr-2">
            {filteredTraining.length > 0 ? (
              filteredTraining.map((report, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-4 transition-all duration-300 cursor-pointer flex items-center gap-4 border border-gray-200 hover:border-[#00B49C] hover:ring-1 hover:ring-[#00B49C] hover:-translate-y-1 hover:shadow-md">
                  <div className="p-3 bg-[#F3F3F3] border border-gray-100 rounded-xl text-gray-400 group-hover:text-[#00B49C] transition-colors">
                    <FileText size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#232127] truncate group-hover:text-[#00B49C] transition-colors">{report.title}</p>
                    <div className="flex items-center space-x-2 mt-1 text-[10px] font-bold text-gray-400">
                      <span>{report.date}</span>
                      <span>•</span>
                      <span className="text-gray-500">{report.participants} Peserta</span>
                    </div>
                  </div>
                  <div className="p-2 text-gray-300 hover:text-[#00B49C] active:scale-90 transition-transform">
                    <Download size={20} />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-sm font-bold text-gray-400 mt-10">Data tidak tersedia.</p>
            )}
          </div>
        </div>

        {/* PERBAIKAN: EKSPOR DATA CSV DAN RIWAYAT */}
        <div className="lg:col-span-1 bg-[#F3F3F3] rounded-[2rem] p-7 shadow-xl shadow-[#482F92]/15 border border-gray-200 border-t-8 border-t-[#482F92] flex flex-col h-full relative overflow-hidden">
          <div className="relative z-10 flex flex-col h-full">
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 rounded-xl bg-[#482F92] text-white shadow-sm">
                <FileSpreadsheet size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#232127]" style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}>
                Ekspor Data CSV
              </h3>
            </div>
            
            <p className="text-xs text-gray-500 mb-5 leading-relaxed">
              Unduh data mentah spesifik dari sistem untuk analisis lebih lanjut.
            </p>

            {/* Bagian Form */}
            <div className="space-y-4 mb-6">
              <div>
                <select className="w-full bg-white border border-gray-200 text-xs font-bold text-[#232127] rounded-xl px-4 py-3 outline-none focus:border-[#482F92] focus:bg-white transition-all appearance-none cursor-pointer hover:shadow-sm">
                  <option>Penilaian Kinerja (KPI)</option>
                  <option>Inventaris Aset Karyawan</option>
                  <option>Demografi (Usia & Gender)</option>
                </select>
              </div>
              <div className="flex gap-2">
                <select className="w-2/3 bg-white border border-gray-200 text-xs font-bold text-[#232127] rounded-xl px-4 py-3 outline-none focus:border-[#482F92] transition-all appearance-none cursor-pointer hover:shadow-sm">
                  <option>Kuartal 3 (Juli-Sep)</option>
                  <option>Agustus 2026</option>
                  <option>Tahun 2026</option>
                </select>
                <button className="w-1/3 py-3 rounded-xl bg-[#482F92] text-white text-xs font-bold flex items-center justify-center space-x-1 shadow-md hover:bg-[#3a2575] hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
                  <Download size={14} />
                  <span>Unduh</span>
                </button>
              </div>
            </div>

            {/* Bagian Riwayat (Dummy Data) */}
            <div className="mt-auto pt-5 border-t border-gray-200">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                Riwayat Ekspor Terakhir
              </h4>
              <div className="space-y-2 max-h-[155px] overflow-y-auto custom-scrollbar pr-2 py-1 -mr-2">
                {recentExports.map((file, idx) => (
                  <div key={idx} className="group flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 hover:border-[#482F92] hover:shadow-sm cursor-pointer transition-all duration-300">
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className="text-gray-400 group-hover:text-[#482F92] transition-colors"><FileSpreadsheet size={18}/></div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#232127] truncate group-hover:text-[#482F92] transition-colors">{file.name}</p>
                        <p className="text-[9px] text-gray-400 mt-0.5 font-bold">{file.date} • {file.size}</p>
                      </div>
                    </div>
                    <div className="p-1.5 rounded-md bg-[#F3F3F3] text-gray-400 group-hover:text-[#482F92] transition-colors">
                      <Download size={12} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}