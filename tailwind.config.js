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
      'src/components/**/*.{vue,js}',
      'src/layouts/**/*.vue',
      'src/pages/**/*.vue',
      'src/plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  }
}
