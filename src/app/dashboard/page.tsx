"use client";
import React from 'react';
import { Crown, Star, BookOpen, Trophy, Settings, Bell, Flame } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function StudentDashboard() {
  const router = useRouter();

  // بيانات افتراضية للطالبة
  const stats = [
    { label: "المستوى", value: "الأميرة", icon: <Crown className="text-amber-500" /> },
    { label: "نقاط الرقي", value: "١,٢٥٠", icon: <Star className="text-amber-500" /> },
    { label: "التحديات", value: "١٢/١٥", icon: <Trophy className="text-amber-500" /> },
    { label: "سلسلة التعلم", value: "٧ أيام", icon: <Flame className="text-orange-500" /> }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white p-6 md:p-12">
      {/* الـ Header الخاص بلوحة التحكم */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black italic flex items-center gap-4">
            أهلاً بكِ، يا سمو الأميرة <span className="text-amber-500">نوف</span>
          </h1>
          <p className="text-slate-400 mt-2 font-medium italic">تابعي رحلتكِ نحو إتقان الفن المصري الراقي</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all relative">
            <Bell size={24} />
            <span className="absolute top-3 right-3 w-2 h-2 bg-amber-500 rounded-full"></span>
          </button>
          <button onClick={() => router.push('/settings')} className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
            <Settings size={24} />
          </button>
        </div>
      </div>

      {/* إحصائيات سريعة */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-sm shadow-xl">
            <div className="mb-4">{stat.icon}</div>
            <p className="text-3xl font-black italic">{stat.value}</p>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* القسم الرئيسي: الدروس والتحديات */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* الدروس الحالية */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-black italic flex items-center gap-3">
            <BookOpen className="text-amber-500" /> متابعة التعلم
          </h2>
          <div className="bg-gradient-to-r from-amber-500/20 to-transparent border border-amber-500/20 p-8 rounded-[2.5rem] relative overflow-hidden group hover:scale-[1.01] transition-all">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">أساسيات الحديث في المجالس الراقية</h3>
              <p className="text-slate-400 mb-6 italic">الدرس الثالث: نبرة الصوت واستخدام المصطلحات الملكية</p>
              <div className="w-full bg-white/10 h-2 rounded-full mb-6">
                <div className="bg-amber-500 h-full w-[65%] rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
              </div>
              <button className="bg-amber-500 text-black px-8 py-3 rounded-xl font-black text-lg hover:shadow-lg transition-all">مواصلة التعلم</button>
            </div>
            <Crown className="absolute -bottom-10 -right-10 text-amber-500/10" size={180} />
          </div>
        </div>

        {/* قائمة التحديات السريعة */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black italic flex items-center gap-3">
            <Trophy className="text-amber-500" /> تحديات اليوم
          </h2>
          <div className="space-y-4">
            {['تحدي النطق السليم', 'اختبار مفردات القصور', 'تحدي المحادثة الحية'].map((challenge, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-all cursor-pointer">
                <span className="font-bold italic">{challenge}</span>
                <div className="w-8 h-8 rounded-full border border-amber-500/50 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all">
                   {i === 0 ? '✓' : i + 1}
                </div>
              </div>
            ))}
            <button 
              onClick={() => router.push('/challenges')}
              className="w-full py-4 text-amber-500 font-black border border-amber-500/20 rounded-2xl hover:bg-amber-500/5 transition-all"
            >
              عرض كافة التحديات
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
