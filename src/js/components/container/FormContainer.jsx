import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Input from '../presentational/Input.jsx'

class FormContainer extends Component {
  constructor () {
    super()

    this.state = {
      seoTitle: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  render () {
    const { seoTitle } = this.state

    return (
      <form id='article-form'>
        <Input
          handleChange={this.handleChange}
          id='seoTitle'
          label='seoTitle'
          text='SEO Title'
          type='text'
          value={seoTitle}
        />
      </form>
    )
  }
}

export default FormContainer

const wrapper = document.getElementById('create-article-form')
if (wrapper) {
  ReactDOM.render(<FormContainer />, wrapper)
}
