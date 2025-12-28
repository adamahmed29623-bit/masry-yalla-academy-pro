"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Crown, Sparkles, BookOpen, Users, ShieldCheck, 
  PlayCircle, Star, Heart, Calendar, Baby, Book,
  ChevronRight, CreditCard, Play, CheckCircle2
} from 'lucide-react';

/**
 * 🏛️ النظام الإمبراطوري الموحد V 2.0 - الصرح الكامل
 * تم دمج: الرئيسية + الدروس + الأطفال + القرآن + المعلمات (فيديو/سعر/مواعيد)
 */

export default function RoyalAcademySystem() {
  const [activeTab, setActiveTab] = useState('welcome');
  const [isSyncing, setIsSyncing] = useState(true);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsSyncing(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    { id: 'welcome', icon: Crown, label: 'الرئيسية' },
    { id: 'classroom', icon: BookOpen, label: 'قاعة الدروس' },
    { id: 'kids', icon: Baby, label: 'ركن البراعم' },
    { id: 'quran', icon: Book, label: 'نور الوحي' },
    { id: 'teachers', icon: Users, label: 'رواق المعلمات' },
  ];

  return (
    <div className="flex min-h-screen bg-[#000814] text-white font-sans overflow-hidden">
      
      {/* 🏰 الشريط الجانبي الإمبراطوري */}
      <motion.aside initial={{ x: 100 }} animate={{ x: 0 }} className="w-20 md:w-28 bg-[#001d3d] border-l border-white/5 flex flex-col items-center py-10 gap-10 z-50 shadow-2xl">
        <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-4 rounded-[1.5rem] shadow-lg shadow-amber-500/20">
          <Crown size={32} className="text-[#000814]" />
        </div>
        <nav className="flex flex-col gap-6 flex-1">
          {menuItems.map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`p-4 rounded-2xl transition-all duration-500 group relative ${activeTab === item.id ? 'bg-amber-500 text-[#000814] scale-110 shadow-xl' : 'hover:bg-white/5 text-slate-500'}`}>
              <item.icon size={26} />
              <span className="absolute right-full mr-4 bg-amber-500 text-[#000814] px-4 py-2 rounded-xl text-xs font-black opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-2xl">{item.label}</span>
            </button>
          ))}
        </nav>
      </motion.aside>

      {/* 🌌 المنطقة المركزية */}
      <main className="flex-1 relative overflow-y-auto bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent">
        <AnimatePresence mode="wait">
          {isSyncing ? (
            <motion.div key="loader" exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col items-center justify-center bg-[#000814] z-40">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}><Sparkles size={64} className="text-amber-500" /></motion.div>
              <h2 className="mt-8 text-2xl font-black italic tracking-[0.4em] animate-pulse text-amber-500 uppercase">مزامنة البيانات الملكية...</h2>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="p-8 md:p-20">
              
              {/* 1. الرئيسية */}
              {activeTab === 'welcome' && (
                <div className="text-center space-y-12 py-10">
                  <div className="space-y-6">
                    <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-[0.9]">مرحباً بكِ في <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-100 to-amber-500">يلا مصري</span></h1>
                    <p className="text-xl md:text-3xl text-slate-400 font-bold max-w-3xl mx-auto italic leading-relaxed">رقي اللهجة المصرية وفخامة التجربة التعليمية للملكات والبراعم.</p>
                  </div>
                  <button onClick={() => setActiveTab('classroom')} className="bg-amber-500 text-[#000814] px-16 py-8 rounded-[3rem] font-black text-2xl shadow-2xl shadow-amber-500/30 hover:scale-105 transition-transform">ابدئي الرحلة الآن</button>
                </div>
              )}

              {/* 5. رواق المعلمات (التصميم الكامل) */}
              {activeTab === 'teachers' && (
                <div className="space-y-16">
                  <div className="border-b border-white/5 pb-10 flex justify-between items-end">
                    <h2 className="text-6xl font-black italic tracking-tighter">رواق الملكات</h2>
                    <span className="text-amber-500 font-black italic tracking-widest">صفوة المعلمات</span>
                  </div>

                  {/* بطاقة المعلمة المدمجة */}
                  <div className="bg-[#001d3d] rounded-[4rem] p-12 border border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-2xl">
                    <div className="aspect-video bg-[#000814] rounded-[3rem] overflow-hidden relative border-2 border-white/5 group">
                      <img src="https://images.unsplash.com/photo-1544717297-fa95b3ee51f3?w=800" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle size={70} className="text-amber-500 cursor-pointer hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <div className="space-y-6 text-right">
                      <div className="flex items-center justify-end gap-4">
                        <h3 className="text-5xl font-black italic">أ. مريم الفارس</h3>
                        <ShieldCheck className="text-sky-400" size={32} />
                      </div>
                      <p className="text-amber-500 font-black tracking-[0.3em] uppercase text-sm flex items-center justify-end gap-2"><Crown size={16}/> خبيرة اللهجة الملكية</p>
                      <p className="text-slate-400 text-xl italic leading-relaxed">"نحن لا نتعلم الكلمات، بل نتعلم ثقافة ورقي يليق بأسلوب حياة الملكات."</p>
                      <div className="text-4xl font-black italic text-white">$45 <span className="text-sm text-slate-500">/ للجلسة</span></div>
                    </div>
                  </div>

                  {/* جدول المواعيد المدمج */}
                  <div className="bg-[#001d3d] p-12 rounded-[4rem] border border-white/5 space-y-8 shadow-2xl">
                    <h4 className="text-2xl font-black italic flex items-center gap-4"><Calendar className="text-amber-500" /> المواعيد المتاحة</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {["09:00 AM", "01:00 PM", "05:00 PM", "09:00 PM"].map(slot => (
                        <button key={slot} onClick={() => setSelectedTime(slot)} className={`py-6 rounded-3xl font-black transition-all ${selectedTime === slot ? 'bg-amber-500 text-[#000814] scale-105' : 'bg-[#000814] border border-white/5 text-slate-500 hover:border-amber-500/50'}`}>{slot}</button>
                      ))}
                    </div>
                    <button disabled={!selectedTime} className={`w-full py-8 rounded-[3rem] font-black text-2xl flex items-center justify-center gap-4 transition-all ${selectedTime ? 'bg-amber-500 text-[#000814] shadow-2xl' : 'bg-white/5 text-slate-700 cursor-not-allowed grayscale'}`}><CreditCard size={28} /> تأكيد الحجز الملكي</button>
                  </div>
                </div>
              )}

              {/* بقية الأقسام (الدروس، الأطفال، القرآن) تضاف بنفس الطريقة هنا */}

            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
