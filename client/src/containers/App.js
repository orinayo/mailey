import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Header from '../components/Header/Header'
import LandingPage from '../components/LandingPage/LandingPage'
import Dashboard from '../components/Dashboard/Dashboard'
import SurveyNew from '../components/Surveys/SurveyNew'

class App extends Component {
  componentDidMount () {
    this.props.fetchUser()
  }

  render () {
    return (
      <div className=''>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/surveys' component={Dashboard} />
            <Route path='/surveys/new' component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
