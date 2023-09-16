/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontSize: {
        "mobile-font": "clamp(0.7rem, min(3dvw, 3dvh), 2rem)",
        "desktop-font": "clamp(0.875rem, min(2dvw, 2dvh), 5rem)",
      },
      fontFamily: {
        headings: ["Raleway", "sans-serif"],
        others: ["Open Sans", "sans-serif"],
      },
      colors: {
        "intro-email-signup-bg": "hsl(217, 28%, 15%)",
        "main-bg": "hsl(218, 28%, 13%)",
        "footer-bg": "hsl(216, 53%, 9%)",
        "testimonials-bg": "hsl(219, 30%, 18%)",
        "cta-grad-from": "hsl(176, 68%, 64%)",
        "cta-grad-to": "hsl(198, 60%, 50%)",
        error: "hsl(0, 100%, 63%)",
        white: "hsl(0, 0%, 100%)",
        green: "",
      },
    },
  },
  plugins: [],
};
