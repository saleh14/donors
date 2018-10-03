import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Form from '../components/Form'
import { build, fake, sequence } from 'test-data-bot'
import 'jest-dom/extend-expect'

const userBuild = build('user').fields({
  address: fake(f => f.address.city()),
  contactNumber: fake(f => f.phone.phoneNumber()),
  email: fake(f => f.internet.email()),
  fullName: fake(f => f.name.findName()),
  full_name: fake(f => f.name.findName()),
  gender: 'Male',
  loginEmail: fake(f => f.internet.email()),
  nationalID: fake(f => f.random.number()),
  postalBox: fake(f => f.address.zipCode()),
  postalCode: fake(f => f.address.zipCode()),
  roles: ''
})

const submitHandlerMock = jest.fn(() => Promise.resolve())

test('should render the form with submit button ', () => {
  const fakeUser = userBuild()
  const fetchedFields = { data: fakeUser }
  const { debug, getByText } = render(
    <Form onSubmit={submitHandlerMock} fetchedFields={fetchedFields} />
  )
  // debug()
  fireEvent.click(getByText(/submit/i))
  expect(submitHandlerMock).toHaveBeenCalledTimes(1)
  expect(submitHandlerMock).toHaveBeenCalledWith({ ...fakeUser })
  expect(getByText(/submit/i)).toBeDisabled()
})
