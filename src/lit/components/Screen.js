import { html } from 'lit-html'
import { styleMap } from './base'

export function Screen({ input, savedInput, operator, error }) {
  const minimumFractionDigits = Math.min(input.split('.')[1]?.length ?? 0)

  return html`
    <div
      class="mt-8 relative rounded-[.625rem] bg-screen px-6 pb-[1.375rem] pt-7 text-right"
    >
      <span class="sr-only">Result</span>
      ${operator &&
      html`
        <div class="absolute right-6 top-2 text-sm md:right-8 md:top-3">
          ${savedInput} ${operator}
        </div>
      `}
      <output
        class="flex justify-end overflow-hidden text-2xl leading-[2.375rem]"
        style=${styleMap({
          fontSize:
            input.length > 10
              ? `calc(var(--size-2xl) / ${input.length / 10})`
              : '',
        })}
      >
        ${error ??
        Number(input).toLocaleString('en-US', { minimumFractionDigits })}
      </output>
    </div>
  `
}
