"use client";
import React from 'react';
import { Crown, Trophy, LayoutDashboard, GraduationCap, Book, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function GlobalHomePage() {
  const router = useRouter();

  const mainButtons = [
    { title: "رواق المعلمات", icon: <GraduationCap size={32} />, path: "/teachers", desc: "نخبة الصفوة لتعليمكِ" },
    { title: "ديوان التحديات", icon: <Trophy size={32} />, path: "/challenges", desc: "اختبري مهاراتكِ الملكية" },
    { title: "لوحة التحكم", icon: <LayoutDashboard size={32} />, path: "/dashboard", desc: "تابعي تقدمكِ يا نوف" },
    { title: "ديوان القرآن", icon: <Book size={32} />, path: "/quran", desc: "بركة الأكاديمية ونورها" },
  ];

  return (
    <div className="min-h-screen bg-[#000814] text-white" style={{ background: 'radial-gradient(circle, #001d3d 0%, #000814 100%)' }}>
      {/* Top Bar / Header */}
      <div className="p-6 flex justify-between items-center border-b border-amber-500/20">
        <div className="flex items-center gap-2">
          <Crown className="text-[#ffc300]" />
          <span className="font-black italic text-xl tracking-tighter">YALLA MASRY</span>
        </div>
        <button 
          onClick={() => router.push('/login')}
          className="flex items-center gap-2 bg-white/5 px-6 py-2 rounded-full border border-amber-500/30 hover:bg-amber-500 hover:text-black transition-all"
        >
          <LogIn size={18} />
          <span>تسجيل الدخول</span>
        </button>
      </div>

      {/* Main Hero Section */}
      <div className="max-w-6xl mx-auto pt-20 pb-12 px-6 text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-black italic">الأكاديمية الرسمية</h1>
        <p className="text-amber-500 text-2xl font-bold italic tracking-widest">فخامة المحروسة في منزلكِ</p>
      </div>

      {/* Grid of Sections (The System) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-20">
        {mainButtons.map((btn, index) => (
          <div 
            key={index}
            onClick={() => router.push(btn.path)}
            className="group cursor-pointer bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:border-[#ffc300] transition-all relative overflow-hidden"
          >
            <div className="relative z-10 flex items-center gap-6">
              <div className="p-4 bg-amber-500/10 rounded-2xl text-[#ffc300] group-hover:bg-[#ffc300] group-hover:text-black transition-all">
                {btn.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black italic">{btn.title}</h3>
                <p className="text-slate-400 italic mt-1">{btn.desc}</p>
              </div>
            </div>
            <Crown className="absolute -bottom-6 -right-6 text-white/5 opacity-0 group-hover:opacity-100 transition-all" size={100} />
          </div>
        ))}
      </div>
    </div>
  );
}
