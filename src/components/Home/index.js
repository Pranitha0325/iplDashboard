// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {matchesList: [], api: apiStatus.initial}

  componentDidMount() {
    this.getMatches()
  }

  getMatches = async () => {
    this.setState({api: apiStatus.inProgress})
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    this.setState({matchesList: data.teams, api: apiStatus.success})
  }

  renderMatchesList = () => {
    const {api, matchesList} = this.state
    console.log(matchesList)
    if (api === 'INPROGRESS') {
      return (
        <div testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      )
    } else {
      return (
        <ul className="cards">
          {matchesList.map(each => (
            <TeamCard details={each} key={each.id} />
          ))}
        </ul>
      )
    }
  }

  render() {
    const {matchesList, api} = this.state
    return (
      <div className="bg-container">
        <div className="heading">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        {this.renderMatchesList()}
      </div>
    )
  }
}

export default Home
