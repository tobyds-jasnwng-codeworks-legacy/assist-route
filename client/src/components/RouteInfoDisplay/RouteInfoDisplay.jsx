import './RouteInfoDisplay.css';

function RouteInfoDisplay ({routeInfo, students, setStopStudents, stopStudents}) {
  
  function handleSelectStop (event) {
    const {value} = event.target;
    setStopStudents(students.filter( student => ((student.morningRoute === routeInfo[0].name && student.morningStop === value) || ( student.eveningRoute === routeInfo[0].name && student.eveningStop === value))));
    
  }

  return (
    <div id="routeDisplay">
      <h3>{routeInfo[0].name} {routeInfo[0].type} </h3>
      <p className="italicThin">Choose the stop to see the users of the stop</p>
      <div id="routeInfoDisplay">
        <div id="stopsList" className="list">
          {routeInfo[0].stops.map((stop) => (
            <button name="See students" type="button" className="stopButton" key={stop.id} onClick={handleSelectStop} value={stop.name}>{stop.name}</button>
          ))}
        </div>
        <div id="stopStudentsList" className="listContainer">
          <p className="italicThin">Click on the user to see complete information</p>
          <div>
            {stopStudents.map( student => (
              <button className="studentButton" key={student.id}>{student.firstName} {student.lastName}</button>
            ))}
          </div>
        </div>
      </div> 
    </div>
  )
}

export default RouteInfoDisplay