import { formatValue } from '../utils'
import { Component, html } from './components/base'
import './components/Header'
import { Keypad } from './components/Keypad'
import { Screen } from './components/Screen'

export class CalculatorApp extends Component {
  static properties = {
    input: { type: String },
  }

  constructor() {
    super()
    this.input = '0'
  }

  appendValue(value) {
    this.input = formatValue(this.input + value)
  }

  removeValue() {
    const isValue = this.input.length > 1 && Number.isFinite(Number(this.input))
    this.input = isValue ? this.input.slice(0, -1) : '0'
  }

  render() {
    return html`
      <div class="flow">
        <calculator-header></calculator-header>
        ${Screen({ input: this.input })}
        ${Keypad({
          appendValue: (v) => this.appendValue(v),
          removeValue: () => this.removeValue()
        })}
      </div>
    `
  }
}

customElements.define('calculator-app', CalculatorApp)
