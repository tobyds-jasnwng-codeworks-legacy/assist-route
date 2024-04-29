import routesData from '../data/routesData.json';

const Base_URL = import.meta.env.VITE_API_BASE_URL;

const studentsUrl = Base_URL
  ? `${Base_URL}/students/`
  : 'http://localhost:3000/students/'; // URL of the DB with students data

export async function initFetchData ({ setStudents, setRoutes }) {
  try {
    // Fetch students data
    const studentsResponse = await fetch(studentsUrl);
    const studentsBody = await studentsResponse.json();
    const sortedStudentsBody = studentsBody.sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    ); // Students are sorted by name in alphabetical order
    setStudents(sortedStudentsBody);

    // Set routes data from JSON file
    console.log('RD', routesData);
    setRoutes(routesData);
  } catch (error) {
    console.log('Error fetching data: ', error);
  }
}

export async function deleteStudent (id) {
  try {
    return await fetch(studentsUrl + id, {
      method: 'DELETE',
      mode: 'cors',
    });
  } catch (error) {
    console.log('Error deleting student: ', error);
    // add return
  }
}

export async function addStudent (formData) {
  try {
    const res = await fetch(studentsUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const newStudent = await res.json();
    return newStudent;
  } catch (error) {
    console.log('Error adding student: ', error);
    // add return
  }
}
