import { Component, html } from './components/base'
import { Screen } from './components/Screen'

class CalculatorApp extends Component {
  render() {
    return html`
      <div class="flow">
        <calculator-header></calculator-header>
        ${Screen({ input: 180 })} 
      </div>
    `
  }
}

customElements.define('calculator-app', CalculatorApp)
