import { useEffect, useState } from 'react'
import './App.css'
import routesData from './data/routesData.json';
import NavBar from './components/NavBar/NavBar'
import DropdownListRoutes from './components/DropdownListRoutes/DropdownListRoutes'
import AllStudentsList from './components/AllStudentsList/AllStudentsList';
import NewStudentForm from './components/NewStudentForm/NewStudentForm';

const studentsUrl = 'http://localhost:3000/students'; // URL of the DB with students data

function App() {
  const [routes, setRoutes] = useState([]); // routes data
  const [students, setStudents] = useState([]); // students data
  const [showStudents, setShowStudents] = useState(false); // condition to show the list of students on button click
  const [showNewStudentForm, setShowNewStudentForm ] = useState(false); // condition to show the form for adding new student on button click

  // Fetching data on init
  useEffect( () => {
    async function initFetchData () {
      try {
        // Fetch students data
        const studentsResponse = await fetch(studentsUrl);
        const studentsBody = await studentsResponse.json();
        const sortedStudentsBody = studentsBody.sort( (a, b) => a.firstName.localeCompare(b.firstName)); // Students are sorted by name in alphabetical order
        setStudents (sortedStudentsBody);
        
        // Set routes data from JSON file
        setRoutes(routesData);
      } catch (error) {
        console.log('Error fetching data: ', error);
      } 
    }
    initFetchData();
  }, []);

  // Function to control visibility of the list of all students
  function toggleStudentsList () {
    setShowStudents(!showStudents);
  }

  return (
    <>
      < NavBar toggleStudentsList={toggleStudentsList}/>
      <main>
        <DropdownListRoutes routes={routes} students={students}/>
        {showStudents && <div className="overlay">
          <AllStudentsList students={students} onClose={() => setShowStudents(false)} onSubmit={() => setShowNewStudentForm(true)} />
        </div>}
        {showNewStudentForm && <div className="overlay">
          <NewStudentForm setStudents={setStudents} showNewStudentForm={showNewStudentForm} onClose={() => setShowNewStudentForm(false)}/>
        </div>}
      </main>
    </>
  );
}

export default App;
