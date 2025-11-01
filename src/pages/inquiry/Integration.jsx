import React from "react";
import ContactForm from "../../components/ContactForm";

export default function IntegrationInquiry() {
  return (
    <ContactForm
      title="시스템 연동 / 기술 지원 문의"
      desc="API, 결제 모듈, 웹훅, 인증 관련 기술 연동 문의 및 개발 환경 지원 요청을 남겨주세요."
      recipient="tech@sfinpay.co.kr"
    />
  );
}
