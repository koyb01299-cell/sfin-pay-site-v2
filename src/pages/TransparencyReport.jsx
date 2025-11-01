import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Users,
  CheckCircle,
  Globe2,
  Lock,
  Scale,
  Building2,
  Server,
  Handshake,
  BarChart3,
  Target,
  Lightbulb,
  HeartHandshake,
  BookOpen,
  Layers,
  Download,
} from "lucide-react";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: 0.08 * i },
});

export default function TransparencyReport() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#1f1631] pt-32 pb-24">
      {/* ──────────────────────── ① HEADER SECTION ──────────────────────── */}
      <section className="text-center px-6 md:px-16 py-24 bg-gradient-to-b from-[#f9f6ff] to-[#faf8ff] border-b border-[#e3dafc]">
        <motion.h1
          {...fadeUp(0)}
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          SFIN PAY{" "}
          <span className="text-[#7c3aed]">투명경영 보고서 2025</span>
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg md:text-xl text-[#4b3a6b]/80 max-w-3xl mx-auto leading-relaxed"
        >
          기술 혁신이 아닌 <strong>신뢰의 인프라</strong>를 만드는 것,
          그것이 SFIN PAY의 존재 이유입니다.
          본 보고서는 회사의 경영 철학, 법규 준수, 보안 및 ESG 활동 전반을
          외부 감사 기준에 맞추어 투명하게 공개합니다.
        </motion.p>
      </section>

      {/* ──────────────────────── ② 경영 철학 SECTION ──────────────────────── */}
      <section className="py-24 px-6 md:px-16 bg-white border-b border-[#e6defd]">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#1f1631]"
        >
          경영철학 · 윤리헌장
        </motion.h2>

        <motion.div
          {...fadeUp(0.2)}
          className="max-w-5xl mx-auto text-[#4b3a6b]/90 leading-relaxed space-y-6 text-[15.5px]"
        >
          <p>
            <b>SFIN PAY의 핵심 가치는 ‘투명성·공정성·책임’</b>입니다.
            우리는 결제 데이터와 금융정보를 다루는 기업으로서
            모든 의사결정 과정에서 법규 준수와 윤리적 판단을 최우선으로 합니다.
          </p>

          <p>
            임직원은 고객 데이터 보호와 정직한 재무 보고를 기업 사명으로 여기며,
            부당한 이익 추구나 불공정 관행을 엄격히 금지합니다.
            모든 비즈니스 파트너는 동등한 정보 접근권을 보장받으며,
            계약 및 정산 프로세스는 표준화된 내부 시스템으로 관리됩니다.
          </p>

          <p>
            또한 SFIN PAY는 ‘금융 플랫폼의 사회적 책임’을 이행하기 위해
            ESG 원칙과 윤리 경영을 결제 시스템 디자인 단계부터 반영합니다.
            기술은 수단이며, <strong>투명성과 신뢰는 결제 생태계의 핵심 기반</strong>입니다.
          </p>
        </motion.div>

        {/* 3대 경영이념 카드 */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {[
            {
              icon: <Target size={28} />,
              title: "고객 신뢰 우선",
              desc: "모든 정책과 결정은 고객 신뢰 유지를 최우선 목표로 합니다. 데이터 활용 및 결제 정책은 이 가치를 해치지 않는 범위 내에서만 운용됩니다.",
            },
            {
              icon: <Lightbulb size={28} />,
              title: "혁신 과 투명성의 조화",
              desc: "혁신은 기술 속도가 아닌 투명한 검증 과정을 통해 완성됩니다. 모든 신규 서비스는 보안·법무 검토 후 공개됩니다.",
            },
            {
              icon: <HeartHandshake size={28} />,
              title: "사회적 책임 경영",
              desc: "SFIN PAY는 금융 접근성이 낮은 계층에도 공정한 결제 환경을 제공하며, 지역사회 상생 프로그램을 지속적으로 운영합니다.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className="p-8 rounded-2xl border border-[#e2d6ff]/60 bg-[#fafaff] hover:shadow-[0_8px_25px_rgba(124,58,237,0.12)] transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-[#7c3aed]/10 text-[#7c3aed]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#2d1b55]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4b3a6b]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──────────────────────── ③ 5대 투명경영 원칙 SECTION ──────────────────────── */}
      <section className="py-28 px-6 md:px-16 bg-gradient-to-b from-[#faf8ff] to-[#ffffff]">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-[#1f1631]"
        >
          SFIN PAY의 5대 투명경영 원칙
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <ShieldCheck size={26} />,
              title: "① 법규 및 윤리 준수",
              desc1: "전자금융거래법, 개인정보보호법, 여신전문금융업법 등 핵심 금융 법규를 완벽히 준수합니다.",
              desc2: "내부 법무팀 및 외부 자문 위원회가 모든 계약 및 신규 서비스를 사전 검토하여 법적 위험을 최소화합니다.",
            },
            {
              icon: <FileText size={26} />,
              title: "② 정보 공개 및 내부 보고 체계",
              desc1: "결제·정산·보안 로그 등 주요 지표를 분기별로 사내 포털과 투자자 IR 채널에 공개합니다.",
              desc2: "내부 감사팀은 데이터 무결성 검증 결과를 대표이사 직속 리스크위원회에 보고합니다.",
            },
            {
              icon: <Users size={26} />,
              title: "③ 이해관계자 공정성",
              desc1: "모든 가맹점 및 제휴사는 동일한 기준의 수수료 정책과 정보 접근 권한을 보장받습니다.",
              desc2: "계약 체결 과정은 내부 전자결재 시스템으로 기록되어 조작 및 차별이 불가능합니다.",
            },
            {
              icon: <CheckCircle size={26} />,
              title: "④ 리스크 예방 및 감시",
              desc1: "AI 기반 이상 거래 탐지 시스템을 운용하여 부정 거래·차지백 리스크를 실시간 탐지합니다.",
              desc2: "이상 패턴 발생 시 자동 정산보류 → 인공지능 분류 → 인간 검토 단계를 거쳐 최종 판단합니다.",
            },
            {
              icon: <Globe2 size={26} />,
              title: "⑤ ESG 및 사회적 책임 경영",
              desc1: "탄소중립 데이터센터, 윤리교육, 소상공인 지원 등 ESG 정책을 통합적으로 시행합니다.",
              desc2: "지속가능경영 위원회는 매년 성과 보고서를 발간하여 외부 감사 기관에 제출합니다.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className="group p-8 rounded-2xl border border-[#e2d6ff]/60 bg-white hover:shadow-[0_8px_25px_rgba(124,58,237,0.15)] transition-all duration-500"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="p-3 rounded-full bg-[#7c3aed]/10 text-[#7c3aed]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2d1b55]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4b3a6b]/80">{item.desc1}</p>
                <p className="text-sm text-[#4b3a6b]/80">{item.desc2}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* ──────────────────────── ④ 내부통제 및 보안체계 SECTION ──────────────────────── */}
      <section className="py-28 px-6 md:px-16 bg-[#ffffff] border-t border-[#e3dafc]">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-[#1f1631]"
        >
          내부통제 및 보안체계
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="max-w-4xl mx-auto text-[#4b3a6b]/85 text-center mb-16 leading-relaxed text-[15.5px]"
        >
          결제 플랫폼의 신뢰는 <strong>보안</strong>과 <strong>내부통제</strong>에서 시작됩니다.
          SFIN PAY는 국제 보안 표준 (ISMS, ISO 27001) 및 금융보안원의 가이드라인을 기반으로
          <strong>‘3단계 통합 보안 구조’</strong>를 운영합니다.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Lock size={26} />,
              title: "1단계 — 시스템 보안",
              points: [
                "TLS 1.3, AES-256 암호화 통신으로 모든 트랜잭션을 보호합니다.",
                "DB 접근은 VPN과 IAM(Identity Access Management) 으로 통제됩니다.",
                "서버는 AWS 서울 리전에 분산 배치되어 이중화 (HA) 운영됩니다.",
              ],
            },
            {
              icon: <Server size={26} />,
              title: "2단계 — 응용 및 데이터 보안",
              points: [
                "개인정보 및 결제정보는 분리 저장(Pseudonymization) 정책 적용.",
                "민감 데이터는 토큰화(PAN Tokenization) 후 비식별 처리.",
                "실시간 로그 감사 및 접근이력 5년 이상 보존.",
              ],
            },
            {
              icon: <Scale size={26} />,
              title: "3단계 — 조직 및 법적 통제",
              points: [
                "보안 및 준법 감시팀이 전사 리스크를 월 단위로 점검.",
                "법률 자문단과 외부 감사기관이 정기적으로 내부통제 상태 검증.",
                "이상 거래 또는 보안 침해 사건 발생 시 48시간 내 금감원 및 고객사 통보.",
              ],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className="p-8 rounded-2xl border border-[#e2d6ff]/60 bg-[#fafaff] hover:shadow-[0_8px_25px_rgba(124,58,237,0.12)] transition-all duration-500"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[#7c3aed]">
                  <div className="p-3 rounded-full bg-[#7c3aed]/10">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-[#2d1b55]">{item.title}</h3>
                </div>
                <ul className="list-disc list-inside text-sm text-[#4b3a6b]/85 space-y-2">
                  {item.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──────────────────────── ⑤ 데이터 투명성 및 감사 프로세스 SECTION ──────────────────────── */}
      <section className="py-28 px-6 md:px-16 bg-gradient-to-b from-[#faf8ff] to-[#fefeff] border-t border-[#e3dafc]">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-[#1f1631]"
        >
          데이터 투명성 및 감사 프로세스
        </motion.h2>

        <motion.div
          {...fadeUp(0.2)}
          className="max-w-5xl mx-auto bg-white rounded-2xl p-10 border border-[#e2d6ff]/60 shadow-[0_8px_25px_rgba(124,58,237,0.08)] leading-relaxed text-[#4b3a6b]/90 text-[15px] space-y-6"
        >
          <p>
            SFIN PAY는 데이터 투명성 보장을 위해 <b>‘이중 감사 로그 체계’</b>를 운용합니다.
            결제·정산·환불 등 모든 이벤트는 AWS CloudTrail과 자체 Ledger 서버에 동시에 저장되며,
            <b>변조 불가능한 서명 해시 (SHA-512)</b>가 자동 부여됩니다.
          </p>
          <p>
            내부 감사팀은 매 분기별로 다음의 항목을 정기 검증합니다:
          </p>
          <ul className="list-decimal list-inside pl-4 space-y-2 text-[15px]">
            <li>결제 트랜잭션 로그 무결성 검증 (랜덤 샘플링 500건 이상)</li>
            <li>정산 지연 사유 및 차지백 발생 패턴 분석</li>
            <li>내부 접근권한 이력 및 임직원 활동 로그 검토</li>
            <li>API 키 발급 및 폐기 이력 대조 검증</li>
          </ul>
          <p>
            외부 감사기관(회계법인 및 정보보호 전문기업)은 매 반기마다
            <b>시스템 무결성 보고서(System Integrity Report)</b>를 발행하며,
            주요 결과는 홈페이지와 투자자 공시 페이지를 통해 공개됩니다.
          </p>
          <p>
            SFIN PAY는 투명성 지표를 수치화하여 내외부 이해관계자와 공유합니다.
            2025년 상반기 기준으로 <b>정산 오류율 0.003%, 이상거래 탐지 정확도 99.8%</b>를 기록했습니다.
          </p>
        </motion.div>

        {/* 감사 지표 요약 카드 그리드 */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {[
            {
              icon: <BarChart3 size={26} />,
              label: "감사 대상 데이터 건수",
              value: "약 21,480,000건 / 년",
            },
            {
              icon: <BookOpen size={26} />,
              label: "정기 외부 감사 횟수",
              value: "연 4회 (분기별 1회)",
            },
            {
              icon: <Layers size={26} />,
              label: "데이터 보존 기간",
              value: "최소 5년 / KISA 지침 준수",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className="p-6 rounded-2xl border border-[#e3dafc] bg-[#fafaff] text-center hover:shadow-[0_8px_25px_rgba(124,58,237,0.1)] transition-all duration-500"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-[#7c3aed]/10 text-[#7c3aed]">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-[#2d1b55] text-[15px]">{item.label}</h4>
                <p className="text-[#4b3a6b]/80 text-sm">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp(5)}
          className="max-w-4xl mx-auto mt-20 text-center text-[#4b3a6b]/85 leading-relaxed text-[15.5px]"
        >
          모든 데이터는 <b>‘암호화 저장 + 중앙 레저 서명 + 외부 감사 백업’</b>의 3중 보호 아키텍처 하에 보존됩니다.
          이 체계는 SFIN PAY의 가맹점과 소비자가 안심하고 거래할 수 있는 가장 핵심적인 투명성 기반입니다.
        </motion.p>
      </section>
      {/* ──────────────────────── ⑥ ESG 및 지속가능경영 SECTION ──────────────────────── */}
      <section className="py-28 px-6 md:px-16 bg-gradient-to-b from-[#f9f6ff] to-[#ffffff] border-t border-[#e3dafc]">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-[#1f1631]"
        >
          ESG · 지속가능경영
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="text-[#4b3a6b]/85 max-w-4xl mx-auto text-center leading-relaxed text-[15.5px] mb-16"
        >
          SFIN PAY는 단순한 결제회사가 아니라, 사회와 함께 성장하는 금융 인프라 기업을 지향합니다.
          ESG(Environment·Social·Governance)는 모든 의사결정의 중심에 있으며,
          기술의 효율성보다 <strong>사람 중심의 지속가능성</strong>을 우선합니다.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Globe2 size={26} />,
              title: "E · 환경(Environment)",
              details: [
                "데이터센터 전력의 70%를 신재생 에너지로 대체 (2030년 100% 목표)",
                "전자영수증, 페이퍼리스 결제 프로세스 도입으로 연간 6톤 종이 절감",
                "폐기 전산장비는 ISO14001 기준에 맞춰 친환경 처리",
              ],
            },
            {
              icon: <Users size={26} />,
              title: "S · 사회(Social)",
              details: [
                "소상공인 대상 ‘제로 수수료 캠페인’으로 연간 200억 절감 효과",
                "지역 청년 대상 IT 결제 교육 프로그램 ‘PAY ACADEMY’ 운영",
                "장애인 및 경력단절여성 고용률 23% 달성",
              ],
            },
            {
              icon: <Building2 size={26} />,
              title: "G · 지배구조(Governance)",
              details: [
                "이사회 내 독립 감사위원회 및 ESG 위원회 분리 운영",
                "모든 주요 의사결정은 회의록 및 투표 기록 자동 보존",
                "대표이사 평가 기준에 ‘ESG 성과지표’ 20% 반영",
              ],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className="p-8 rounded-2xl border border-[#e2d6ff]/60 bg-white hover:shadow-[0_8px_25px_rgba(124,58,237,0.12)] transition-all duration-500"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[#7c3aed]">
                  <div className="p-3 rounded-full bg-[#7c3aed]/10">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-[#2d1b55]">{item.title}</h3>
                </div>
                <ul className="list-disc list-inside text-sm text-[#4b3a6b]/85 space-y-2">
                  {item.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──────────────────────── ⑦ 이해관계자 공시 SECTION ──────────────────────── */}
      <section className="py-28 px-6 md:px-16 bg-[#ffffff] border-t border-[#e3dafc]">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-[#1f1631]"
        >
          이해관계자 공시 및 커뮤니케이션
        </motion.h2>

        <motion.div
          {...fadeUp(0.2)}
          className="max-w-5xl mx-auto bg-gradient-to-b from-[#faf8ff] to-[#ffffff] rounded-2xl p-10 border border-[#e2d6ff]/60 shadow-[0_8px_25px_rgba(124,58,237,0.08)] leading-relaxed text-[#4b3a6b]/90 text-[15px] space-y-5"
        >
          <p>
            SFIN PAY는 고객, 가맹점, 투자자, 임직원 등 다양한 이해관계자에게
            동일한 정보를 제공하기 위해 <b>연 2회 ‘이해관계자 보고서(Stakeholder Report)’</b>를 발간합니다.
          </p>
          <p>
            보고서에는 기업의 재무 현황, 사회공헌, 법적 준수, 인권 보호, 근로 환경,
            그리고 개인정보 관리 체계까지 포함됩니다.
            주요 지표는 외부 감사기관의 인증을 거쳐 공시됩니다.
          </p>
          <p>
            또한 고객 의견을 경영 개선에 반영하기 위한
            <b>온라인 제안 포털 (SFIN Feedback Hub)</b>을 운영하며,
            접수된 의견은 ‘CS 품질관리팀’과 ‘경영전략실’에서 주 단위로 검토됩니다.
          </p>
          <p>
            이사회 의사결정 사항 중 주요 변경 공시는
            IR 페이지와 공식 블로그를 통해 48시간 이내 공개됩니다.
          </p>
        </motion.div>

        {/* 공시 채널 카드 */}
        <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto">
          {[
            {
              icon: <FileText size={26} />,
              title: "연차 및 분기 보고서",
              desc: "재무제표, ESG 실적, 주요 리스크 요인을 포함한 공식 IR 문서.",
            },
            {
              icon: <Handshake size={26} />,
              title: "이해관계자 포털",
              desc: "파트너 및 고객의 제안을 수집·분석해 경영 개선에 반영.",
            },
            {
              icon: <ShieldCheck size={26} />,
              title: "보안 공시 시스템",
              desc: "개인정보 침해 또는 서비스 장애 발생 시, 즉시 공시 및 대응 보고.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i + 1)}
              className="p-8 rounded-2xl border border-[#e2d6ff]/60 bg-white text-center hover:shadow-[0_8px_25px_rgba(124,58,237,0.12)] transition-all duration-500"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-3 rounded-full bg-[#7c3aed]/10 text-[#7c3aed]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#2d1b55]">{item.title}</h3>
                <p className="text-sm text-[#4b3a6b]/80 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──────────────────────── ⑧ 보고서 다운로드 SECTION ──────────────────────── */}
      <section className="py-28 text-center bg-gradient-to-b from-[#faf8ff] to-[#ffffff] border-t border-[#e3dafc]">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl md:text-4xl font-extrabold mb-8 text-[#1f1631]"
        >
          공식 보고서 다운로드
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="text-[#4b3a6b]/85 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          아래 버튼을 클릭하면 최신 <strong>투명경영·ESG 통합보고서 (PDF)</strong>를 열람할 수 있습니다.
          모든 보고서는 <b>외부 회계법인·법무법인 검증 완료본</b>입니다.
        </motion.p>

        <motion.button
          {...fadeUp(0.4)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] hover:from-[#6d28d9] hover:to-[#9f6bff] text-white font-semibold text-lg shadow-[0_8px_25px_rgba(124,58,237,0.25)] transition-all"
          onClick={() => window.open("/reports/sfin-transparency-2025.pdf", "_blank")}
        >
          <Download size={22} />
          투명경영·ESG 통합보고서 다운로드
        </motion.button>

        <motion.p
          {...fadeUp(0.6)}
          className="mt-6 text-sm text-[#4b3a6b]/70"
        >
          PDF 파일은 ‘reports’ 폴더 내에 저장되어 있으며,
          <code>public/reports/sfin-transparency-2025.pdf</code> 경로에 위치합니다.
        </motion.p>
      </section>
    </div>
  );
}
