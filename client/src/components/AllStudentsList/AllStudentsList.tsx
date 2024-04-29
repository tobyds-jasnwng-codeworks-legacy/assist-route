import { AiFillCloseCircle } from 'react-icons/ai';
import { PiStudentDuotone } from 'react-icons/pi';
import { MouseEvent, useContext } from 'react';
import { Context } from '../../App';
import styles from './AllStudentsList.module.css';
import { Student } from '../../types/index';

function AllStudentsList ({
  setSelectedStudent,
  setShowStudentCard,
  onClose,
  onSubmit,
}: Props) {
  const { students }: { students: Array<Student> } = useContext(Context);

  function handleSelectStudent (e: MouseEvent<HTMLButtonElement>) {
    const value = (e.target as HTMLButtonElement).value;
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
        className={styles.addNewStudentButton}
        onClick={() => {
          onClose();
          onSubmit();
        }}
      >
        Add new student
      </button>
      <div id='allStudentsList' className={`list ${styles.allStudentsList}`}>
        {students.map((student: Student) => (
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

type Props = {
  setSelectedStudent: () => void;
  setShowStudentCard: () => void;
  onClose: () => void;
  onSubmit: () => void;
};

export default AllStudentsList;