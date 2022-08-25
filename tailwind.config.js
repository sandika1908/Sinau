/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      backgroundImage: {
        'biru': "url('img/biru.png')",
        'kuning': "url('img/kuning.png')",
      },
      screens: {
        '2xl' : '1320px',
      },
      colors: {
        body: '#f3f4fb',
        primary: '#00CED6',
        yellow: '#EBFF00',
        hitam: '#282D30',
        biru2: '#61e1e6',
      },
    },
  },
  plugins: [],
}
