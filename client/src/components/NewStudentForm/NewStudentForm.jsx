import { useState } from 'react';
import './NewStudentForm.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { addStudent } from '@services/ApiServices';
import { useContext } from 'react';
import { Context } from '../../App';


function NewStudentForm ({ routes, onClose, setStudents }) {
  const { students } = useContext(Context);
  const morningRoutes = routes.filter((route) => route.type === 'morning');
  const eveningRoutes = routes.filter((route) => route.type === 'evening');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    morningRoute: '',
    morningStop: '',
    eveningRoute: '',
    eveningStop: '',
    contactPerson1: '',
    contactPerson1Phone: '',
    address: '',
    additionalInfo: '',
  });

  function handleChange (e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit (e) {
    e.preventDefault();

    // Validation of mandatory fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.contactPerson1 ||
      !formData.contactPerson1Phone
    ) {
      alert('Fields marked with * must be fulfilled.');
    } else if (!formData.morningRoute && !formData.eveningRoute) {
      alert('At least one route should be selected.');
    } else if (
      (formData.morningRoute && !formData.morningStop) ||
      (formData.eveningRoute && !formData.eveningStop)
    ) {
      alert('Please, select the stop.');
    }

    const newStudent = await addStudent(formData);
    setStudents(
      [
        ...students,
        newStudent,
      ] /* .sort((a, b) => a.firstName.localeCompare(b.firstName))*/
    ); // Adding new student to the list in an alphabetical order
    onClose();
  }

  return (
    <div id='newStudentFormContainer'>
      <AiFillCloseCircle
        className='close'
        onClick={onClose}
        aria-label='Close'
      />
      <form id='NewStudentForm' className='form' onSubmit={handleSubmit}>
        <label htmlFor='firstName' className='formLabel'>
          Name *
        </label>
        <input
          className='formInput'
          type='text'
          name='firstName'
          value={formData.firstName || ''}
          placeholder='Insert first name...'
          onChange={handleChange}
        ></input>
        <label htmlFor='lastName' className='formLabel'>
          Last name *
        </label>
        <input
          className='formInput'
          type='text'
          name='lastName'
          value={formData.lastName || ''}
          placeholder='Insert last name...'
          onChange={handleChange}
        ></input>
        <label htmlFor='morningRoute' className='formLabel'>
          Morning route
        </label>
        <select
          name='morningRoute'
          value={formData.morningRoute}
          onChange={handleChange}
        >
          <option disabled value=''>
            Choose your route...
          </option>
          {morningRoutes.map((route) => (
            <option key={route.id} value={route.name}>
              {route.name}
            </option>
          ))}
        </select>
        {formData.morningRoute && (
          <>
            <label htmlFor='morningStop' className='formLabel'>
              Morning stop
            </label>
            <select
              name='morningStop'
              value={formData.morningStop}
              onChange={handleChange}
            >
              <option disabled value=''>
                Choose morning stop...
              </option>
              {morningRoutes
                .find((route) => route.name === formData.morningRoute)
                .stops.map((stop) => (
                  <option key={stop.id} value={stop.name}>
                    {stop.name}
                  </option>
                ))}
            </select>
          </>
        )}
        <label htmlFor='eveningRoute' className='formLabel'>
          Evening route
        </label>
        <select
          name='eveningRoute'
          value={formData.eveningRoute}
          onChange={handleChange}
        >
          <option disabled value=''>
            Choose your route...
          </option>
          {eveningRoutes.map((route) => (
            <option key={route.id} name='eveningRoute' value={route.name}>
              {route.name}
            </option>
          ))}
        </select>
        {formData.eveningRoute && (
          <>
            <label htmlFor='eveningStop' className='formLabel'>
              Evening stop
            </label>
            <select
              name='eveningStop'
              value={formData.eveningStop}
              onChange={handleChange}
            >
              <option disabled value=''>
                Choose evening stop...
              </option>
              {eveningRoutes
                .find((route) => route.name === formData.eveningRoute)
                .stops.map((stop) => (
                  <option key={stop.id} value={stop.name}>
                    {stop.name}
                  </option>
                ))}
            </select>
          </>
        )}
        <label htmlFor='contactPerson1' className='formLabel'>
          Contact person*
        </label>
        <input
          className='formInput'
          type='text'
          name='contactPerson1'
          value={formData.contactPerson1 || ''}
          placeholder='Insert contact person complete name...'
          onChange={handleChange}
        ></input>
        <label htmlFor='contactPerson1Phone' className='formLabel'>
          Contact person phone number *
        </label>
        <input
          className='formInput'
          type='text'
          name='contactPerson1Phone'
          value={formData.contactPerson1Phone || ''}
          placeholder='Insert contact person phone number...'
          onChange={handleChange}
        ></input>
        <label htmlFor='contactPerson2' className='formLabel'>
          Second contact person
        </label>
        <input
          className='formInput'
          type='text'
          name='contactPerson2'
          value={formData.contactPerson2 || ''}
          placeholder='Insert second contact person complete name...'
          onChange={handleChange}
        ></input>
        <label htmlFor='contactPerson2Phone' className='formLabel'>
          Second contact person phone number
        </label>
        <input
          className='formInput'
          type='text'
          name='contactPerson2Phone'
          value={formData.contactPerson2Phone || ''}
          placeholder='Insert contact person phone number...'
          onChange={handleChange}
        ></input>
        <label htmlFor='address' className='formLabel'>
          Home address
        </label>
        <input
          className='formInput'
          type='text'
          name='address'
          value={formData.address || ''}
          placeholder='Insert studen´s home address...'
          onChange={handleChange}
        ></input>
        <button id='SubmitNewStudent' type='submit'>
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default NewStudentForm;
