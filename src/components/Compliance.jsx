import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileText,
  LockKeyhole,
  Banknote,
  Scale,
  Building2,
  Network,
  ClipboardCheck,
} from "lucide-react";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.08 * i },
});

export default function Compliance() {
  return (
    <section
      id="compliance"
      className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#f8f7ff] to-[#f2f0fa] overflow-hidden"
    >
      {/* 헤더 */}
      <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] text-sm font-medium">
          <ShieldCheck size={16} /> 컴플라이언스 · 내부통제
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-[#1f1631] leading-tight">
          <span className="text-[#7c3aed]">신뢰 가능한 법적 기반</span> 위의
          <br className="hidden md:block" />
          투명한 결제 인프라
        </h2>
        <p className="mt-5 text-[#4b3a6b]/80 text-lg leading-relaxed">
          SFIN PAY는 전자금융거래법과 여신전문금융업법을 비롯한
          모든 금융 보안 규제를 철저히 준수합니다.
          데이터 보호와 리스크 통제를 결제 인프라에 내재화했습니다.
        </p>
      </motion.div>

      {/* 인증/법규 5그리드 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: <LockKeyhole />,
            title: "ISMS & 개인정보보호",
            desc: "ISMS 인증 및 정기 보안 점검으로 데이터 보호 체계 강화.",
          },
          {
            icon: <FileText />,
            title: "전자금융거래법 준수",
            desc: "결제, 정산, 예치금 관리를 법정 규제체계에 맞게 운영.",
          },
          {
            icon: <Banknote />,
            title: "여신전문금융업법 대응",
            desc: "가맹점 대금 정산 및 결제대행 업무의 법적 요건 충족.",
          },
          {
            icon: <Scale />,
            title: "리스크 및 차지백 관리",
            desc: "거래이력, 보류·한도, 패턴 분석을 통한 실시간 리스크 통제.",
          },
          {
            icon: <ShieldCheck />,
            title: "데이터 암호화 & 로깅",
            desc: "PAN 토큰화, TLS 1.3, AES256, 접근 로그 자동 보존.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            {...fadeUp(i + 1)}
            className="group relative rounded-2xl border border-[#e2d6ff]/60 bg-[#fdfcff] p-6 hover:shadow-[0_8px_25px_rgba(124,58,237,0.15)] transition-all duration-500"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#7c3aed]/10 text-[#7c3aed]">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2d1b55]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#4b3a6b]/80">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 내부통제 다이어그램 */}
      <motion.div {...fadeUp(6)} className="max-w-4xl mx-auto mt-24 text-center">
        <h3 className="text-2xl font-bold text-[#2d1b55] mb-10">
          SFIN PAY의 <span className="text-[#7c3aed]">내부통제 3단계 체계</span>
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {[
            { icon: <Network size={28} />, label: "1단계 : 자동 리스크 감시" },
            { icon: <ClipboardCheck size={28} />, label: "2단계 : 내부 감사·검증" },
            { icon: <Building2 size={28} />, label: "3단계 : 외부 법률·회계 자문" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-3 bg-white p-6 rounded-xl border border-[#e2d6ff] shadow-[0_6px_20px_rgba(124,58,237,0.08)] w-[220px]"
            >
              <div className="p-3 rounded-full bg-[#8b5cf6]/10 text-[#7c3aed]">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-[#2d1b55]">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 하단 CTA */}
      <motion.div
        {...fadeUp(8)}
        className="text-center max-w-3xl mx-auto mt-20 rounded-2xl border border-[#e2d6ff] bg-gradient-to-r from-[#f3ecff] to-[#ffffff] p-10 shadow-[0_6px_25px_rgba(124,58,237,0.08)]"
      >
        <p className="text-[#4b3a6b]/80 text-lg mb-6 leading-relaxed">
          모든 데이터와 정산 내역은 암호화되어 저장되며,
          내부 감사 결과는 주기적으로 외부 기관에 공개됩니다.
          SFIN PAY는 <b>투명성과 법적 신뢰</b>를 결제 서비스의 핵심으로 둡니다.
        </p>
        <Link
          to="/transparency-report"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] hover:from-[#6d28d9] hover:to-[#9f6bff] text-white font-semibold shadow-[0_8px_20px_rgba(124,58,237,0.25)] transition-all"
        >
          투명경영 보고서 보기
        </Link>
      </motion.div>
    </section>
  );
}
