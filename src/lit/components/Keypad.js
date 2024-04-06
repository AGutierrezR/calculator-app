import { html } from 'lit-html'
import { Button } from './Button'

export function Keypad({ appendValue, removeValue }) {
  return html`
    <div class="grid grid-cols-4 gap-4 bg-keypad p-5">
      <span class="sr-only">Keypad</span>
      ${[7, 8, 9].map((value) => {
        return html`
          <button
            class="${colorClasses['support-3']} rounded-lg p-3 pb-2 shadow"
            @click=${() => appendValue(value)}
            value=${value}
          >
            ${value}
          </button>
        `
      })}
      ${Button({
        color: 'support-1',
        text: 'Del',
        onClick: () => removeValue(),
      })}
      ${[6, 5, 4].map((value) => {
        return html`
          <button
            class="${colorClasses['support-3']} rounded-lg p-3 pb-2 shadow"
            @click=${() => appendValue(value)}
            value=${value}
          >
            ${value}
          </button>
        `
      })}
      ${Button({
        text: '+',
      })}
      ${[1, 2, 3].map((value) => {
        return html`
          <button
            class="${colorClasses['support-3']} rounded-lg p-3 pb-2 shadow"
            @click=${() => appendValue(value)}
            value=${value}
          >
            ${value}
          </button>
        `
      })}
      ${Button({
        text: '-',
      })}
      ${Button({
        text: '.',
        onClick: (v) => appendValue(v),
      })}
      ${Button({
        text: 0,
        onClick: (v) => appendValue(v.toString()),
      })}
      ${Button({
        text: '/',
      })}
      ${Button({
        text: 'x',
      })}
      ${Button({
        color: 'support-1',
        text: 'Reset',
        span: true,
      })}
      ${Button({
        color: 'support-2',
        text: '=',
        span: true,
      })}
    </div>
  `
}

const colorClasses = {
  'support-1': 'bg-support-1 text-support-1 shadow-support-1 text-md uppercase',
  'support-2':
    'bg-support-2 text-support-2 shadow-support-2 h-[56px] text-md uppercase',
  'support-3':
    'bg-support-3 text-support-3 shadow-support-3 h-[56px] p-3 pb-2 text-xl',
}
