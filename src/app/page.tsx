"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function GlobalHomePage() {
  const router = useRouter();

  // أيقونات SVG ملكية مدمجة (لا تحتاج لمكتبات)
  const CrownIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/></svg>
  );

  const TrophyIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
  );

  const DashboardIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="15" rx="1"/></svg>
  );

  const sections = [
    { title: "رواق المعلمات", icon: <CrownIcon />, path: "/teachers", desc: "نخبة الصفوة لتعليمكِ" },
    { title: "ديوان التحديات", icon: <TrophyIcon />, path: "/challenges", desc: "اختبري مهاراتكِ الملكية" },
    { title: "لوحة التحكم", icon: <DashboardIcon />, path: "/dashboard", desc: "تابعي تقدمكِ يا سمو الأميرة" }
  ];

  return (
    <div className="min-h-screen text-white" style={{ background: 'radial-gradient(circle, #001d3d 0%, #000814 100%)', direction: 'rtl' }}>
      <div className="p-8 flex justify-between items-center border-b border-amber-500/20">
        <div className="flex items-center gap-3 text-[#ffc300]">
          <CrownIcon />
          <span className="font-black text-2xl italic">أكاديمية يلا مصري</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-24 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-black italic mb-4">الديوان الملكي</h1>
        <p className="text-[#ffc300] text-2xl font-bold tracking-widest mb-16 italic">حيث يبدأ رقي "نوف"</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((sec, i) => (
            <div 
              key={i} 
              onClick={() => router.push(sec.path)}
              className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:border-[#ffc300] transition-all cursor-pointer group"
            >
              <div className="text-[#ffc300] mb-6 flex justify-center group-hover:scale-110 transition-transform">{sec.icon}</div>
              <h3 className="text-2xl font-black mb-2 italic">{sec.title}</h3>
              <p className="text-slate-400 italic">{sec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
