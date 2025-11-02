import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const scrollToFeatures = () => {
    const section = document.getElementById("features");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ──────────────── HERO SECTION ──────────────── */}
      <motion.section
        ref={ref}
        className="relative flex flex-col lg:flex-row items-center justify-between min-h-[90vh] bg-[#faf8ff] overflow-hidden"
        style={{ opacity, y }}
      >
        {/* 🌈 Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f9f6ff] via-[#f4f0ff] to-[#faf8ff]" />
        <div className="absolute inset-0 -z-[5] bg-[radial-gradient(ellipse_at_70%_20%,rgba(124,58,237,0.08),transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(192,132,252,0.08),transparent_60%)]" />

        {/* 🧾 Text Block */}
        <div className="z-10 w-full lg:w-1/2 px-8 md:px-16 lg:px-24 py-24 lg:py-0 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#1f1631] tracking-tight break-keep"
          >
            <span className="block mb-3 text-[#6d28d9] text-lg md:text-xl font-semibold">
              신뢰로 연결되는 결제 경험
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#a78bfa] drop-shadow-sm">
              비즈니스를 성장시키는<br className="hidden md:block" /> 통합 결제 플랫폼
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-base sm:text-lg text-[#4b3a6b]/90 leading-relaxed max-w-md mx-auto lg:mx-0 break-keep"
          >
            SFIN PAY는 <strong>보안, 안정성, 확장성</strong>을 기반으로
            온라인과 오프라인을 아우르는 결제 환경을 제공합니다.
            모든 거래를 투명하고 신뢰 있게.
          </motion.p>

          {/* CTA 버튼 */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Link to="/inquiry/general">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="px-8 py-4 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-lg shadow-md transition"
              >
                무료로 시작하기 →
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={scrollToFeatures}
              className="px-8 py-4 rounded-xl border border-[#7c3aed]/30 hover:border-[#7c3aed] text-[#1f1631] font-medium text-lg transition"
            >
              기능 보기
            </motion.button>
          </div>

          {/* 📱 Mobile Image */}
          <div className="lg:hidden mt-14 flex justify-center">
            <img
              src="/images/hero/mobile-hero.jpg"
              alt="SFIN PAY 모바일 결제"
              className="w-4/5 max-w-[320px] rounded-2xl shadow-[0_8px_30px_rgba(124,58,237,0.2)] object-cover"
            />
          </div>
        </div>

        {/* 💎 Desktop Visual */}
        <div className="relative hidden lg:flex w-1/2 justify-center items-center">
          <div className="relative w-[540px] h-[420px]">
            <motion.img
              src="/images/hero/terminal.jpg"
              alt="결제 단말기"
              className="absolute top-0 left-0 w-[300px] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] object-cover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, -5, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />

            <motion.img
              src="/images/hero/dashboard-card.png"
              alt="매출 그래프"
              className="absolute top-8 right-0 w-[260px] rounded-2xl border border-white/40 bg-white/60 backdrop-blur-md shadow-[0_8px_25px_rgba(124,58,237,0.15)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            <motion.img
              src="/images/hero/store-owner.jpg"
              alt="가맹점 사장님"
              className="absolute bottom-0 left-[50px] w-[260px] rounded-2xl border border-white/40 shadow-[0_10px_35px_rgba(167,139,250,0.2)] object-cover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: [1, 1.03, 1] }}
              transition={{
                delay: 1.5,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 right-4 bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-[0_8px_20px_rgba(124,58,237,0.25)]"
            >
              보안 인증 PCI-DSS 적용 🔒
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
