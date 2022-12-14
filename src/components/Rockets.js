import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, bookRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const { rockets, status } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === null) {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  const BookingHandler = (id) => {
    dispatch(bookRockets(id));
  };

  let content;
  if (status === 'pending') {
    content = <p>Loading...</p>;
  } else if (status === 'rejected') {
    content = <p>An error occured</p>;
  } else if (status === 'success') {
    content = <p />;
  }

  return (
    <div>
      {content}
      <div className="rockets-all">
        {rockets.map((rocket) => (
          <div key={rocket.id} className="card-all">
            <img src={rocket.flickr_images[0]} alt="" />
            <div className="card-content">
              <h4 className="card-name">{rocket.rocket_name}</h4>
              <div className="disc">
                <p>
                  {rocket.active && <span className="stating">Reserved</span>}
                  {rocket.description}
                </p>
              </div>
              <button className={rocket.active ? 'cancel' : 'reserve'} id={rocket.id} type="submit" onClick={() => BookingHandler(rocket.id)}>
                {rocket.active ? 'Cancel Reservations' : 'Reserve Rockets'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
