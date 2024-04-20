import { useState } from 'react'
import AllStudentsList from "./AllStudentsList";

function NavBar ({students, setStudents}) {
  const [showStudentsList, setShowStudentsList] = useState(false);

  function toggleStudentsList () {
    setShowStudentsList(!showStudentsList);
  }

  return (
    <nav>
      <div>
        <h1>ASSIST ROUTE</h1>
      </div>
      <button onClick={toggleStudentsList}>Manage students</button>
      {/* Pending to be moved to another part */}
      {showStudentsList && <AllStudentsList students={students} setStudents={setStudents}/>}
    </nav>
  )
}

export default NavBar