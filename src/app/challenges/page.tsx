"use client";
import React from 'react';
import { Trophy, Star, Crown, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ChallengesPage() {
  const router = useRouter();

  const challenges = [
    { id: 1, title: "تحدي نبرة القصور", points: "٥٠٠ نقطة", status: "متاح", difficulty: "ملكي" },
    { id: 2, title: "اختبار مفردات 'المحروسة'", points: "٣٠٠ نقطة", status: "مكتمل", difficulty: "متوسط" },
    { id: 3, title: "فن الرد الدبلوماسي المصري", points: "٧٥٠ نقطة", status: "قفل", difficulty: "نخبة" }
  ];

  return (
    <div className="min-h-screen text-white p-8" style={{ background: 'radial-gradient(circle, #001d3d 0%, #000814 100%)' }}>
      {/* Header */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-16 border-b border-amber-500/20 pb-8">
        <div>
          <h1 className="text-4xl font-black italic text-[#ffc300] flex items-center gap-3">
            <Trophy size={40} />
            ديوان التحديات
          </h1>
          <p className="text-slate-400 mt-2 font-medium">أثبتي جدارتكِ في فنون الحديث المصري</p>
        </div>
        <button 
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-slate-400 hover:text-[#ffc300] transition-all"
        >
          <ArrowRight size={20} />
          العودة للديوان العام
        </button>
      </div>

      {/* Challenges List */}
      <div className="max-w-5xl mx-auto grid gap-6">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center group hover:border-[#ffc300]/50 transition-all">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-amber-500/10 rounded-2xl text-[#ffc300]">
                {challenge.status === "مكتمل" ? <CheckCircle2 size={32} /> : <Star size={32} />}
              </div>
              <div>
                <h3 className="text-2xl font-black italic">{challenge.title}</h3>
                <div className="flex gap-4 mt-1 text-sm font-bold uppercase tracking-widest text-slate-500">
                  <span>{challenge.points}</span>
                  <span className="text-[#ffc300]">•</span>
                  <span>صعوبة: {challenge.difficulty}</span>
                </div>
              </div>
            </div>
            
            <button className={`mt-6 md:mt-0 px-10 py-4 rounded-2xl font-black text-lg transition-all ${
              challenge.status === "قفل" ? "bg-white/5 text-slate-500 cursor-not-allowed" : "bg-amber-500 text-black hover:scale-105"
            }`}>
              {challenge.status === "قفل" ? "مغلق حالياً" : "بدء التحدي"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
