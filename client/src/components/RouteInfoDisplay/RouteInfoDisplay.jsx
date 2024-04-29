import './RouteInfoDisplay.css';
import { TbBusStop } from 'react-icons/tb';
import { PiStudentDuotone } from 'react-icons/pi';
import { useContext } from 'react';
import { Context } from '../../App';
import PropTypes from 'prop-types';

function RouteInfoDisplay ({
  routeInfo,
  setStopStudents,
  stopStudents,
  setSelectedStudent,
  setShowStudentCard,
}) {
  const { students } = useContext(Context);

  function handleSelectStop (event) {
    const { value } = event.target;
    setStopStudents(
      students.filter(
        (student) =>
          (student.morningRoute === routeInfo[0].name &&
            student.morningStop === value) ||
          (student.eveningRoute === routeInfo[0].name &&
            student.eveningStop === value)
      )
    );
  }

  function handleSelectStudent (e) {
    const { value } = e.target;
    setSelectedStudent(value);
    setShowStudentCard(true);
  }

  return (
    <div id='routeDisplay'>
      <h3>
        {routeInfo[0].name} {routeInfo[0].type}{' '}
      </h3>
      <p className='italicThin'>Choose the stop to see the users of the stop</p>
      <div id='routeInfoDisplay'>
        <div id='stopsList' className='list'>
          {routeInfo[0].stops.map((stop) => (
            <>
              <TbBusStop />
              <button
                name='See students'
                type='button'
                className='stopButton'
                key={stop.id}
                onClick={handleSelectStop}
                value={stop.name}
              >
                {stop.name}
              </button>
            </>
          ))}
        </div>
        <div id='stopStudentsList' className='listContainer'>
          <p className='italicThin'>
            Click on the user to see complete information
          </p>
          <div className='list'>
            {stopStudents.map((student) => (
              <>
                <PiStudentDuotone className='studentIcon' />
                <button
                  className='studentButton'
                  key={student.id}
                  value={student.id}
                  onClick={(e) => {
                    handleSelectStudent(e);
                  }}
                >
                  {student.firstName} {student.lastName}
                </button>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

RouteInfoDisplay.propTypes = {
  routeInfo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    stops: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      })
    ),
  })),
  setStopStudents: PropTypes.func,
  stopStudents: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      morningRoute: PropTypes.string,
      morningStop: PropTypes.string,
      eveningRoute: PropTypes.string,
      eveningStop: PropTypes.string,
      contactPerson1: PropTypes.string,
      contactPerson1Phone: PropTypes.string,
      contactPerson2: PropTypes.string,
      contactPerson2Phone: PropTypes.string,
      address: PropTypes.string,
      additionalInfo: PropTypes.string,
    })
  ),
  setSelectedStudent: PropTypes.func,
  setShowStudentCard: PropTypes.func,
};

export default RouteInfoDisplay;
