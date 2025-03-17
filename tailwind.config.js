/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        spmono: ["SpaceMono-Regular", "sans-serif"],
        nthin: ["NotoSansThai-Thin", "sans-serif"],
        nextralight: ["NotoSansThai-ExtraLight", "sans-serif"],
        nlight: ["NotoSansThai-Light", "sans-serif"],
        nregular: ["NotoSansThai-Regular", "sans-serif"],
        nmedium: ["NotoSansThai-Medium", "sans-serif"],
        nsemibold: ["NotoSansThai-SemiBold", "sans-serif"],
        nbold: ["NotoSansThai-Bold", "sans-serif"],
        nextrabold: ["NotoSansThai-ExtraBold", "sans-serif"],
        nblack: ["NotoSansThai-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
}