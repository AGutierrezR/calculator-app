export function formatValue(input, isOperatorSelected) {
  return input.replace(/^0(?!\.)|(?<=\..*)\./g, isOperatorSelected ? '0' : '')
}

export const OPERATOR = {
  ADD: '+',
  SUBTRACT: '-',
  MULTIPLY: 'x',
  DIVIDE: '/',
}

export function calculate(a, b, operator) {
  const numberA = Number(a)
  const numberB = Number(b)

  let result = 0

  switch (operator) {
    case OPERATOR.ADD:
      result = numberA + numberB
      break
    case OPERATOR.SUBTRACT:
      result = numberA - numberB
      break
    case OPERATOR.MULTIPLY:
      result = numberA * numberB
      break
    case OPERATOR.DIVIDE:
      if (numberB === 0) {
        throw new Error(`Can't divide`)
      }
      result = numberA / numberB
      break
    default:
      throw new Error('Unsupported operator')
  }

  if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
    throw new Error('Overflow')
  }

  return Number(result.toFixed(10))
}