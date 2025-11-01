import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";

// 공통 컴포넌트
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// 홈 섹션
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Features from "./components/Features";
import Settlement from "./components/Settlement";
import Liquidity from "./components/Liquidity";
import Security from "./components/Security";
import API from "./components/API";
import Insights from "./components/Insights";
import Compliance from "./components/Compliance";
import Contact from "./components/Contact";

// 업종별 추천
import FB from "./pages/FB";
import Distribution from "./pages/Distribution";
import Service from "./pages/Service";
import B2B from "./pages/B2B";

// 제품 소개
import OnlinePay from "./pages/OnlinePay";
import QRPay from "./pages/QRPay";
import Device from "./pages/Device";

// 고객 지원
import Support from "./pages/Support";

// 회사 소개
import CompanyIntro from "./pages/CompanyIntro";
import Vision from "./pages/Vision";
import Careers from "./pages/Careers";

// FAQ & 정책
import PaymentFAQ from "./pages/PaymentFAQ";
import SettlementFAQ from "./pages/SettlementFAQ";
import SecurityPolicy from "./pages/SecurityPolicy";

// 🔹 추가된 페이지 (투명경영 보고서)
import TransparencyReport from "./pages/TransparencyReport";

// 문의 상세 페이지
import SettlementInquiry from "./pages/inquiry/Settlement";
import LiquidityInquiry from "./pages/inquiry/Liquidity";
import ContractInquiry from "./pages/inquiry/Contract";
import IntegrationInquiry from "./pages/inquiry/Integration";
import GeneralInquiry from "./pages/inquiry/General";

/** ✅ 경로 변경 시 자동 스크롤 */
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  const [mounted, setMounted] = useState(false);

  /** ✅ 1. 초기 마운트 감지 (배경용) */
  useEffect(() => setMounted(true), []);

  /** ✅ 2. IntersectionObserver — 반응속도 최적화 버전 */
  useEffect(() => {
    let observer;

    const initObserver = () => {
      const targets = document.querySelectorAll(".js-reveal");
      if (!targets.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -10% 0px",
        }
      );

      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add("visible");
        } else {
          observer.observe(el);
        }
      });
    };

    requestAnimationFrame(initObserver);

    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          const newTargets = document.querySelectorAll(
            ".js-reveal:not(.visible)"
          );
          newTargets.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
              el.classList.add("visible");
            } else {
              observer?.observe(el);
            }
          });
        }
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL || "/"}>
      <ScrollToTopOnRouteChange />
      <ScrollToTop />

      <div className="relative min-h-screen overflow-x-hidden bg-[#f8f7ff] text-[#1e1b2e] font-['Pretendard','Inter','sans-serif']">
        {/* 💜 오로라 배경 */}
        {mounted && (
          <motion.div
            className="fixed inset-0 z-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.7, 1],
              backgroundPosition: [
                "0% 0%",
                "100% 50%",
                "0% 100%",
                "100% 50%",
                "0% 0%",
              ],
            }}
            transition={{
              duration: 160,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            style={{
              background:
                "linear-gradient(120deg, rgba(167,139,250,0.25), rgba(216,180,254,0.25), rgba(192,132,252,0.25))",
              backgroundSize: "400% 400%",
              filter: "blur(120px)",
            }}
          />
        )}

        {/* 메인 콘텐츠 */}
        <div className="relative z-10">
          <Navbar />

          <Routes>
            {/* 홈 */}
            <Route
              path="/"
              element={
                <main className="space-y-32 md:space-y-40 transition-all duration-300">
                  <Hero />
                  <section className="js-reveal">
                    <Partners />
                  </section>
                  <section
                    id="features"
                    className="js-reveal bg-gradient-to-b from-[#faf8ff] via-[#f4f0ff] to-[#f8f7ff]"
                  >
                    <Features />
                  </section>
                  <section className="js-reveal bg-gradient-to-b from-[#faf8ff] via-[#f4f0ff] to-[#f8f7ff]">
                    <Settlement />
                  </section>
                  <section className="js-reveal bg-gradient-to-b from-[#f8f7ff] via-[#f3edff] to-[#ffffff]">
                    <Liquidity />
                  </section>
                  <section className="js-reveal">
                    <Security />
                  </section>
                  <section className="js-reveal">
                    <API />
                  </section>
                  <section className="js-reveal">
                    <Insights />
                  </section>
                  <section className="js-reveal">
                    <Compliance />
                  </section>
                  <section className="js-reveal">
                    <Contact />
                  </section>
                </main>
              }
            />

            {/* 업종별 추천 */}
            <Route path="/fb" element={<FB />} />
            <Route path="/distribution" element={<Distribution />} />
            <Route path="/service" element={<Service />} />
            <Route path="/b2b" element={<B2B />} />

            {/* 제품 소개 */}
            <Route path="/online-pay" element={<OnlinePay />} />
            <Route path="/qr-pay" element={<QRPay />} />
            <Route path="/device" element={<Device />} />

            {/* 고객 지원 */}
            <Route path="/support" element={<Support />} />

            {/* 회사 소개 */}
            <Route path="/company" element={<CompanyIntro />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/careers" element={<Careers />} />

            {/* FAQ & 정책 */}
            <Route path="/payment-faq" element={<PaymentFAQ />} />
            <Route path="/settlement-faq" element={<SettlementFAQ />} />
            <Route path="/security-policy" element={<SecurityPolicy />} />

            {/* 🔹 추가된 라우트: 투명경영 보고서 */}
            <Route path="/transparency-report" element={<TransparencyReport />} />

            {/* 문의 상세 페이지 */}
            <Route path="/inquiry/settlement" element={<SettlementInquiry />} />
            <Route path="/inquiry/liquidity" element={<LiquidityInquiry />} />
            <Route path="/inquiry/contract" element={<ContractInquiry />} />
            <Route path="/inquiry/integration" element={<IntegrationInquiry />} />
            <Route path="/inquiry/general" element={<GeneralInquiry />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}
