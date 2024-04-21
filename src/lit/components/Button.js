import { LitElement, html } from 'lit'
import styles from './Button.css?inline'
import { unsafeCSS } from 'lit'
import { tailwindStyles } from '../styles/Tailwind.styles'

const colorClasses = {
  'support-1': 'bg-support-1 hover:bg-support-1-hover text-support-1 shadow-support-1 text-md uppercase',
  'support-2': 'bg-support-2 hover:bg-support-2-hover text-support-2 shadow-support-2 text-md uppercase',
  'support-3': 'bg-support-3 hover:bg-support-3-hover text-support-3 shadow-support-3 text-xl',
}

class ButtonComponent extends LitElement {
  static get properties() {
    return {
      color: { type: String },
      value: { type: String },
    }
  }

  static get styles() {
    return [tailwindStyles, unsafeCSS(styles)]
  }

  constructor() {
    super()
    this.color = 'support-3'
    this.value = ''
  }

  render() {
    return html`
      <button
        class="${colorClasses[
          this.color
        ]} w-full rounded-lg px-3 font-base font-bold shadow transition-all"
        value=${this.value}
      >
        <slot></slot>
      </button>
    `
  }
}

customElements.define('cal-button', ButtonComponent)
