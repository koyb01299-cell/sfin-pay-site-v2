import React from "react";
import ContactForm from "../../components/ContactForm";

export default function SettlementInquiry() {
  return (
    <ContactForm
      title="정산 관련 문의"
      desc="정산 주기, 금액 확인, 지연 내역 등 정산 관련 문의를 남겨주세요."
      recipient="settlement@sfinpay.co.kr"
    />
  );
}
