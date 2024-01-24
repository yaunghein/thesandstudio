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
        "sand-red": "#E85851",
        "sand-blue": "#001AFF",
        "sand-yellow": "#E2B53E",
      },
      width: {
        "shell-desktop": "80rem",
      },
      height: {
        "shell-desktop": "56rem",
      },
      opacity: {
        sand: "0.5",
      },
    },
  },
  plugins: [],
};
