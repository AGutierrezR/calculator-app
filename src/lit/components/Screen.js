import { html } from 'lit-html'
import { styleMap } from './base'
import { TailwindElement } from './Tailwind.element'

class ScreenComponent extends TailwindElement() {
  static get properties() {
    return {
      operator: { type: String },
      savedInput: { type: String },
      input: { type: String },
      error: { type: String },
    }
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
        class="relative rounded-[.625rem] bg-screen px-6 pb-6-9 pt-7-10 text-right font-base"
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
          Number(this.input).toLocaleString('en-US', { minimumFractionDigits })}
        </output>
      </div>
    `
  }
}

customElements.define('calc-screen', ScreenComponent)
