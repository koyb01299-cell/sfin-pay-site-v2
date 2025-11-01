/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* 💜 라벤더 테마 팔레트 */
        lavender: {
          50: "#f8f7ff",
          100: "#f4f0ff",
          200: "#ede9fe",
          300: "#ddd6fe",
          400: "#c4b5fd",
          500: "#a78bfa",
          600: "#8b5cf6",
          700: "#7c3aed",
          800: "#6d28d9",
          900: "#5b21b6",
        },

        /* 기존 색상 유지 */
        brand: "#3b82f6",
        dark: "#0b0f19",
        glass: "rgba(255,255,255,0.08)",

        /* ⚪ 라이트 배경 & 텍스트용 */
        base: {
          bg: "#f8f7ff",
          text: "#1e1b2e",
        },
      },

      /* 💠 블러 효과 */
      backdropBlur: {
        xs: "2px",
      },

      /* 🌈 그림자 효과 */
      boxShadow: {
        "lavender-card": "0 10px 30px rgba(167,139,250,0.15)",
        "lavender-hover": "0 6px 18px rgba(167,139,250,0.25)",
      },

      /* 🎨 배경 그라디언트 */
      backgroundImage: {
        "lavender-gradient":
          "linear-gradient(135deg, rgba(167,139,250,0.25), rgba(216,180,254,0.35))",
        "lavender-radial":
          "radial-gradient(circle at 30% 30%, rgba(167,139,250,0.15), transparent 70%)",
      },

      /* ⏳ 부드러운 트랜지션 */
      transitionTimingFunction: {
        soft: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      /* 🖋️ 폰트 */
      fontFamily: {
        sans: ["Pretendard", "Inter", "Noto Sans KR", "sans-serif"],
      },
    },
  },

  /* ⚙️ purge 보호 (애니메이션 클래스 등) */
  safelist: [
    "js-reveal",
    "visible",
    "fade-in",
    "card-shadow",
  ],

  plugins: [],
};
