import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import App from "../App"

test('TEST JEST', () => {
  expect(true).toBe(true)
})

test("Renders the main page", () => {
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot()
  console.log(asFragment().firstChild)
  expect(asFragment().querySelector('img')).not.toBeInTheDocument()
  // expect(asFragment().firstChild.querySelector('#config')).toBeInTheDocument();
})
