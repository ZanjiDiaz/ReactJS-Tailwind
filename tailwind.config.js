/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        primary: "#3CA9FD",
        seconary: "#71C1FF",
        tertiary: "#97D2FF",
        light: "#CCE9FF",
        dark: "#313131",
        darkLight: "#4F4F4F",
      },
      colors: {
        primary: "#3CA9FD",
        seconary: "#71C1FF",
        tertiary: "#97D2FF",
        light: "#CCE9FF",
        dark: "#313131",
        darkLight: "#4F4F4F",
      },
    },
  },
  plugins: [],
};
