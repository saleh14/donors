import React from 'react'
import { render } from 'react-testing-library'
import App from '../App'

test('should render the app ', () => {
  const { debug } = render(<App />)
  debug()
})
