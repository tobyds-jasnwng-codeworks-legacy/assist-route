import './AllStudentsList.css';


function AllStudentsList ({students, setSelectedStudent, setShowStudentCard, onClose, onSubmit}) {
  
  function handleSelectStudent (e) {
    const { value } = e.target;
    setSelectedStudent(value);
    setShowStudentCard(true);
  }

  return (
    <div className="listContainer">
      <span className="close" onClick={onClose} aria-label="Close">&times;</span>
      <button id="addNewStudentButton" onClick={() => { onClose(); onSubmit();}}>Add new student</button>
      <div id="allStudentsList" className="list">
        {students.map( student => (
            <button key={student.id} name="studentInfo" value={student.id} type="button" className="studentButton" onClick={(e) => {handleSelectStudent(e); onClose()}}>{student.firstName} {student.lastName}</button>
        ))}
      </div>
    </div>
  );
}

export default AllStudentsList;