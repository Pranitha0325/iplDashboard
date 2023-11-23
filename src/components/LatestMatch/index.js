// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competing_team,
    competing_team_logo,
    date,
    first_innings,
    result,
    venue,
    man_of_the_match,
    match_status,
    id,
    second_innings,
    umpires,
  } = matchDetails
  const altName = `latest match ${competing_team}`
  return (
    <div className="latest-match-details">
      <div>
        <p>{competing_team}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img src={competing_team_logo} alt={`latest match ${competing_team}`} />
      <div>
        <p>First Innings</p>
        <p>{first_innings}</p>
        <p>Second Innings</p>
        <p>{second_innings}</p>
        <p>{man_of_the_match}</p>
        <p>{match_status}</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
