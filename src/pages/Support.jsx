import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Wallet,
  FileSignature,
  Cpu,
  MessageSquare,
  Clock3,
  Headphones,
  ChevronDown,
} from "lucide-react";

export default function Support() {
  const navigate = useNavigate();
  useEffect(() => window.scrollTo(0, 0), []);

  const fadeUp = (d = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: d },
  });

  const inquiryList = [
    {
      icon: <Wallet size={28} />,
      title: "정산 관련 문의",
      link: "/inquiry/settlement",
      desc: "입금, 수수료, D+0/D+1 관련 문의",
    },
    {
      icon: <FileSignature size={28} />,
      title: "가맹 계약 / 수수료 협의",
      link: "/inquiry/contract",
      desc: "계약 진행, 수수료 협의 문의",
    },
    {
      icon: <Cpu size={28} />,
      title: "시스템 연동 / 기술 지원",
      link: "/inquiry/integration",
      desc: "POS, API, QR 연동 등 기술 문의",
    },
    {
      icon: <MessageSquare size={28} />,
      title: "일반 / 제휴 문의",
      link: "/inquiry/general",
      desc: "제휴, 홍보, 기타 문의",
    },
  ];

  /** 💬 실감 나는 실제형 FAQ 답변 */
  const faqs = [
    {
      q: "입금(정산)이 지연되는 이유가 뭔가요?",
      a: (
        <>
          정산이 지연되는 주요 원인은 크게 세 가지입니다.
          <br />
          <br />
          ① <b>은행 점검 및 영업일 제한</b> — 대부분의 은행은
          주말·공휴일 또는 심야(23~01시) 시간대에 점검이 진행되어 송금이
          일시 중단됩니다. 이 경우 익영업일 오전에 일괄 처리됩니다.
          <br />
          <br />
          ② <b>가맹점 계좌 인증 실패</b> — 최초 정산 계좌 등록 시, 예금주
          실명 일치 검증이 실패하면 자동 입금이 차단됩니다. ‘계좌 재등록’
          또는 고객센터로 연락주시면 즉시 재인증 처리됩니다.
          <br />
          <br />
          ③ <b>거래 보류 / 한도 초과</b> — 거래금액이 일일 한도를 초과했거나
          이상거래 탐지(FDS)에 걸린 경우 자동 정산이 일시 중단됩니다.
          영업일 기준 1시간 이내 담당 매니저가 개별 안내드립니다.
        </>
      ),
    },
    {
      q: "가맹 계약은 어떤 절차로 체결되나요?",
      a: (
        <>
          SFIN PAY의 가맹 계약은 100% <b>비대면 전자계약</b>으로 진행됩니다.
          <br />
          <br />
          1️⃣ <b>온라인 신청서 작성</b> — 업종, 예상 월매출, 사업자등록번호를 입력해
          기본 검토를 요청합니다.
          <br />
          2️⃣ <b>서류 검토 및 신용평가</b> — PG 표준 심사 기준에 따라 업종 적합성,
          세금 체납 여부, 상호 명의 일치 여부 등을 확인합니다.
          <br />
          3️⃣ <b>전자계약 체결</b> — 본인인증(KCB 또는 PASS)을 통해
          전자서명을 완료하면 계약이 자동 체결됩니다.
          <br />
          4️⃣ <b>계약 완료 및 가맹점 ID 발급</b> — 보통 영업일 기준 1~2일 내에
          가맹점이 개설되며, 연동용 테스트 계정도 함께 발급됩니다.
        </>
      ),
    },
    {
      q: "POS 또는 API 연동이 되지 않습니다. 어떻게 해야 하나요?",
      a: (
        <>
          기술 연동 오류는 대부분 <b>API Key 설정 불일치</b> 또는
          <b>서버 방화벽 정책</b> 문제로 발생합니다.
          <br />
          <br />
          🔹 <b>확인 1</b> — 발급받은 Client ID / Secret Key가 테스트용인지 실운영용인지
          구분되어 있는지 확인하세요.
          <br />
          🔹 <b>확인 2</b> — 서버에서 외부 요청을 차단하는 방화벽이 활성화되어 있다면,
          도메인 <code>api.sfinpay.co.kr</code> 을 화이트리스트에 추가해야 합니다.
          <br />
          🔹 <b>확인 3</b> — 결제 요청 후 401 / 403 오류가 반환되는 경우,
          Authorization 헤더 또는 시그니처 파라미터 누락 여부를 점검하세요.
          <br />
          <br />
          그래도 해결되지 않는다면
          <b>「시스템 연동 / 기술 지원」</b> 메뉴에서 API 로그를 첨부해 문의하시면
          엔지니어가 직접 원인을 분석해드립니다.
        </>
      ),
    },
    {
      q: "D+0 정산 서비스는 어떤 방식으로 입금되나요?",
      a: (
        <>
          D+0 정산은 <b>당일 정산(15분 단위 자동입금)</b> 시스템으로,
          결제 승인 후 실시간으로 매출이 집계되고 지정 계좌로 송금됩니다.
          <br />
          <br />
          ⏱️ 입금 주기 : 평균 15~20분 단위 실시간 처리
          <br />
          💰 가능 시간 : 오전 06시 ~ 익일 01시 (은행 점검 시간 제외)
          <br />
          ⚙️ 입금 방식 : 자동송금 API 기반으로, 별도 요청 없이 자동 실행됩니다.
          <br />
          <br />
          ※ R+0은 금융사·은행 연계망 상황에 따라 일시적으로 D+1로 전환될 수 있습니다.
          해당 시점에는 관리자 대시보드에서도 자동 공지됩니다.
        </>
      ),
    },
    {
      q: "수수료 정책은 어떻게 구성되어 있나요?",
      a: (
        <>
          수수료는 기본적으로 <b>업종 / 매출규모 / 결제수단</b>에 따라 차등 적용됩니다.
          <br />
          <br />
          💳 <b>신용카드</b> : 2.5% ~ 3.2%
          💸 <b>계좌이체</b> : 1.8% ~ 2.2%
          🧾 <b>간편결제 (카카오·네이버)</b> : 2.2% ~ 2.9%
          <br />
          <br />
          5천만 원 이상 매출 가맹점의 경우, 거래량 기반 <b>개별 수수료 협의</b>가 가능합니다.
          문의 시 담당 매니저가 사업유형에 맞는 맞춤 견적을 제공합니다.
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#1f1631] pt-32">
      {/* Header */}
      <section className="text-center py-20 px-6 md:px-16 bg-gradient-to-b from-[#f9f6ff] to-[#faf8ff]">
        <motion.h1
          {...fadeUp(0)}
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          고객 지원
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg md:text-xl text-[#4b3a6b]/80 max-w-3xl mx-auto"
        >
          정산, 가맹, 기술 연동 등 모든 문의를 여기를 통해 접수하세요.
        </motion.p>
      </section>

      {/* 문의 카드 */}
      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl font-bold text-center mb-12 text-[#1f1631]"
        >
          문의 유형 선택
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {inquiryList.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              className="p-8 bg-white border border-[#c4b5fd]/40 rounded-2xl text-center hover:shadow-[0_0_25px_rgba(124,58,237,0.15)] transition-all"
            >
              <div className="flex justify-center mb-4 text-[#7c3aed]">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-[#4b3a6b]/80 mb-4">{item.desc}</p>
              <button
                onClick={() => navigate(item.link)}
                className="inline-block mt-2 px-5 py-2 rounded-lg bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-medium transition"
              >
                바로 문의하기 →
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-16 max-w-4xl mx-auto">
        <motion.h2
          {...fadeUp(0)}
          className="text-3xl font-bold text-center mb-10 text-[#1f1631]"
        >
          자주 묻는 질문
        </motion.h2>
        {faqs.map((f, i) => (
          <motion.details
            key={i}
            {...fadeUp(i * 0.1)}
            className="group border-b border-[#e3dafc] py-6"
          >
            <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-[#1f1631] hover:text-[#7c3aed]">
              {f.q}
              <ChevronDown className="text-[#7c3aed] group-open:rotate-180 transition-transform" />
            </summary>
            <div className="mt-3 text-[#4b3a6b]/80 leading-relaxed text-[15px] space-y-2">
              {f.a}
            </div>
          </motion.details>
        ))}
      </section>

      {/* CTA 버튼 */}
      <section className="py-24 px-6 md:px-16 text-center">
        <motion.p
          {...fadeUp(0)}
          className="text-[#4b3a6b]/90 text-lg mb-6 leading-relaxed"
        >
          추가 문의나 상세 상담이 필요하시면 아래 버튼을 눌러주세요.
        </motion.p>
        <motion.button
          {...fadeUp(0.2)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/inquiry/general")}
          className="px-8 py-4 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-lg shadow-md transition-all"
        >
          상담 요청하기 →
        </motion.button>
      </section>

      {/* 고객센터 정보 */}
      <section className="py-16 bg-[#f4f0ff] text-center border-t border-[#e3dafc]">
        <div className="flex flex-col items-center gap-3 text-[#4b3a6b]/80">
          <Headphones size={32} className="text-[#7c3aed]" />
          <p className="font-medium">
            고객센터 : 1544-7788 | support@sfinpay.co.kr
          </p>
          <p className="text-sm flex items-center gap-2">
            <Clock3 size={14} /> 평일 09:00 ~ 18:00 (주말·공휴일 휴무)
          </p>
        </div>
      </section>
    </div>
  );
}
