import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** ✅ 메뉴 항목 정의 (문의하기 제거됨) */
  const menuItems = [
    {
      label: "업종별 추천",
      submenu: [
        { label: "F&B 사업", link: "/fb" },
        { label: "유통업", link: "/distribution" },
        { label: "서비스업", link: "/service" },
        { label: "B2B 거래", link: "/b2b" },
      ],
    },
    {
      label: "제품 소개",
      submenu: [
        { label: "온라인 결제", link: "/online-pay" },
        { label: "QR / 오프라인 결제", link: "/qr-pay" },
        { label: "결제 단말기", link: "/device" },
      ],
    },
    {
      label: "고객 지원",
      link: "/support",
    },
    {
      label: "회사 소개",
      link: "/company",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="w-full flex justify-between items-center px-6 md:px-16 py-4">
        {/* 로고 */}
        <Link to="/" className="flex items-center gap-2 select-none">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            className="w-10 h-10"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <defs>
              <linearGradient id="grad-main" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="50%" stopColor="#9f6bff" />
                <stop offset="100%" stopColor="#c4b5fd" />
              </linearGradient>
              <radialGradient id="shine" cx="30%" cy="20%" r="70%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#ffffff" stopOpacity="0.2" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>

            <circle
              cx="60"
              cy="60"
              r="52"
              stroke="url(#grad-main)"
              strokeWidth="4"
              fill="url(#shine)"
            />
            <rect
              x="32"
              y="38"
              width="56"
              height="34"
              rx="6"
              fill="url(#grad-main)"
              stroke="#fff"
              strokeWidth="1.5"
              opacity="0.95"
            />
            <path
              d="M34 40 L84 40 L70 50 Q60 54 50 50 Z"
              fill="white"
              opacity="0.15"
            />
            <path
              d="M74 36 L94 24 L90 40"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.95"
            />
            <path
              d="M78 44 L98 32 L94 48"
              stroke="url(#grad-main)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
            />
            <circle cx="60" cy="56" r="4" fill="#ffffff" opacity="0.9" />
            <circle
              cx="60"
              cy="60"
              r="56"
              stroke="url(#grad-main)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.25"
              strokeDasharray="6 8"
            />
          </motion.svg>
          <span className="text-2xl font-extrabold text-[#6d28d9] tracking-tight">
            SFIN PAY
          </span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {item.submenu ? (
                <>
                  <button className="flex items-center gap-1 text-[#1f1631] font-medium hover:text-[#7c3aed] transition">
                    {item.label}
                    <ChevronDown size={16} className="ml-1" />
                  </button>

                  <AnimatePresence>
                    {activeMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-10 bg-white shadow-lg rounded-xl border border-[#e3dafc] p-3 w-64"
                      >
                        {item.submenu.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.link}
                            className="block px-4 py-2 rounded-lg text-sm text-[#4b3a6b] hover:bg-[#f5f0ff] hover:text-[#7c3aed] transition"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  to={item.link}
                  className="text-[#1f1631] font-medium hover:text-[#7c3aed] transition"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden text-[#1f1631]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-[#e3dafc] shadow-lg"
          >
            {menuItems.map((item, idx) => (
              <div key={idx} className="border-b border-[#f2ebff]">
                {item.submenu ? (
                  <details>
                    <summary className="flex items-center justify-between px-6 py-4 text-[#1f1631] font-medium cursor-pointer hover:text-[#7c3aed]">
                      {item.label}
                    </summary>
                    <div className="pl-8 pb-3">
                      {item.submenu.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.link}
                          className="block py-2 text-sm text-[#4b3a6b] hover:text-[#7c3aed]"
                          onClick={() => setMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    to={item.link}
                    className="block px-6 py-4 text-[#1f1631] font-medium hover:text-[#7c3aed]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
