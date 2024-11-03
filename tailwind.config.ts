module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: "#F2F1EF",
        primary: "#FF3E3E", 
        dark: "#1A1A1A", 
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
