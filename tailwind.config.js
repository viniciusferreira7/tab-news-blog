/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  jit: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins-sans)'],
        code: ['var(--font-courier-prime-mono)'],
      },
    },
  },
  plugins: [],
}
