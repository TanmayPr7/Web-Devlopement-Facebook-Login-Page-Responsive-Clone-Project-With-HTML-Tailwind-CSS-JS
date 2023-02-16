/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontSize: {
        xxs: ['10px', { lineHeight: '1rem' }],
        spcf: ['28px', { lineHeight: '2rem' }],
      },
      maxWidth: ({ theme, breakpoints }) => ({
        '448': '448px',
      }),
      colors: ({ colors }) => ({
        'spc': '#42b72a',
      }),
    },
  },
  plugins: [],
}
