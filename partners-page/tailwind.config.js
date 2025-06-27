/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
        "2xl-dark-max": ["Satoshi", "sans-serif"],
        "2xl-dark-min": ["Satoshi", "sans-serif"],
        "3xl-dark-max": ["Satoshi", "sans-serif"],
        "3xl-dark-min": ["Satoshi", "sans-serif"],
        "md-light": ["Satoshi", "sans-serif"],
        "sm-regular": ["Satoshi", "sans-serif"],
        "xl-body-max": ["Satoshi", "sans-serif"],
        "xl-body-min": ["Satoshi", "sans-serif"],
      },
      colors: {
        brand: {
          6: "#D8D2F4",
          9: "#6852D6",
        },
        branddark: {
          9: "#6852D6",
          10: "#8C7CE0",
          11: "#D8D2F4",
          12: "#FCFCFE",
        },
        graydark: {
          1: "#0A0914",
          3: "#191822",
          12: "#FAFAFF",
        },
        source: {
          violetEV10: "#6852D6",
        },
        orangedark: {
          9: "#CC4400",
        },
        grayscaledark: {
          12: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
};
