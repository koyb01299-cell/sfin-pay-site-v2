import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ✅ 페이지 이동 시 자동 스크롤 초기화
 * 모든 Route 전환마다 scrollTop(0,0)
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지가 바뀔 때마다 스크롤 최상단으로 이동
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
