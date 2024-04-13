import { LitElement, html, unsafeCSS } from "lit";
import styles from "./tailwind.global.css?inline";

const tailwindElement = unsafeCSS(styles)

export const TailwindElement = (styles) => 
  class extends LitElement {

    static styles = [tailwindElement, unsafeCSS(styles)]
  }