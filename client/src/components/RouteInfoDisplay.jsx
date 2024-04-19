
function RouteInfoDisplay ({routeInfo, students, setStopStudents, stopStudents}) {
  
  function handleSelectStop (event) {
    const {value} = event.target;
    setStopStudents(students.filter( student => ((student.routeGo === routeInfo[0].name && student.stopGo === value) || ( student.routeBack === routeInfo[0].name && student.stopBack === value))));
  }

  return (
    <div id="routeDisplay">
      <h3>{routeInfo[0].name}</h3>
      <div id="routeInfoDisplay">
        <div id="stopsList">
          {routeInfo[0].stops.map((stop) => (
          <button name="See students" type="button" className="stopButton" key={stop.id} onClick={handleSelectStop} value={stop.name}>{stop.name}</button>
          ))}
        </div>
        <div>
          {stopStudents.map( (student, id) => (
            <div key={id}>{student.firstName} {student.lastName}</div>
          ))}
        </div>
      </div> 
    </div>
  )
}

export default RouteInfoDisplay