import { useEffect, useState, createContext } from 'react';

import NavBar from '@components/NavBar';
import DropdownListRoutes from '@components/DropdownListRoutes';
import AllStudentsList from '@components/AllStudentsList';
import NewStudentForm from '@components/NewStudentForm';
import StudentCard from '@components/StudentCard';
import SelectProfile from '@components/SelectProfile';
import SelectRoute from '@components/SelectRoute';
import RoutePage from '@components/RoutePage';

import { initFetchData } from '@services/ApiServices';
import { ContextType, Student, Route } from '@src/types/index';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { styled, createTheme, ThemeProvider } from '@mui/system';
import CustomButton from '@components/MUI/Button';


export const Context = createContext<ContextType>({ students: [] });

function App () {
  const [routes, setRoutes] = useState<Array<Route>>([]); // routes data
  const [students, setStudents] = useState<Array<Student>>([]); // students data
  const [showStudents, setShowStudents] = useState(false); // condition to show the list of students on button click
  const [showNewStudentForm, setShowNewStudentForm] = useState(false); // condition to show the form for adding new student on button click
  const [showStudentCard, setShowStudentCard] = useState(false); // condition to show the card with complete information about student
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  // Fetching data on init
  useEffect(() => {
    initFetchData({ setStudents, setRoutes });
  }, []);

  // Function to control visibility of the list of all students
  function toggleStudentsList () {
    setShowStudents(!showStudents);
  }

  return (
    <>
      <SelectProfile/>
      <SelectRoute />
      <RoutePage />
      
      {/* <Context.Provider value={{ students }}>
        <NavBar toggleStudentsList={toggleStudentsList} />
        <main>
          <DropdownListRoutes
            routes={routes}
            setSelectedStudent={setSelectedStudent}
            setShowStudentCard={setShowStudentCard}
            onClose={() => setShowStudentCard(false)}
          />
          {showStudents && (
            <div className='overlay'>
              <AllStudentsList
                setSelectedStudent={setSelectedStudent}
                setShowStudentCard={setShowStudentCard}
                onClose={() => setShowStudents(false)}
                onSubmit={() => setShowNewStudentForm(true)}
              />
            </div>
          )}
          {showNewStudentForm && (
            <div className='overlay'>
              <NewStudentForm
                routes={routes}
                setStudents={setStudents}
                onClose={() => setShowNewStudentForm(false)}
              />
            </div>
          )}
          {showStudentCard && (
            <div className='overlay'>
              <StudentCard
                selectedStudent={selectedStudent}
                setStudents={setStudents}
                onClose={() => setShowStudentCard(false)}
              />
            </div>
          )}
        </main>
      </Context.Provider> */}
    </>
  );
}

export default App;
