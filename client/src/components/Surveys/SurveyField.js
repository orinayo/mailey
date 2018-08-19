// SurveyField contains logic to render a single
// label and text input
import React from 'react'

// Get label, meta and input object from props
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <div className='red-text u-margin-bottom-xsmall'>
        {touched && error}
      </div>
    </div>
  )
}
