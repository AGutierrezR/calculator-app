import { LitElement, html } from 'lit'
import './Button'
import { OPERATOR } from '../../utils'
import { tailwindStyles } from '../styles/Tailwind.styles'

class KeypadComponent extends LitElement {
  static get styles() {
    return [tailwindStyles]
  }

  appendValue(value) {
    this.dispatchEvent(
      new CustomEvent('appendvalue', { detail: value.toString() }),
    )
  }

  removeValue() {
    this.dispatchEvent(new CustomEvent('removevalue'))
  }

  setOperator(operator) {
    this.dispatchEvent(new CustomEvent('setoperator', { detail: operator }))
  }

  reset() {
    this.dispatchEvent(new CustomEvent('reset'))
  }

  showResult() {
    this.dispatchEvent(new CustomEvent('showresult'))
  }

  render() {
    return html`
      <div
        class="grid grid-cols-4 gap-4-8 rounded-[.625rem] bg-keypad p-5-8 font-base"
      >
        <span class="sr-only">Keypad</span>
        ${[7, 8, 9].map((value) => {
          return html`
            <cal-button
              color="support-3"
              value=${value}
              @click=${() => this.appendValue(value)}
              >${value}</cal-button
            >
          `
        })}
        <cal-button color="support-1" @click=${() => this.removeValue()}
          >Del</cal-button
        >
        ${[4, 5, 6].map((value) => {
          return html`
            <cal-button
              color="support-3"
              value=${value}
              @click=${() => this.appendValue(value)}
              >${value}</cal-button
            >
          `
        })}
        <cal-button @click=${() => this.setOperator(OPERATOR.ADD)}
          >+</cal-button
        >
        ${[1, 2, 3].map((value) => {
          return html`
            <cal-button
              color="support-3"
              value=${value}
              @click=${() => this.appendValue(value)}
              >${value}</cal-button
            >
          `
        })}
        <cal-button @click=${() => this.setOperator(OPERATOR.SUBTRACT)}
          >-</cal-button
        >
        <cal-button color="support-3" @click=${() => this.appendValue('.')}
          >.</cal-button
        >
        <cal-button color="support-3" @click=${() => this.appendValue('0')}
          >0</cal-button
        >
        <cal-button
          color="support-3"
          @click=${() => this.setOperator(OPERATOR.DIVIDE)}
          >/</cal-button
        >
        <cal-button
          color="support-3"
          @click=${() => this.setOperator(OPERATOR.MULTIPLY)}
          >x</cal-button
        >
        <cal-button
          class="col-span-2"
          color="support-1"
          @click=${() => this.reset()}
          >Reset</cal-button
        >
        <cal-button
          class="col-span-2"
          color="support-2"
          @click=${() => this.showResult()}
          >=</cal-button
        >
      </div>
    `
  }
}

customElements.define('calc-keypad', KeypadComponent)
