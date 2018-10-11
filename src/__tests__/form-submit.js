import React from 'react'
import { render, fireEvent, wait } from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import { build, fake, squence } from 'test-data-bot'
import Form from './../components/Form'
import { Redirect as MockRedirect } from '@reach/router'
import { saveUserFields as mockSaveUserFields } from '../api'

jest.mock('../api', () => {
  return {
    saveUserFields: jest.fn()
  }
})
jest.mock('@reach/router', () => {
  return {
    Redirect: jest.fn(() => null)
  }
})
afterEach(() => {
  mockSaveUserFields.mockClear()
})

const userBuilder = build('user').fields({
  roles: 'user',
  fullName: fake(f => f.name.findName()),
  nationalID: fake(f => f.lorem.words()),
  gender: fake(f => f.name.findName()),
  address: fake(f => f.name.findName()),
  postalBox: fake(f => f.name.findName()),
  postalCode: fake(f => f.name.findName()),
  email: fake(f => f.internet.email()),
  contactNumber: fake(f => f.name.findName())
})

const refId = '207893435024146948'
test('should render form with submit button', async () => {
  const fakeUser = userBuilder()
  const { debug, getByText, getByLabelText } = render(
    <Form fetchedFields={{ data: fakeUser }} />
  )
  const btn = getByText(/submit/i)
  fireEvent.click(btn)
  expect(btn).toBeDisabled()
  await wait(() => {
    expect(mockSaveUserFields).toHaveBeenCalledTimes(1)
  })
  expect(mockSaveUserFields).toHaveBeenCalledWith({ ...fakeUser, refId })
  await wait(() => {
    expect(MockRedirect).toHaveBeenCalledTimes(1)
  })
  expect(MockRedirect).toHaveBeenCalledWith({ to: '/' }, {})

  // debug()
})
