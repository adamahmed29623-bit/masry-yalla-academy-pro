"use client";
import React from 'react';
import { Crown, Star, ArrowRight, ArrowLeft, ShieldCheck, GraduationCap } from 'lucide-react';
import { useRouter } from 'next/navigation';

// بيانات المعلمات (نفس التفاصيل التي خططتِ لها بدقة)
const teachers = [
  {
    id: 1,
    name: "الأستاذة عبلة",
    specialty: "خيرة المعلمات للهجة المصرية",
    bio: "خبرة ٢٠ عاماً في تدريب النخب على أصول الحديث المصري الراقي.",
    rating: 5,
    students: "١٢٠+"
  },
  {
    id: 2,
    name: "الأستاذة صافية",
    specialty: "متخصصة الإتيكيت اللفظي",
    bio: "تجمع بين عراقة اللغة وأناقة الأسلوب المعاصر.",
    rating: 5,
    students: "٩٥+"
  }
];

export default function TeachersPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#000814] text-white p-8">
      {/* Header الملكي */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-16 border-b border-amber-500/10 pb-8">
        <div>
          <h1 className="text-4xl font-black italic text-amber-500 flex items-center gap-3">
            <GraduationCap size={40} />
            رواق المعلمات
          </h1>
          <p className="text-slate-400 mt-2 font-medium">نخبة من صفوة الأكاديميات لتقديم تعليم يليق بكِ</p>
        </div>
        <button 
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-amber-500 border border-amber-500/20 px-6 py-3 rounded-full hover:bg-amber-500/10 transition-all"
        >
          <ArrowRight size={20} />
          العودة للرئيسية
        </button>
      </div>

      {/* Grid المعلمات */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="group relative bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-amber-500/40 transition-all">
            <div className="absolute -top-5 -right-5 bg-amber-500 text-black p-3 rounded-2xl shadow-xl transform group-hover:rotate-12 transition-transform">
              <Crown size={24} />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-black italic">{teacher.name}</h3>
              <p className="text-amber-500 font-bold uppercase tracking-widest text-xs">{teacher.specialty}</p>
              <p className="text-slate-400 leading-relaxed italic">{teacher.bio}</p>
              
              <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Star className="text-amber-500 fill-amber-500" size={18} />
                  <span className="font-bold">{teacher.rating}.0</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <ShieldCheck size={18} />
                  <span className="text-xs font-black uppercase">معتمدة ملكياً</span>
                </div>
              </div>

              <button 
                onClick={() => router.push('/booking')}
                className="w-full mt-6 bg-white/5 border border-white/10 py-5 rounded-2xl font-black text-xl hover:bg-amber-500 hover:text-black transition-all"
              >
                طلب الحجز الآن
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
