import React from "react";
import { motion } from "framer-motion";
import { Building2, Handshake } from "lucide-react";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.08 * i },
});

export default function Partners() {
  const partners = [
    "/images/partners/shinhan.png",
    "/images/partners/toss.png",
    "/images/partners/nhbank.png",
    "/images/partners/kakaopay.png",
    "/images/partners/naverpay.png",
    "/images/partners/payco.png",
    "/images/partners/coupang.png",
    "/images/partners/smartstore.png",
    "/images/partners/cafe24.png",
  ];

  return (
    <section
      id="partners"
      className="relative py-24 px-6 md:px-16 bg-[#f9f7ff] overflow-hidden"
    >
      {/* 🎨 배경 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f7f4ff] via-[#f3f0ff] to-[#faf8ff]" />
      <div className="absolute inset-0 -z-[5] bg-[radial-gradient(ellipse_at_60%_40%,rgba(124,58,237,0.05),transparent_70%)]" />

      {/* 헤더 */}
      <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#6d28d9] text-sm font-medium">
          <Building2 size={16} /> 함께하는 파트너
        </span>
        <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#1f1631] leading-snug">
          신뢰할 수 있는 <span className="text-[#7c3aed]">결제 생태계</span>
        </h2>
        <p className="mt-5 text-[#4b3a6b]/80 text-lg leading-relaxed">
          금융기관, 커머스, 기술기업과 함께  
          <br className="hidden sm:block" /> 안정적이고 투명한 결제 환경을 구축합니다.
        </p>
      </motion.div>

      {/* 🔁 3줄 슬라이드 */}
      <div className="flex flex-col gap-8 md:gap-10">
        {/* 1행 - 왼쪽 방향 */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-10 whitespace-nowrap opacity-90"
        >
          {[...partners, ...partners].map((src, i) => (
            <div
              key={`row1-${i}`}
              className="inline-flex items-center justify-center min-w-[150px] md:min-w-[180px] h-[70px] rounded-xl bg-white border border-[#e5dcfa] hover:shadow-[0_4px_16px_rgba(124,58,237,0.1)] transition-all"
            >
              <img
                src={src}
                alt={`partner-row1-${i}`}
                className="max-h-[36px] w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </motion.div>

        {/* 2행 - 오른쪽 방향 */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="hidden sm:flex gap-10 whitespace-nowrap opacity-90"
        >
          {[...partners, ...partners].map((src, i) => (
            <div
              key={`row2-${i}`}
              className="inline-flex items-center justify-center min-w-[150px] md:min-w-[180px] h-[70px] rounded-xl bg-white border border-[#e5dcfa] hover:shadow-[0_4px_16px_rgba(124,58,237,0.1)] transition-all"
            >
              <img
                src={src}
                alt={`partner-row2-${i}`}
                className="max-h-[36px] w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </motion.div>

        {/* 3행 - 왼쪽 방향 */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 33,
            repeat: Infinity,
            ease: "linear",
          }}
          className="hidden sm:flex gap-10 whitespace-nowrap opacity-90"
        >
          {[...partners, ...partners].map((src, i) => (
            <div
              key={`row3-${i}`}
              className="inline-flex items-center justify-center min-w-[150px] md:min-w-[180px] h-[70px] rounded-xl bg-white border border-[#e5dcfa] hover:shadow-[0_4px_16px_rgba(124,58,237,0.1)] transition-all"
            >
              <img
                src={src}
                alt={`partner-row3-${i}`}
                className="max-h-[36px] w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA 배너 */}
      <motion.div
        {...fadeUp(2)}
        className="max-w-5xl mx-auto mt-20 rounded-2xl border border-[#e2d8fa] bg-gradient-to-r from-[#ede9fe] to-[#faf8ff] p-8 md:p-10 text-center shadow-[0_8px_30px_rgba(124,58,237,0.05)]"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#6d28d9] text-sm mb-4">
          <Handshake size={14} /> PARTNERSHIP PROGRAM
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-[#1f1631] mb-3">
          SFIN PAY와 함께 성장할 파트너를 찾습니다
        </h3>
        <p className="text-[#4b3a6b]/80 text-base mb-6">
          제휴 금융기관, 플랫폼, SaaS 파트너로 등록하여  
          함께 시장을 확장하고 리워드를 공유하세요.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] hover:from-[#6d28d9] hover:to-[#9f6bff] text-white font-semibold transition-all shadow-[0_8px_20px_rgba(124,58,237,0.25)]"
        >
          제휴 문의하기 →
        </a>
      </motion.div>
    </section>
  );
}
