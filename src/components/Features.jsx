import React from "react";
import { motion } from "framer-motion";
import {
  Clock3,
  CreditCard,
  LineChart,
  PiggyBank,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.06 * i },
});

export default function Features() {
  const features = [
    {
      icon: <Clock3 size={22} />,
      title: "15분 정산 시스템",
      desc: "결제 후 최대 15분 이내 입금. 빠른 현금 흐름으로 자금 압박 없이 운영 가능.",
    },
    {
      icon: <CreditCard size={22} />,
      title: "모든 결제수단 지원",
      desc: "카드, 계좌이체, 간편결제, QR결제까지 한 번의 계약으로 통합 처리.",
    },
    {
      icon: <PiggyBank size={22} />,
      title: "낮은 수수료 구조",
      desc: "PG사 평균 대비 최대 20% 절감. 거래량이 많을수록 자동 할인 적용.",
    },
    {
      icon: <LineChart size={22} />,
      title: "매출 분석 리포트",
      desc: "일/주/월 단위 매출 추이와 정산 로그를 실시간으로 확인 가능.",
    },
    {
      icon: <Headphones size={22} />,
      title: "전담 매니저 지원",
      desc: "가맹점별 담당 매니저 배정. 정산, 리스크, 수수료 상담까지 원스톱 지원.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "보안 및 규제 완벽 대응",
      desc: "전자금융거래법, ISMS, 개인정보보호법 등 국내 보안 기준 100% 충족.",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#faf8ff] via-[#f4f0ff] to-[#ffffff] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_30%,rgba(124,58,237,0.06),transparent_70%)]" />

      {/* 헤더 */}
      <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#6d28d9] text-sm font-medium">
          🌟 주요 혜택
        </span>
        <h2 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight text-[#1f1631]">
          가맹점을 위한  
          <br className="hidden sm:block" />
          <span className="text-[#7c3aed]">결제 · 정산 올인원 서비스</span>
        </h2>
        <p className="mt-5 text-[#4b3a6b]/80 text-lg leading-relaxed">
          번거로운 계약 절차나 기술 지식 없이도,  
          <br className="hidden sm:block" /> 결제부터 정산, 리포트까지 한 번에 관리할 수 있습니다.
        </p>
      </motion.div>

      {/* 혜택 카드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            {...fadeUp(i + 1)}
            whileHover={{ scale: 1.03 }}
            className="group relative rounded-2xl border border-[#e1d8f9] bg-white/90 hover:bg-[#f4edff]/70 transition-all duration-300 shadow-[0_4px_16px_rgba(124,58,237,0.05)] hover:shadow-[0_8px_24px_rgba(124,58,237,0.1)] p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#7c3aed]/10 text-[#6d28d9] group-hover:bg-[#7c3aed]/20">
                {f.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1f1631] mb-1">
                  {f.title}
                </h3>
                <p className="text-sm text-[#4b3a6b]/80 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 하단 CTA */}
      <motion.div
        {...fadeUp(8)}
        className="max-w-5xl mx-auto mt-20 text-center rounded-2xl border border-[#e0d4fa] bg-gradient-to-r from-[#ede9fe] to-[#faf8ff] p-10 shadow-[0_8px_30px_rgba(124,58,237,0.05)]"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-[#1f1631] mb-3">
          수수료, 정산, 보안 — 모두 한 곳에서
        </h3>
        <p className="text-[#4b3a6b]/80 text-base mb-6">
          5분 만에 가입 절차를 완료하고, 내일부터 바로 결제를 시작하세요.
        </p>

        {/* 🔗 스크롤 이동 링크 (API 섹션으로 부드럽게 이동) */}
        <ScrollLink
          to="api"
          smooth={true}
          duration={600}
          offset={-80}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl cursor-pointer bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] hover:from-[#6d28d9] hover:to-[#9f6bff] text-white font-semibold transition-all shadow-[0_8px_20px_rgba(124,58,237,0.25)]"
        >
          가입 절차 안내 →
        </ScrollLink>
      </motion.div>
    </section>
  );
}
