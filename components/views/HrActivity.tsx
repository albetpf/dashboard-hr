'use client';

import {
  Activity,
  HeartPulse,
  GraduationCap,
  CheckCircle,
  XCircle,
  ChevronRight,
  Calendar,
  UserCheck,
  FileSignature,
  Download,
  CheckCircle2,
} from 'lucide-react';

export default function HrActivity({ searchQuery = '' }: any) {
  const filterData = (data: any[]) =>
    data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

  const pendingApprovals = [
    {
      id: 'REQ-019',
      type: 'Pengajuan Cuti',
      emp: 'Rina Melati',
      desc: 'Cuti Tahunan (3 Hari)',
      time: '2 jam lalu',
      urgent: true,
    },
    {
      id: 'REQ-020',
      type: 'Klaim Lembur',
      emp: 'Ahmad Fauzi',
      desc: 'Lembur Akhir Pekan (5 Jam)',
      time: '5 jam lalu',
      urgent: false,
    },
    {
      id: 'REQ-021',
      type: 'Anggaran Pelatihan',
      emp: 'Budi Santoso',
      desc: 'Sertifikasi K3 (HSEC)',
      time: '1 hari lalu',
      urgent: false,
    },
    {
      id: 'REQ-022',
      type: 'Pengajuan Cuti',
      emp: 'Siti Aminah',
      desc: 'Cuti Sakit',
      time: '1 hari lalu',
      urgent: true,
    },
    {
      id: 'REQ-023',
      type: 'Reimburse Medis',
      emp: 'Joko Susanto',
      desc: 'Klaim Kacamata',
      time: '2 hari lalu',
      urgent: false,
    },
  ];

  const contractAlerts = [
    {
      name: 'Dewi Lestari',
      type: 'Masa Percobaan',
      endDate: '20 Agu 2026',
      daysLeft: 7,
    },
    {
      name: 'Rizky Pratama',
      type: 'PKWT (Kontrak)',
      endDate: '30 Agu 2026',
      daysLeft: 17,
    },
    {
      name: 'Bambang Pamungkas',
      type: 'PKWT (Kontrak)',
      endDate: '15 Sep 2026',
      daysLeft: 33,
    },
    {
      name: 'Siti Hawa',
      type: 'PKWT (Kontrak)',
      endDate: '28 Sep 2026',
      daysLeft: 46,
    },
    {
      name: 'Fajar Nugraha',
      type: 'Magang',
      endDate: '05 Okt 2026',
      daysLeft: 53,
    },
  ];

  const mcuSchedules = [
    {
      id: 'MCU-102',
      name: 'Joko Susanto',
      date: '15 Agu 2026',
      hospital: 'Siloam Hospital',
      type: 'MCU Tahunan',
      status: 'Dijadwalkan',
    },
    {
      id: 'MCU-103',
      name: 'Siti Aminah',
      date: '16 Agu 2026',
      hospital: 'RS Pertamina',
      type: 'Pra-Kerja',
      status: 'Dijadwalkan',
    },
    {
      id: 'MCU-101',
      name: 'Andi Saputra',
      date: '10 Agu 2026',
      hospital: 'RS Pertamina',
      type: 'MCU Tahunan',
      status: 'Hasil Siap',
    },
    {
      id: 'MCU-104',
      name: 'Rina Melati',
      date: '18 Agu 2026',
      hospital: 'Klinik Medika',
      type: 'Pasca Sakit',
      status: 'Dijadwalkan',
    },
    {
      id: 'MCU-105',
      name: 'Budi Santoso',
      date: '20 Agu 2026',
      hospital: 'Siloam Hospital',
      type: 'MCU Khusus',
      status: 'Menunggu',
    },
  ];

  const academicPrograms = [
    {
      name: 'Andi Wijaya',
      inst: 'Univ. Mulawarman',
      type: 'Permagangan',
      dept: 'IT Support',
      end: '30 Sep 2026',
      progress: '80%',
      color: 'text-[#00AEEF]',
      bg: 'bg-[#00AEEF]',
    },
    {
      name: 'Putri Larasati',
      inst: 'SMKN 1 Balikpapan',
      type: 'PKL',
      dept: 'Administrasi',
      end: '15 Okt 2026',
      progress: '45%',
      color: 'text-[#482F92]',
      bg: 'bg-[#482F92]',
    },
    {
      name: 'Bima Arya',
      inst: 'ITB',
      type: 'Beasiswa',
      dept: 'Teknik Tambang',
      end: 'Des 2027',
      progress: 'Aktif',
      color: 'text-[#00B49C]',
      bg: 'bg-[#00B49C]',
    },
    {
      name: 'Reza Rahadian',
      inst: 'UGM',
      type: 'Management Trainee',
      dept: 'Operasional',
      end: '31 Des 2026',
      progress: '60%',
      color: 'text-[#EAB308]',
      bg: 'bg-[#EAB308]',
    },
  ];

  const handleViewAll = (moduleName: string) =>
    alert(`Membuka Halaman Detail: ${moduleName}`);

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500 pb-10 mt-4 md:mt-0">
      <div className="bg-[#F3F3F3] rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div className="flex items-center space-x-4">
          <div className="p-3.5 bg-[#482F92] rounded-xl text-white shadow-md">
            <Activity size={24} />
          </div>
          <div>
            <h2
              className="text-2xl font-bold text-[#232127]"
              style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}
            >
              Dasbor Aktivitas HR
            </h2>
            <p className="text-gray-500 text-sm mt-0.5">
              Pusat komando operasional, persetujuan, dan pengingat harian HR.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="w-full bg-[#F3F3F3] rounded-[2rem] p-7 shadow-xl shadow-[#DA1C5C]/15 border border-gray-200 border-t-8 border-t-[#DA1C5C] flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-[#DA1C5C] text-white shadow-sm">
                <HeartPulse size={20} />
              </div>
              <h3
                className="text-xl font-bold text-[#232127]"
                style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}
              >
                Medical Check Up
              </h3>
            </div>
            <button
              onClick={() => handleViewAll('Jadwal MCU Lengkap')}
              className="text-xs md:text-sm font-bold text-[#DA1C5C] hover:underline active:scale-95 transition-transform flex items-center"
            >
              Kelola Jadwal <ChevronRight size={14} />
            </button>
          </div>

          <div className="flex space-x-4 overflow-x-auto custom-scrollbar pb-3 pt-2 px-2 -mx-2">
            {filterData(mcuSchedules).map((mcu, index) => (
              <div
                key={index}
                className="w-[260px] h-[190px] flex-shrink-0 group flex flex-col justify-between p-5 rounded-xl bg-white transition-all duration-300 cursor-pointer border border-gray-200 hover:border-[#DA1C5C] hover:ring-1 hover:ring-[#DA1C5C] hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start space-x-4 min-w-0 mb-4">
                  <div className="mt-0.5 text-gray-400 group-hover:text-[#DA1C5C] transition-colors">
                    <Calendar size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#232127] truncate group-hover:text-[#DA1C5C]">
                      {mcu.name}
                    </p>
                    <p className="text-[11px] font-bold text-gray-600 mt-1">
                      {mcu.type}
                    </p>
                    <p className="text-[11px] font-bold text-gray-500 mt-0.5 truncate">
                      {mcu.date} • {mcu.hospital}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto group-hover:border-gray-200 transition-colors">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${
                      mcu.status === 'Dijadwalkan'
                        ? 'bg-white text-[#00AEEF] border-[#00AEEF]/30'
                        : mcu.status === 'Menunggu'
                        ? 'bg-white text-[#EAB308] border-[#EAB308]/30'
                        : 'bg-[#00B49C] text-white border-transparent'
                    }`}
                  >
                    {mcu.status}
                  </span>
                  {mcu.status === 'Hasil Siap' && (
                    <span className="text-[10px] font-bold text-[#00B49C] flex items-center hover:underline active:scale-95 transition-all bg-[#F3F3F3] px-2 py-1 rounded-md">
                      <Download size={12} className="mr-1" /> PDF
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-[#F3F3F3] rounded-[2rem] p-7 shadow-xl shadow-[#00AEEF]/15 border border-gray-200 border-t-8 border-t-[#00AEEF] flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-[#00AEEF] text-white shadow-sm">
                <GraduationCap size={20} />
              </div>
              <h3
                className="text-xl font-bold text-[#232127]"
                style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}
              >
                Training
              </h3>
            </div>
            <button
              onClick={() => handleViewAll('Manajemen Peserta Akademik')}
              className="text-xs md:text-sm font-bold text-[#00AEEF] hover:underline flex items-center active:scale-95 transition-transform"
            >
              <span>Kelola Data</span> <ChevronRight size={14} />
            </button>
          </div>

          <div className="flex space-x-4 overflow-x-auto custom-scrollbar pb-3 pt-2 px-2 -mx-2">
            {filterData(academicPrograms).map((prog, index) => (
              <div
                key={index}
                className="w-[260px] h-[190px] flex-shrink-0 group flex flex-col justify-between p-5 rounded-xl bg-white transition-all duration-300 cursor-pointer border border-gray-200 hover:border-[#00AEEF] hover:ring-1 hover:ring-[#00AEEF] hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start space-x-4 min-w-0 mb-4">
                  <div className={`mt-0.5 ${prog.color} transition-colors`}>
                    <UserCheck size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#232127] truncate group-hover:text-[#00AEEF]">
                      {prog.name}
                    </p>
                    <p className="text-[11px] font-bold text-gray-600 mt-1 truncate">
                      {prog.type} • {prog.dept}
                    </p>
                    <p className="text-[11px] font-bold text-gray-500 mt-0.5 truncate">
                      {prog.inst}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col border-t border-gray-100 pt-3 mt-auto group-hover:border-gray-200 transition-colors">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border bg-white ${prog.color}`}
                      style={{ borderColor: 'currentColor' }}
                    >
                      {prog.progress === 'Aktif'
                        ? 'Status: Aktif'
                        : `Progres: ${prog.progress}`}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 truncate ml-2">
                      {prog.end}
                    </span>
                  </div>

                  {prog.progress !== 'Aktif' ? (
                    <div className="w-full bg-[#F3F3F3] rounded-full h-1.5 mt-3 overflow-hidden shadow-inner">
                      <div
                        className={`h-1.5 rounded-full ${prog.bg}`}
                        style={{ width: prog.progress }}
                      ></div>
                    </div>
                  ) : (
                    <div className="w-full h-1.5 mt-3"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 bg-[#F3F3F3] rounded-[2rem] p-7 shadow-xl shadow-[#00B49C]/15 border border-gray-200 border-t-8 border-t-[#00B49C] flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-[#00B49C] text-white shadow-sm">
                <CheckCircle2 size={20} />
              </div>
              <h3
                className="text-xl font-bold text-[#232127]"
                style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}
              >
                Perlu Tindakan
              </h3>
            </div>
            <span className="bg-white text-[#00B49C] font-bold text-xs px-3 py-1.5 rounded-full border border-[#00B49C]/30 shadow-sm">
              {filterData(pendingApprovals).length} Menunggu
            </span>
          </div>

          <div className="space-y-3 max-h-[380px] overflow-y-auto custom-scrollbar p-2 pt-3 -mx-2">
            {filterData(pendingApprovals).length > 0 ? (
              filterData(pendingApprovals).map((req, index) => (
                <div
                  key={index}
                  className="group flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-white transition-all duration-300 cursor-pointer border border-gray-200 hover:border-[#00B49C] hover:ring-1 hover:ring-[#00B49C] hover:-translate-y-1 hover:shadow-md mx-2"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-[10px] font-bold text-[#482F92]">
                        {req.id}
                      </span>
                      <span className="text-[10px] text-gray-400">•</span>
                      <p className="text-sm font-bold text-[#232127] truncate group-hover:text-[#00B49C]">
                        {req.type}
                      </p>
                      {req.urgent && (
                        <span className="bg-[#DA1C5C] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase animate-pulse shadow-sm">
                          Mendesak
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-bold text-gray-500 truncate">
                      {req.emp} — {req.desc}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 flex-shrink-0 mt-3 md:mt-0">
                    <button className="flex items-center space-x-1 bg-[#F3F3F3] hover:bg-red-50 text-[#DA1C5C] border border-gray-200 hover:border-[#DA1C5C] px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-90">
                      <XCircle size={16} />{' '}
                      <span className="hidden sm:inline">Tolak</span>
                    </button>
                    <button className="flex items-center space-x-1 bg-[#00B49C] hover:bg-[#009c87] text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm active:scale-90">
                      <CheckCircle size={16} />{' '}
                      <span className="hidden sm:inline">Setujui</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-sm font-bold text-gray-400 mt-10">
                Tugas tidak ditemukan.
              </p>
            )}
          </div>
          <button
            onClick={() => handleViewAll('Semua Log Persetujuan')}
            className="w-full mt-4 py-2.5 rounded-xl font-bold text-sm text-[#00B49C] bg-white border border-gray-200 hover:bg-gray-50 transition-all shadow-sm active:scale-95"
          >
            Lihat Semua Antrean Persetujuan &rarr;
          </button>
        </div>

        <div className="lg:col-span-1 bg-[#F3F3F3] rounded-[2rem] p-7 shadow-xl shadow-[#EAB308]/15 border border-gray-200 border-t-8 border-t-[#EAB308] flex flex-col">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[#EAB308] text-white shadow-sm">
              <FileSignature size={20} />
            </div>
            <h3
              className="text-xl font-bold text-[#232127]"
              style={{ fontFamily: '"Cordia New", Banpu, Arial, sans-serif' }}
            >
              Pemantau Kontrak
            </h3>
          </div>

          <div className="space-y-3 max-h-[380px] overflow-y-auto custom-scrollbar p-2 pt-3 -mx-2">
            {filterData(contractAlerts).length > 0 ? (
              filterData(contractAlerts).map((alert, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl bg-white transition-all duration-300 cursor-pointer border border-gray-200 hover:border-[#EAB308] hover:ring-1 hover:ring-[#EAB308] hover:-translate-y-1 hover:shadow-md relative overflow-hidden flex flex-col mx-2"
                >
                  <div
                    className={`absolute top-0 left-0 w-1.5 h-full transition-colors ${
                      alert.daysLeft <= 10 ? 'bg-[#DA1C5C]' : 'bg-[#EAB308]'
                    }`}
                  ></div>

                  <div className="pl-3 w-full">
                    <div className="flex justify-between items-start mb-1 gap-2">
                      <h4 className="text-sm font-bold text-[#232127] truncate group-hover:text-[#EAB308]">
                        {alert.name}
                      </h4>
                      <span
                        className={`text-[10px] font-bold px-2 py-1 rounded-md flex-shrink-0 ${
                          alert.daysLeft <= 10
                            ? 'bg-[#DA1C5C]/10 text-[#DA1C5C]'
                            : 'bg-[#EAB308]/10 text-[#EAB308]'
                        }`}
                      >
                        {alert.daysLeft} Hari Lagi
                      </span>
                    </div>
                    <p className="text-[11px] font-bold text-gray-500">
                      {alert.type}
                    </p>

                    <div className="flex items-center mt-3 pt-3 border-t border-gray-100 group-hover:border-gray-200 transition-colors">
                      <Calendar size={12} className="text-gray-400 mr-1.5" />
                      <span className="text-[10px] text-gray-400 font-bold">
                        Berakhir pada: {alert.endDate}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-sm font-bold text-gray-400 mt-10">
                Kontrak tidak ditemukan.
              </p>
            )}
          </div>
          <button
            onClick={() => handleViewAll('Data Seluruh Kontrak')}
            className="w-full mt-4 py-2.5 rounded-xl font-bold text-sm text-[#232127] bg-white border border-gray-200 hover:bg-gray-50 hover:shadow-sm active:scale-95 transition-all mt-auto"
          >
            Lihat Semua Kontrak
          </button>
        </div>
      </div>
    </div>
  );
}
