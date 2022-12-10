import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission, missionSpace } from '../redux/missions/missions';
import './missions.css';

const Mission = () => {
  const dispatch = useDispatch();
  const { missions, loading } = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchMission());
  }, [loading, dispatch]);

  if (loading) {
    return <h2> Loading...</h2>;
  }

  const jetclick = (id) => {
    dispatch(missionSpace(id));
  };

  return (
    <table className="missions-tab" id="tab">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {missions.map(({
          id, name, description, mission,
        }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{description}</td>
            <td>
              {mission ? <p className="member active">Active Member</p> : <p className="member">Not A Member</p>}
            </td>
            <td>
              {mission
                ? (
                  <button
                    onClick={() => {
                      jetclick(id);
                    }}
                    type="button"
                    className="joining"
                  >
                    Leave Mission
                  </button>
                )
                : (
                  <button
                    onClick={() => {
                      jetclick(id);
                    }}
                    type="button"
                    className="meet"
                  >
                    Join Mission
                  </button>
                )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Mission;
