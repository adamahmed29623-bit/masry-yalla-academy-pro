"use client";
import React, { useState } from 'react';
import { Crown, GraduationCap, Trophy, Globe, UserCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [lang, setLang] = useState('ar');

  // محتوى اللغات بتفاصيل الأكاديمية الفريدة
  const content = {
    ar: {
      badge: "الأكاديمية الأولى للهجة المصرية الراقية",
      title: "تعلمي المصرية",
      subtitle: "بفخامة القصور",
      desc: "حيث تلتقي عراقة 'المحروسة' برقي الاختيار. رحلة 'نوف' التعليمية تبدأ من هنا، لغةً وثقافةً وأسلوب حياة يليق بكِ.",
      btnTeachers: "رواق المعلمات",
      btnChallenges: "ديوان التحديات",
      login: "دخول الصفوة",
      stats: [
        { label: 'معلمة صفوة', val: '+٥٠' },
        { label: 'طالبة ملكية', val: '+١٠٠٠' },
        { label: 'ساعة تعليمية', val: '+٥٠٠٠' },
        { label: 'تحدي ذكي', val: '+١٠٠' }
      ],
      dir: "rtl"
    },
    en: {
      badge: "The Premier Academy for Royal Egyptian Dialect",
      title: "Master Egyptian",
      subtitle: "With Royal Elegance",
      desc: "Where the heritage of 'Al-Mahrousa' meets elite refinement. Nouf's journey starts here—language, culture, and a lifestyle designed for you.",
      btnTeachers: "Teachers Pavilion",
      btnChallenges: "Challenges Diwan",
      login: "Elite Login",
      stats: [
        { label: 'Elite Teachers', val: '50+' },
        { label: 'Royal Students', val: '1000+' },
        { label: 'Learning Hours', val: '5000+' },
        { label: 'Smart Challenges', val: '100+' }
      ],
      dir: "ltr"
    }
  };

  const t = content[lang];

  return (
    <div dir={t.dir} className={`min-h-screen relative overflow-hidden transition-all duration-700 ${lang === 'ar' ? 'font-sans' : 'font-serif'}`}>
      {/* زخرفة خلفية ملكية */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Crown className={`absolute -top-20 ${t.dir === 'rtl' ? '-right-20' : '-left-20'} text-amber-500`} size={600} />
      </div>

      {/* الشريط العلوي */}
      <nav className="relative z-10 flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="bg-amber-500 p-2 rounded-lg text-black shadow-[0_0_15px_rgba(255,195,0,0.4)]">
            <Crown size={30} />
          </div>
          <span className="text-2xl font-black italic tracking-tighter text-white uppercase">Yalla Masry</span>
        </div>
        
        <div className="flex items-center gap-6">
          {/* مبدل اللغات الملكي */}
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-amber-500 hover:text-black transition-all text-amber-500 font-black text-xs"
          >
            <Globe size={16} />
            {lang === 'ar' ? 'ENGLISH' : 'العربية'}
          </button>
          
          <button onClick={() => router.push('/login')} className="hidden md:flex items-center gap-2 hover:text-amber-500 transition-all font-bold text-sm">
            <UserCircle size={20} /> {t.login}
          </button>
        </div>
      </nav>

      {/* المحتوى الرئيسي */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="max-w-3xl">
          <div className="inline-block bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6">
            <span className="text-amber-500 font-black tracking-[0.2em] text-[10px] uppercase">{t.badge}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black italic text-white leading-[1.1] mb-8">
            {t.title} <br /> <span className="text-amber-500">{t.subtitle}</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed italic max-w-2xl opacity-80">
            {t.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button 
              onClick={() => router.push('/teachers')}
              className="group bg-amber-500 text-black p-6 rounded-2xl flex items-center justify-between font-black text-xl hover:scale-[1.02] transition-all shadow-xl"
            >
              <span>{t.btnTeachers}</span>
              {t.dir === 'rtl' ? <ArrowLeft /> : <ArrowRight />}
            </button>
            
            <button 
              onClick={() => router.push('/challenges')}
              className="group bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between font-black text-xl hover:bg-white/10 transition-all"
            >
              <span>{t.btnChallenges}</span>
              <Trophy className="text-amber-500 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* الإحصائيات */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/5 pt-12">
          {t.stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-4xl font-black text-white italic">{stat.val}</p>
              <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest opacity-60">{stat.label}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
