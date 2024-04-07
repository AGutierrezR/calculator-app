import { html } from 'lit-html'
import { Button } from './Button'
import { OPERATOR } from '../../utils'

export function Keypad({
  appendValue,
  removeValue,
  reset,
  setOperator,
  showResult,
}) {
  return html`
    <div class="grid grid-cols-4 gap-4 rounded-[.625rem] bg-keypad p-5">
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
        onClick: () => setOperator(OPERATOR.ADD),
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
        onClick: () => setOperator(OPERATOR.SUBTRACT),
      })}
      ${Button({
        text: '.',
        onClick: (v) => appendValue(v),
      })}
      ${Button({
        text: 0,
        onClick: (v) => appendValue(v),
      })}
      ${Button({
        text: '/',
        onClick: (v) => setOperator(OPERATOR.DIVIDE),
      })}
      ${Button({
        text: 'x',
        onClick: (v) => setOperator(OPERATOR.MULTIPLY),
      })}
      ${Button({
        color: 'support-1',
        text: 'Reset',
        span: true,
        onClick: () => reset(),
      })}
      ${Button({
        color: 'support-2',
        text: '=',
        span: true,
        onClick: () => showResult(),
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
