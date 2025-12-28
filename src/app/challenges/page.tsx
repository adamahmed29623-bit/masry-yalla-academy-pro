"use client";
import React, { useState, useEffect } from 'react';
import { Trophy, Star, Mic, CheckCircle, AlertCircle, Award, Crown } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function SmartChallenges() {
  const searchParams = useSearchParams();
  const goal = searchParams.get('filter'); // يستقبل الهدف من صفحة الأهداف

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

  return (
    <div className="min-h-screen bg-transparent text-white p-8">
      {/* لوحة التحكم العلوية (النقاط والمستوى) */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-12 bg-white/5 p-6 rounded-[2rem] border border-white/10">
        <div className="flex items-center gap-4">
           <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-black font-black text-2xl">ن</div>
           <div>
              <p className="text-xs font-black text-amber-500 uppercase tracking-widest">الطالبة الملكية</p>
              <h2 className="text-xl font-black italic">نوف المنصور</h2>
           </div>
        </div>
        <div className="flex gap-8">
           <div className="text-center">
              <p className="text-[10px] text-slate-500 font-black">نقاط الرقي</p>
              <p className="text-2xl font-black text-amber-500">{points}</p>
           </div>
           <div className="text-center border-r border-white/10 pr-8">
              <p className="text-[10px] text-slate-500 font-black">الأوسمة</p>
              <p className="text-2xl font-black text-amber-500">٣</p>
           </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* التحدي الحالي */}
        <div className="bg-white/5 border border-white/10 p-12 rounded-[4rem] relative overflow-hidden backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-8 text-amber-500 font-black">
             <Mic size={24} /> <span>تحدي النطق الحالي: {goal === 'etiquette' ? 'المجالس الرسمية' : 'الطلاقة الفصحى'}</span>
          </div>
          
          <h3 className="text-4xl font-black italic mb-8 leading-tight text-center">
            "ازيك.. وحشتيني قوي"
          </h3>
          <p className="text-center text-slate-400 italic mb-12">اضغطي على الميكروفون وسجلي جملتكِ بنبرة ملكية</p>

          <div className="flex justify-center gap-6">
            <button onClick={() => handleAnswer(true)} className="bg-amber-500 text-black px-10 py-4 rounded-2xl font-black">تسجيل صوتي</button>
            <button onClick={() => handleAnswer(false)} className="border border-white/20 px-10 py-4 rounded-2xl font-black hover:bg-white/5">تخطي</button>
          </div>

          {/* التغذية الراجعة (التصحيح الملكي) */}
          {feedback.status && (
            <div className={`mt-10 p-6 rounded-3xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 ${feedback.status === 'correct' ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
              {feedback.status === 'correct' ? <CheckCircle className="text-green-500" /> : <AlertCircle className="text-red-500" />}
              <p className={`font-bold italic ${feedback.status === 'correct' ? 'text-green-500' : 'text-red-500'}`}>{feedback.msg}</p>
            </div>
          )}
        </div>

        {/* قسم المكافآت (تحت التحدي) */}
        <div className="mt-12 grid grid-cols-2 gap-6">
           <div className="bg-gradient-to-br from-amber-500/20 to-transparent p-8 rounded-[3rem] border border-amber-500/10 flex items-center gap-6">
              <Award size={48} className="text-amber-500" />
              <div>
                 <h4 className="font-black italic">وسام الفصاحة</h4>
                 <p className="text-xs text-slate-400">يُفتح عند وصولك لـ ٢٠٠٠ نقطة</p>
              </div>
           </div>
           <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10 flex items-center gap-6 opacity-50">
              <Crown size={48} className="text-slate-500" />
              <div>
                 <h4 className="font-black italic">التاج الماسي</h4>
                 <p className="text-xs text-slate-500">خاص بمستوى "بنت البلد الراقية"</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
