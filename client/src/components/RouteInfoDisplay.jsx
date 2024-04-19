function RouteInfoDisplay ({routeInfo, students}) {
  return (
    <div id="routeDisplay">
      <h3>{routeInfo[0].name}</h3>
      <div id="routeInfoDisplay">
        <div id="stopsList">
          {routeInfo[0].stops.map((stop) => (
          <div key={stop.id}>{stop.name}</div>
          ))}
        </div>
        <div>
          {students.map( (student, id) => (
            <div key={id}>{student.firstName} {student.lastName}</div>
          ))}
        </div>
      </div> 
    </div>
  )
}

export default RouteInfoDisplay