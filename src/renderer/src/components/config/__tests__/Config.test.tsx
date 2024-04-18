/* eslint-disable @typescript-eslint/ban-ts-comment */
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'

import Config from '../Config'

// Mocks
// jest.mock('electron', () => ({
//   ipcRenderer: {
//     send: jest.fn()
//   }
// }))

describe('Config', () => {
  describe('Rendering', () => {
    test('Renders the config page without file', () => {
      const { asFragment, getByTestId } = render(<Config />)
      expect(asFragment()).toMatchSnapshot()
      const configButton = getByTestId('config-button')
      expect(configButton).toBeInTheDocument()
      expect(configButton).toHaveTextContent('Select config file')
    })

    test('Renders the config page with file', () => {
      const { getByTestId } = render(<Config salt="salt" />)
      const configButton = getByTestId('config-button')
      expect(configButton).toHaveTextContent('Update config file')
    })
  })

  describe('Functionality', () => {
    beforeAll(() => {
      // @ts-ignore
      window.electron = { ipcRenderer: { send: jest.fn() } }
    })

    test('test if open dialog', async () => {
      const { getByTestId } = render(<Config />)
      const configButton = getByTestId('config-button')
      fireEvent.click(configButton)
      console.log('win', JSON.stringify(window))
      expect(window.electron.ipcRenderer.send).toHaveBeenCalledTimes(1)
    })
  })
})
