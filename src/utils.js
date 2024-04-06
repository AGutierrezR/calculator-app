export function formatValue(input, isOperatorSelected) {
  return input.replace(/^0(?!\.)|(?<=\..*)\./g, isOperatorSelected ? '0' : '')
}
