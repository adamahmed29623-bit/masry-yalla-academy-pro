"use client";
import React from 'react';
import { Crown, User, Mail, Lock, Phone, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-transparent overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Crown className="absolute -bottom-40 -left-40 text-amber-500" size={500} />
      </div>

      <div className="w-full max-w-xl bg-white/5 border border-amber-500/10 p-12 rounded-[4rem] backdrop-blur-2xl shadow-2xl relative z-10">
        <div className="text-center mb-12">
          <Crown className="mx-auto text-amber-500 mb-4" size={56} />
          <h1 className="text-4xl font-black italic">طلب انتساب ملكي</h1>
          <p className="text-slate-400 mt-2 italic font-medium text-sm">انضمي لنخبة الطالبات في عالم 'يلا مصري'</p>
        </div>

        <form className="space-y-5">
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-amber-500" size={18} />
            <input type="text" placeholder="الاسم الكريم" className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-2xl outline-none focus:border-amber-500 transition-all text-white font-bold" />
          </div>

          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-amber-500" size={18} />
            <input type="email" placeholder="البريد الإلكتروني" className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-2xl outline-none focus:border-amber-500 transition-all text-white font-bold" />
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-amber-500" size={18} />
            <input type="password" placeholder="كلمة المرور السرية" className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-2xl outline-none focus:border-amber-500 transition-all text-white font-bold" />
          </div>

          <button className="w-full bg-amber-500 text-black py-5 rounded-2xl font-black text-xl hover:scale-[1.03] transition-all shadow-[0_10px_30px_rgba(255,195,0,0.3)] mt-8">
            تقديم الطلب الآن
          </button>
        </form>

        <p className="text-center mt-8 text-slate-500 text-sm font-medium">
          لديكِ حساب بالفعل؟ 
          <button onClick={() => router.push('/login')} className="text-amber-500 font-black mr-2 hover:underline">دخول الصفوة</button>
        </p>
      </div>
    </div>
  );
}
