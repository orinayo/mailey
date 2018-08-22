import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys, deleteSurvey } from '../../actions'
import {Doughnut} from 'react-chartjs-2'

function mapStateToProps ({ surveys }) {
  return {
    surveys
  }
}

let surveyTitles = []
let surveyVotesTotal = []
let backgroundColors = []

class SurveyList extends Component {
  state = { sortByDate: false, showVotesChart: false, data: {} }
  componentDidMount () {
    this.props.fetchSurveys()
  }

  getChartData = () => {
    this.setState(prevState => ({ 
      showVotesChart: !prevState.showVotesChart,
      data: {
        labels: surveyTitles,
        datasets:[
          {
            label:'Your surveys',
            data: surveyVotesTotal ,
            backgroundColor: backgroundColors
          }
        ]
      }
    }))
  }

  sortSurvey = () => {
    this.setState(prevState => ({ sortByDate: !prevState.sortByDate}))
    this.props.surveys.reverse()
    this.renderSurveys()
  }

  renderSurveys = () => {
    // Empty out the arrays
    surveyTitles = []
    surveyVotesTotal = []
    backgroundColors = [] 
    console.log('here')
    return this.props.surveys.map(({ _id, title, body, yes, no, dateSent, lastResponded, total }) => {
      surveyTitles.push(title)
      surveyVotesTotal.push(total)
      backgroundColors.push(`#${((Math.random() * 0xffffff) <<0).toString(16)}`) // Get random hex code
      console.log(backgroundColors)
      return (
        <div className='card darken-1' key={_id}>
          <div className='card-content white-text'>
            <span className='card-title'>{title}</span>
            <p className='u-margin-bottom-xsmall'>
              {body}
            </p>
            <p className='u-margin-bottom-xsmall'>
              Sent: {new Date(dateSent).toLocaleDateString()}
            </p>
            {
              lastResponded && <p className='right'>Last Response: {new Date(lastResponded).toLocaleDateString()}</p>
            }
          </div>
          <div className='card-action'>
            <a>Yes: {yes}</a>
            <a>No: {no}</a>
            <button
              className='btn-flat btn-cancel'
              onClick={() => this.props.deleteSurvey(_id)}
            >
              Delete
            </button>
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className='blue-grid' style={{borderRadius: '3px', height: '90vh'}}>
        <div className='container' style={{borderRadius: '3px', paddingTop: '2rem'}}>
          <div style={{textAlign: 'center',  padding: '.75rem 0'}}>
            <button
              className='btn-flat btn-flat-blue u-margin-right-small'
              onClick={this.sortSurvey}
            >
              Sort By Date
            </button>
            <button
              className='btn-flat btn-flat-blue'
              onClick={this.getChartData}
            >
              View votes count
            </button>
          </div>
          {
            this.state.showVotesChart && <Doughnut data={this.state.data} />
          }
          {
            this.renderSurveys()
          }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(SurveyList)
