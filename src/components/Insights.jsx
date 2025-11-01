import React from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
} from "recharts";
import { ShieldCheck, TrendingUp, Activity } from "lucide-react";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.08 * i },
});

// 안정성 지표 (지연 없이 정산된 거래 비율)
const stabilityData = [
  { month: "1월", rate: 96 },
  { month: "2월", rate: 97.5 },
  { month: "3월", rate: 98 },
  { month: "4월", rate: 99 },
  { month: "5월", rate: 99.1 },
  { month: "6월", rate: 99.3 },
];

// 성장 지표 (월별 결제 총액 성장률)
const growthData = [
  { month: "1월", value: 12 },
  { month: "2월", value: 15 },
  { month: "3월", value: 18 },
  { month: "4월", value: 22 },
  { month: "5월", value: 25 },
  { month: "6월", value: 29 },
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#f8f7ff] to-[#f2f0fa]"
    >
      {/* 헤더 */}
      <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] text-sm font-medium">
          <Activity size={16} /> 정산 인사이트
        </span>
        <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#1f1631] leading-tight">
          안정성과 성장을 함께 만드는 <br />
          <span className="text-[#7c3aed]">데이터 기반 정산 시스템</span>
        </h2>
        <p className="mt-5 text-[#4b3a6b]/80 text-lg leading-relaxed">
          SFIN PAY는 매일 수천 건의 거래 데이터를 실시간 분석하여  
          <br />
          빠르고 정확한 정산 경험을 제공합니다.
        </p>
      </motion.div>

      {/* 차트 영역 */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* 정산 안정성 */}
        <motion.div
          {...fadeUp(1)}
          className="rounded-2xl border border-[#e2d6ff] bg-white/90 p-6 md:p-8 shadow-[0_8px_25px_rgba(124,58,237,0.08)]"
        >
          <div className="flex items-center gap-2 mb-4 text-[#7c3aed]">
            <ShieldCheck size={18} />
            <h3 className="text-lg font-semibold text-[#1f1631]">
              정산 안정성 추이
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={stabilityData}>
              <XAxis dataKey="month" stroke="#9f87df" />
              <YAxis stroke="#9f87df" domain={[90, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2d6ff",
                  color: "#1f1631",
                }}
              />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#7c3aed"
                strokeWidth={3}
                dot={{ r: 5, fill: "#a78bfa" }}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-[#6d5e9c]/70 mt-3">
            * 2025년 상반기 평균 안정 정산율{" "}
            <span className="font-semibold text-[#7c3aed]">98.8%</span>
          </p>
        </motion.div>

        {/* 거래 성장 */}
        <motion.div
          {...fadeUp(2)}
          className="rounded-2xl border border-[#e2d6ff] bg-white/90 p-6 md:p-8 shadow-[0_8px_25px_rgba(124,58,237,0.08)]"
        >
          <div className="flex items-center gap-2 mb-4 text-[#7c3aed]">
            <TrendingUp size={18} />
            <h3 className="text-lg font-semibold text-[#1f1631]">
              월별 결제액 성장률
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={growthData}>
              <XAxis dataKey="month" stroke="#9f87df" />
              <YAxis stroke="#9f87df" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2d6ff",
                  color: "#1f1631",
                }}
              />
              <Bar dataKey="value" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-[#6d5e9c]/70 mt-3">
            * 6개월 누적 성장률{" "}
            <span className="font-semibold text-[#7c3aed]">+141%</span>
          </p>
        </motion.div>
      </div>

      {/* 하단 문구 */}
      <motion.div {...fadeUp(3)} className="text-center max-w-2xl mx-auto mt-20">
        <p className="text-[#4b3a6b]/80 text-lg leading-relaxed">
          SFIN PAY의 정산 인사이트는  
          <span className="text-[#7c3aed] font-semibold">
            {" "}
            안정성, 속도, 성장성
          </span>
          을 기반으로 설계되었습니다.  
          <br />
          매출 흐름을 실시간으로 파악하고,  
          <span className="text-[#9f6bff] font-semibold">
            {" "}
            비즈니스 결정을 데이터로{" "}
          </span>
          내리세요.
        </p>
      </motion.div>
    </section>
  );
}
