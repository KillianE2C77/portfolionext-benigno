/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monserrat: ["Montserrat"],
        fontfamily: ["Recursive"],
        Orbitron: ["Orbitron"],
      },
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
        customRed: {
          redpure: "#DE272E",
        },
      },
    },
  },
  plugins: [],
};
