import React from 'react'
import { connect } from 'react-redux'
// withRouter provides access to the history object's props
// and the closest Route match
import { withRouter } from 'react-router-dom'
import formFields from './formFields'
import * as actions from '../../actions/index'

function mapStateToProps (state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ label, name }) => {
    return (
      <div key='name'>
        <label>
          {label}
        </label>
        <div className='u-margin-bottom-xsmall'>
          {formValues[name]}
        </div>
      </div>
    )
  })

  return (
    <div className='form-review'>
      <h5>Please confirm your entries</h5>
      <div>
        {
          reviewFields
        }
      </div>

      <button
        className='btn-flat btn-cancel'
        onClick={onCancel}
      >
        Back
        <i className='material-icons right'>keyboard_backspace</i>
      </button>

      <button
        className='btn-flat btn-success right'
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className='material-icons right'>email</i>
      </button>
    </div>
  )
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))
