import { useState, useEffect } from 'react';
import RouteInfoDisplay from '../RouteInfoDisplay/RouteInfoDisplay';
import PropTypes from 'prop-types';
import styles from './DropdownListRoutes.module.css';

function DropdownListRoutes ({
  routes,
  setSelectedStudent,
  setShowStudentCard,
  onClose,
}) {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [routeInfo, setRouteInfo] = useState(null);
  const [stopStudents, setStopStudents] = useState([]);

  // Function to set the selected route
  function handleSelectChange (event) {
    setSelectedRoute(event.target.value);
    setStopStudents([]);
  }

  // To display info of the selected route in the route info display section
  useEffect(() => {
    if (selectedRoute) {
      const selectedRouteInfo = routes.filter(
        (route) => route.id === selectedRoute
      );
      setRouteInfo(selectedRouteInfo);
    } else {
      setRouteInfo(null);
    }
  }, [selectedRoute, routes]);

  return (
    <div id="routeInfoContainer" className={styles.routeInfoContainer}>
      <select
        id="dropdownRoutes"
        className={styles.dropdownRoutes}
        value={selectedRoute}
        onChange={handleSelectChange}
      >
        <option disabled value=''>
          Choose your route...
        </option>
        {routes.map((route) => (
          <option key={route.id} value={route.id}>
            {route.name} - {route.type}
          </option>
        ))}
      </select>
      {routeInfo && (
        <RouteInfoDisplay
          routeInfo={routeInfo}
          stopStudents={stopStudents}
          setStopStudents={setStopStudents}
          setSelectedStudent={setSelectedStudent}
          setShowStudentCard={setShowStudentCard}
          onClose={onClose}
        />
      )}
    </div>
  );
}

DropdownListRoutes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      name: PropTypes.string,
      stops: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
        })
      ),
    })
  ),
  setSelectedStudent: PropTypes.func,
  setShowStudentCard: PropTypes.func,
  onClose: PropTypes.func,
};

export default DropdownListRoutes;
