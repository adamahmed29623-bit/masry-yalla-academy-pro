"use client";
import React, { useEffect } from 'react';

export default function HomePage() {
  // تفعيل الأيقونات فور تحميل الصفحة
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center" style={{ background: 'radial-gradient(circle, #001d3d 0%, #000814 100%)' }}>
      
      <div className="mb-8">
        {/* نستخدم الأيقونات هنا بأسماء بسيطة وستتحول لتيجان ذهبية */}
        <i data-lucide="crown" style={{ width: '80px', height: '80px', color: '#ffc300' }}></i>
      </div>

      <h1 className="text-6xl font-black italic text-white mb-4">أكاديمية يلا مصري</h1>
      <p className="text-[#ffc300] text-xl font-bold tracking-widest italic mb-10">بوابة "نوف" للرقي المصري</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl px-6">
        <button className="bg-white/5 border border-amber-500/20 p-6 rounded-3xl flex items-center gap-4 hover:bg-amber-500/10 transition-all">
          <i data-lucide="graduation-cap" style={{ color: '#ffc300' }}></i>
          <span className="text-xl font-bold">رواق المعلمات</span>
        </button>
        
        <button className="bg-white/5 border border-amber-500/20 p-6 rounded-3xl flex items-center gap-4 hover:bg-amber-500/10 transition-all">
          <i data-lucide="trophy" style={{ color: '#ffc300' }}></i>
          <span className="text-xl font-bold">ديوان التحديات</span>
        </button>
      </div>
    </div>
  );
}
