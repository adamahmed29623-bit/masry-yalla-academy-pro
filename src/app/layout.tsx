import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أكاديمية يلا مصري | Yalla Masry Academy",
  description: "بوابة الرقي والفخامة لتعليم اللهجة المصرية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* نستخدم خطوط النظام الأساسية لضمان السرعة القصوى مع الحفاظ على الأناقة */}
        <style>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #000814; /* الأسود الملكي العميق */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            overflow-x: hidden;
          }
          /* تأمين التدرج اللوني في حال تأخر ملف الـ CSS */
          .royal-bg {
            background: radial-gradient(circle at center, #001d3d 0%, #000814 100%);
            min-height: 100vh;
          }
        `}</style>
      </head>
      <body>
        <div className="royal-bg">
          {children}
        </div>
      </body>
    </html>
  );
}
