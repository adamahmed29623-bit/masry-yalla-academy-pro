"use client";
import React, { useState } from 'react';
import { Crown, Star, BookOpen, Trophy, ShoppingBag, Flame, ChevronRight, Award, Sparkles, UserCircle } from 'lucide-react';

export default function RoyalDashboard() {
  // تعريف واحد فقط لكل قيمة لضمان عدم حدوث خطأ
  const [points] = useState(2450);
  const userTitle = "نفرتاري"; 
  const currentRank = "مرشدة ملكية";

  const badges = [
    { name: "فرعونة صغيرة", status: "unlocked", icon: "🌱" },
    { name: "مرشدة ملكية", status: "active", icon: "📜" },
    { name: "وصيفة", status: "locked", icon: "🏺" },
    { name: "ملكة", status: "locked", icon: "👑" }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white p-4 md:p-10">
      {/* الجزء العلوي: الترحيب والرسالة الملكية */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-[3rem] p-8 flex flex-col md:flex-row items-center gap-8 backdrop-blur-md">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-amber-500 p-1">
               <div className="w-full h-full rounded-full bg-gradient-to-b from-amber-500/20 to-transparent flex items-center justify-center">
                  <UserCircle size={60} className="text-amber-500" />
               </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-amber-500 text-black p-2 rounded-full shadow-lg">
              <Crown size={16} />
            </div>
          </div>
          <div className="text-center md:text-right">
            <h1 className="text-3xl md:text-4xl font-black italic">أهلاً بكِ، يا سمو الأميرة <span className="text-amber-500">{userTitle}</span></h1>
            <p className="text-slate-400 mt-2 font-medium italic flex items-center justify-center md:justify-start gap-2">
              <Sparkles size={16} className="text-amber-500" /> أنتِ الآن برتبة: {currentRank}
            </p>
          </div>
        </div>

        <div className="bg-amber-500 text-black rounded-[3rem] p-6 flex flex-col justify-center items-center text-center shadow-xl">
          <p className="font-black italic text-sm mb-2 uppercase tracking-widest">رسالة اليوم</p>
          <p className="font-bold text-xs italic">"فصاحتكِ يا {userTitle} هي مفتاح القلوب، استمري!"</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* شريط الترقي الفرعوني */}
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-sm">
            <h2 className="text-xl font-black italic mb-10 flex items-center gap-3 text-amber-500">
              <Award size={24} /> مسار الترقي الفرعوني
            </h2>
            <div className="flex justify-between items-center relative mb-12">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2"></div>
              {badges.map((badge, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-xl ${badge.status === 'locked' ? 'bg-slate-800' : 'bg-amber-500 text-black'}`}>
                    {badge.icon}
                  </div>
                  <p className="text-[10px] mt-3 font-black text-slate-400 uppercase tracking-tighter text-center">{badge.name}</p>
                </div>
              ))}
            </div>

            {/* الدروس الحالية والسابقة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
               <div className="bg-white/5 p-6 rounded-[2rem] border-r-4 border-amber-500">
                  <p className="text-[10px] font-black text-amber-500 mb-2 uppercase">الدرس الحالي</p>
                  <h4 className="font-bold italic text-lg mb-4">فن المديح والترحيب المصري</h4>
                  <button className="text-xs bg-amber-500 text-black px-6 py-2 rounded-full font-black hover:scale-105 transition-all">مواصلة</button>
               </div>
               <div className="bg-white/5 p-6 rounded-[2rem] opacity-50">
                  <p className="text-[10px] font-black text-slate-500 mb-2 uppercase">آخر مكتمل</p>
                  <h4 className="font-bold italic text-lg mb-4">مخارج الحروف</h4>
                  <button className="text-xs border border-white/20 px-6 py-2 rounded-full font-black">مراجعة</button>
               </div>
            </div>
          </div>
        </div>

        {/* العمود الجانبي: النقاط والمتجر */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-black rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <p className="font-black uppercase tracking-widest text-[10px] opacity-70">رصيدك الملكي</p>
                <h3 className="text-6xl font-black italic my-2">{points}</h3>
                <p className="font-bold italic text-xs">نقطة رقي</p>
             </div>
             <Flame className="absolute -bottom-4 -right-4 opacity-10" size={120} />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 backdrop-blur-xl">
             <h2 className="text-xl font-black italic mb-6 flex items-center gap-2 text-amber-500">
                <ShoppingBag size={20} /> المقايضة الملكية
             </h2>
             <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center">
                   <div>
                      <p className="font-bold text-sm">وشاح الأكاديمية</p>
                      <p className="text-[10px] text-amber-500">١٥٠٠ نقطة</p>
                   </div>
                   <button className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black hover:bg-amber-500 transition-all">استبدال</button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
