import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Headphones,
  Users,
  HeartHandshake,
  CreditCard,
  ClipboardCheck,
  Building2,
  ArrowRight,
  Wallet, // ✅ 이 줄 추가!
} from "lucide-react";

export default function Service() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMounted(true);
  }, []);

  const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, delay: i * 0.1 },
  });

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#1f1631] pt-32">
      {/* 헤더 */}
      <section className="text-center py-20 px-6 md:px-16 bg-gradient-to-b from-[#f9f6ff] to-[#faf8ff]">
        <motion.h1
          {...fadeUp(0)}
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          서비스업 결제 관리,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#9f6bff]">
            고객 응대보다 쉬워집니다
          </span>
        </motion.h1>
        <motion.p
          {...fadeUp(0.3)}
          className="text-lg md:text-xl text-[#4b3a6b]/80 max-w-3xl mx-auto leading-relaxed"
        >
          미용실, 병원, 학원, 피트니스 등 다양한 서비스업 매출을 한눈에. <br />
          예약, 결제, 정산이 자동으로 연결되어 시간과 인력을 절약하세요.
        </motion.p>
      </section>

      {/* ✨ 결제 흐름 시각화 */}
      <section className="py-24 px-6 md:px-16 bg-[#f4f0ff] relative overflow-hidden">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-center mb-12">
          서비스 결제 흐름 한눈에 보기
        </motion.h2>

        <motion.div
          {...fadeUp(0.2)}
          className="flex flex-col md:flex-row justify-center items-center gap-8 text-center"
        >
          {/* 예약 접수 */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-2xl bg-white border border-[#c4b5fd]/50 flex items-center justify-center text-[#7c3aed] text-3xl shadow-md">
              <ClipboardCheck />
            </div>
            <p className="font-semibold mt-2">예약 접수</p>
            <p className="text-sm text-[#4b3a6b]/70">고객 예약 등록</p>
          </div>

          <ArrowRight className="text-[#7c3aed] w-10 h-10 hidden md:block" />

          {/* 결제 진행 */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#7c3aed] to-[#9f6bff] shadow-[0_0_25px_rgba(124,58,237,0.25)] flex items-center justify-center text-white text-3xl">
              <CreditCard />
            </div>
            <p className="font-semibold mt-2">결제 진행</p>
            <p className="text-sm text-[#4b3a6b]/70">QR · 온라인 자동결제</p>
          </div>

          <ArrowRight className="text-[#7c3aed] w-10 h-10 hidden md:block" />

          {/* 고객 관리 */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-2xl bg-white border border-[#c4b5fd]/50 flex items-center justify-center text-[#7c3aed] text-3xl shadow-md">
              <Users />
            </div>
            <p className="font-semibold mt-2">고객 관리</p>
            <p className="text-sm text-[#4b3a6b]/70">방문 · 결제 이력 확인</p>
          </div>

          <ArrowRight className="text-[#7c3aed] w-10 h-10 hidden md:block" />

          {/* 정산 완료 */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-2xl bg-white border border-[#c4b5fd]/50 flex items-center justify-center text-[#7c3aed] text-3xl shadow-md">
              <Wallet />
            </div>
            <p className="font-semibold mt-2">정산 완료</p>
            <p className="text-sm text-[#4b3a6b]/70">R+0 · R+1 정산 자동처리</p>
          </div>
        </motion.div>

        <motion.p
          {...fadeUp(0.4)}
          className="text-center mt-10 text-[#4b3a6b]/70 max-w-3xl mx-auto leading-relaxed"
        >
          예약 → 결제 → 정산까지 완전 자동화.  
          고객 관리와 회계가 하나의 시스템으로 통합됩니다.
        </motion.p>
      </section>

      {/* 주요 기능 */}
      <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto space-y-20">
        <motion.div {...fadeUp(0)} className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-[#1f1631]">
            💡 서비스업을 위한 스마트 기능
          </h2>
          <p className="text-[#4b3a6b]/80">
            고객 예약부터 결제, 정산까지 단일 화면에서 해결하세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <Headphones size={28} />,
              title: "고객 상담 · 예약 관리",
              desc: "고객 예약 내역과 결제 상태를 한눈에 관리할 수 있습니다.",
            },
            {
              icon: <CreditCard size={28} />,
              title: "자동 결제 링크 생성",
              desc: "고객별로 맞춤형 결제 링크를 전송해 손쉬운 결제를 유도합니다.",
            },
            {
              icon: <HeartHandshake size={28} />,
              title: "고객 충성도 관리",
              desc: "결제 이력을 기반으로 포인트 적립, 멤버십 혜택을 운영하세요.",
            },
            {
              icon: <Building2 size={28} />,
              title: "본사 통합 정산 대시보드",
              desc: "지점별 매출과 정산 현황을 실시간으로 확인할 수 있습니다.",
            },
            {
              icon: <Wallet size={28} />,
              title: "R+0 / R+1 정산 시스템",
              desc: "결제 당일 또는 익일 정산으로 빠른 현금 흐름을 유지합니다.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.15)}
              className="p-8 bg-white border border-[#c4b5fd]/40 rounded-2xl hover:shadow-[0_0_25px_rgba(124,58,237,0.15)] transition-all"
            >
              <div className="flex items-center gap-3 text-[#7c3aed] mb-4">
                {f.icon}
                <h3 className="text-xl font-semibold text-[#1f1631]">
                  {f.title}
                </h3>
              </div>
              <p className="text-[#4b3a6b]/80 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-tr from-[#f4e8ff] to-[#ede3ff] text-center">
        <motion.h2
          {...fadeUp(0)}
          className="text-4xl font-bold text-[#1f1631] mb-4"
        >
          서비스업 매출 관리도{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#9f6bff]">
            SFIN PAY 하나로
          </span>
        </motion.h2>
        <motion.p
          {...fadeUp(0.2)}
          className="text-[#4b3a6b]/90 text-lg mb-10 leading-relaxed"
        >
          예약, 결제, 정산, 고객관리를 모두 자동화하세요. <br />
          사장님은 서비스 품질 향상에만 집중하시면 됩니다.
        </motion.p>

        {/* ✅ 상담 페이지 이동 */}
        <Link to="/inquiry/contract">
          <motion.button
            {...fadeUp(0.4)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-lg shadow-md transition-all"
          >
            도입 상담 받기 →
          </motion.button>
        </Link>
      </section>
    </div>
  );
}
