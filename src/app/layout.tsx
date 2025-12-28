import type { Metadata } from "next";
import { Inter, Amiri } from "next/font/google"; // دمج خط عصري مع خط عربي أصيل
import "./globals.css";

// إعداد الخطوط الملكية
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const amiri = Amiri({ 
  subsets: ["arabic"], 
  weight: ["400", "700"], 
  variable: "--font-amiri" 
});

export const metadata: Metadata = {
  title: "أكاديمية يلا مصري | Yalla Masry Academy",
  description: "المنصة الإمبراطورية لتعليم اللهجة المصرية والرقي الثقافي للملكات والبراعم",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${inter.variable} ${amiri.variable} font-sans antialiased bg-[#000814] text-white`}
      >
        {/* تأثير الوهج الذهبي الثابت في الخلفية ليعطي عمقاً فخماً لكل الصفحات */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-500/5 rounded-full blur-[120px]" />
        </div>

        {/* محتوى الصفحة الرئيسي */}
        <div className="relative z-10">
          {children}
        </div>

        {/* تذييل بسيط مخفي يظهر في الطباعة أو الأرشفة */}
        <footer className="sr-only">
          جميع الحقوق محفوظة لأكاديمية يلا مصري 2025 ©
        </footer>
      </body>
    </html>
  );
}
