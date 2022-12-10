import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RocketsProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocks) => rocks.active);

  return (
    <div className="accounts">
      <div className="machines">
        <h2>My Rockets</h2>
        {reservedRockets.length === 0 ? (
          <table className="see-all tour">
            <td>No Reservations Made...</td>
            <td><Link className="rockets-reserving" to="/">Make a Reservation</Link></td>
          </table>
        ) : (
          <div className="movable-rockets">
            <ul>
              {reservedRockets.map((rocket) => (
                <li key={rocket.id}>{rocket.rocket_name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RocketsProfile;
