import { useState, useEffect } from "react"
import RouteInfoDisplay from "./RouteInfoDisplay";

function DropdownListRoutes ({routes, students}) {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [routeInfo, setRouteInfo] = useState(null);

  // Function to set the selected route
  const handleSelectChange = (event) => {
    setSelectedRoute(event.target.value);
  };

  // To display info of the selected route in the route info display section
  useEffect(() => {
    if (selectedRoute) {
      const selectedRouteInfo = routes.filter( route => route.name === selectedRoute);
      setRouteInfo(selectedRouteInfo);
    } else {
      setRouteInfo(null);
    }
  }, [selectedRoute, routes]);

  return (
    <div id="routeInfoContainer">
      <select id="dropdownRoutes" value={selectedRoute} onChange={handleSelectChange}>
        {routes.map( route => (
            <option key={route.id} value={route.name}>
              {route.name}
            </option>
          ))}
      </select>
      {routeInfo && <RouteInfoDisplay routeInfo={routeInfo} students={students}/>}
    </div>
  )
}

export default DropdownListRoutes