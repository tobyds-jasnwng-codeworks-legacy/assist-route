import './AllStudentsList.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiStudentDuotone } from 'react-icons/pi';
import { useContext } from 'react';
import { Context } from '../../App'


function AllStudentsList({
  setSelectedStudent,
  setShowStudentCard,
  onClose,
  onSubmit,
}) {

  const { students } = useContext(Context);

  function handleSelectStudent(e) {
    const { value } = e.target;
    setSelectedStudent(value);
    setShowStudentCard(true);
  }

  return (
    <div className='listContainer'>
      <AiFillCloseCircle
        className='close'
        onClick={onClose}
        aria-label='Close'
      />
      <button
        id='addNewStudentButton'
        onClick={() => {
          onClose();
          onSubmit();
        }}
      >
        Add new student
      </button>
      <div id='allStudentsList' className='list'>
        {students.map((student) => (
          <>
            <PiStudentDuotone />
            <button
              key={student.id}
              name='studentInfo'
              value={student.id}
              type='button'
              className='studentButton'
              onClick={(e) => {
                handleSelectStudent(e);
                onClose();
              }}
            >
              {student.firstName} {student.lastName}
            </button>
          </>
        ))}
      </div>
    </div>
  );
}

export default AllStudentsList;
