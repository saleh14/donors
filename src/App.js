import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './components/Form'
import { Router, Link } from '@reach/router'
import ky from 'ky'

const Thanks = () => <div>Thanks !!!<p><Link to='/'>Back </Link></p></div>
class App extends Component {
  componentDidMount () {
    setTimeout(async () => {
      const res = await ky.get('/.netlify/functions/some-fn').json()
      console.log(res)
    }, 3000)
  }
  render () {
    return (
      <div className='app'>

        <Router>
          <Thanks path='/thanks' />
          <Form path='/' loginRefId={'207893435024146948'} />
        </Router>
      </div>
    )
  }
}

export default App
