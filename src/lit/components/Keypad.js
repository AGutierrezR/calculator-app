import { html } from 'lit-html'
import { Button } from './Button'

export function Keypad() {
  return html`
    <div class="grid grid-cols-4 gap-4 bg-keypad p-5">

      ${[7, 8, 9].map(value => {
        return Button({
          text: value,
          onClick: (value) => console.log(value)
        })
      })}
      ${Button({
        color: 'support-1',
        text: 'Del',
      })}
      ${[6, 5, 4].map(value => {
        return Button({
          text: value,
          onClick: (value) => console.log(value)
        })
      })}
      ${Button({
        text: '+',
      })}
      ${[1, 2, 3].map(value => {
        return Button({
          text: value,
          onClick: (value) => console.log(value)
        })
      })}
      ${Button({
        text: '-',
      })}
      ${Button({
        text: '.',
      })}
      ${Button({
        text: 0,
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
