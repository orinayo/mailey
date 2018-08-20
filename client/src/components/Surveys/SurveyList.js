import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'

function mapStateToProps ({ surveys }) {
  return {
    surveys
  }
}

class SurveyList extends Component {
  componentDidMount () {
    this.props.fetchSurveys()
  }

  renderSurveys () {
    return this.props.surveys.reverse()
      .map(({ _id, title, body, yes, no, dateSent }) => {
        return (
          <div className='card darken-1' key={_id}>
            <div className='card-content white-text'>
              <span className='card-title'>{title}</span>
              <p>
                {body}
              </p>
              <p className='right'>
                Sent On: {new Date(dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className='card-action'>
              <a>Yes: {yes}</a>
              <a>No: {no}</a>
            </div>
          </div>
        )
      })
  }

  render () {
    return (
      <div className='container u-margin-top-medium'>
        {
          this.renderSurveys()
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)
