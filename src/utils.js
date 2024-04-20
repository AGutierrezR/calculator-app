/**
 * Formats the input value by removing leading zeros and redundant decimal points.
 * @param {string} input - The input value to be formatted.
 * @param {boolean} isOperatorSelected - Flag indicating whether an operator is selected.
 * @returns {string} - The formatted value.
 */
export function formatValue(input, isOperatorSelected) {
  return input.replace(/^0(?!\.)|(?<=\..*)\./g, isOperatorSelected ? '0' : '')
}

export const OPERATOR = {
  ADD: '+',
  SUBTRACT: '-',
  MULTIPLY: 'x',
  DIVIDE: '/',
}

/**
 * Performs arithmetic operations on two numbers based on the specified operator.
 * @param {number|string} a - The first operand.
 * @param {number|string} b - The second operand.
 * @param {string} operator - The arithmetic operator. Should be one of: '+', '-', 'x', '/'.
 * @returns {number} The result of the arithmetic operation, rounded to 10 decimal places.
 * @throws {Error} If the operator is not supported or if there is an overflow during calculation.
 * @throws {Error} If attempting to divide by zero.
 */
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