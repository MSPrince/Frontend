/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#178A86",
        secondary: "#f97316",
        tertiary: "#54D6BB",
      },
      fontFamily:{
         primary:['Inter' , 'sans-serif']
      }
    },
    // screens: {
    //   lg: { max: "1023px" },
    //   // => @media (max-width: 1023px) { ... }
    //   md: { max: "767px" },

    //   sm: { max: "640px" },
    //   // => @media (max-width: 639px) { ... }
    // },
  },
  plugins: [],
};

// Default Tailwind CSS breakpoints for reference:
// sm: "640px",
// md: "768px",
// lg: "1024px",
// xl: "1280px",
// 2xl: "1536px",
