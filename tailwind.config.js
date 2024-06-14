/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': "0.6px 0.6px 2.2px rgba(105, 168, 141, 0.141), 1.3px 1.3px 5.3px rgba(105, 168, 141, 0.202), 2.5px 2.5px 10px rgba(105, 168, 141, 0.25), 4.5px 4.5px 17.9px rgba(105, 168, 141, 0.298), 8.4px 8.4px 33.4px rgba(105, 168, 141, 0.359), 20px 20px 80px rgba(105, 168, 141, 0.5)",
        'basic': "0.6px 0.6px 2.2px rgba(0, 0, 0, 0.02), 1.3px 1.3px 5.3px rgba(0, 0, 0, 0.028), 2.5px 2.5px 10px rgba(0, 0, 0, 0.035), 4.5px 4.5px 17.9px rgba(0, 0, 0, 0.042), 8.4px 8.4px 33.4px rgba(0, 0, 0, 0.05), 20px 20px 80px rgba(0, 0, 0, 0.07)",
      },
      backgroundImage: {
        'pattern':
          "linear-gradient(0deg, var(--color-primary), var(--color-primary)), url('../public/images/pattern.jpeg')",
      },
    },
  },
  plugins: [],
});
