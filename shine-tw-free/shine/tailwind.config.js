module.exports = {
  purge: {
    enabled: true,
    content: [
      '*.html',
      './assets/js/main.js'
    ]
  },
  theme: {
    extend: {
      inset: {
        '100': '100%',
      },
      colors: {
        berkeley: '#003262',
        calgold: '#FDB515',
        metalgold: '#BC9B6A'
      }
    },
  },
  variants: {},
  plugins: [],
}
