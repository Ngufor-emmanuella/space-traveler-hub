import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './missions.css';

const MyProfile = () => {
  const { missions } = useSelector((state) => state.missions);
  const tourists = missions.filter((visit) => visit.mission);
  return (
    <div>
      <h2 className="header">My Missions</h2>
      <table className="touring">
        <tbody className="tour_all">
          {
            tourists.length < 1 ? (
              <tr>
                <td className="tour-first">No Mission Yet...</td>
                <td><Link to="/missions">Join a Mission</Link></td>
              </tr>
            ) : (
              tourists.map(({ id, name }) => (
                <tr className="tour-second" key={id}><td>{name}</td></tr>
              ))
            )
          }
        </tbody>
      </table>
    </div>
  );
};
export default MyProfile;
