import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RocketsProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocks) => rocks.active);

  return (
    <div className="profile">
      <div className="rockets">

        <h1>My Rockets</h1>
        {reservedRockets.length === 0 ? (
          <table className="tour-now tour">
            <td>No Reservations Made...</td>
            <td><Link className="reserveRocketsLink" to="/">Make a Reservation</Link></td>
          </table>
        ) : (
          <div className="activeRockets">
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
