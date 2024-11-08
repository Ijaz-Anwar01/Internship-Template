/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'phone': '480px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        
      },
    },
  },
  plugins: [],
}
