module.exports = {
  purge: {
    enabled: true,
    content: ["../*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oswald", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      margin: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};
