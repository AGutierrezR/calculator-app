const clampGenerator = require('./clamp-generator.cjs')
const tokensToTailwind = require('./tokens-to-tailwind.cjs')


const fontTokens = require('../design-tokens/fonts.json')
const spacingTokens = require('../design-tokens/spacing.json')
const textSizeTokens = require('../design-tokens/text-sizes.json')

const fontFamily = tokensToTailwind(fontTokens.items)
const fontSize = tokensToTailwind(clampGenerator(textSizeTokens.items))
const spacing = tokensToTailwind(clampGenerator(spacingTokens.items))

module.exports = {
  fontSize,
  fontFamily,
  spacing,
}
