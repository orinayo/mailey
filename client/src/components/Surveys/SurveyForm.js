// SurveyForm shows form for user to add input
import React, { Component } from 'react'
// reduxForm helper allows redux-form communicate with Redux store
// Field component renders any type of HTML form elements
import { reduxForm, Field } from 'redux-form'

class SurveyForm extends Component {
  render () {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))} >
          <Field type='text' name='title' component='input' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

// Pass form to reduxForm
export default reduxForm({
  form: 'surveyForm'
})(SurveyForm)
