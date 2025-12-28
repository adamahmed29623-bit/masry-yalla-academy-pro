"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Users, BarChart3, Settings, 
  Globe, Bell, Crown, Star, DollarSign, 
  BookOpen, Plus, Trash2, CheckCircle, Search
} from 'lucide-react';

/**
 * 🏛️ ديوان السيادة - لوحة تحكم الإدارة العليا (Admin)
 * تحكم كامل في: المعلمات، الطالبات، الأرباح، والمنهج.
 */

export default function ImperialAdminPanel() {
  const [activeTab, setActiveTab] = useState('overview');

  // بيانات افتراضية للمحاكاة (سيتم ربطها بـ Firebase لاحقاً)
  const stats = [
    { label: 'إجمالي الإيرادات', value: '$24,500', icon: DollarSign, color: 'text-emerald-400' },
    { label: 'الملكات النشطات', value: '840', icon: Users, color: 'text-amber-500' },
    { label: 'البراعم الجدد', value: '120', icon: Star, color: 'text-sky-400' },
    { label: 'ساعات التدريس', value: '3,200', icon: BookOpen, color: 'text-purple-400' },
  ];

  return (
    <div className="min-h-screen bg-[#000814] text-white flex font-sans overflow-hidden">
      
      {/* 🏰 القائمة الجانبية الإدارية */}
      <motion.aside 
        initial={{ x: 100 }} animate={{ x: 0 }}
        className="w-72 bg-[#001d3d] border-l border-white/5 flex flex-col p-8 gap-8 z-50 shadow-2xl"
      >
        <div className="flex items-center gap-4 text-amber-500 font-black italic mb-8">
          <div className="bg-amber-500/20 p-3 rounded-2xl">
            <ShieldCheck size={28} />
          </div>
          <span className="text-xl tracking-tighter uppercase">ديوان السيادة</span>
        </div>
        
        <nav className="flex flex-col gap-3 flex-1">
          {[
            { id: 'overview', icon: BarChart3, label: 'نظرة عامة' },
            { id: 'teachers', icon: Crown, label: 'إدارة المعلمات' },
            { id: 'students', icon: Users, label: 'قاعدة البيانات' },
            { id: 'curriculum', icon: BookOpen, label: 'تعديل المنهج' },
            { id: 'settings', icon: Settings, label: 'إعدادات المنصة' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-black transition-all duration-300 ${
                activeTab === item.id 
                ? 'bg-amber-500 text-[#000814] shadow-xl shadow-amber-500/20 translate-x-[-5px]' 
                : 'text-slate-500 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={22} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="bg-[#000814] p-6 rounded-3xl border border-white/5 text-center space-y-3">
          <div className="text-[10px] text-slate-500 font-black tracking-widest uppercase">حالة الخادم</div>
          <div className="flex items-center justify-center gap-2 text-emerald-400 font-black text-xs">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            نظام يلا مصري متصل
          </div>
        </div>
      </motion.aside>

      {/* 🌌 ساحة التحكم الرئيسية */}
      <main className="flex-1 p-10 lg:p-16 overflow-y-auto">
        <header className="flex justify-between items-end mb-16">
          <div>
            <h1 className="text-5xl font-black italic tracking-tighter">لوحة التحكم العليا</h1>
            <p className="text-slate-500 font-bold mt-2 uppercase tracking-[0.2em] text-xs">مرحباً بكِ مجدداً، يا جلالة الملكة</p>
          </div>
          <div className="flex gap-4">
            <div className="relative group">
               <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
               <input type="text" placeholder="بحث سريع..." className="bg-[#001d3d] border border-white/5 rounded-2xl py-4 pr-12 pl-6 focus:border-amber-500 outline-none transition-all text-sm w-64" />
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {/* 1. نظرة عامة (Overview) */}
          {activeTab === 'overview' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-[#001d3d] p-8 rounded-[3.5rem] border border-white/5 shadow-xl">
                    <stat.icon className={`${stat.color} mb-6`} size={32} />
                    <div className="text-slate-500 font-black text-xs uppercase tracking-widest mb-2">{stat.label}</div>
                    <div className="text-4xl font-black italic">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* آخر العمليات */}
              <div className="bg-[#001d3d] rounded-[4rem] border border-white/5 p-12">
                 <h3 className="text-2xl font-black italic mb-8 flex items-center gap-4"><Bell className="text-amber-500" /> آخر النشاطات الملكية</h3>
                 <div className="space-y-6">
                    {[
                      { msg: 'انضمت ملكة جديدة من السعودية لرحلة نوف', time: 'منذ دقيقتين', icon: CheckCircle },
                      { msg: 'أضافت أ. مريم درساً جديداً في إتيكيت الحوار', time: 'منذ ساعة', icon: Plus },
                      { msg: 'تم تجديد اشتراك 5 براعم في قسم الأطفال', time: 'منذ 3 ساعات', icon: Star },
                    ].map((act, i) => (
                      <div key={i} className="flex items-center justify-between p-6 bg-[#000814] rounded-3xl border border-white/5">
                        <div className="flex items-center gap-4">
                           <act.icon className="text-amber-500" size={20} />
                           <span className="font-bold text-slate-300 italic">{act.msg}</span>
                        </div>
                        <span className="text-[10px] text-slate-600 font-black italic">{act.time}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          )}

          {/* 2. إدارة المعلمات (Teachers Management) */}
          {activeTab === 'teachers' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
               <div className="flex justify-between items-center bg-amber-500/5 p-10 rounded-[4rem] border border-amber-500/10">
                  <div className="text-2xl font-black italic">إدارة صفوة المعلمات</div>
                  <button className="bg-amber-500 text-[#000814] px-10 py-5 rounded-[2.5rem] font-black text-lg flex items-center gap-3 hover:scale-105 transition-all">
                    <Plus size={24} /> إضافة معلمة جديدة
                  </button>
               </div>
               
               <div className="grid grid-cols-1 gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-[#001d3d] p-8 rounded-[3rem] border border-white/5 flex items-center justify-between">
                       <div className="flex items-center gap-6 text-right">
                          <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-amber-500/30 overflow-hidden" />
                          <div>
                             <h4 className="text-xl font-black italic">المعلمة رقم {i}</h4>
                             <p className="text-slate-500 text-xs font-bold italic">خبيرة لهجة مصرية - 5.0 تقييم</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <button className="p-4 bg-white/5 rounded-2xl text-amber-500 hover:bg-amber-500 hover:text-[#000814] transition-all"><Settings size={20}/></button>
                          <button className="p-4 bg-red-
