import React from 'react'
import { render, fireEvent, wait } from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import { build, fake, squence } from 'test-data-bot'
import Form from './../components/Form'
import { saveUserFields as mockSaveUserFields } from '../api'

jest.mock('../api', () => {
  return {
    saveUserFields: jest.fn()
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
  expect(mockSaveUserFields).toHaveBeenCalledWith({ ...fakeUser })
  expect(btn).not.toBeDisabled()
  // debug()
})
