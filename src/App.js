import React, {
  useEffect,
  useRef,
  useState,
  Suspense,
  lazy,
  useMemo,
} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

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
const TransparencyReport = lazy(() =>
  import("./pages/TransparencyReport")
);
const SettlementInquiry = lazy(() =>
  import("./pages/inquiry/Settlement")
);
const LiquidityInquiry = lazy(() =>
  import("./pages/inquiry/Liquidity")
);
const ContractInquiry = lazy(() =>
  import("./pages/inquiry/Contract")
);
const IntegrationInquiry = lazy(() =>
  import("./pages/inquiry/Integration")
);
const GeneralInquiry = lazy(() => import("./pages/inquiry/General"));

/* ─────────────────────────────────────────────────────────
    유틸리티 훅 및 공용 요소
────────────────────────────────────────────────────────── */
function ScrollRestore() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);
  return null;
}

function RouteFocus() {
  const navType = useNavigationType();
  useEffect(() => {
    const main = document.querySelector("main[tabindex='-1']");
    if (main) main.focus({ preventScroll: true });
  }, [navType]);
  return null;
}

function useSectionReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target.setAttribute("data-visible", "true");
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
}

function useMotionPref() {
  const reduced = useReducedMotion();
  return { reduced };
}

/* ─────────────────────────────────────────────────────────
    Aurora 배경 (GPU 최적화 + 모바일용 축소)
────────────────────────────────────────────────────────── */
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
            opacity: [0, 0.6, 1],
            backgroundPosition: [
              "0% 0%",
              "100% 50%",
              "0% 100%",
              "100% 50%",
              "0% 0%",
            ],
          }
      }
      transition={
        reduced
          ? { duration: 0.8 }
          : {
            duration: 120,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }
      }
      style={{
        background:
          "linear-gradient(130deg, rgba(167,139,250,0.20), rgba(216,180,254,0.18), rgba(192,132,252,0.20))",
        backgroundSize: "400% 400%",
        filter: "blur(120px)",
      }}
    />
  );
}

