import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, Building2 } from "lucide-react";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.08 * i },
});

export default function ContactForm({ title, desc, recipient }) {
  return (
    <section className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#f8f7ff] via-[#f5f2ff] to-[#f1effa]">
      <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] text-sm font-medium">
          <Mail size={16} /> 문의하기
        </span>
        <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#1f1631] leading-tight">
          {title}
        </h2>
        <p className="mt-5 text-[#4b3a6b]/80 text-lg leading-relaxed">{desc}</p>
      </motion.div>

      <motion.form
        {...fadeUp(1)}
        onSubmit={(e) => e.preventDefault()}
        className="max-w-3xl mx-auto rounded-2xl border border-[#e2d6ff]/70 bg-white/90 backdrop-blur-sm p-8 md:p-10 space-y-6 shadow-[0_8px_25px_rgba(124,58,237,0.12)]"
      >
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

        <div>
          <label className="block text-sm font-medium text-[#4b3a6b] mb-2">문의 내용</label>
          <textarea
            rows="4"
            placeholder="문의 내용을 입력해주세요."
            className="w-full rounded-xl bg-[#f8f7ff] border border-[#d8cfff] text-[#2d1b55] px-4 py-3 focus:border-[#7c3aed] focus:ring-1 focus:ring-[#c4b5fd] outline-none resize-none placeholder-[#9f87df]/60 transition"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] hover:from-[#6d28d9] hover:to-[#9f6bff] text-white font-semibold shadow-[0_8px_25px_rgba(124,58,237,0.25)] transition-all"
        >
          <Send size={18} /> 문의 보내기
        </motion.button>

        <p className="text-center text-[#6d5e9c]/70 text-sm mt-2">
          모든 문의 내용은 암호화되어 전송되며, 영업일 기준 24시간 이내 회신드립니다.
        </p>
      </motion.form>

      <motion.div
        {...fadeUp(2)}
        className="mt-14 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
      >
        <a
          href={`mailto:${recipient}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] hover:from-[#6d28d9] hover:to-[#9f6bff] text-white font-semibold shadow-[0_6px_20px_rgba(124,58,237,0.25)] transition-all"
        >
          <Mail size={18} /> 이메일 문의
        </a>
      </motion.div>
    </section>
  );
}
