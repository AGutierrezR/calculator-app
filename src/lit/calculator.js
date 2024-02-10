import { Component, html } from './components/base'
import './components/Header';

class CalculatorApp extends Component {
  render() {
    return html`
      <calculator-header></calculator-header>
    `
  }
}

customElements.define('calculator-app', CalculatorApp)
