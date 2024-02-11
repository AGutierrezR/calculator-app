import { html } from 'lit-html'

export function Screen({ input }) {
  return html`
    <div
      class="relative rounded-[0.625rem] bg-screen px-6 pb-[1.375rem] pt-7 text-right leading-[0.95]"
    >
      <span class="sr-only">Result</span>
      <output class="flex justify-end overflow-hidden text-2xl">
        ${input}
      </output>
    </div>
  `
}
