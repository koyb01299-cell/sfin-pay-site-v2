import React from "react";
import ContactForm from "../../components/ContactForm";

export default function LiquidityInquiry() {
  return (
    <ContactForm
      title="매출 기반 단기자금(유동성) 문의"
      desc="정산 예정금 또는 매출 내역을 기반으로 단기 운전자금 지원을 신청할 수 있습니다. 
            한도, 정산 연동 조건 등 유동성 관련 문의를 남겨주세요."
      recipient="fund@sfinpay.co.kr"
    />
  );
}
