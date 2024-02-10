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
      base: 'var(--color-base)',
      inverted: 'var(--color-inverted)'
    },
    fontSize,
    fontFamily,
    fontWeight: {
      normal: 400,
      bold: 700,
      black: 800,
    },
    backgroundColor: {
      main: 'var(--bg-main)',
      toggle: 'var(--bg-toggle)',
      keypad: 'var(--bg-keypad)',
      screen: 'var(--bg-screen)',
      'support-1': 'var(--bg-support-1)',
      'support-2': 'var(--bg-support-2)',
      'support-3': 'var(--bg-support-3)'
    },
    boxShadowColor: {
      'support-1': 'var(--shadow-support-1)',
      'support-2': 'var(--shadow-support-2)',
      'support-3': 'var(--shadow-support-3)'
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
      spacing
    }
  },
  plugins: [
    plugin(function ({ addComponents, config }) {
      let result = ''

      const currentConfig = config()

      const groups = [
        { key: 'colors', prefix: 'color' },
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

