import React from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  HandCoins,
  FileSignature,
  Code2,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.08 * i },
});

export default function Inquiry() {
  const inquiries = [
    {
      icon: <CreditCard size={26} />,
      title: "정산 관련 문의",
      desc: "정산 일정, 금액 확인, 입금 내역 등 정산 관련 문의를 남겨주세요.",
      path: "/inquiry/settlement",
    },
    {
      icon: <HandCoins size={26} />,
      title: "매출 기반 단기자금 문의",
      desc: "정산 예정금 기반 단기 유동성 지원 및 한도 조건 안내를 받으세요.",
      path: "/inquiry/liquidity",
    },
    {
      icon: <FileSignature size={26} />,
      title: "가맹 계약 / 수수료 협의",
      desc: "신규 가맹 등록, 수수료 조정, 서비스 계약 관련 상담을 진행합니다.",
      path: "/inquiry/contract",
    },
    {
      icon: <Code2 size={26} />,
      title: "시스템 연동 / 기술 지원",
      desc: "API, 결제 모듈, 웹훅 연동 및 개발 환경 관련 기술 문의.",
      path: "/inquiry/integration",
    },
    {
      icon: <MessageSquare size={26} />,
      title: "일반 / 제휴 문의",
      desc: "광고, 제휴, 기타 일반적인 문의사항은 이곳에 남겨주세요.",
      path: "/inquiry/general",
    },
  ];

  return (
    <section
      id="inquiry"
      className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#f8f7ff] via-[#f5f2ff] to-[#f1effa]"
    >
      {/* 헤더 */}
      <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] text-sm font-medium">
          📨 문의 센터
        </span>
        <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#1f1631] leading-tight">
          어떤 도움이 필요하신가요?
        </h2>
        <p className="mt-5 text-[#4b3a6b]/80 text-lg leading-relaxed">
          아래 항목 중 문의 유형을 선택하시면 맞춤형 상담 페이지로 이동합니다.
        </p>
      </motion.div>

      {/* 문의 카드 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {inquiries.map((q, i) => (
          <motion.div
            key={i}
            {...fadeUp(i + 1)}
            className="group relative rounded-2xl border border-[#e3dafc] bg-white/90 p-6 hover:shadow-[0_8px_25px_rgba(124,58,237,0.12)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#7c3aed]/10 text-[#7c3aed]">
                {q.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1f1631] mb-1">
                  {q.title}
                </h3>
                <p className="text-sm text-[#4b3a6b]/80 leading-relaxed">
                  {q.desc}
                </p>
              </div>
            </div>
            <div className="mt-5 text-right">
              <Link
                to={q.path}
                className="inline-flex items-center gap-1 text-[#7c3aed] font-semibold hover:underline"
              >
                문의하기 <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 하단 문구 */}
      <motion.div {...fadeUp(6)} className="text-center max-w-2xl mx-auto mt-20">
        <p className="text-[#4b3a6b]/70 text-sm leading-relaxed">
          모든 문의 내용은 암호화되어 안전하게 전송되며, 영업일 기준 24시간 이내 회신됩니다.
        </p>
      </motion.div>
    </section>
  );
}
