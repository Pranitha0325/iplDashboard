// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
}

class TeamMatches extends Component {
  state = {details: [], api: apiStatus.initial}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    this.setState({api: apiStatus.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    this.setState({details: data, api: apiStatus.success})
  }

  renderMatchDetails = () => {
    const {details, api} = this.state
    const {team_banner_url, latest_match_details, recent_matches} = details
    if (api === 'INPROGRESS') {
      return (
        <div testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      )
    } else if (api === 'SUCCESS') {
      return (
        <div>
          <img src={team_banner_url} alt="team banner" />
          <h1>Latest Matches</h1>
          <LatestMatch matchDetails={latest_match_details} />
          <ul className="recent-matches-container">
            {recent_matches.map(each => (
              <MatchCard details={each} key={each.id} />
            ))}
          </ul>
        </div>
      )
    }
  }

  render() {
    return <div className="team-matches">{this.renderMatchDetails()}</div>
  }
}

export default TeamMatches
