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
  CartesianGrid,
} from "recharts";
import { ShieldCheck, TrendingUp, Activity } from "lucide-react";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.08 * i },
});

/* 📊 실제감 있는 시뮬레이션형 데이터 (PG사 월별 내부 보고서 느낌) */

// 안정성 지표 (정산 지연 없이 입금 완료된 비율)
const stabilityData = [
  { month: "1월", rate: 98.2 },
  { month: "2월", rate: 97.9 },
  { month: "3월", rate: 98.4 },
  { month: "4월", rate: 99.1 },
  { month: "5월", rate: 98.8 },
  { month: "6월", rate: 99.3 },
];

// 거래 성장률 (전월 대비 결제 총액 증가율)
const growthData = [
  { month: "1월", value: 12.5 },
  { month: "2월", value: 14.1 },
  { month: "3월", value: 13.6 },
  { month: "4월", value: 16.8 },
  { month: "5월", value: 18.9 },
  { month: "6월", value: 17.4 },
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#f8f7ff] to-[#f2f0fa]"
    >
      {/* 💡 헤더 */}
      <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-20">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] text-sm font-medium">
          <Activity size={16} /> 정산 인사이트
        </span>

        <h2 className="mt-8 text-4xl md:text-5xl font-extrabold text-[#1f1631] leading-relaxed tracking-tight">
          안정성과 성장을 함께 만드는
          <br className="hidden sm:block" />
          <span className="block mt-3 text-[#7c3aed]">
            데이터 기반 정산 시스템
          </span>
        </h2>

        <p className="mt-8 text-[#4b3a6b]/80 text-lg leading-relaxed">
          SFIN PAY는 월간 수만 건의 거래 데이터를 기반으로,
          실시간 리스크 모니터링과 정산 예측을 수행합니다.
          <br />
          신뢰성 있는 데이터로 더 빠르고 안정적인 금융 운영을 지원합니다.
        </p>
      </motion.div>

      {/* 📈 차트 영역 */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* ✅ 정산 안정성 */}
        <motion.div
          {...fadeUp(1)}
          className="rounded-2xl border border-[#e2d6ff] bg-white p-6 md:p-8 shadow-[0_8px_25px_rgba(124,58,237,0.08)]"
        >
          <div className="flex items-center gap-2 mb-4 text-[#7c3aed]">
            <ShieldCheck size={18} />
            <h3 className="text-lg font-semibold text-[#1f1631]">
              월별 안정 정산율
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={stabilityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f2ebff" />
              <XAxis
                dataKey="month"
                stroke="#bda8ff"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: "#6b5ea8" }}
              />
              <YAxis
                stroke="#bda8ff"
                domain={[97, 100]}
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: "#6b5ea8" }}
              />
              <Tooltip
                cursor={{ fill: "rgba(124,58,237,0.05)" }}
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2d6ff",
                  borderRadius: "8px",
                  color: "#1f1631",
                }}
              />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#7c3aed"
                strokeWidth={3}
                dot={{ r: 4, fill: "#9f6bff", stroke: "#7c3aed", strokeWidth: 1 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-[#6d5e9c]/70 mt-3">
            * 최근 6개월 평균 안정 정산율{" "}
            <span className="font-semibold text-[#7c3aed]">98.9%</span>
          </p>
        </motion.div>

        {/* ✅ 거래 성장률 */}
        <motion.div
          {...fadeUp(2)}
          className="rounded-2xl border border-[#e2d6ff] bg-white p-6 md:p-8 shadow-[0_8px_25px_rgba(124,58,237,0.08)]"
        >
          <div className="flex items-center gap-2 mb-4 text-[#7c3aed]">
            <TrendingUp size={18} />
            <h3 className="text-lg font-semibold text-[#1f1631]">
              월별 결제 총액 증감률
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f2ebff" />
              <XAxis
                dataKey="month"
                stroke="#bda8ff"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: "#6b5ea8" }}
              />
              <YAxis
                stroke="#bda8ff"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: "#6b5ea8" }}
              />
              <Tooltip
                cursor={{ fill: "rgba(124,58,237,0.05)" }}
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2d6ff",
                  borderRadius: "8px",
                  color: "#1f1631",
                }}
              />
              <Bar
                dataKey="value"
                fill="url(#barGradient)"
                radius={[6, 6, 0, 0]}
              />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#b794f4" stopOpacity={0.7} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-[#6d5e9c]/70 mt-3">
            * 상반기 평균 월 성장률{" "}
            <span className="font-semibold text-[#7c3aed]">+15.5%</span>
          </p>
        </motion.div>
      </div>

      {/* 📘 하단 문구 */}
      <motion.div {...fadeUp(3)} className="text-center max-w-2xl mx-auto mt-20">
        <p className="text-[#4b3a6b]/80 text-lg leading-relaxed">
          SFIN PAY의 데이터 분석 엔진은{" "}
          <span className="text-[#7c3aed] font-semibold">안정성</span>과{" "}
          <span className="text-[#7c3aed] font-semibold">성장성</span>을 균형 있게 측정합니다.
          <br />
          매출 흐름을 실시간으로 파악하고,
          <span className="text-[#9f6bff] font-semibold">
            {" "}정확한 정산·예측을 기반으로{" "}
          </span>
          비즈니스 결정을 내리세요.
        </p>
      </motion.div>
    </section>
  );
}
