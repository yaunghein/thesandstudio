const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ["NeueHaasDisplay", ...defaultTheme.fontFamily.sans],
      "sand-medium": [
        "NeueHaasDisplay-Medium",
        ...defaultTheme.fontFamily.sans,
      ],
      "sand-bold": ["NeueHaasDisplay-Bold", ...defaultTheme.fontFamily.sans],
      "sand-black": ["NeueHaasDisplay-Black", ...defaultTheme.fontFamily.sans],
      "sand-mobile-regular": ["NeueBit", ...defaultTheme.fontFamily.sans],
      "sand-mobile-bold": ["NeueBit-Bold", ...defaultTheme.fontFamily.sans],
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "0.125rem",
      3: "0.1875rem",
    },
    extend: {
      colors: {
        light: {
          4: "hsl(0, 0%, 4%)",
          7: "hsl(0, 0%, 7%)",
          10: "hsl(0, 0%, 9%)",
          12: "hsl(0, 0%, 12%)",
          20: "hsl(0, 0%, 20%)",
          25: "hsl(0, 0%, 25%)",
          40: "hsl(0, 0%, 38%)",
          50: "hsl(0, 0%, 50%)",
          60: "hsl(0, 0%, 60%)",
          70: "hsl(0, 0%, 70%)",
          80: "hsl(0, 0%, 80%)",
          90: "hsl(0, 0%, 90%)",
          95: "hsl(0, 0%, 95%)",
          100: "hsl(34, 100%, 99%)",
        },
        "sand-red": "#F84A49",
        "sand-blue": "#001AFF",
        "sand-yellow": "#FFB800",
        "sand-green": "#66E5B0",
      },
      width: {
        "shell-desktop": "81.2rem",
        line: "0.125rem",
      },
      height: {
        "shell-desktop": "55.2rem",
      },
      opacity: {
        sand: "0.6",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
        "spin-once": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(90deg)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-back-once": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-90deg)" },
        },
        vibrate: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
          "100%": { transform: "translateX(0)" },
        },
        blink: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        "spin-once": "spin-once 0.8s ease-in-out",
        "spin-slow": "spin-slow 10s linear infinite",
        "spin-back-once": "spin-back-once 0.8s ease-in-out",
        "vibrate-once": "vibrate 0.5s ease-in-out 1",
        blink: "blink 1s infinite",
      },
      backgroundImage: {
        "starwar-gradient-light":
          "linear-gradient(to bottom, #e6e6e6, transparent)",
        "starwar-gradient-dark":
          "linear-gradient(to bottom, #000, transparent)",
        "404-gradient-light":
          "radial-gradient(circle, white 0%, rgba(255, 255, 255, 0.5) 50%,transparent 70%, transparent 100%)",
        "404-gradient-dark":
          "radial-gradient(circle, black 0%, rgba(0, 0, 0, 0.5) 50%,transparent 70%, transparent 100%)",
      },
      listStyleType: {
        circle: "circle",
      },
      dropShadow: {
        "404-light": [
          "0px 0px 20px rgba(255, 255, 255, 0.3)",
          "0px 0px 30px rgba(255, 255, 255, 0.3)",
        ],
        "404-dark": [
          "0px 0px 60px rgba(20, 20, 20, 0.8)",
          "0px 0px 100px rgba(20, 20, 20, 0.5)",
        ],
      },
    },
  },
  plugins: [],
};
