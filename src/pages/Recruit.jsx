import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Building2,
  Mail,
  Send,
  Phone,
  HeartHandshake,
  Sparkles,
  FileText,
} from "lucide-react";

export default function Recruit() {
  useEffect(() => window.scrollTo(0, 0), []);

  const [tab, setTab] = useState("job"); // "job" or "partner"
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    field: "",
    message: "",
    file: null,
  });

  const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, delay: 0.08 * i },
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) => setForm({ ...form, file: e.target.files[0] });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tab === "job") {
      alert("채용 문의가 접수되었습니다. 담당자가 검토 후 연락드리겠습니다.");
    } else {
      alert("파트너 문의가 접수되었습니다. 담당 부서에서 확인 후 연락드리겠습니다.");
    }
    setForm({
      name: "",
      email: "",
      company: "",
      field: "",
      message: "",
      file: null,
    });
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#1f1631] pt-32">
      {/* ──────────────── HEADER ──────────────── */}
      <section className="text-center py-24 px-6 md:px-16 bg-gradient-to-b from-[#f9f6ff] to-[#faf8ff] border-b border-[#e3dafc]">
        <motion.h1
          {...fadeUp(0)}
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          채용 및 파트너 문의
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg md:text-xl text-[#4b3a6b]/80 max-w-3xl mx-auto leading-relaxed"
        >
          SFIN PAY는 <strong>기술 중심의 결제 혁신</strong>을 함께 만들어갈 인재와 파트너를 찾고 있습니다.
          새로운 시너지를 함께 만들어보세요.
        </motion.p>
      </section>

      <section className="py-8 md:py-10 text-center bg-[#faf8ff]/60 border-b border-[#e3dafc]">
        <div className="inline-flex bg-[#f9f6ff] border border-[#e2d6ff] rounded-full p-1 shadow-sm">
          {/* 버튼: 채용 문의 */}
          <button
            onClick={() => setTab("job")}
            className={`w-32 md:w-40 px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold transition-colors duration-200 focus:outline-none focus:ring-0
        ${tab === "job"
                ? "bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] text-white shadow-sm"
                : "bg-transparent text-[#4b3a6b]/80 hover:bg-[#f3ecff]/60 hover:text-[#7c3aed]"
              }`}
          >
            채용 문의
          </button>

          {/* 버튼: 파트너 문의 */}
          <button
            onClick={() => setTab("partner")}
            className={`w-32 md:w-40 px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold transition-colors duration-200 focus:outline-none focus:ring-0
        ${tab === "partner"
                ? "bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] text-white shadow-sm"
                : "bg-transparent text-[#4b3a6b]/80 hover:bg-[#f3ecff]/60 hover:text-[#7c3aed]"
              }`}
          >
            파트너 문의
          </button>
        </div>

        <p className="text-[#4b3a6b]/70 mt-4 text-sm md:text-base">
          {tab === "job"
            ? "SFIN PAY와 함께 성장할 인재를 기다립니다."
            : "함께 시너지를 낼 수 있는 파트너십을 제안해주세요."}
        </p>
      </section>



      {/* ──────────────── FORM ──────────────── */}
      <section className="pb-28 px-6 md:px-16 bg-gradient-to-b from-[#faf8ff] to-[#ffffff] border-t border-[#e3dafc] text-center">
        {tab === "job" ? (
          <motion.form
            {...fadeUp(0.3)}
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-[0_6px_25px_rgba(124,58,237,0.08)] border border-[#e3dafc] p-10 text-left"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-[#1f1631]">
              채용 문의
            </h2>
            <div className="mb-6">
              <label className="block text-[#2d1b55] font-medium mb-2">이름</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#e2d6ff] rounded-lg focus:border-[#7c3aed] focus:outline-none"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div className="mb-6">
              <label className="block text-[#2d1b55] font-medium mb-2">이메일</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#e2d6ff] rounded-lg focus:border-[#7c3aed] focus:outline-none"
                placeholder="example@sfinpay.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-[#2d1b55] font-medium mb-2">지원 분야</label>
              <input
                type="text"
                name="field"
                value={form.field}
                onChange={handleChange}
                placeholder="예: 프론트엔드 개발, 보안, 운영 등"
                className="w-full px-4 py-3 border border-[#e2d6ff] rounded-lg focus:border-[#7c3aed] focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="block text-[#2d1b55] font-medium mb-2">자기소개 / 경력 요약</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder="자신의 경력, 관심 분야 등을 간단히 소개해주세요."
                className="w-full px-4 py-3 border border-[#e2d6ff] rounded-lg focus:border-[#7c3aed] focus:outline-none resize-none"
              />
            </div>
            <div className="mb-8">
              <label className="block text-[#2d1b55] font-medium mb-2">이력서 / 포트폴리오 (선택)</label>
              <input
                type="file"
                name="file"
                onChange={handleFile}
                accept=".pdf,.doc,.docx"
                className="w-full border border-dashed border-[#d8b4fe] rounded-lg px-4 py-3 text-[#4b3a6b]/70 cursor-pointer"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] text-white font-semibold text-lg shadow-[0_8px_25px_rgba(124,58,237,0.25)]"
            >
              <FileText size={20} />
              제출하기
            </motion.button>
          </motion.form>
        ) : (
          <motion.form
            {...fadeUp(0.3)}
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-[0_6px_25px_rgba(124,58,237,0.08)] border border-[#e3dafc] p-10 text-left"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-[#1f1631]">
              파트너 문의
            </h2>
            <div className="mb-6">
              <label className="block text-[#2d1b55] font-medium mb-2">회사명</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#e2d6ff] rounded-lg focus:border-[#7c3aed] focus:outline-none"
                placeholder="회사 또는 단체명을 입력하세요"
              />
            </div>
            <div className="mb-6">
              <label className="block text-[#2d1b55] font-medium mb-2">담당자 이름</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#e2d6ff] rounded-lg focus:border-[#7c3aed] focus:outline-none"
                placeholder="담당자 성함을 입력하세요"
              />
            </div>
            <div className="mb-6">
              <label className="block text-[#2d1b55] font-medium mb-2">이메일</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#e2d6ff] rounded-lg focus:border-[#7c3aed] focus:outline-none"
                placeholder="example@sfinpay.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-[#2d1b55] font-medium mb-2">제휴 분야</label>
              <input
                type="text"
                name="field"
                value={form.field}
                onChange={handleChange}
                placeholder="예: 가맹점, VAN, 금융기관 등"
                className="w-full px-4 py-3 border border-[#e2d6ff] rounded-lg focus:border-[#7c3aed] focus:outline-none"
              />
            </div>
            <div className="mb-8">
              <label className="block text-[#2d1b55] font-medium mb-2">제안 내용</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder="제안 또는 문의 내용을 작성해주세요."
                className="w-full px-4 py-3 border border-[#e2d6ff] rounded-lg focus:border-[#7c3aed] focus:outline-none resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] text-white font-semibold text-lg shadow-[0_8px_25px_rgba(124,58,237,0.25)]"
            >
              <Send size={20} />
              문의 보내기
            </motion.button>
          </motion.form>
        )}
      </section>

      {/* ──────────────── CONTACT INFO ──────────────── */}
      <section className="py-20 px-6 md:px-16 bg-[#fff] border-t border-[#e3dafc] text-center">
        <motion.div {...fadeUp(0)} className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#1f1631] mb-8">기타 문의</h3>
          <div className="flex flex-wrap justify-center gap-8 text-[#4b3a6b]/85 text-lg">
            <div className="flex items-center gap-3">
              <Mail className="text-[#7c3aed]" size={22} />
              <span>contact@sfinpay.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#7c3aed]" size={22} />
              <span>02-123-4567</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
