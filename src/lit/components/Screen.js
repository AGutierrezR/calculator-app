import { LitElement, html } from 'lit'
import { styleMap } from 'lit/directives/style-map.js'
import { tailwindStyles } from '../styles/Tailwind.styles'

class ScreenComponent extends LitElement {
  static get properties() {
    return {
      operator: { type: String },
      savedInput: { type: String },
      input: { type: String },
      error: { type: String },
    }
  }

  static get styles() {
    return [tailwindStyles]
  }

  constructor() {
    super()
    this.input = '0'
    this.savedInput = '0'
    this.operator = null
    this.error = null
  }

  render() {
    const minimumFractionDigits = Math.min(
      this.input.split('.')[1]?.length ?? 0,
    )

    return html`
      <div
        class="relative flex min-h-[7.75rem] flex-row-reverse items-center rounded-[.625rem] bg-screen px-6 pb-6-9 pt-7-10 text-right font-base"
      >
        <span class="sr-only">Result</span>
        ${this.operator &&
        html`
          <div class="absolute right-6 top-2 text-sm md:right-8 md:top-3">
            ${this.savedInput} ${this.operator}
          </div>
        `}
        <output
          class="flex justify-end overflow-hidden text-2xl leading-[.925]"
          style=${styleMap({
            fontSize:
              this.input.length > 10
                ? `calc(var(--size-2xl) / ${this.input.length / 10})`
                : '',
          })}
        >
          ${this.error ??
          Number(this.input === '.' ? '0' : this.input).toLocaleString(
            'en-US',
            { minimumFractionDigits },
          )}
        </output>
      </div>
    `
  }
}

customElements.define('calc-screen', ScreenComponent)
