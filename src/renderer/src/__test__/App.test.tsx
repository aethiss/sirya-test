import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import App from '../App'

// Mocks

describe('Rendering', () => {
  test('Renders the main page', () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot()
  })
})

// describe('Functionality', () => {
//   test.only('If config file is loaded', async () => {
//     render(<App />)
//     expect(ipcRenderer.invoke).toHaveBeenCalled()
//   })
// })
