"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Baby, BookOpen, Calendar, 
  MessageCircle, CreditCard, Award, 
  Star, ChevronLeft, Sparkles, ShieldCheck
} from 'lucide-react';

/**
 * 👨‍👩‍👧‍👦 ديوان أولياء الأمور - بوابة العائلة الملكية
 * مخصص لمتابعة: البراعم، الدروس، التقارير، والمدفوعات.
 */

export default function ParentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // بيانات افتراضية للطفل (البراعم)
  const children = [
    { name: "الأمير فهد", level: "مستوى المبتدئين - اللهجة المصرية", progress: 75 },
    { name: "الأميرة سارة", level: "حفظ جزء عم - الركن القرآني", progress: 40 }
  ];

  return (
    <div className="min-h-screen bg-[#000814] text-white flex font-sans overflow-hidden">
      
      {/* 🏰 القائمة الجانبية لديوان العائلة */}
      <motion.aside 
        initial={{ x: 100 }} animate={{ x: 0 }}
        className="w-72 bg-[#001d3d] border-l border-white/5 flex flex-col p-8 gap-8 z-50 shadow-2xl"
      >
        <div className="flex items-center gap-4 text-sky-400 font-black italic mb-8">
          <div className="bg-sky-500/10 p-3 rounded-2xl">
            <Heart size={28} />
          </div>
          <span className="text-xl tracking-tighter uppercase">ديوان العائلة</span>
        </div>
        
        <nav className="flex flex-col gap-3 flex-1">
          {[
            { id: 'overview', icon: Baby, label: 'أطفالي (البراعم)' },
            { id: 'reports', icon: BookOpen, label: 'التقارير الدراسية' },
            { id: 'schedule', icon: Calendar, label: 'مواعيد الجلسات' },
            { id: 'payments', icon: CreditCard, label: 'الرسوم والاشتراكات' },
            { id: 'support', icon: MessageCircle, label: 'تواصل مع الإدارة' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-black transition-all duration-300 ${
                activeTab === item.id 
                ? 'bg-sky-500 text-[#000814] shadow-xl shadow-sky-500/20 translate-x-[-5px]' 
                : 'text-slate-500 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={22} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </motion.aside>

      {/* 🌌 ساحة المتابعة الرئيسية */}
      <main className="flex-1 p-10 lg:p-16 overflow-y-auto">
        <header className="flex justify-between items-center mb-16">
          <div>
            <h1 className="text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">
              مرحباً بكِ، وليّ الأمر الموقر
            </h1>
            <p className="text-slate-500 font-bold mt-2 uppercase tracking-[0.2em] text-xs">نتابع معاً نمو براعمنا في أكاديمية يلا مصري</p>
          </div>
          <div className="bg-sky-500/10 px-6 py-3 rounded-full border border-sky-500/20 flex items-center gap-3">
             <ShieldCheck size={20} className="text-sky-400" />
             <span className="text-xs font-black text-sky-400">حساب العائلة مؤمن</span>
          </div>
        </header>

        {/* 1. نظرة عامة على الأطفال (Children Overview) */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {children.map((child, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#001d3d] p-10 rounded-[4rem] border border-white/5 relative overflow-hidden group hover:border-sky-500/30 transition-all shadow-2xl"
                >
                  <div className="absolute top-0 left-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                    <Baby size={120} />
                  </div>
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-sky-500/20 border-2 border-sky-500/50 flex items-center justify-center text-sky-400 font-black text-2xl">
                        {child.name[0]}
                      </div>
                      <div>
                        <h3 className="text-3xl font-black italic">{child.name}</h3>
                        <p className="text-slate-500 font-bold text-sm italic">{child.level}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                       <div className="flex justify-between text-xs font-black italic mb-2">
                          <span className="text-sky-400">مستوى التقدم</span>
                          <span>{child.progress}%</span>
                       </div>
                       <div className="w-full h-3 bg-[#000814] rounded-full overflow-hidden border border-white/5">
                          <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: `${child.progress}%` }} 
                            className="h-full bg-gradient-to-r from-sky-500 to-sky-300"
                          />
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <button className="flex-1 bg-white/5 py-4 rounded-2xl font-black text-xs hover:bg-sky-500 hover:text-[#000814] transition-all flex items-center justify-center gap-2">
                          <Award size={16} /> عرض الشهادات
                       </button>
                       <button className="flex-1 bg-white/5 py-4 rounded-2xl font-black text-xs hover:bg-sky-500 hover:text-[#000814] transition-all flex items-center justify-center gap-2">
                          <BookOpen size={16} /> جدول الواجبات
                       </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* إعلانات الأكاديمية لأولياء الأمور */}
            <div className="bg-gradient-to-r from-sky-500/10 to-amber-500/10 p-12 rounded-[4rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="space-y-4 text-center md:text-right">
                  <h4 className="text-2xl font-black italic flex items-center gap-3 justify-center md:justify-start">
                    <Sparkles className="text-amber-500" /> فعالية "براعم النيل" القادمة
                  </h4>
                  <p className="text-slate-400 font-medium italic">ندعوكم لحضور الحفل الختامي الافتراضي لتكريم المتميزين في اللهجة المصرية.</p>
               </div>
               <button className="bg-white text-[#000814] px-10 py-5 rounded-[2.5rem] font-black hover:scale-105 transition-all">حجز مقعد للعائلة</button>
            </div>
          </div>
        )}

        {/* باقي التبويبات (التقارير، الدفع) تضاف بنفس النمط */}
      </main>
    </div>
  );
}
