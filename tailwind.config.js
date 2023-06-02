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
      backgroundImage: {
        'linear-bottom-white':
          'linear-gradient(180deg, rgba(249, 250, 251, 0) 0%, #F9FAFB 100%)',
      },
      colors: {
        'body-background': '#f9f4fb',
      },
    },
  },
  plugins: [],
}
