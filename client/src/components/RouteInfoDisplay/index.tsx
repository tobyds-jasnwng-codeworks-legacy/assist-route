import styles from './RouteInfoDisplay.module.css';
import { TbBusStop } from 'react-icons/tb';
import { PiStudentDuotone } from 'react-icons/pi';
import { useContext, MouseEvent } from 'react';
import { Context } from '../../App';
import { Student, Route } from '../../types/index';

function RouteInfoDisplay ({
  routeInfo,
  setStopStudents,
  stopStudents,
  setSelectedStudent,
  setShowStudentCard,
}: Props) {
  const { students }: { students: Array<Student> } = useContext(Context);

  function handleSelectStop (event: MouseEvent<HTMLButtonElement>) {
    const { value } = event.target as HTMLButtonElement;
    setStopStudents(
      students.filter(
        (student: Student) =>
          (student.morningRoute === routeInfo[0].name &&
            student.morningStop === value) ||
          (student.eveningRoute === routeInfo[0].name &&
            student.eveningStop === value)
      )
    );
  }

  function handleSelectStudent (e: MouseEvent<HTMLButtonElement>) {
    const { value } = e.target as HTMLButtonElement;
    setSelectedStudent(value);
    setShowStudentCard(true);
  }

  return (
    <div id='routeDisplay' className={styles.routeDisplay}>
      <h3>
        {routeInfo[0].name} {routeInfo[0].type}{' '}
      </h3>
      <p className='italicThin'>Choose the stop to see the users of the stop</p>
      <div id='routeInfoDisplay' className={styles.routeInfoDisplay}>
        <div id='stopsList' className='list'>
          {routeInfo[0].stops.map((stop) => (
            <>
              <TbBusStop />
              <button
                name='See students'
                type='button'
                className={styles.stopButton}
                key={stop.id}
                onClick={handleSelectStop}
                value={stop.name}
              >
                {stop.name}
              </button>
            </>
          ))}
        </div>
        <div
          id='stopStudentsList'
          className={`listContainer ${styles.stopStudentsList}`}
        >
          <p className='italicThin'>
            Click on the user to see complete information
          </p>
          <div className='list'>
            {stopStudents.map((student) => (
              <>
                <PiStudentDuotone className={styles.studentIcon} />
                <button
                  className='studentButton'
                  key={student.id}
                  value={student.id}
                  onClick={(e) => {
                    handleSelectStudent(e);
                  }}
                >
                  {student.firstName} {student.lastName}
                </button>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type Props = {
  routeInfo: Route[];
  setStopStudents: (stopStudent: Array<Student>) => void;
  stopStudents: Student[];
  setSelectedStudent: (selectedStudent: string) => void;
  setShowStudentCard: (showStudentCard: boolean) => void;
};

export default RouteInfoDisplay;
