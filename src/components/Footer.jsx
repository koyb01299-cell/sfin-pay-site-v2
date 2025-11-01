import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Building2, Phone, Copyright } from "lucide-react";
import { useLocation } from "react-router-dom";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.08 * i },
});

export default function Footer() {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer
      id="footer"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#f8f7ff] to-[#f2f0fa] overflow-hidden"
    >
      {/* 🌫️ 라벤더 오로라 */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(120deg, rgba(167,139,250,0.18), rgba(216,180,254,0.18), rgba(192,132,252,0.18))",
          backgroundSize: "300% 300%",
          filter: "blur(120px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* 📞 회사 정보 */}
        <motion.div
          {...fadeUp(0)}
          className="grid md:grid-cols-3 gap-10 text-[#4b3a6b]/80 text-center md:text-left"
        >
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-[#7c3aed] font-semibold">
              <Building2 size={18} />
              SFIN PAY
            </div>
            <p className="text-sm leading-relaxed">
              서울특별시 강남구 테크로 77 <br /> SFIN Tower 12F
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-[#7c3aed] font-semibold">
              <Mail size={18} />
              문의 메일
            </div>
            <p className="text-sm leading-relaxed">support@sfinpay.co.kr</p>
          </div>
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-[#7c3aed] font-semibold">
              <Phone size={18} />
              대표 번호
            </div>
            <p className="text-sm leading-relaxed">02-1234-5678</p>
          </div>
        </motion.div>

        {/* 🔗 링크 or 약관 */}
        <motion.div
          {...fadeUp(1)}
          className="mt-12 flex flex-wrap justify-center md:justify-between text-sm text-[#6d5e9c]/70 gap-4"
        >
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/terms" className="hover:text-[#7c3aed] transition">
              이용약관
            </a>
            <a href="/privacy" className="hover:text-[#7c3aed] transition">
              개인정보처리방침
            </a>
            <a href="/security" className="hover:text-[#7c3aed] transition">
              보안정책
            </a>
          </div>
        </motion.div>

        {/* 👣 저작권 */}
        <div className="mt-10 border-t border-[#d8cfff] pt-6 text-center text-[#6d5e9c]/70 text-sm flex flex-col md:flex-row items-center justify-center gap-2">
          <Copyright size={14} /> 2025 SFIN PAY · All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
