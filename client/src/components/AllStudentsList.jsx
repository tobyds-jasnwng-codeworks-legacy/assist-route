function AllStudentsList ({students, setStudents}) {
  
  function handleSelectStudent () {
    console.log('Student selected');
  };

  return (
    <div id="allStudentsListContainer">
      <button id="addNewStudentButton">Add new student</button>
      <div id="allStudentsList" className="list">
        {students.map( student => (
            <button key={student.id} name="See student info" type="button" className="studentButton" onClick={handleSelectStudent}>{student.firstName} {student.lastName}</button>
        ))}
      </div>
    </div>
  );
}

export default AllStudentsList