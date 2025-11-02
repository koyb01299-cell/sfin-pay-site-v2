import React from "react";
import { motion } from "framer-motion";
import { Building2, Handshake } from "lucide-react";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay: 0.08 * i },
});

export default function Partners() {
  // ✅ 대규모 파트너 풀 (45개)
  const partners = [
    // 금융 & PG사
    { name: "신한은행", logo: "/images/partners/shinhan.png" },
    { name: "KB국민은행", logo: "/images/partners/kb.png" },
    { name: "NH농협", logo: "/images/partners/nhbank.png" },
    { name: "우리은행", logo: "/images/partners/woori.png" },
    { name: "IBK기업은행", logo: "/images/partners/ibk.png" },
    { name: "하나은행", logo: "/images/partners/hana.png" },
    { name: "BNK부산은행", logo: "/images/partners/bnk.png" },
    { name: "카카오뱅크", logo: "/images/partners/kakaobank.png" },
    { name: "토스뱅크", logo: "/images/partners/tossbank.png" },
    { name: "이니시스", logo: "/images/partners/inicis.png" },
    { name: "나이스페이", logo: "/images/partners/nicepay.png" },
    { name: "다날", logo: "/images/partners/danal.png" },
    { name: "KG모빌리언스", logo: "/images/partners/kgmobilians.png" },
    { name: "KCP", logo: "/images/partners/kcp.png" },
    { name: "KSNET", logo: "/images/partners/ksnet.png" },

    // 커머스 & 플랫폼
    { name: "네이버페이", logo: "/images/partners/naverpay.png" },
    { name: "카카오페이", logo: "/images/partners/kakaopay.png" },
    { name: "토스", logo: "/images/partners/toss.png" },
    { name: "페이코", logo: "/images/partners/payco.png" },
    { name: "쿠팡", logo: "/images/partners/coupang.png" },
    { name: "스마트스토어", logo: "/images/partners/smartstore.png" },
    { name: "카페24", logo: "/images/partners/cafe24.png" },
    { name: "메이크샵", logo: "/images/partners/makeshop.png" },
    { name: "아임웹", logo: "/images/partners/imweb.png" },
    { name: "위메프", logo: "/images/partners/wmp.png" },
    { name: "11번가", logo: "/images/partners/11st.png" },
    { name: "티몬", logo: "/images/partners/tmon.png" },
    { name: "G마켓", logo: "/images/partners/gmarket.png" },
    { name: "옥션", logo: "/images/partners/auction.png" },

    // 글로벌 테크 / SaaS
    { name: "Stripe", logo: "/images/partners/stripe.png" },
    { name: "Adyen", logo: "/images/partners/adyen.png" },
    { name: "PayPal", logo: "/images/partners/paypal.png" },
    { name: "Square", logo: "/images/partners/square.png" },
    { name: "Amazon Pay", logo: "/images/partners/amazonpay.png" },
    { name: "Google Pay", logo: "/images/partners/googlepay.png" },
    { name: "Apple Pay", logo: "/images/partners/applepay.png" },
    { name: "Alipay", logo: "/images/partners/alipay.png" },
    { name: "WeChat Pay", logo: "/images/partners/wechatpay.png" },
    { name: "Shopify", logo: "/images/partners/shopify.png" },
    { name: "WooCommerce", logo: "/images/partners/woo.png" },
    { name: "Magento", logo: "/images/partners/magento.png" },
    { name: "Salesforce", logo: "/images/partners/salesforce.png" },
    { name: "Zendesk", logo: "/images/partners/zendesk.png" },
    { name: "HubSpot", logo: "/images/partners/hubspot.png" },
  ];

  // ✅ 완전 중복 없는 분할 (15개씩)
  const row1 = partners.slice(0, 15);
  const row2 = partners.slice(15, 30);
  const row3 = partners.slice(30, 45);

  return (
    <section
      id="partners"
      className="relative py-24 px-6 md:px-16 bg-[#f9f7ff] overflow-hidden"
    >
      {/* 🎨 배경 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f7f4ff] via-[#f3f0ff] to-[#faf8ff]" />
      <div className="absolute inset-0 -z-[5] bg-[radial-gradient(ellipse_at_60%_40%,rgba(124,58,237,0.05),transparent_70%)]" />

      {/* 헤더 */}
      <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#6d28d9] text-sm font-medium">
          <Building2 size={16} /> 함께하는 파트너
        </span>
        <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#1f1631] leading-snug">
          신뢰할 수 있는 <span className="text-[#7c3aed]">결제 생태계</span>
        </h2>
        <p className="mt-5 text-[#4b3a6b]/80 text-lg leading-relaxed">
          금융기관, 커머스, 기술기업과 함께
          <br className="hidden sm:block" /> 안정적이고 투명한 결제 환경을
          구축합니다.
        </p>
      </motion.div>

      {/* 🔁 3줄 슬라이드 */}
      <div className="flex flex-col gap-8 md:gap-10">
        {/* 1행 - 왼쪽 */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-33.3333%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 whitespace-nowrap opacity-90 will-change-transform"
        >
          {[...row1, ...row1, ...row1].map((p, i) => (
            <div
              key={`r1-${i}`}
              className="inline-flex flex-col items-center justify-center min-w-[150px] md:min-w-[180px] h-[100px] rounded-xl bg-white border border-[#e5dcfa] hover:shadow-[0_4px_16px_rgba(124,58,237,0.1)] transition-all"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-[36px] w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
              <span className="mt-2 text-xs md:text-sm text-[#4b3a6b]/80 font-medium">
                {p.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* 2행 - 오른쪽 */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ["-33.3333%", "0%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="hidden sm:flex gap-10 whitespace-nowrap opacity-90 will-change-transform"
        >
          {[...row2, ...row2, ...row2].map((p, i) => (
            <div
              key={`r2-${i}`}
              className="inline-flex flex-col items-center justify-center min-w-[150px] md:min-w-[180px] h-[100px] rounded-xl bg-white border border-[#e5dcfa] hover:shadow-[0_4px_16px_rgba(124,58,237,0.1)] transition-all"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-[36px] w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
              <span className="mt-2 text-xs md:text-sm text-[#4b3a6b]/80 font-medium">
                {p.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* 3행 - 왼쪽 */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-33.3333%"] }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          className="hidden sm:flex gap-10 whitespace-nowrap opacity-90 will-change-transform"
        >
          {[...row3, ...row3, ...row3].map((p, i) => (
            <div
              key={`r3-${i}`}
              className="inline-flex flex-col items-center justify-center min-w-[150px] md:min-w-[180px] h-[100px] rounded-xl bg-white border border-[#e5dcfa] hover:shadow-[0_4px_16px_rgba(124,58,237,0.1)] transition-all"
            >
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-[36px] w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
              <span className="mt-2 text-xs md:text-sm text-[#4b3a6b]/80 font-medium">
                {p.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA 배너 */}
      <motion.div
        {...fadeUp(2)}
        className="max-w-5xl mx-auto mt-20 rounded-2xl border border-[#e2d8fa] bg-gradient-to-r from-[#ede9fe] to-[#faf8ff] p-8 md:p-10 text-center shadow-[0_8px_30px_rgba(124,58,237,0.05)]"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#6d28d9] text-sm mb-4">
          <Handshake size={14} /> PARTNERSHIP PROGRAM
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-[#1f1631] mb-3">
          SFIN PAY와 함께 성장할 파트너를 찾습니다
        </h3>
        <p className="text-[#4b3a6b]/80 text-base mb-6">
          제휴 금융기관, 플랫폼, SaaS 파트너로 등록하여
          함께 시장을 확장하고 리워드를 공유하세요.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#9f6bff] hover:from-[#6d28d9] hover:to-[#9f6bff] text-white font-semibold transition-all shadow-[0_8px_20px_rgba(124,58,237,0.25)]"
        >
          제휴 문의하기 →
        </a>
      </motion.div>
    </section>
  );
}
