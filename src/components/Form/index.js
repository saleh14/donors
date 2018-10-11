import React from 'react'
import TextFields from './TextFields'
import { Redirect } from '@reach/router'
import { saveUserFields } from '../../api'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      formFields: {
        fullName: '',
        nationalID: '',
        gender: '',
        address: '',
        postalBox: '',
        postalCode: '',
        email: '',
        contactNumber: ''
      },
      refId: props.loginRefId || '207893435024146948',
      isSaving: false,
      redirect: false
    }
    const { fetchedFields } = props
    console.log(fetchedFields)
    if (fetchedFields && fetchedFields.data) {
      this.state.formFields = {
        ...this.state.formFields,
        ...fetchedFields.data
      }
    }
  }

  handleChange = event => {
    const { value, name } = event.target
    const { formFields } = this.state
    this.setState({ formFields: { ...formFields, [name]: value } })
  }
  /*
  * Form responsible for:
  * pass values / handle change
  *
  * App responsible for:
  * pass values / handle submition
  *
  */
  submitHandler = async e => {
    e.preventDefault()
    this.setState({ isSaving: true })
    const { refId } = this.state
    await saveUserFields({ ...this.state.formFields, refId })
    this.setState({ redirect: true })
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
    return (
      <form onSubmit={this.submitHandler}>
        <TextFields
          values={this.state.formFields}
          onChange={this.handleChange}
        />
        <p>
          <button disabled={this.state.isSaving} type='submit'>
            submit
          </button>
        </p>
        {JSON.stringify(this.state, null, 2)}
      </form>
    )
  }
}
