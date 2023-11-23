// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competing_team, competing_team_logo, match_status, result, id} =
    details

  return (
    <div className="recent-matches-card">
      <img className="logo" src={competing_team_logo} alt={`latest match ${competing_team}`} />
      <p>{competing_team}</p>
      <p>{result}</p>
      <p>{match_status}</p>
    </div>
  )
}

export default MatchCard
