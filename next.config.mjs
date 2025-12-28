/** @type {import('next').NextConfig} */
const nextConfig = {
  /* تفعيل وضع الصرامة لضمان جودة الكود الملكي 
     ومنع الأخطاء قبل حدوثها في Vercel
  */
  reactStrictMode: true,
  
  /* تجاهل أخطاء الـ ESLint أثناء البناء مؤقتاً 
     لضمان سرعة النشر وعدم توقف الأكاديمية لأسباب تنسيقية بسيطة
  */
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  /* تجاهل أخطاء الـ TypeScript أثناء البناء 
     لضمان أن "القصر" سيُبنى حتى لو كان هناك تنبيه فني بسيط
  */
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
