import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CreditCard,
  Cpu,
  Wifi,
  Smartphone,
  ShieldCheck,
  Zap,
  Settings,
  Clock3,
  MonitorSmartphone,
  Building2,
} from "lucide-react";

export default function Device() {
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
      {/* Hero Section */}
      <section className="text-center py-20 px-6 md:px-16 bg-gradient-to-b from-[#f9f6ff] to-[#faf8ff]">
        <motion.h1
          {...fadeUp(0)}
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          결제 단말기,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#9f6bff]">
            연결 그 이상의 가치
          </span>
        </motion.h1>
        <motion.p
          {...fadeUp(0.3)}
          className="text-lg md:text-xl text-[#4b3a6b]/80 max-w-3xl mx-auto leading-relaxed"
        >
          모든 환경에서 완벽히 작동하는 결제 하드웨어.  
          POS, 키오스크, 태블릿 — 어떤 형태든 SFIN PAY가 연결합니다.
        </motion.p>
      </section>

      {/* 단말기 비주얼 섹션 */}
      <section className="py-24 px-6 md:px-16 bg-[#f4f0ff] relative overflow-hidden text-center">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold mb-12">
          단말기 라인업
        </motion.h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          {[
            {
              img: "/images/devices/pos-terminal.jpg",
              title: "스탠다드 POS 단말기",
              desc: "매장 결제의 표준. 모든 카드 및 QR 결제 호환",
            },
            {
              img: "/images/devices/tablet-kiosk.jpg",
              title: "태블릿 키오스크",
              desc: "셀프주문 · 무인결제용 클라우드 기반 키오스크",
            },
            {
              img: "/images/devices/handheld.jpg",
              title: "휴대형 무선 단말기",
              desc: "이동식 매장, 테이블 오더용 경량 무선 리더기",
            },
          ].map((d, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.2)}
              className="bg-white border border-[#c4b5fd]/40 rounded-2xl shadow-sm hover:shadow-[0_0_25px_rgba(124,58,237,0.15)] transition-all max-w-sm"
            >
              <img
                src={d.img}
                alt={d.title}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#7c3aed] mb-2">{d.title}</h3>
                <p className="text-[#4b3a6b]/80 leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 주요 기능 */}
      <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto space-y-20">
        <motion.div {...fadeUp(0)} className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-[#1f1631]">
            ⚙️ 단말기 기술 사양
          </h2>
          <p className="text-[#4b3a6b]/80">
            현장 결제에 필요한 속도, 안정성, 보안을 모두 갖췄습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <Cpu size={28} />,
              title: "듀얼 코어 프로세서",
              desc: "빠른 승인 처리로 고객 대기시간 단축",
            },
            {
              icon: <Wifi size={28} />,
              title: "Wi-Fi & LTE 통신",
              desc: "유선/무선 네트워크 환경 완벽 지원",
            },
            {
              icon: <CreditCard size={28} />,
              title: "모든 결제 호환",
              desc: "IC, MS, NFC, QR 등 모든 결제 방식 지원",
            },
            {
              icon: <ShieldCheck size={28} />,
              title: "보안 인증 내장",
              desc: "PCI-DSS, EMVCo 등 글로벌 표준 인증",
            },
            {
              icon: <Settings size={28} />,
              title: "클라우드 관리",
              desc: "원격 펌웨어 업데이트 및 상태 모니터링",
            },
            {
              icon: <Clock3 size={28} />,
              title: "초고속 승인",
              desc: "1초 이내 승인 응답으로 회전율 극대화",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              className="p-8 bg-white border border-[#c4b5fd]/40 rounded-2xl hover:shadow-[0_0_25px_rgba(124,58,237,0.15)] transition-all"
            >
              <div className="flex items-center gap-3 text-[#7c3aed] mb-4">
                {f.icon}
                <h3 className="text-xl font-semibold text-[#1f1631]">{f.title}</h3>
              </div>
              <p className="text-[#4b3a6b]/80 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 인프라 및 관리 섹션 */}
      <section className="py-24 px-6 md:px-16 bg-[#f4f0ff] text-center">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold mb-10">
          단말기 관리, 클라우드로 한눈에
        </motion.h2>
        <motion.div
          {...fadeUp(0.2)}
          className="max-w-4xl mx-auto bg-white border border-[#c4b5fd]/40 rounded-2xl shadow-sm p-8"
        >
          <p className="text-[#4b3a6b]/80 mb-6 leading-relaxed">
            각 매장의 단말기 상태를 원격에서 모니터링하고  
            업데이트를 자동 배포합니다. 유지보수 비용을 획기적으로 절감하세요.
          </p>
          <div className="flex justify-center gap-10 flex-wrap mt-6 text-[#7c3aed]">
            <div className="flex flex-col items-center">
              <MonitorSmartphone size={36} />
              <p className="mt-2 text-sm font-medium text-[#4b3a6b]/80">
                실시간 상태 모니터링
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Zap size={36} />
              <p className="mt-2 text-sm font-medium text-[#4b3a6b]/80">
                원격 펌웨어 업데이트
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Building2 size={36} />
              <p className="mt-2 text-sm font-medium text-[#4b3a6b]/80">
                본사 통합 관리
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-tr from-[#f4e8ff] to-[#ede3ff] text-center">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-[#1f1631] mb-4">
          단말기 도입도{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#9f6bff]">
            SFIN PAY 하나로
          </span>
        </motion.h2>
        <motion.p
          {...fadeUp(0.2)}
          className="text-[#4b3a6b]/90 text-lg mb-10 leading-relaxed"
        >
          안정성, 속도, 관리까지 완벽한 통합 단말기 솔루션을 경험하세요.
        </motion.p>
        <Link to="/inquiry/contract">
          <motion.button
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
