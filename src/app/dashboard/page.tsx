"use client";
import React, { useState } from 'react';
import { Crown, Star, BookOpen, Trophy, ShoppingBag, Flame, ChevronRight, Award, Sparkles, UserCircle } from 'lucide-react';

export default function RoyalDashboard() {
  // بيانات افتراضية تعكس روح الأكاديمية
  const [points, setPoints] = useState(2450);
  const userTitle = "نفرتاري"; // الاسم المستعار المختار
  const currentRank = "مرشدة ملكية"; // الرتبة الحالية

  const badges = [
    { name: "فرعونة صغيرة", status: "unlocked", icon: "🌱" },
    { name: "مرشدة ملكية", status: "active", icon: "📜" },
    { name: "وصيفة", status: "locked", icon: "🏺" },
    { name: "ملكة", status: "locked", icon: "👑" }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white p-4 md:p-10">
      {/* Header: الترحيب والأفاتار */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-[3rem] p-8 flex items-center gap-8 backdrop-blur-md">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-amber-500 p-1">
               <div className="w-full h-full rounded-full bg-gradient-to-b from-amber-500/20 to-transparent flex items-center justify-center">
                  <UserCircle size={60} className="text-amber-500" />
               </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-amber-500 text-black p-2 rounded-full">
              <Crown size={16} />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-black italic">أهلاً بكِ، يا سمو الأميرة <span className="text-amber-500">{userTitle}</span></h1>
            <p className="text-slate-400 mt-2 font-medium italic flex items-center gap-2">
              <Sparkles size={16} className="text-amber-500" /> أنتِ الآن برتبة: {currentRank}
            </p>
          </div>
        </div>

        {/* أفاتار التشجيع (الملكة حتشبسوت المصغرة) */}
        <div className="bg-amber-500 text-black rounded-[3rem] p-6 flex flex-col justify-center items-center text-center shadow-[0_20px_40px_rgba(255,195,0,0.2)]">
          <p className="font-black italic text-sm mb-2">"رسالة اليوم"</p>
          <p className="font-bold text-xs italic">"فصاحتكِ يا {userTitle} هي مفتاح القلوب، استمري!"</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* العمود الأول: الدروس والمستوى */}
        <div className="lg:col-span-2 space-y-8">
          {/* شريط التقدم والرتب */}
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10">
            <h2 className="text-xl font-black italic mb-8 flex items-center gap-3">
              <Award className="text-amber-500" /> مسار الترقي الفرعوني
            </h2>
            <div className="flex justify-between mb-12 relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0"></div>
              {badges.map((badge, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-xl transition-all ${badge.status === 'locked' ? 'bg-slate-800 grayscale' : 'bg-amber-500 scale-110 shadow-amber-500/50'}`}>
                    {badge.icon}
                  </div>
                  <p className={`text-[10px] mt-3 font-black uppercase tracking-tighter ${badge.status === 'locked' ? 'text-slate-600' : 'text-amber-500'}`}>{badge.name}</p>
                </div>
              ))}
            </div>

            {/* الدروس الحالية والسابقة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-white/5 p-6 rounded-[2rem] border-r-4 border-amber-500">
                  <p className="text-[10px] font-black text-amber-500 mb-2 uppercase">الدرس الحالي</p>
                  <h4 className="font-bold italic text-lg mb-4">فن المديح والترحيب المصري</h4>
                  <button className="text-xs bg-amber-500 text-black px-4 py-2 rounded-full font-black">مواصلة</button>
               </div>
               <div className="bg-white/5 p-6 rounded-[2rem] opacity-60">
                  <p className="text-[10px] font-black text-slate-500 mb-2 uppercase">آخر درس مكتمل</p>
                  <h4 className="font-bold italic text-lg mb-4">مخارج حروف القاف والجيم</h4>
                  <button className="text-xs border border-white/20 px-4 py-2 rounded-full font-black">مراجعة</button>
               </div>
            </div>
          </div>

          {/* ديوان التحديات السريعة */}
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10">
             <h2 className="text-xl font-black italic mb-6">تحديات بانتظارك</h2>
             <div className="space-y-4">
                {["تحدي سرعة البديهة", "اختبار الألقاب الفرعونية"].map((t, i) => (
                  <div key={i} className="flex justify-between items-center bg-white/5 p-5 rounded-2xl hover:bg-white/10 transition-all cursor-pointer">
                    <span className="font-bold italic">{t}</span>
                    <ChevronRight className="text-amber-500" />
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* العمود الثاني: النقاط والمتجر */}
        <div className="space-y-8">
          {/* حصالة النقاط */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-black rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <p className="font-black uppercase tracking-widest text-xs opacity-70">رصيدك من النقاط</p>
                <h3 className="text-6xl font-black italic my-2">{points}</h3>
                <p className="font-bold italic text-sm">تُعادل ٢٤٥ ريال في المتجر</p>
             </div>
             <Flame className="absolute -bottom-4 -right-4 opacity-20" size={120} />
          </div>

          {/* المتجر الملكي لاستبدال النقاط */}
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 backdrop-blur-xl">
             <h2 className="text-xl font-black italic mb-6 flex items-center gap-2">
                <ShoppingBag size={20} className="text-amber-500" /> المقايضة الملكية
             </h2>
             <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center">
                   <div>
                      <p className="font-bold text-sm">وشاح الأكاديمية</p>
                      <p className="text-[10px] text-amber-500">١٥٠٠ نقطة</p>
                   </div>
                   <button className="bg-white/10 px-3 py-1 rounded-lg text-[10px] font-black hover:bg-amber-500 hover:text-black transition-all">استبدال</button>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center">
                   <div>
                      <p className="font-bold text-sm">جلسة خاصة مع الأستاذة عبلة</p>
                      <p className="text-[10px] text-amber-500">٥٠٠٠ نقطة</p>
                   </div>
                   <button className="bg-white/10 px-3 py-1 rounded-lg text-[10px] font-black hover:bg-amber-500 hover:text-black transition-all">استبدال</button>
                </div>
             </div>
             <p className="text-center text-[10px] text-slate-500 mt-6 italic">سيتم شحن الهدايا المادية لعنوانكِ الموثق</p>
          </div>
        </div>

      </div>
    </div>
  );
}
