"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Crown, Sparkles, BookOpen, Users, ShieldCheck, 
  PlayCircle, Star, Heart, Calendar, Baby, Book,
  ChevronRight, Globe, CreditCard
} from 'lucide-react';

/**
 * 🏛️ النظام الإمبراطوري الموحد V 2.0 - الأكاديمية الملكية "يلا مصري"
 * الجامع لـ: الرئيسية، قاعة الدروس، ركن البراعم، ونور الوحي.
 */

export default function YallaMasryMaster() {
  const [activeTab, setActiveTab] = useState('welcome');
  const [isSyncing, setIsSyncing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsSyncing(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // قائمة التنقل الملكية
  const menuItems = [
    { id: 'welcome', icon: Crown, label: 'الرئيسية' },
    { id: 'classroom', icon: BookOpen, label: 'قاعة الدروس' },
    { id: 'kids', icon: Baby, label: 'ركن البراعم' },
    { id: 'quran', icon: Book, label: 'نور الوحي' },
    { id: 'teachers', icon: Users, label: 'رواق المعلمات' },
  ];

  return (
    <div className="flex min-h-screen bg-[#000814] text-white font-sans selection:bg-amber-500/30 overflow-hidden">
      
      {/* 🏰 الشريط الجانبي الإمبراطوري (Sidebar) */}
      <motion.aside 
        initial={{ x: 100 }} animate={{ x: 0 }}
        className="w-20 md:w-28 bg-[#001d3d] border-l border-white/5 flex flex-col items-center py-10 gap-10 z-50 shadow-2xl"
      >
        <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-4 rounded-[1.5rem] shadow-lg shadow-amber-500/20">
          <Crown size={32} className="text-[#000814]" />
        </div>
        
        <nav className="flex flex-col gap-6 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-4 rounded-2xl transition-all duration-500 group relative ${
                activeTab === item.id ? 'bg-amber-500 text-[#000814] scale-110 shadow-xl' : 'hover:bg-white/5 text-slate-500'
              }`}
            >
              <item.icon size={26} />
              <span className="absolute right-full mr-4 bg-amber-500 text-[#000814] px-4 py-2 rounded-xl text-xs font-black opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-2xl">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </motion.aside>

      {/* 🌌 ساحة العرض المركزية */}
      <main className="flex-1 relative overflow-y-auto custom-scrollbar bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent">
        <AnimatePresence mode="wait">
          {isSyncing ? (
            <motion.div 
              key="loader" exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#000814] z-40"
            >
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
                <Sparkles size={64} className="text-amber-500" />
              </motion.div>
              <h2 className="mt-8 text-2xl font-black italic tracking-[0.4em] animate-pulse text-amber-500 uppercase">
                مزامنة البيانات الملكية...
              </h2>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              className="p-8 md:p-20 lg:p-32"
            >
              
              {/* 1. الرئيسية: فخامة الدخول */}
              {activeTab === 'welcome' && (
                <div className="text-center space-y-12 py-10">
                  <motion.div className="space-y-6">
                    <div className="inline-block bg-amber-500/10 border border-amber-500/20 px-8 py-3 rounded-full text-amber-500 text-sm font-black tracking-widest uppercase italic">
                       <Sparkles className="inline-block mr-2" size={16}/> عالم الملكات والبراعم
                    </div>
                    <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-[0.9]">
                      مرحباً بكِ في <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-100 to-amber-500">
                        يلا مصري
                      </span>
                    </h1>
                    <p className="text-xl md:text-3xl text-slate-400 font-bold max-w-3xl mx-auto leading-relaxed italic">
                      المنصة التعليمية الأولى التي تجمع بين رقي اللهجة المصرية وفخامة التجربة التعليمية.
                    </p>
                  </motion.div>
                  <button className="bg-amber-500 text-[#000814] px-16 py-8 rounded-[3rem] font-black text-2xl shadow-2xl shadow-amber-500/30 hover:scale-105 transition-transform active:scale-95">
                    ابدئي رحلتكِ الملكية الآن
                  </button>
                </div>
              )}

              {/* 2. قاعة الدروس: رحلة نوف */}
              {activeTab === 'classroom' && (
                <div className="space-y-12">
                   <div className="border-b border-white/5 pb-10">
                      <h2 className="text-6xl font-black italic tracking-tighter">قاعة الدروس</h2>
                      <p className="text-amber-500 font-black mt-2 tracking-widest italic uppercase">تم تحميل "رحلة نوف" المحدثة</p>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="aspect-video bg-[#001d3d] rounded-[4rem] border-2 border-amber-500/10 flex flex-col items-center justify-center group cursor-pointer overflow-hidden relative shadow-2xl">
                         <PlayCircle size={80} className="text-amber-500 group-hover:scale-110 transition-transform" />
                         <div className="absolute bottom-10 right-10 text-right">
                            <span className="text-xs font-black text-amber-500 block mb-2 uppercase tracking-widest italic">الوحدة الأولى</span>
                            <h3 className="text-3xl font-black italic">سحر البدايات</h3>
                         </div>
                      </div>
                   </div>
                </div>
              )}

              {/* 3. ركن البراعم (الأطفال والصفحة الخليجية) */}
              {activeTab === 'kids' && (
                <div className="space-y-12">
                   <div className="bg-gradient-to-r from-sky-500/20 to-amber-500/20 p-20 rounded-[5rem] border border-white/5 text-center">
                      <h2 className="text-6xl font-black italic mb-4">براعم الأكاديمية</h2>
                      <p className="text-slate-300 text-xl italic max-w-2xl mx-auto leading-relaxed">تعليم اللهجة المصرية لأطفالنا في الخليج بأسلوب ترفيهي ملكي يجمع بين المرح والرقي.</p>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {['حكايات مصرية', 'إتيكيت الأمير الصغير', 'ألعاب لغوية'].map(i => (
                        <div key={i} className="bg-[#001d3d] p-10 rounded-[3rem] border border-white/5 hover:border-sky-500/30 transition-all text-center group">
                           <div className="bg-sky-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-sky-400 group-hover:rotate-12 transition-transform">
                              <Baby size={32} />
                           </div>
                           <h3 className="text-xl font-black italic">{i}</h3>
                        </div>
                      ))}
                   </div>
                </div>
              )}

              {/* 4. نور الوحي (القرآن الكريم) */}
              {activeTab === 'quran' && (
                <div className="space-y-12">
                   <div className="bg-[#001d3d] p-20 rounded-[5rem] border-2 border-amber-500/10 text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5" />
                      <h2 className="text-7xl font-black italic mb-6 text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-500">نور الوحي</h2>
                      <p className="text-slate-400 text-xl italic max-w-2xl mx-auto">تحفيظ وتجويد القرآن الكريم برقي وإتقان يليق بمكانة كتاب الله.</p>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {['التجويد الملكي', 'حفظ المتون', 'تفسير الملكات'].map(item => (
                        <div key={item} className="bg-[#000814] border border-white/5 p-10 rounded-[3rem] text-center hover:border-amber-500/30 transition-all">
                           <h4 className="text-amber-500 font-black text-xl mb-4 italic">{item}</h4>
                           <button className="text-[10px] text-slate-600 hover:text-white uppercase tracking-[0.3em] font-black italic">ابدئي التلاوة</button>
                        </div>
                      ))}
                   </div>
                </div>
              )}

              {/* 5. رواق المعلمات */}
              {activeTab === 'teachers' && (
                <div className="space-y-12">
                   <div className="flex justify-between items-end border-b border-white/5 pb-10">
                      <h2 className="text-6xl font-black italic tracking-tighter">رواق الملكات</h2>
                      <div className="flex gap-4">
                         <div className="bg-amber-500/10 px-6 py-2 rounded-xl text-amber-500 font-black text-xs border border-amber-500/20">نخبة المعلمات</div>
                      </div>
                   </div>
                   {/* هنا يتم استدعاء مكون TeacherCard الذي صممناه سابقاً */}
                   <div className="bg-[#001d3d] p-16 rounded-[4rem] border border-white/5 text-center italic text-slate-500">
                      جاري عرض صفوة معلمات الأكاديمية...
                   </div>
                </div>
              )}

            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
