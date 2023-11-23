// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, team_image_url} = details
  return (
    <li>
    <Link to={`/team-matches/${id}`} className="card-container">
      <img className="team-logo" src={team_image_url} alt={name} />
      <p>{name}</p>
    </Link>
    </li>
  )
}

export default TeamCard
