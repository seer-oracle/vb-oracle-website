/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1280px",
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "1754px",
    },
    extend: {
      colors: {
        "color-text-footer": "#6977C5",
        "color-text-item-price": "#50E3C2",
        "item-price": "rgba(233, 234, 244, 0.05)",
        "select-field": "rgba(130, 134, 235, 0.05)",
        "select-field-hover": "rgba(130, 134, 235, 0.1)",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        "inter-black": "'Inter-Black', sans-serif",
        poppins: "'Poppins', sans-serif",
        svn_gilroy: "'SVN-Gilroy', sans-serif",
        montserrat: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [],
};
