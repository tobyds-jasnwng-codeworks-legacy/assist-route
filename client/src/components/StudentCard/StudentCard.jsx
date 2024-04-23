import './StudentCard.css';

function StudentCard ({ students, selectedStudent, onClose}) {
  const studentData = students.filter( student => student.id === parseInt(selectedStudent))[0];
  const dataToRender = Object.entries(studentData);
  const dataToRenderShort = dataToRender.slice(1, dataToRender.length - 3);
  console.log(dataToRenderShort);

  const studentInfoElements = dataToRenderShort.map(([key, value]) => (
    <div key={key} className="studentInfoEl">
      <p id="elValue"><span className="italicThin">{camelToText(key)}: </span><strong>{value}</strong></p>  
    </div>
  ));

  function camelToText (camelCase) {
    return camelCase.replace(/([A-Z])/g, ' $1').toLowerCase();
  }
  
  async function handleDelete () {
    console.log('DELEEETE', studentData.id);
    const res = await fetch('http://localhost:3000/students/'+studentData.id, {
        method: "DELETE",
        mode: "cors"
    })
  }
  //DELETE STUDENT FROM LIST

  return (
    <div className="listContainer">
      <span className="close" onClick={onClose} aria-label="Close">&times;</span>
      <div className="fieldsList">
        {studentInfoElements}
      </div>
      <button type="button" name="deleteStudentButton" onClick={handleDelete}>DELETE</button>
    </div>
  );
};

export default StudentCard;