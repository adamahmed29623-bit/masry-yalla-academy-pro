"use client";
import React from 'react';
import { Crown, Trophy, LayoutDashboard, GraduationCap, LogIn, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function GlobalHomePage() {
  const router = useRouter();

  // مصفوفة الأقسام الرئيسية للأكاديمية
  const academySections = [
    { title: "رواق المعلمات", icon: <GraduationCap size={32} />, path: "/teachers", desc: "نخبة الصفوة لتعليمكِ" },
    { title: "ديوان التحديات", icon: <Trophy size={32} />, path: "/challenges", desc: "اختبري مهاراتكِ الملكية" },
    { title: "لوحة التحكم", icon: <LayoutDashboard size={32} />, path: "/dashboard", desc: "تابعي تقدمكِ يا سمو الأميرة" },
    { title: "سجل الدخول", icon: <LogIn size={32} />, path: "/login", desc: "الدخول لمنطقة العضوية" },
  ];

  return (
    <div className="min-h-screen text-white" style={{ background: 'radial-gradient(circle, #001d3d 0%, #000814 100%)' }}>
      
      {/* شريط الأدوات العلوي */}
      <div className="p-6 flex justify-between items-center border-b border-amber-500/20 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Crown className="text-[#ffc300]" size={28} />
          <span className="font-black italic text-2xl tracking-tighter text-[#ffc300]">أكاديمية يلا مصري</span>
        </div>
        <div className="flex gap-4">
           <Sparkles className="text-amber-500/40 animate-pulse" />
        </div>
      </div>

      {/* عنوان الأكاديمية الرئيسي */}
      <div className="max-w-6xl mx-auto pt-24 pb-16 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black italic mb-6">الديوان الرسمي</h1>
        <p className="text-[#ffc300] text-2xl font-bold italic tracking-[0.2em]">بوابة الرقي والجمال المصري</p>
      </div>

      {/* شبكة الأقسام (النظام) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-24">
        {academySections.map((section, index) => (
          <div 
            key={index}
            onClick={() => router.push(section.path)}
            className="group cursor-pointer bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:border-[#ffc300] transition-all relative overflow-hidden shadow-2xl backdrop-blur-sm"
          >
            <div className="relative z-10 flex items-center gap-8">
              <div className="p-5 bg-amber-500/10 rounded-2xl text-[#ffc300] group-hover:bg-[#ffc300] group-hover:text-black transition-all">
                {section.icon}
              </div>
              <div>
                <h3 className="text-3xl font-black italic">{section.title}</h3>
                <p className="text-slate-400 italic mt-2 text-lg">{section.desc}</p>
              </div>
            </div>
            {/* زخرفة ملكية خلفية تظهر عند التمرير */}
            <Crown className="absolute -bottom-10 -right-10 text-white/5 opacity-0 group-hover:opacity-10 transition-all duration-500" size={150} />
          </div>
        ))}
      </div>
    </div>
  );
}
