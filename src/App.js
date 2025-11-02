import React, { useEffect, useRef, useState, Suspense, lazy, useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

/* ─────────────────────────────────────────────────────────
    Lazy Load (코드 스플리팅)
────────────────────────────────────────────────────────── */
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

/* Home sections */
const Hero = lazy(() => import("./components/Hero"));
const Partners = lazy(() => import("./components/Partners"));
const Features = lazy(() => import("./components/Features"));
const Settlement = lazy(() => import("./components/Settlement"));
const Liquidity = lazy(() => import("./components/Liquidity"));
const Security = lazy(() => import("./components/Security"));
const API = lazy(() => import("./components/API"));
const Insights = lazy(() => import("./components/Insights"));
const Compliance = lazy(() => import("./components/Compliance"));
const Contact = lazy(() => import("./components/Contact"));

/* Pages */
const FB = lazy(() => import("./pages/FB"));
const Distribution = lazy(() => import("./pages/Distribution"));
const Service = lazy(() => import("./pages/Service"));
const B2B = lazy(() => import("./pages/B2B"));
const OnlinePay = lazy(() => import("./pages/OnlinePay"));
const QRPay = lazy(() => import("./pages/QRPay"));
const Device = lazy(() => import("./pages/Device"));
const TechSupport = lazy(() => import("./pages/TechSupport"));
const Support = lazy(() => import("./pages/Support"));
const CompanyIntro = lazy(() => import("./pages/CompanyIntro"));
const Vision = lazy(() => import("./pages/Vision"));
const Careers = lazy(() => import("./pages/Careers"));
const Recruit = lazy(() => import("./pages/Recruit"));
const PaymentFAQ = lazy(() => import("./pages/PaymentFAQ"));
const SecurityPolicy = lazy(() => import("./pages/SecurityPolicy"));
const TransparencyReport = lazy(() => import("./pages/TransparencyReport"));
const SettlementInquiry = lazy(() => import("./pages/inquiry/Settlement"));
const LiquidityInquiry = lazy(() => import("./pages/inquiry/Liquidity"));
const ContractInquiry = lazy(() => import("./pages/inquiry/Contract"));
const IntegrationInquiry = lazy(() => import("./pages/inquiry/Integration"));
const GeneralInquiry = lazy(() => import("./pages/inquiry/General"));


/* ─────────────────────────────────────────────────────────
    공용: 작은 유틸/훅/컴포넌트(치밀함/안정성 업)
────────────────────────────────────────────────────────── */

/** 라우트 변경 시 최상단 이동 + 해시(anchor)도 지원 */
function ScrollRestore() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);
  return null;
}

/** 접근성: 라우트 변경 시 main에 포커스 이동 */
function RouteFocus() {
  const navType = useNavigationType();
  useEffect(() => {
    const main = document.querySelector("main[tabindex='-1']");
    if (main) main.focus({ preventScroll: true });
  }, [navType]);
  return null;
}

/** 섹션 가시성(IntersectionObserver) + data-visible 속성 활용 */
function useSectionReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-visible", "true");
          }
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
}

/** 프리퍼런스: 모션 최소화 지원 */
function useMotionPref() {
  const reduced = useReducedMotion();
  return { reduced };
}

/** 배경 Aurora(오로라) 컨트롤러: reduce-motion일 때는 정적 처리 */
function AuroraBackground() {
  const { reduced } = useMotionPref();
  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={
        reduced
          ? { opacity: 1 }
          : {
            opacity: [0, 0.75, 1],
            backgroundPosition: ["0% 0%", "100% 50%", "0% 100%", "100% 50%", "0% 0%"],
          }
      }
      transition={
        reduced
          ? { duration: 0.8 }
          : { duration: 160, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
      }
      style={{
        background:
          "linear-gradient(120deg, rgba(167,139,250,0.22), rgba(216,180,254,0.22), rgba(192,132,252,0.22))",
        backgroundSize: "400% 400%",
        filter: "blur(150px)",
      }}
    />
  );
}

