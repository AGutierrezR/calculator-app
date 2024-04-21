import { calculate, formatValue } from '../utils'
import { LitElement, html } from 'lit'
import { tailwindStyles } from './styles/Tailwind.styles'
import './components/Header'
import './components/Screen'
import './components/Keypad'

export class CalculatorApp extends LitElement {
  static properties = {
    input: { type: String },
    operator: { type: String },
    savedInput: { type: String },
    isOperatorSwitched: { type: Boolean },
    error: { type: String },
  }

  static get styles() {
    return [tailwindStyles]
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
      this.isOperatorSwitched ? value : this.input + value,
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
      <div>
        <calc-header></calc-header>
        <calc-screen
          class="mt-8 block"
          .input=${this.input}
          .savedInput=${this.savedInput}
          .operator=${this.operator}
          .error=${this.error}
        ></calc-screen>
        <calc-keypad
          class="mt-6 block"
          @appendvalue=${(v) => this.appendValue(v.detail)}
          @removevalue=${() => this.removeValue()}
          @reset=${() => this.reset()}
          @setoperator=${(o) => this.setOperator(o.detail)}
          @showresult=${() => this.showResult()}
        ></calc-keypad>
      </div>
    `
  }
}

customElements.define('calculator-app', CalculatorApp)
