import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Briefcase,
  Award,
  Globe2,
  Target,
  Cpu,
  HeartHandshake,
  ShieldCheck,
  Rocket,
} from "lucide-react";

/**
 * 💎 SFIN PAY — Company Introduction (Natural Flow Edition)
 * --------------------------------------------------------
 * 목적: 문장 간 끊김을 없애고, 리듬감 있게 자연스럽게 읽히도록 조정
 */

export default function CompanyIntro() {
  useEffect(() => window.scrollTo(0, 0), []);

  const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, delay: 0.08 * i },
  });

  const milestones = [
    { year: "2021", title: "창립", desc: "‘투명한 결제 생태계’라는 비전과 함께 SFIN PAY 설립", icon: <Award size={28} /> },
    { year: "2022", title: "기술혁신", desc: "국내 최초 R+0(당일정산) 시스템 상용화", icon: <Cpu size={28} /> },
    { year: "2023", title: "확장기", desc: "F&B, 유통, 서비스, B2B 전반으로 결제 인프라 확장", icon: <Briefcase size={28} /> },
    { year: "2024", title: "신뢰확립", desc: "500여 가맹점과 40개 파트너사 협력 체계 구축", icon: <Globe2 size={28} /> },
    { year: "2025", title: "글로벌 진출", desc: "동남아 결제망 연동 및 ISO27001 인증 추진", icon: <Rocket size={28} /> },
  ];

  const values = [
    { icon: <Target size={26} />, title: "투명성", desc: "모든 거래의 과정을 기록하며, 신뢰를 기업의 가장 큰 자산으로 여깁니다." },
    { icon: <HeartHandshake size={26} />, title: "신뢰와 윤리", desc: "정직한 경영과 공정한 파트너십으로 지속 가능한 관계를 만듭니다." },
    { icon: <Cpu size={26} />, title: "기술혁신", desc: "AI 정산과 실시간 리스크 분석으로 금융의 효율을 새롭게 정의합니다." },
    { icon: <ShieldCheck size={26} />, title: "보안 우선", desc: "ISMS·KISA 인증 기반의 다층 보안 체계로 모든 결제를 안전하게 보호합니다." },
  ];

  const team = [
    { name: "김영빈", role: "CEO / Founder", desc: "핀테크 산업 10년 경력. 기술과 경영의 경계를 허물며 SFIN PAY를 이끌다." },
    { name: "박승주", role: "CTO", desc: "결제 인프라 및 보안 설계 전문가. 실시간 정산 엔진의 핵심 설계자." },
    { name: "이선호", role: "Head of Product", desc: "UX·UI 중심의 결제 경험 혁신 전략을 주도." },
    { name: "정유진", role: "Marketing Lead", desc: "브랜드 커뮤니케이션과 글로벌 PR을 총괄." },
  ];

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#1f1631] pt-32">
      {/* ───────────── HEADER ───────────── */}
      <section className="text-center py-24 px-6 md:px-16 bg-gradient-to-b from-[#f9f6ff] to-[#faf8ff] border-b border-[#e3dafc]">
        <motion.h1 {...fadeUp(0)} className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          <span className="text-[#7c3aed]">SFIN PAY</span> 소개
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg md:text-xl text-[#4b3a6b]/85 max-w-4xl mx-auto leading-snug"
        >
          우리는 <strong>결제와 정산의 본질을 새롭게 설계합니다.</strong>
          SFIN PAY는 신뢰를 바탕으로 한 <strong>투명한 금융 네트워크</strong>를 구축하는 기술 기업입니다.
          모든 거래의 흐름이 명확하게 보이고, 그 안에서 누구나 안심하고 거래할 수 있는 세상을 만듭니다.
        </motion.p>
      </section>

      {/* ───────────── VISION ───────────── */}
      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto text-center">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold mb-10 text-[#1f1631]">
          우리의 비전
        </motion.h2>
        <motion.p
          {...fadeUp(0.2)}
          className="text-[#4b3a6b]/85 text-lg leading-snug mb-12 max-w-4xl mx-auto"
        >
          SFIN PAY는 기술과 신뢰가 함께 움직이는 새로운 결제 생태계를 지향합니다.
          고객의 데이터는 단순한 숫자가 아니라, <strong>신뢰의 흐름</strong>이며
          우리는 그 흐름을 투명하고 공정하게 관리합니다.
          기술이 금융을 바꾸고, 신뢰가 시장을 성장시킨다는 믿음으로 매일 더 나은 구조를 만들어갑니다.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {values.map((v, i) => (
            <motion.div
              key={i}
              {...fadeUp(i)}
              className="p-8 bg-white border border-[#e2d6ff]/60 rounded-2xl hover:shadow-[0_0_25px_rgba(124,58,237,0.15)] transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-full bg-[#7c3aed]/10 text-[#7c3aed]">{v.icon}</div>
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="text-sm text-[#4b3a6b]/80 leading-snug">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── HISTORY ───────────── */}
      <section className="py-28 px-6 md:px-16 bg-gradient-to-b from-[#faf8ff] to-[#ffffff] border-t border-[#e3dafc]">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold mb-14 text-center text-[#1f1631]">
          성장의 여정
        </motion.h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              className="p-6 bg-white border border-[#dcd2fd] rounded-2xl text-center hover:shadow-[0_6px_25px_rgba(124,58,237,0.1)] transition-all"
            >
              <div className="flex justify-center mb-4 text-[#7c3aed]">{m.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{m.year}</h3>
              <p className="text-[#4b3a6b]/90 font-medium">{m.title}</p>
              <p className="text-[#4b3a6b]/70 text-sm mt-2 leading-snug">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── TEAM ───────────── */}
      <section className="py-28 px-6 md:px-16 bg-[#ffffff] border-t border-[#e3dafc] text-center">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold mb-12 text-[#1f1631]">
          함께하는 사람들
        </motion.h2>
        <motion.p
          {...fadeUp(0.2)}
          className="text-[#4b3a6b]/80 mb-16 max-w-4xl mx-auto leading-snug"
        >
          SFIN PAY의 팀은 기술, 금융, 디자인, 운영 등 다양한 분야의 전문가로 구성되어 있습니다.
          우리는 ‘안전한 결제’와 ‘효율적인 정산’을 실현하기 위해 끊임없이 실험하며 성장합니다.
          각자의 전문성이 하나로 어우러져 유기적인 흐름을 만들고, 그 흐름이 곧 우리의 신뢰가 됩니다.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {team.map((t, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              className="p-8 rounded-2xl bg-white border border-[#e2d6ff]/60 hover:shadow-[0_8px_25px_rgba(124,58,237,0.1)] transition-all"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8b5cf6]/20 to-[#d8b4fe]/30 mb-4 flex items-center justify-center text-[#7c3aed] font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-[#7c3aed] text-sm font-medium mb-2">{t.role}</p>
                <p className="text-[#4b3a6b]/80 text-sm leading-snug">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── CULTURE ───────────── */}
      <section className="py-28 px-6 md:px-16 bg-gradient-to-b from-[#f9f6ff] to-[#faf8ff] border-t border-[#e3dafc] text-center">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold mb-8 text-[#1f1631]">
          우리의 문화
        </motion.h2>
        <motion.p
          {...fadeUp(0.2)}
          className="text-[#4b3a6b]/85 max-w-4xl mx-auto mb-12 leading-snug"
        >
          우리는 <strong>수평적인 소통</strong>과 <strong>투명한 의사결정</strong>을 가장 중요한 가치로 생각합니다.
          빠르게 실행하면서도 서로의 생각을 존중하고,
          결과보다 <strong>과정의 진정성과 성장</strong>을 더 소중히 여깁니다.
          이런 문화가 SFIN PAY의 모든 서비스를 지탱하는 힘이 됩니다.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-20">
          {[
            "Remote-Friendly 근무제",
            "성과 기반 보상 구조",
            "기술 세미나 · 해커톤 정례화",
            "ESG 중심의 복지정책",
          ].map((c, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              className="px-6 py-3 bg-white border border-[#e3dafc] rounded-full text-sm font-medium text-[#4b3a6b]/90 hover:text-[#7c3aed] hover:shadow-md transition-all"
            >
              {c}
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.4)}>
          <Link
            to="/recruit"
            className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] hover:from-[#6d28d9] hover:to-[#9f6bff] text-white font-semibold text-lg shadow-[0_8px_25px_rgba(124,58,237,0.25)] transition-all"
          >
            채용 및 파트너 문의 →
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
