module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../images/hero-pattern.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
