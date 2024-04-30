import {
  useState,
  useEffect,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react';

import RouteInfoDisplay from '@components/RouteInfoDisplay/';
import { Student, Route } from '@src/types/index';
import styles from './index.module.css';

function DropdownListRoutes ({
  routes,
  setSelectedStudent,
  setShowStudentCard,
  onClose,
}: Props) {
  const [selectedRoute, setSelectedRoute] = useState<string>('');
  const [routeInfo, setRouteInfo] = useState<Route[]>();
  const [stopStudents, setStopStudents] = useState<Student[]>([]);

  // Function to set the selected route
  function handleSelectChange (event: ChangeEvent<HTMLSelectElement>) {
    setSelectedRoute(event.target.value);
    setStopStudents([]);
  }

  // To display info of the selected route in the route info display section
  useEffect(() => {
    if (selectedRoute) {
      const selectedRouteInfo = routes.filter(
        (route: Route) => route.id === selectedRoute
      );
      setRouteInfo(selectedRouteInfo);
    } else {
      setRouteInfo(undefined);
    }
  }, [selectedRoute, routes]);

  return (
    <div id='routeInfoContainer' className={styles.routeInfoContainer}>
      <select
        id='dropdownRoutes'
        className={styles.dropdownRoutes}
        value={selectedRoute}
        onChange={handleSelectChange}
      >
        <option disabled value=''>
          Choose your route...
        </option>
        {routes.map((route: Route) => (
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

type Props = {
  routes: Route[];
  setSelectedStudent: Dispatch<SetStateAction<string | null>>;
  setShowStudentCard: Dispatch<SetStateAction<boolean>>;
  onClose: (value: SetStateAction<boolean>) => void;
};

export default DropdownListRoutes;
