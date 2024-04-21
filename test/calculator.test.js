import { describe, expect, it, beforeEach } from 'vitest'
import { fixture, html } from '@open-wc/testing-helpers'

import '../src/lit/calculator'
import { OPERATOR } from '../src/utils'

/**
 * @typedef {import("../src/lit/calculator").CalculatorApp} CalculatorApp
 */

describe('testing', () => {
  /** @type {CalculatorApp} */
  let el

  beforeEach(async () => {
    el = await fixture(html`<calculator-app></calculator-app>`)
  })
  
  it('Should start with initial configuration', async () => {
    expect(el.input).toBe('0')
    expect(el.operator).toBeNull()
    expect(el.isOperatorSwitched).toBeFalsy()
    expect(el.savedInput).toBe('0')
    expect(el.error).toBeNull()
  })

  it('Should return correct result for addition', () => {
    el.appendValue('3')
    el.setOperator(OPERATOR.ADD)
    el.appendValue('7')
    el.showResult()

    expect(el.input).toBe('10')
  })

  it('Should return correct result for subtraction', () => {
    el.appendValue('3')
    el.setOperator(OPERATOR.SUBTRACT)
    el.appendValue('7')
    el.showResult()

    expect(el.input).toBe('-4')
  })

  it('Should return correct result for multiplication', () => {
    el.appendValue('3')
    el.setOperator(OPERATOR.MULTIPLY)
    el.appendValue('7')
    el.showResult()

    expect(el.input).toBe('21')
  })
  
  it('Should return correct result for division', () => {
    el.appendValue('6')
    el.setOperator(OPERATOR.DIVIDE)
    el.appendValue('2')
    el.showResult()

    expect(el.input).toBe('3')
  })
  
  it('Should return correct result for mixed operations', () => {
    el.appendValue('6')
    el.setOperator(OPERATOR.DIVIDE)
    el.appendValue('2')
    el.setOperator(OPERATOR.MULTIPLY)
    el.appendValue('2')
    el.setOperator(OPERATOR.ADD)
    el.appendValue('10')
    el.showResult()

    expect(el.input).toBe('16')
  })
})
