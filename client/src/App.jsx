import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import DropdownListRoutes from './components/DropdownListRoutes'
import RouteInfoDisplay from './components/RouteInfoDisplay'

function App() {
  const [routes, setRoutes] = useState([
    {
      id: 1,
      name: "R5 SABADELL",
      stops: [
        {
          id: 1,
          name: "BARBERÀ DEL VALLÈS Carretera de Barcelona, 280"
        },
        {
          id: 2,
          name: "SABADELL Carretera de Barcelona, 621"
        },
        {
          id: 3,
          name: "SABADELL Av. Barberà, 414"
        }
      ]
    },
    {
      id: 2,
      name: "R5 SABADELL RETURN",
      stops: [
        {
          id: 1,
          name: "SABADELL Av. Barberà, 414"
        },
        {
          id: 2,
          name: "SABADELL Carretera de Barcelona, 621"
        },
        {
          id: 3,
          name: "BARBERÀ DEL VALLÈS Carretera de Barcelona, 280"
        }
      ]
    }
    // useEffect(() => {
    //   dibujar el componente (una sola vez o cuando se actualice)

    //   return {
    //     clean PaymentRequestUpdateEvent
    //   }
    // }, [routes])
  ])

  return (
    <>
      < NavBar />
      <main>
        <DropdownListRoutes routes={routes} />
      </main>
    </>
  )
}

export default App
