import React from "react";
import { motion } from "framer-motion";
import { FileCheck2, Settings, CreditCard, Rocket } from "lucide-react";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.08 * i },
});

export default function API() {
  const steps = [
    {
      icon: <FileCheck2 size={28} />,
      title: "간편 가입",
      desc: "사업자 등록증과 계좌 정보만 입력하면 바로 계약이 완료됩니다.",
    },
    {
      icon: <Settings size={28} />,
      title: "환경 설정",
      desc: "결제 수단, 정산 주기, 수수료 정책을 선택해 맞춤형으로 세팅합니다.",
    },
    {
      icon: <CreditCard size={28} />,
      title: "결제 시작",
      desc: "등록 즉시 카드, 계좌이체, 간편결제가 활성화되어 운영이 시작됩니다.",
    },
  ];

  return (
    <section
      id="api"
      className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#f8f7ff] to-[#f3f1fa]"
    >
      {/* 헤더 */}
      <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] text-sm font-medium">
          <Rocket size={16} /> 도입 절차
        </span>
        <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#1f1631] leading-tight">
          누구나 바로 사용할 수 있는  
          <br /> <span className="text-[#7c3aed]">결제 인프라</span>
        </h2>
        <p className="mt-5 text-[#4b3a6b]/80 text-lg leading-relaxed">
          복잡한 서류나 별도 시스템 없이,  
          <br /> 가입부터 결제 운영까지 단 하루면 충분합니다.
        </p>
      </motion.div>

      {/* 3단계 카드 */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            {...fadeUp(i + 1)}
            className="text-center rounded-2xl border border-[#e2d6ff] bg-white/90 p-8 shadow-[0_8px_25px_rgba(124,58,237,0.08)] hover:shadow-[0_12px_35px_rgba(124,58,237,0.12)] transition-all"
          >
            <div className="flex justify-center mb-4 text-[#7c3aed]">{step.icon}</div>
            <h3 className="text-xl font-semibold text-[#1f1631] mb-2">{step.title}</h3>
            <p className="text-[#4b3a6b]/80 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 안내 문구 */}
      <motion.div {...fadeUp(4)} className="max-w-3xl mx-auto text-center mt-16">
        <p className="text-[#4b3a6b]/80 text-lg leading-relaxed">
          SFIN PAY는 가맹점 등록, 정산 관리, 결제 모듈 제공을 하나의 프로세스로 통합했습니다.  
          별도 구축 없이, 안정적이고 빠르게 운영을 시작할 수 있습니다.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div {...fadeUp(5)} className="text-center mt-12">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] hover:from-[#6d28d9] hover:to-[#9f6bff] text-white font-semibold shadow-[0_8px_20px_rgba(124,58,237,0.25)] transition-all"
        >
          도입 상담 신청하기
        </a>
      </motion.div>
    </section>
  );
}