function SectionWrapper({ id, children }) {
  return (
    <section
      id={id}
      data-section
      className="relative border-t border-[#e8defa]/30 bg-white/40 backdrop-blur-[1px] px-4 sm:px-6 md:px-12 py-12 md:py-20"
    >
      {children}
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
    에러 & 로딩 상태
────────────────────────────────────────────────────────── */
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
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 sm:p-8">
          <h1 className="text-xl sm:text-2xl font-bold text-[#1f1631]">
            일시적인 오류가 발생했습니다.
          </h1>
          <p className="mt-3 text-[#4b3a6b]/80 text-sm sm:text-base">
            새로고침하거나 잠시 후 다시 시도해 주세요.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

function Fallback({ minH = "min-h-[40vh]" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex items-center justify-center ${minH} text-[#7c3aed] text-sm sm:text-base`}
    >
      로딩 중입니다...
    </motion.div>
  );
}

function DelayedFallback({ delay = 1000, children }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return show ? children : null;
}

function useWarmupPreload() {
  useEffect(() => {
    const imgs = [
      "/images/hero/terminal.jpg",
      "/images/hero/dashboard-card.png",
      "/images/hero/store-owner.jpg",
    ];
    imgs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
}

/* ─────────────────────────────────────────────────────────
    페이지 전환 애니메이션
────────────────────────────────────────────────────────── */
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />

          {/* 업종별 추천 */}
          {[
            ["fb", FB],
            ["distribution", Distribution],
            ["service", Service],
            ["b2b", B2B],
          ].map(([path, Comp]) => (
            <Route
              key={path}
              path={`/${path}`}
              element={
                <SectionWrapper>
                  <Suspense fallback={<Fallback />}>
                    <Comp />
                  </Suspense>
                </SectionWrapper>
              }
            />
          ))}

          {/* 제품소개 */}
          {[
            ["online-pay", OnlinePay],
            ["qr-pay", QRPay],
            ["device", Device],
          ].map(([path, Comp]) => (
            <Route
              key={path}
              path={`/${path}`}
              element={
                <SectionWrapper>
                  <Suspense fallback={<Fallback />}>
                    <Comp />
                  </Suspense>
                </SectionWrapper>
              }
            />
          ))}

          {/* 고객지원 & 기술지원 */}
          {[
            ["support", Support],
            ["tech-support", TechSupport],
          ].map(([path, Comp]) => (
            <Route
              key={path}
              path={`/${path}`}
              element={
                <SectionWrapper>
                  <Suspense fallback={<Fallback />}>
                    <Comp />
                  </Suspense>
                </SectionWrapper>
              }
            />
          ))}

          {/* 회사소개 / 비전 / 채용 */}
          {[
            ["company", CompanyIntro],
            ["vision", Vision],
            ["careers", Careers],
            ["recruit", Recruit],
          ].map(([path, Comp]) => (
            <Route
              key={path}
              path={`/${path}`}
              element={
                <SectionWrapper>
                  <Suspense fallback={<Fallback />}>
                    <Comp />
                  </Suspense>
                </SectionWrapper>
              }
            />
          ))}

          {/* FAQ, 정책, 보고서 */}
          {[
            ["payment-faq", PaymentFAQ],
            ["security-policy", SecurityPolicy],
            ["transparency-report", TransparencyReport],
          ].map(([path, Comp]) => (
            <Route
              key={path}
              path={`/${path}`}
              element={
                <SectionWrapper>
                  <Suspense fallback={<Fallback />}>
                    <Comp />
                  </Suspense>
                </SectionWrapper>
              }
            />
          ))}

          {/* 문의 */}
          {[
            ["settlement", SettlementInquiry],
            ["liquidity", LiquidityInquiry],
            ["contract", ContractInquiry],
            ["integration", IntegrationInquiry],
            ["general", GeneralInquiry],
          ].map(([path, Comp]) => (
            <Route
              key={path}
              path={`/inquiry/${path}`}
              element={
                <SectionWrapper>
                  <Suspense fallback={<Fallback />}>
                    <Comp />
                  </Suspense>
                </SectionWrapper>
              }
            />
          ))}
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────────────
    Home
────────────────────────────────────────────────────────── */
function Home() {
  useSectionReveal();
  useWarmupPreload();

  return (
    <main
      tabIndex={-1}
      className="outline-none transition-all duration-300"
      aria-label="SFIN PAY 홈 콘텐츠"
    >
      <section data-section className="relative bg-white/20">
        <Suspense fallback={<Fallback minH="min-h-[80vh]" />}>
          <Hero />
        </Suspense>
      </section>

      {[Partners, Features, Settlement, Liquidity, Security, API, Insights, Compliance, Contact].map(
        (Comp, i) => (
          <SectionWrapper key={i}>
            <Suspense fallback={<Fallback />}>
              <Comp />
            </Suspense>
          </SectionWrapper>
        )
      )}
    </main>
  );
}

/* ─────────────────────────────────────────────────────────
    App
────────────────────────────────────────────────────────── */
export default function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const appBgClass = useMemo(
    () =>
      "relative min-h-screen overflow-x-hidden text-[#1e1b2e] font-['Pretendard','Inter','sans-serif'] bg-gradient-to-b from-[#faf8ff] via-[#f7f4ff] to-[#faf8ff]",
    []
  );

  return (
    <Router basename={process.env.PUBLIC_URL || "/"}>
      <ScrollRestore />
      <RouteFocus />
      <Suspense
        fallback={
          <DelayedFallback delay={1000}>
            <div className="flex items-center justify-center min-h-screen bg-[#faf8ff] text-[#7c3aed] text-lg font-semibold">
              페이지 로딩 중입니다...
            </div>
          </DelayedFallback>
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
              <AnimatedRoutes />
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
