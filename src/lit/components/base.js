import { LitElement, html } from 'lit'
import {styleMap} from 'lit/directives/style-map.js';

class Component extends LitElement {
  createRenderRoot() {
    return this
  }
}

export { Component, html, styleMap }
