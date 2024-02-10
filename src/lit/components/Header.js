import { Component, html, styleMap } from '../components/base'

const themes = ['default', 'light', 'violet']

class Header extends Component {
  static properties = {
    currentTheme: {
      type: String,
    },
  }

  constructor() {
    super()
    this.currentTheme = 'default'
  }

  updated() {
    document.documentElement.dataset.theme = this.currentTheme
  }

  handleChange(themeName) {
    this.currentTheme = themeName
  }

  render() {
    const offset = { '--offset': `${themes.indexOf(this.currentTheme) * 23}px` }
    return html`
      <div class="repel no-wrap items-end">
        <h2 class="text-xl leading-7 tracking-tight ml-2">calc</h2>
        <div class="cluster items-end gap-[1.625rem] text-sm leading-3 ">
          <p class="uppercase mb-[.3125rem]">THEME</p>
          <div class="flex flex-col gap-1">
            <div class="flex justify-between gap-3 px-[10px]">
              ${themes.map((theme, index) => {
                return html`
                  <label class="text-center" for=${theme}
                    >${index}</label
                  >
                `
              })}
            </div>
            <div
              class="before:bg-support-2 relative flex h-[26px] w-[72px] cursor-pointer justify-between rounded-full bg-toggle *:cursor-pointer *:appearance-none before:absolute before:left-[5px] before:top-[5px] before:size-4 before:translate-x-[var(--offset)] before:rounded-full before:transition-all"
              style=${styleMap(offset)}
            >
              ${themes.map((theme) => {
                return html`
                  <input
                    id="${theme}"
                    type="radio"
                    name="theme"
                    class="relative h-full flex-1 rounded-full bg-[transparent]"
                    @change=${() => this.handleChange(theme)}
                  />
                `
              })}
            </div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('calculator-header', Header)
