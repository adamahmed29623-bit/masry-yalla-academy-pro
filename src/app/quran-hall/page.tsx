"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Book, Star, Sparkles, Volume2, 
  Crown, Library, Mic2, Video, 
  ChevronLeft, ChevronRight, Moon
} from 'lucide-react';

export default function ImperialQuranHall() {
  const [activeGallery, setActiveGallery] = useState('quran');

  const galleries = [
    { id: 'quran', title: 'رواق القرآن', icon: Book, color: 'text-amber-500' },
    { id: 'sunnah', title: 'ديوان السنة', icon: Star, color: 'text-sky-400' },
    { id: 'library', title: 'المكتبة الملكية', icon: Library, color: 'text-emerald-400' },
    { id: 'lessons', title: 'قاعة الدروس', icon: Video, color: 'text-purple-400' },
    { id: 'recital', title: 'منصة التلاوة', icon: Mic2, color: 'text-rose-400' },
  ];

  return (
    <div className="min-h-screen bg-[#000814] text-white flex flex-col font-sans relative overflow-hidden">
      
      {/* 🌙 الزخرفة الإسلامية الثابتة */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />

      {/* 🧭 شريط التنقل العلوي (الأروقة) */}
      <nav className="z-50 p-8 bg-[#001d3d]/50 backdrop-blur-md border-b border-white/5 flex justify-center gap-4 md:gap-8 overflow-x-auto">
        {galleries.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveGallery(item.id)}
            className={`flex flex-col items-center gap-2 min-w-[100px] transition-all duration-500 ${
              activeGallery === item.id ? 'scale-110' : 'opacity-40 grayscale hover:opacity-100'
            }`}
          >
            <div className={`p-4 rounded-2xl ${activeGallery === item.id ? 'bg-amber-500 text-[#000814]' : 'bg-white/5'}`}>
              <item.icon size={24} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">{item.label || item.title}</span>
          </button>
        ))}
      </nav>

      {/* 🌌 ساحة العرض المتغيرة (الشرائح) */}
      <main className="flex-1 flex items-center justify-center p-6 md:p-20 relative">
        <AnimatePresence mode="wait">
          
          {/* 1. رواق القرآن */}
          {activeGallery === 'quran' && (
            <motion.div key="quran" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-right">
                <h2 className="text-7xl font-black italic tracking-tighter">رواق <br/><span className="text-amber-500">القرآن الكريم</span></h2>
                <p className="text-slate-400 text-xl italic leading-relaxed">ترتيل وتجويد بأسلوب ملكي يجمع بين خشوع القلب ودقة الأداء.</p>
                <button className="bg-amber-500 text-[#000814] px-12 py-6 rounded-full font-black text-xl shadow-2xl">ابدئي التلاوة</button>
              </div>
              <div className="aspect-[3/4] bg-[#001d3d] rounded-[4rem] border border-white/10 shadow-3xl flex items-center justify-center relative group">
                 <div className="absolute inset-10 border-2 border-amber-500/20 rounded-[3rem] animate-pulse" />
                 <Book size={120} className="text-amber-500/50 group-hover:scale-110 transition-transform duration-700" />
              </div>
            </motion.div>
          )}

          {/* 2. منصة التلاوة (للطلاب) */}
          {activeGallery === 'recital' && (
            <motion.div key="recital" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-4xl bg-[#001d3d] p-16 rounded-[5rem] border border-white/5 text-center space-y-10">
              <div className="w-24 h-24 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-500">
                <Mic2 size={48} className="animate-pulse" />
              </div>
              <h2 className="text-5xl font-black italic">محراب التلاوة</h2>
              <p className="text-slate-400 text-lg italic">سجلي تلاوتكِ الآن ليتم مراجعتها من قبل نخبة المحفظات الملكيات.</p>
              <div className="flex justify-center gap-6 pt-6">
                 <button className="bg-rose-500 text-white px-10 py-5 rounded-3xl font-black hover:scale-105 transition-all">ابدئي التسجيل</button>
                 <button className="bg-white/5 text-slate-300 px-10 py-5 rounded-3xl font-black border border-white/5">الاستماع للتصحيح</button>
              </div>
            </motion.div>
          )}

          {/* 3. المكتبة الإسلامية */}
          {activeGallery === 'library' && (
            <motion.div key="library" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-6xl space-y-12">
               <div className="text-center space-y-4">
                  <h2 className="text-6xl font-black italic">المكتبة الملكية</h2>
                  <p className="text-emerald-400 font-black tracking-widest uppercase text-xs italic">كنوز المعرفة الإسلامية</p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {['رياض الصالحين', 'السيرة النبوية', 'تفسير الجلالين', 'متون التجويد'].map(book => (
                    <div key={book} className="bg-[#001d3d] p-10 rounded-[3rem] border border-white/5 hover:border-emerald-500/50 transition-all group cursor-pointer text-center">
                       <Library size={40} className="mx-auto mb-6 text-emerald-500 group-hover:scale-110 transition-transform" />
                       <h4 className="font-black italic text-sm">{book}</h4>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* 📜 شريط المعلومات السفلي */}
      <footer className="p-10 flex justify-between items-center text-[10px] font-black italic opacity-30 tracking-[0.3em]">
        <span>أكاديمية يلا مصري | قسم الدراسات الإسلامية</span>
        <span>وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا</span>
      </footer>
    </div>
  );
}
