import type { Metadata } from "next";
import "./globals.css";

// معلومات الأكاديمية للمتصفحات (SEO الملكي)
export const metadata: Metadata = {
  title: "أكاديمية يلا مصري | العراقة والرقي",
  description: "المنصة الأولى لتعليم اللهجة المصرية بأسلوب ملوكي فاخر",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* إضافة خطوط ملكية لضمان مظهر احترافي */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Cairo:wght@200..1000&display=swap" rel="stylesheet" />
      </head>
      <body 
        style={{ 
          margin: 0, 
          padding: 0, 
          minHeight: '100vh',
          background: '#000814' // اللون الأسود العميق لضمان عدم ظهور بياض أثناء التحميل
        }}
      >
        {/* الحاوية الرئيسية التي تضمن تطبيق الألوان في كل الصفحات */}
        <div className="royal-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
