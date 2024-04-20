import { useEffect, useState } from 'react'
import './App.css'
import routesData from './data/routesData.json';
import NavBar from './components/NavBar'
import DropdownListRoutes from './components/DropdownListRoutes'
import AllStudentsList from './components/AllStudentsList';

const studentsUrl = 'http://localhost:3000/students'; // URL of the DB with students data

function App() {
  const [routes, setRoutes] = useState([]); // routes data
  const [students, setStudents] = useState([]); // students data
  
  // Fetching data on init
  useEffect( () => {
    async function initFetchData () {
      
      // Fetch students data
      const studentsResponse = await fetch(studentsUrl);
      const studentsBody = await studentsResponse.json();
      const sortedStudentsBody = studentsBody.sort( (a, b) => a.firstName.localeCompare(b.firstName)); // Students are sorted by name in alphabetical order
      setStudents (sortedStudentsBody);
      
      // Set routes data from JSON file
      setRoutes(routesData);
    }
    initFetchData();
  }, []);

  return (
    <>
      < NavBar students={students} setStudents={setStudents}/>
      <main>
        <DropdownListRoutes routes={routes} students={students}/> 
      </main>
    </>
  )
}

export default App
