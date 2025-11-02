import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [flash, setFlash] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  /** 스크롤 감지 및 방향 추적 */
  useEffect(() => {
    const controlNavbar = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);

      if (currentY > lastScrollY && currentY > 100) {
        // 아래로 스크롤 중 → Nav 숨김
        setShowNav(false);
      } else {
        // 위로 스크롤 → Nav 표시
        setShowNav(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

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
    { label: "기술 지원", link: "/tech-support" },  // ✅ 추가된 부분
    { label: "고객 지원", link: "/support" },
    { label: "회사 소개", link: "/company" },
  ];

  /** 로고 클릭 (새로고침/스크롤 업 효과) */
  const handleLogoClick = () => {
    const isTop = window.scrollY <= 10;

    if (window.location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 80);
      return;
    }

    if (isTop) {
      setFlash(true);
      setTimeout(() => setFlash(false), 350);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  /** 드롭다운 애니메이션 */
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
  };

  return (
    <>
      {/* ⚡ 새로고침 효과 */}
      <AnimatePresence>
        {flash && (
          <motion.div
            key="flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-[9999] pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* 🧭 네비게이션 */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
          }`}
      >
        <div className="flex justify-between items-center w-full px-6 md:px-16 py-4">
          {/* 🪙 로고 */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 bg-transparent border-none outline-none focus:outline-none select-none transition-none"
            style={{
              WebkitTapHighlightColor: "transparent",
              cursor: "pointer",
              transform: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 120"
              className="w-10 h-10"
            >
              <defs>
                <linearGradient id="grad-main" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="50%" stopColor="#9f6bff" />
                  <stop offset="100%" stopColor="#c4b5fd" />
                </linearGradient>
              </defs>

              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="url(#grad-main)"
                strokeWidth="5"
                fill="none"
              />
              <circle cx="60" cy="60" r="8" fill="url(#grad-main)" />
            </svg>

            <span className="text-2xl font-extrabold text-[#6d28d9] tracking-tight">
              SFIN PAY
            </span>
          </button>

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
                    <button className="flex items-center gap-1 text-[#1f1631] font-medium hover:text-[#7c3aed] transition bg-transparent border-none outline-none focus:ring-0 focus:outline-none">
                      {item.label}
                      <ChevronDown size={16} className="ml-1" />
                    </button>

                    <AnimatePresence>
                      {activeMenu === item.label && (
                        <motion.div
                          key="dropdown"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-0 top-10 bg-white shadow-xl rounded-xl border border-[#e3dafc] p-3 w-64"
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
            className="md:hidden text-[#1f1631] bg-transparent border-none outline-none focus:ring-0 active:bg-transparent"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>
    </>
  );
}
