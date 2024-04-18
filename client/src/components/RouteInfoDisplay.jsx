function RouteInfoDisplay () {
  const stops = [
    {
      id: 1,
      name: 'a'
    },
    {
      id: 2,
      name: 'b'
    },
    {
      id: 3,
      name: 'c'
    }
  ]

  return (
    <div id="routeInfoDisplay">
      <h1>Route name</h1>
      <div id="stopsContainer">
        <div id="stopsList">
            {stops.map((stop) => {
                return <p key={stop.id}>{stop.name}</p>
            })}
        </div>
        <div>Studens per stop</div>    
      </div>
    </div>  
  )
}

export default RouteInfoDisplay