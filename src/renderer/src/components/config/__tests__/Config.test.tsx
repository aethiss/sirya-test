import '@testing-library/jest-dom'
import { render } from "@testing-library/react"

import Config from "../Config"

describe('Config', () => {
  describe('Rendering', () => {
    test('Renders the config page', () => {
      const { asFragment } = render(<Config />)
      expect(asFragment()).toMatchSnapshot()
      expect(asFragment().firstChild).toHaveTextContent('CIAO RAFFA !')
    })
  })
  describe('Functionality', () => {
    test('TEST JEST', () => {
      expect(true).toBe(true)
    })
  })
})
