import React from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Building2 } from "lucide-react";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.08 * i },
});

export default function SettlementComparison() {
  return (
    <section
      id="settlement-comparison"
      className="relative py-28 px-6 md:px-16 bg-[#f9f8ff]"
    >
      {/* 헤더 */}
      <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] text-sm">
          💡 어떤 정산이 내 비즈니스에 적합할까?
        </span>
        <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#1f1631]">
          R+0 vs R+1 <br />
          <span className="text-[#7c3aed]">정산 방식 비교</span>
        </h2>
        <p className="mt-5 text-[#4b3a6b]/80 text-lg leading-relaxed">
          실시간 입금이 필요한 사업자부터 안정성을 중시하는 기업까지,  
          정산 플랜을 선택해보세요.
        </p>
      </motion.div>

      {/* 비교 카드 */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* R+0 */}
        <motion.div
          {...fadeUp(1)}
          className="p-8 rounded-2xl border border-[#d9c8fa] bg-white shadow-sm hover:shadow-[0_8px_30px_rgba(124,58,237,0.1)] transition-all"
        >
          <h3 className="text-2xl font-bold text-[#7c3aed] mb-3">R+0 (15분 정산)</h3>
          <p className="text-[#4b3a6b]/80 text-sm leading-relaxed mb-6">
            결제 후 약 15분 내 입금되는 초단기 정산 방식.  
            빠른 현금흐름이 필요한 업종에 적합합니다.
          </p>
          <ul className="space-y-2 text-[#4b3a6b]/80 text-sm">
            <li>• 실시간 리스크 관리 및 자동 한도 조정</li>
            <li>• 월 5억 이하 매출권장, 스타트업·소상공인 적합</li>
            <li>• 연중무휴 정산 지원</li>
          </ul>
        </motion.div>

        {/* R+1 */}
        <motion.div
          {...fadeUp(2)}
          className="p-8 rounded-2xl border border-[#d9c8fa] bg-white shadow-sm hover:shadow-[0_8px_30px_rgba(124,58,237,0.1)] transition-all"
        >
          <h3 className="text-2xl font-bold text-[#7c3aed] mb-3">R+1 (익일 정산)</h3>
          <p className="text-[#4b3a6b]/80 text-sm leading-relaxed mb-6">
            결제 익일 오전 10시 이후 순차 입금되는 안정형 정산.  
            높은 승인율과 회계 일관성을 제공합니다.
          </p>
          <ul className="space-y-2 text-[#4b3a6b]/80 text-sm">
            <li>• 표준 승인율 최적화</li>
            <li>• 업종별 리스크 밸런싱</li>
            <li>• 대다수 플랫폼 및 프랜차이즈 사용</li>
          </ul>
        </motion.div>
      </div>

      {/* 비교 요약 카드 */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
        {[
          {
            icon: <Zap size={20} />,
            title: "속도 우선",
            desc: `즉시 입금이 필요하다면 R+0,  
                   여유 있는 정산은 R+1이 적합.`,
          },
          {
            icon: <TrendingUp size={20} />,
            title: "수수료 구조",
            desc: `R+0은 약간 높은 수수료,  
                   R+1은 표준 수수료 적용.`,
          },
          {
            icon: <Building2 size={20} />,
            title: "추천 업종",
            desc: `R+0: F&B, 학원, 스타트업 /  
                   R+1: 플랫폼, B2B, 대형 유통사.`,
          },
        ].map((c, i) => {
          return (
            <motion.div
              key={i}
              {...fadeUp(3 + i)}
              className="p-6 rounded-2xl border border-[#e3dafc] bg-white hover:shadow-[0_8px_20px_rgba(124,58,237,0.1)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3 text-[#7c3aed]">
                <div className="p-2 rounded-lg bg-[#7c3aed]/10">{c.icon}</div>
                <h4 className="font-semibold text-lg text-[#1f1631]">{c.title}</h4>
              </div>
              <p className="text-sm text-[#4b3a6b]/80 leading-relaxed whitespace-pre-line">
                {c.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
