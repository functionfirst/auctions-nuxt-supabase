module.exports = {
  theme: {},
  variants: {
    extend: {
      display: ['group-hover']
    }
  },
  plugins: [],
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  }
}
