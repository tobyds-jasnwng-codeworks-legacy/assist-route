function RouteInfoDisplay ({routeInfo}) {
  return (
    <div id="routeInfoDisplay">
      <div id="stopsContainer">
        <div id="stopsList">
          <h3>{routeInfo[0].name}</h3>
          <ul>
            {routeInfo[0].stops.map((stop) => (
            <li key={stop.id}>{stop.name}</li>
            ))}
          </ul>
        </div>
        <div>Studens per stop</div>
      </div>
    </div> 
  )
}

export default RouteInfoDisplay