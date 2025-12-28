"use client";
import React, { useState } from 'react';
import { Trophy, Star, Crown, ArrowRight, CheckCircle2, Mic, AlertCircle, Award } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ChallengesPage() {
  const router = useRouter();
  const [points, setPoints] = useState(1250);
  const [feedback, setFeedback] = useState<{status: 'correct' | 'wrong' | null, msg: string}>({status: null, msg: ""});

  // محاكاة التصحيح الذكي
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setPoints(prev => prev + 100);
      setFeedback({status: 'correct', msg: "أحسنتِ يا أميرة! نطقكِ يضاهي فصاحة القصور."});
    } else {
      setFeedback({status: 'wrong', msg: "اقتربتِ، لكن حاولي جعل مخارج الحروف أكثر رقة."});
    }
  };

  const challenges = [
    { id: 1, title: "تحدي نبرة القصور", points: "٥٠٠ نقطة", status: "متاح", difficulty: "ملكي" },
    { id: 2, title: "اختبار مفردات 'المحروسة'", points: "٣٠٠ نقطة", status: "مكتمل", difficulty: "متوسط" },
    { id: 3, title: "فن الرد الدبلوماسي المصري", points: "٧٥٠ نقطة", status: "قفل", difficulty: "نخبة" }
  ];

  return (
    <div className="min-h-screen text-white p-8" style={{ background: 'radial-gradient(circle, #001d3d 0%, #000814 100%)' }}>
      {/* Header الملكي */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-12 border-b border-amber-500/20 pb-8">
        <div className="flex items-center gap-4">
           <div className="w-16 h-16 rounded-full bg-[#ffc300] flex items-center justify-center text-black font-black text-2xl shadow-[0_0_20px_rgba(255,195,0,0.3)]">ن</div>
           <div>
              <p className="text-xs font-black text-[#ffc300] uppercase tracking-widest">الطالبة الملكية</p>
              <h2 className="text-xl font-black italic text-white">نوف المنصور</h2>
           </div>
        </div>
        <div className="flex gap-8">
           <div className="text-center">
              <p className="text-[10px] text-slate-500 font-black uppercase">نقاط الرقي</p>
              <p className="text-2xl font-black text-[#ffc300]">{points}</p>
           </div>
           <button onClick={() => router.push('/')} className="text-slate-400 hover:text-[#ffc300] flex items-center gap-2">
              <ArrowRight size={20} />
              <span>العودة</span>
           </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* منطقة التحدي التفاعلي */}
        <div className="bg-white/5 border border-white/10 p-12 rounded-[4rem] relative overflow-hidden backdrop-blur-xl mb-12">
          <div className="flex items-center gap-3 mb-8 text-[#ffc300] font-black uppercase tracking-widest text-sm">
             <Mic size={20} /> <span>تحدي النطق الحالي: المجالس الرسمية</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black italic mb-8 leading-tight text-center text-white">
            "ازيك.. وحشتيني قوي"
          </h3>
          <p className="text-center text-slate-400 italic mb-12">اضغطي على الميكروفون وسجلي جملتكِ بنبرة ملكية</p>
          
          <div className="flex justify-center gap-6">
            <button onClick={() => handleAnswer(true)} className="bg-[#ffc300] text-black px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-lg">تسجيل صوتي</button>
            <button onClick={() => handleAnswer(false)} className="border border-white/20 px-12 py-5 rounded-2xl font-black hover:bg-white/5 text-white">تخطي</button>
          </div>

          {feedback.status && (
            <div className={`mt-10 p-6 rounded-3xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 ${feedback.status === 'correct' ? 'bg-green-500/10 border border-green-500/20 text-green-500' : 'bg-red-500/10 border border-red-500/20 text-red-500'}`}>
              {feedback.status === 'correct' ? <CheckCircle2 /> : <AlertCircle />}
              <p className="font-bold italic">{feedback.msg}</p>
            </div>
          )}
        </div>

        {/* قائمة التحديات الأخرى */}
        <div className="grid gap-6">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex justify-between items-center group">
              <div className="flex items-center gap-6">
                <div className="p-3 bg-white/5 rounded-xl text-[#ffc300] group-hover:bg-[#ffc300] group-hover:text-black transition-all">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-black italic">{challenge.title}</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{challenge.points} • {challenge.difficulty}</p>
                </div>
              </div>
              <button className={`px-6 py-3 rounded-xl font-black ${challenge.status === 'قفل' ? 'bg-white/5 text-slate-600' : 'bg-white/10 text-white hover:bg-[#ffc300] hover:text-black'}`}>
                {challenge.status === 'قفل' ? 'مغلق' : 'ابدأ'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
