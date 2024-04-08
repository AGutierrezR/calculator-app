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
    <div
      class="gap-4-8 p-5-8 grid grid-cols-4 grid-rows-[repeat(auto-fill,minmax(56px,64px))] rounded-[.625rem] bg-keypad"
    >
      <span class="sr-only">Keypad</span>
      ${[7, 8, 9].map((value) => {
        return Button({
          color: 'support-3',
          text: value,
          onClick: () => appendValue(value),
        })
      })}
      ${Button({
        color: 'support-1',
        text: 'Del',
        onClick: () => removeValue(),
      })}
      ${[6, 5, 4].map((value) => {
        return Button({
          color: 'support-3',
          text: value,
          onClick: () => appendValue(value),
        })
      })}
      ${Button({
        text: '+',
        onClick: () => setOperator(OPERATOR.ADD),
      })}
      ${[1, 2, 3].map((value) => {
        return Button({
          color: 'support-3',
          text: value,
          onClick: () => appendValue(value),
        })
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
        color: 'support-3',
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
