"use client";
import React, { useState } from 'react';
import { Crown, Calendar, User, Mail, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BookingPage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#000814] flex items-center justify-center p-6 text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <CheckCircle size={80} className="text-amber-500" />
          </div>
          <h2 className="text-4xl font-black italic text-white">تم استلام طلبكِ بنجاح</h2>
          <p className="text-slate-400 text-xl max-w-md mx-auto italic">ستتواصل معكِ إدارة الأكاديمية قريباً.</p>
          <button onClick={() => router.push('/')} className="mt-8 bg-amber-500 text-black px-10 py-4 rounded-full font-black text-lg">
            العودة للديوان العام
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000814] text-white p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-4xl font-black italic text-amber-500 flex items-center gap-3">
          <Calendar size={36} />
          ديوان الحجز
        </h1>
        <button onClick={() => router.push('/teachers')} className="text-slate-400 hover:text-white flex items-center gap-2">
          <ArrowRight size={20} />
          العودة للرواق
        </button>
      </div>

      {/* Booking Form */}
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-10 rounded-[3rem]">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-xs font-black uppercase text-amber-500">الاسم الكريم</label>
            <input required type="text" placeholder="نوف..." className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-amber-500 outline-none" />
          </div>

          <div className="space-y-3">
            <label className="text-xs font-black uppercase text-amber-500">البريد الإلكتروني</label>
            <input required type="email" placeholder="royal@example.com" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-amber-500 outline-none" />
          </div>

          <div className="md:col-span-2 space-y-3">
            <label className="text-xs font-black uppercase text-amber-500">رسالة خاصة</label>
            <textarea rows={4} placeholder="أهدافكِ التعليمية..." className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-amber-500 outline-none" />
          </div>

          <div className="md:col-span-2 pt-6">
            <button type="submit" className="w-full bg-amber-500 text-black py-6 rounded-3xl font-black text-2xl flex items-center justify-center gap-4">
              <Crown size={24} />
              تأكيد طلب الانضمام
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
