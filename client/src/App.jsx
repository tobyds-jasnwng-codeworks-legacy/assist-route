import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import DropdownListRoutes from './components/DropdownListRoutes'

const studentsUrl = 'http://localhost:3000/students'

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
        },
        {
          id: 4,
          name: "Rambla-Gurrea"
        }
      ]
    },
    {
      id: 2,
      name: "R5 SABADELL RETURN",
      stops: [
        {
          id: 1,
          name: "Rambla-Gurrea"
        },
        {
          id: 2,
          name: "SABADELL Av. Barberà, 414"
        },
        {
          id: 3,
          name: "SABADELL Carretera de Barcelona, 621"
        },
        {
          id: 4,
          name: "BARBERÀ DEL VALLÈS Carretera de Barcelona, 280"
        }
      ]
    }
  ])
  
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function initialStudentsFetch () {
      const res = await fetch(studentsUrl);
      const body = await res.json();
      setStudents(body.sort((a,b) => {
        return a.firstName.localeCompare(b.firstName);
      }));
    }
    initialStudentsFetch();
  },[])

  return (
    <>
      < NavBar />
      <main>
        <DropdownListRoutes routes={routes} students={students}/> 
      </main>
    </>
  )
}

export default App
