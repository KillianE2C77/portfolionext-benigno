/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: {
          blacklight: "#272727",
          blacklightdark: "#1C1C1C",
          blackdark: "#202020",
          blackpure: "#080404",
          whitepure: "#fff",
        },
        customGold: {
          golddark: "#FFD700",
          goldpure: "#70542c",
        },
        customGrey: {
          graypure: "#6c757d",
        },
        customRed: {
          redpure: "#DE272E",
        },
      },
    },
    fontFamily: {
      monserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
