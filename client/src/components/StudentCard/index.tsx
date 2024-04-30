import { Dispatch, SetStateAction, useContext } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import { Context } from '@src/App';
import { deleteStudent } from '@services/ApiServices';
import { Student, ContextType } from '@src/types/index';
import styles from './index.module.css';

function StudentCard ({ setStudents, selectedStudent, onClose }: Props) {
  const { students }: ContextType = useContext(Context);

  const studentData = students.filter(
    (student) => student.id === parseInt(selectedStudent as string)
  )[0];
  const dataToRender = Object.entries(studentData);
  const dataToRenderShort = dataToRender.slice(1);

  const studentInfoElements = dataToRenderShort.map(([key, value]) => (
    <div key={key} className='studentInfoEl'>
      <p id='elValue' className={styles.elValue}>
        <span className='italicThin'>{camelToText(key)}: </span>
        <strong>{value}</strong>
      </p>
    </div>
  ));

  function camelToText (camelCase: string): string {
    return camelCase.replace(/([A-Z])/g, ' $1').toLowerCase();
  }

  async function handleDelete () {
    await deleteStudent(studentData.id);

    // delete student from list
    setStudents((oldList: Student[]) => {
      const newList = oldList.filter(
        (item: Student) => item.id !== studentData.id
      );
      return newList;
    });
    onClose();
  }

  return (
    <div className='listContainer'>
      <AiFillCloseCircle
        className='close'
        onClick={() => onClose()}
        aria-label='Close'
      />
      <div className={styles.fieldsList}>{studentInfoElements}</div>
      <button type='button' name='deleteStudentButton' onClick={handleDelete}>
        DELETE
      </button>
    </div>
  );
}

type Props = {
  selectedStudent: string | null;
  setStudents: Dispatch<SetStateAction<Student[]>>;
  onClose: () => void;
};

export default StudentCard;
