const plugin = require('tailwindcss/plugin')
const postcss = require('postcss')
const postcssJs = require('postcss-js')

const {
  fontSize,
  fontFamily,
  spacing,
} = require('./src/css-utils/process-tokens.cjs')

module.exports = {
  content: ['./*.html', './src/main.js', './src/lit/**/*.js'],
  theme: {
    colors: {
      main: 'hsl(var(--color-main) / <alpha-value>) ',
      'support-1': 'hsl(var(--color-support-1) / <alpha-value>)',
      'support-2': 'hsl(var(--color-support-2) / <alpha-value>)',
      'support-3': 'hsl(var(--color-support-3) / <alpha-value>)',
    },
    fontSize,
    fontFamily,
    fontWeight: {
      normal: 400,
      bold: 700,
      black: 800,
    },
    backgroundColor: {
      main: 'hsl(var(--bg-main) / <alpha-value>)',
      toggle: 'hsl(var(--bg-toggle) / <alpha-value>)',
      keypad: 'hsl(var(--bg-keypad) / <alpha-value>)',
      screen: 'hsl(var(--bg-screen) / <alpha-value>)',
      'support-1': 'hsl(var(--bg-support-1) / <alpha-value>)',
      'support-2': 'hsl(var(--bg-support-2) / <alpha-value>)',
      'support-3': 'hsl(var(--bg-support-3) / <alpha-value>)',
      'support-1-hover': 'hsl(var(--bg-support-1-hover) / <alpha-value>)',
      'support-2-hover': 'hsl(var(--bg-support-2-hover) / <alpha-value>)',
      'support-3-hover': 'hsl(var(--bg-support-3-hover) / <alpha-value>)',
    },
    boxShadowColor: {
      'support-1': 'hsl(var(--shadow-support-1))',
      'support-2': 'hsl(var(--shadow-support-2))',
      'support-3': 'hsl(var(--shadow-support-3))',
    },
    textColor: ({ theme }) => theme('colors'),
    margin: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
    }),
    padding: ({ theme }) => theme('spacing'),
    boxShadow: {
      DEFAULT: 'inset 0px -4px 0px transparent',
    },
    extend: {
      spacing,
    },
  },
  plugins: [
    plugin(function ({ addComponents, config }) {
      let result = ''

      const currentConfig = config()

      const groups = [
        { key: 'spacing', prefix: 'space' },
        { key: 'fontSize', prefix: 'size' },
        { key: 'fontFamily', prefix: 'font' },
      ]

      groups.forEach(({ key, prefix }) => {
        const group = currentConfig.theme[key]

        if (!group) {
          return
        }

        if (key === 'spacing') {
          Object.keys(group).forEach((key) => {
            if (!(key in spacing)) {
              return
            }

            result += `--${prefix}-${key}: ${group[key]};`
          })
        } else {
          Object.keys(group).forEach((key) => {
            result += `--${prefix}-${key}: ${group[key]};`
          })
        }
      })

      addComponents({
        ':root': postcssJs.objectify(postcss.parse(result)),
      })
    }),
  ],
}
