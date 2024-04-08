import { calculate, formatValue } from '../utils'
import { Component, html } from './components/base'
import './components/Header'
import { Keypad } from './components/Keypad'
import { Screen } from './components/Screen'

export class CalculatorApp extends Component {
  static properties = {
    input: { type: String },
    operator: { type: String },
    savedInput: { type: String },
    isOperatorSwitched: { type: Boolean },
    error: { type: String },
  }

  constructor() {
    super()
    this.input = '0'
    this.operator = null
    this.savedInput = '0'
    this.isOperatorSwitched = false
    this.error = null
  }

  appendValue(value) {
    const MAX_INPUT_LENGTH = 15
    if (
      this.input.length >= MAX_INPUT_LENGTH &&
      !this.isOperatorSwitched &&
      !this.error
    )
      return

    this.input = formatValue(
      this.isOperatorSwitched && value !== '.' ? value : this.input + value,
      this.isOperatorSwitched,
    )
    this.isOperatorSwitched = false
  }

  removeValue() {
    if (this.error || this.isOperatorSwitched) return
    const isValue = this.input.length > 1 && Number.isFinite(Number(this.input))
    this.input = isValue ? this.input.slice(0, -1) : '0'
  }

  setOperator(operator) {
    if (this.error) return
    if (this.isOperatorSwitched) {
      this.operator = operator
      return
    }

    if (this.savedInput && this.operator) {
      try {
        const result = calculate(this.savedInput, this.input, this.operator)
        this.savedInput = result.toString().replace(/\.$/, '')
        this.input = result.toString()
      } catch (err) {
        if (!(err instanceof Error)) return
        this.error = err.message ?? 'Error'
        this.savedInput = '0'
        this.operator = null
      }
    } else {
      this.savedInput = this.input.replace(/\.$/, '')
    }
    this.savedInput = this.input.replace(/\.$/, '')

    this.isOperatorSwitched = true
    this.operator = operator
  }

  showResult() {
    if (!this.operator) return

    try {
      const result = calculate(this.savedInput, this.input, this.operator)
      this.input = result.toString()
      this.savedInput = result.toString()
    } catch (err) {
      if (!(err instanceof Error)) return
      this.error = err.message ?? 'Error'
      this.savedInput = '0'
    }

    this.operator = null
    this.isOperatorSwitched = true
  }

  reset() {
    this.input = '0'
    this.operator = null
    this.savedInput = '0'
    this.isOperatorSwitched = false
    this.error = null
  }

  render() {
    return html`
      <div class="flow">
        <calculator-header></calculator-header>
        ${Screen({
          input: this.input,
          savedInput: this.savedInput,
          operator: this.operator,
          error: this.error,
        })}
        ${Keypad({
          appendValue: (v) => this.appendValue(v.toString()),
          removeValue: () => this.removeValue(),
          reset: () => this.reset(),
          setOperator: (o) => this.setOperator(o),
          showResult: () => this.showResult(),
        })}
      </div>
    `
  }
}

customElements.define('calculator-app', CalculatorApp)
