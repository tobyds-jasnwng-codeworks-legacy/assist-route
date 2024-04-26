import './StudentCard.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { deleteStudent } from '../../services/ApiServices';
import { useContext } from 'react';
import { Context } from '../../App'


function StudentCard({ setStudents, selectedStudent, onClose }) {
  const { students } = useContext(Context);

  const studentData = students.filter(
    (student) => student.id === parseInt(selectedStudent)
  )[0];
  const dataToRender = Object.entries(studentData);
  const dataToRenderShort = dataToRender.slice(1);

  const studentInfoElements = dataToRenderShort.map(([key, value]) => (
    <div key={key} className='studentInfoEl'>
      <p id='elValue'>
        <span className='italicThin'>{camelToText(key)}: </span>
        <strong>{value}</strong>
      </p>
    </div>
  ));

  function camelToText(camelCase) {
    return camelCase.replace(/([A-Z])/g, ' $1').toLowerCase();
  }

  async function handleDelete() {
    await deleteStudent(studentData.id);
    
    // delete student from list
    setStudents((oldList) => {
      const newList = oldList.filter((item) => item.id !== studentData.id);
      return newList;
    });
    onClose();
  }

  return (
    <div className='listContainer'>
      <AiFillCloseCircle
        className='close'
        onClick={onClose}
        aria-label='Close'
      />
      <div className='fieldsList'>{studentInfoElements}</div>
      <button type='button' name='deleteStudentButton' onClick={handleDelete}>
        DELETE
      </button>
    </div>
  );
}

export default StudentCard;
