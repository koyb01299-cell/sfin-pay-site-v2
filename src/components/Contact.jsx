import React from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Building2,
  MessageSquare,
  MessageCircle,
} from "lucide-react";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.08 * i },
});

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#f8f7ff] via-[#f5f2ff] to-[#f1effa]"
    >
      {/* 헤더 */}
      <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] text-sm font-medium">
          <Mail size={16} /> 문의하기
        </span>
        <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#1f1631] leading-tight">
          <span className="text-[#7c3aed]">SFIN PAY</span>와 함께할 준비되셨나요?
        </h2>
        <p className="mt-5 text-[#4b3a6b]/80 text-lg leading-relaxed">
          정산, 유동성, 계약, 기술 연동 등  
          <br className="hidden sm:block" />
          필요한 문의를 남겨주시면 담당 매니저가 신속히 연락드립니다.
        </p>
      </motion.div>

      {/* 폼 */}
      <motion.form
        {...fadeUp(1)}
        onSubmit={(e) => e.preventDefault()}
        className="max-w-3xl mx-auto rounded-2xl border border-[#e2d6ff]/70 bg-white/90 backdrop-blur-sm p-8 md:p-10 space-y-6 shadow-[0_8px_25px_rgba(124,58,237,0.12)]"
      >
        {/* 회사명 */}
        <div>
          <label className="block text-sm font-medium text-[#4b3a6b] mb-2 flex items-center gap-2">
            <Building2 size={16} className="text-[#7c3aed]" /> 회사명 / 상호명
          </label>
          <input
            type="text"
            placeholder="예: 주식회사 에스핀"
            className="w-full rounded-xl bg-[#f8f7ff] border border-[#d8cfff] text-[#2d1b55] px-4 py-3 focus:border-[#7c3aed] focus:ring-1 focus:ring-[#c4b5fd] outline-none placeholder-[#9f87df]/60 transition"
          />
        </div>

        {/* 이메일 */}
        <div>
          <label className="block text-sm font-medium text-[#4b3a6b] mb-2 flex items-center gap-2">
            <Mail size={16} className="text-[#7c3aed]" /> 이메일
          </label>
          <input
            type="email"
            placeholder="you@company.co.kr"
            className="w-full rounded-xl bg-[#f8f7ff] border border-[#d8cfff] text-[#2d1b55] px-4 py-3 focus:border-[#7c3aed] focus:ring-1 focus:ring-[#c4b5fd] outline-none placeholder-[#9f87df]/60 transition"
          />
        </div>

        {/* 문의 구분 */}
        <div>
          <label className="block text-sm font-medium text-[#4b3a6b] mb-2 flex items-center gap-2">
            <MessageSquare size={16} className="text-[#7c3aed]" /> 문의 유형
          </label>
          <select
            className="w-full rounded-xl bg-[#f8f7ff] border border-[#d8cfff] text-[#2d1b55] px-4 py-3 focus:border-[#7c3aed] focus:ring-1 focus:ring-[#c4b5fd] outline-none transition"
            defaultValue=""
          >
            <option value="" disabled>
              선택하세요
            </option>
            <option>① 정산 관련 문의</option>
            <option>② 매출 기반 단기자금(유동성) 문의</option>
            <option>③ 가맹점 계약 / 수수료 협의</option>
            <option>④ 기술 연동 / 시스템 문의</option>
            <option>⑤ 기타 일반 문의</option>
          </select>
        </div>

        {/* 메시지 */}
        <div>
          <label className="block text-sm font-medium text-[#4b3a6b] mb-2">
            세부 내용
          </label>
          <textarea
            rows="4"
            placeholder="문의 내용을 입력해주세요. (예: 정산 주기 단축 관련 문의)"
            className="w-full rounded-xl bg-[#f8f7ff] border border-[#d8cfff] text-[#2d1b55] px-4 py-3 focus:border-[#7c3aed] focus:ring-1 focus:ring-[#c4b5fd] outline-none resize-none placeholder-[#9f87df]/60 transition"
          ></textarea>
        </div>

        {/* 버튼 */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] hover:from-[#6d28d9] hover:to-[#9f6bff] text-white font-semibold shadow-[0_8px_25px_rgba(124,58,237,0.25)] transition-all"
        >
          <Send size={18} /> 문의 보내기
        </motion.button>

        <p className="text-center text-[#6d5e9c]/70 text-sm mt-2">
          모든 문의 내용은 암호화되어 전송되며,  
          영업일 기준 24시간 이내 회신드립니다.
        </p>
      </motion.form>

      {/* 하단 CTA 버튼들 */}
      <motion.div
        {...fadeUp(2)}
        className="mt-14 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
      >
        <a
          href="mailto:contact@sfinpay.co.kr"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] hover:from-[#6d28d9] hover:to-[#9f6bff] text-white font-semibold shadow-[0_6px_20px_rgba(124,58,237,0.25)] transition-all"
        >
          <Mail size={18} /> 이메일 문의
        </a>

        <a
          href="https://pf.kakao.com/_your_kakao_channel_id"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#d8cfff] bg-white/80 hover:bg-[#f8f7ff] text-[#7c3aed] font-semibold shadow-[0_6px_15px_rgba(124,58,237,0.08)] transition-all"
        >
          <MessageCircle size={18} /> 카카오톡 상담
        </a>
      </motion.div>
    </section>
  );
}
