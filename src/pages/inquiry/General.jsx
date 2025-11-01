import React from "react";
import ContactForm from "../../components/ContactForm";

export default function GeneralInquiry() {
  return (
    <ContactForm
      title="일반 문의"
      desc="광고, 제휴, 기타 일반적인 문의사항을 남겨주세요. 담당자가 확인 후 연락드립니다."
      recipient="contact@sfinpay.co.kr"
    />
  );
}