/** 얇은 섹션 구분선(연보라) + 배경 미세 오버레이(가독성 ↑) */
function SectionWrapper({ id, children }) {
  // 배경 오버레이 강도 균일화: 세부 색감은 상위 그라데이션에 맡기고,
  // 텍스트 대비만 살짝 올림
  return (
    <section
      id={id}
      data-section
      className="relative border-t border-[#e8defa]/30 bg-white/30 backdrop-blur-[1px]"
    >
      {children}
    </section>
  );
}

/** 에러 바운더리 */
class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, err: null };
  }
  static getDerivedStateFromError(err) {
    return { hasError: true, err };
  }
  componentDidCatch(err, info) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[AppErrorBoundary]", err, info);
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-2xl font-bold text-[#1f1631]">일시적인 오류가 발생했습니다.</h1>
          <p className="mt-3 text-[#4b3a6b]/80">
            새로고침하거나 잠시 후 다시 시도해 주세요.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

/** Suspense 공통 폴백 */
function Fallback({ minH = "min-h-[40vh]" }) {
  return (
    <div className={`flex items-center justify-center ${minH} text-[#7c3aed]`}>
      로딩 중입니다...
    </div>
  );
}

/** 라우트 진입 시 일부 섹션 사전 로드(체감 성능 개선) */
function useWarmupPreload() {
  useEffect(() => {
    // 아주 가볍게 다음 섹션 번들 힌트(브라우저가 무시하더라도 무해)
    const links = [
      { rel: "prefetch", href: "/images/hero/terminal.jpg", as: "image" },
      { rel: "prefetch", href: "/images/hero/dashboard-card.png", as: "image" },
      { rel: "prefetch", href: "/images/hero/store-owner.jpg", as: "image" },
    ];
    const els = links.map((l) => {
      const el = document.createElement("link");
      Object.assign(el, l);
      document.head.appendChild(el);
      return el;
    });
    return () => els.forEach((el) => el.remove());
  }, []);
}

/** 메인 홈 레이아웃(섹션 연결/구분감 최적화) */
function Home() {
  useSectionReveal();
  useWarmupPreload();

  return (
    <main
      tabIndex={-1}
      className="outline-none transition-all duration-300"
      aria-label="SFIN PAY 홈 콘텐츠"
    >
      {/* Hero는 풀블리드: 가장 가벼운 오버레이 */}
      <section data-section className="relative bg-white/20 backdrop-blur-[1px]">
        <Suspense fallback={<Fallback minH="min-h-[80vh]" />}>
          <Hero />
        </Suspense>
      </section>

      {/* 이후부터는 얇은 경계 + 미세 오버레이로 연속성 유지 */}
      <SectionWrapper>
        <Suspense fallback={<Fallback />}>
          <Partners />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper id="features">
        <Suspense fallback={<Fallback />}>
          <Features />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper>
        <Suspense fallback={<Fallback />}>
          <Settlement />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper>
        <Suspense fallback={<Fallback />}>
          <Liquidity />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper>
        <Suspense fallback={<Fallback />}>
          <Security />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper>
        <Suspense fallback={<Fallback />}>
          <API />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper>
        <Suspense fallback={<Fallback />}>
          <Insights />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper>
        <Suspense fallback={<Fallback />}>
          <Compliance />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper>
        <Suspense fallback={<Fallback />}>
          <Contact />
        </Suspense>
      </SectionWrapper>
    </main>
  );
}

/* ─────────────────────────────────────────────────────────
    메인 App
────────────────────────────────────────────────────────── */
export default function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // 배경 클래스(연속 그라데이션) 메모
  const appBgClass = useMemo(
    () =>
      "relative min-h-screen overflow-x-hidden text-[#1e1b2e] " +
      "font-['Pretendard','Inter','sans-serif'] " +
      "bg-gradient-to-b from-[#faf8ff] via-[#f6f3ff] to-[#faf8ff]",
    []
  );

  return (
    <Router basename={process.env.PUBLIC_URL || "/"}>
      <ScrollRestore />
      <RouteFocus />

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen bg-[#faf8ff] text-[#7c3aed] text-lg font-semibold">
            페이지 로딩 중입니다...
          </div>
        }
      >
        <ScrollToTop />

        <div className={appBgClass}>
          {mounted && <AuroraBackground />}

          <div className="relative z-10">
            <AppErrorBoundary>
              <Suspense fallback={<Fallback minH="min-h-[64px]" />}>
                <Navbar />
              </Suspense>

              <Routes>
                <Route path="/" element={<Home />} />

                {/* 업종별 추천 */}
                <Route
                  path="/fb"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <FB />
                      </Suspense>
                    </SectionWrapper>
                  }
                />
                <Route
                  path="/distribution"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <Distribution />
                      </Suspense>
                    </SectionWrapper>
                  }
                />
                <Route
                  path="/service"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <Service />
                      </Suspense>
                    </SectionWrapper>
                  }
                />
                <Route
                  path="/b2b"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <B2B />
                      </Suspense>
                    </SectionWrapper>
                  }
                />

                {/* 제품 소개 */}
                <Route
                  path="/online-pay"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <OnlinePay />
                      </Suspense>
                    </SectionWrapper>
                  }
                />
                <Route
                  path="/qr-pay"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <QRPay />
                      </Suspense>
                    </SectionWrapper>
                  }
                />
                <Route
                  path="/device"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <Device />
                      </Suspense>
                    </SectionWrapper>
                  }
                />

                {/* 고객 지원 */}
                <Route
                  path="/support"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <Support />
                      </Suspense>
                    </SectionWrapper>
                  }
                />

                {/* 기술 지원 */}
                <Route
                  path="/tech-support"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <TechSupport />
                      </Suspense>
                    </SectionWrapper>
                  }
                />


                {/* 회사 소개 */}
                <Route
                  path="/company"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <CompanyIntro />
                      </Suspense>
                    </SectionWrapper>
                  }
                />
                <Route
                  path="/vision"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <Vision />
                      </Suspense>
                    </SectionWrapper>
                  }
                />
                <Route
                  path="/careers"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <Careers />
                      </Suspense>
                    </SectionWrapper>
                  }
                />

                {/* 채용 및 파트너 문의 */}
                <Route
                  path="/recruit"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <Recruit />
                      </Suspense>
                    </SectionWrapper>
                  }
                />

                {/* FAQ & 정책 */}
                <Route
                  path="/payment-faq"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <PaymentFAQ />
                      </Suspense>
                    </SectionWrapper>
                  }
                />
                <Route
                  path="/security-policy"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <SecurityPolicy />
                      </Suspense>
                    </SectionWrapper>
                  }
                />

                {/* 투명경영 보고서 */}
                <Route
                  path="/transparency-report"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <TransparencyReport />
                      </Suspense>
                    </SectionWrapper>
                  }
                />

                {/* 문의 상세 */}
                <Route
                  path="/inquiry/settlement"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <SettlementInquiry />
                      </Suspense>
                    </SectionWrapper>
                  }
                />
                <Route
                  path="/inquiry/liquidity"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <LiquidityInquiry />
                      </Suspense>
                    </SectionWrapper>
                  }
                />
                <Route
                  path="/inquiry/contract"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <ContractInquiry />
                      </Suspense>
                    </SectionWrapper>
                  }
                />
                <Route
                  path="/inquiry/integration"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <IntegrationInquiry />
                      </Suspense>
                    </SectionWrapper>
                  }
                />
                <Route
                  path="/inquiry/general"
                  element={
                    <SectionWrapper>
                      <Suspense fallback={<Fallback />}>
                        <GeneralInquiry />
                      </Suspense>
                    </SectionWrapper>
                  }
                />
              </Routes>

              <Suspense fallback={<Fallback minH="min-h-[200px]" />}>
                <Footer />
              </Suspense>
            </AppErrorBoundary>
          </div>
        </div>
      </Suspense>
    </Router>
  );
}
