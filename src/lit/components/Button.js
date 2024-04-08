import { html } from 'lit-html'

const colorClasses = {
  'support-1': 'bg-support-1 text-support-1 shadow-support-1 text-md uppercase',
  'support-2':
    'bg-support-2 text-support-2 shadow-support-2 min-h-[56px] text-md uppercase',
  'support-3':
    'bg-support-3 text-support-3 shadow-support-3 min-h-[56px] p-3 pb-3 text-xl',
}

export function Button({ color = 'support-3', text, span = false, ...props }) {
  const handleClick = () => props.onClick(text)

  return html`
    <button
      @click=${() => handleClick()}
      class="${colorClasses[color]} ${span
        ? `col-span-2`
        : ''} rounded-lg p-3 shadow"
      value="${text}"
    >
      ${text}
    </button>
  `
}
