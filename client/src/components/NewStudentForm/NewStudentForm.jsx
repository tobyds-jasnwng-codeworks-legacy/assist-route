import { useState } from 'react';
import './NewStudentForm.css';

function NewStudentForm ({ onClose, students, setStudents }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    morningRoute: '',
    morningStop: '',
    eveningRoute: '',
    eveningStop: '',
    contactPerson1: '',
    contactPerson1Phone: ''
  });

  function handleChange (e) {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };
  
  async function handleSubmit (e) {
    e.preventDefault();

    // Validation of mandatory fields
    if (!formData.firstName || !formData.lastName || (formData.morningRoute && !formData.morningStop) || (formData.eveningRoute && !formData.eveningStop)) {
      alert('Fields marked with * must be fulfilled.');
    }
    
    try {
      const res = await fetch('http://localhost:3000/students', {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData)
      })

      const newStudent = await res.json();
      setStudents([...students, newStudent].sort((a, b) => a.firstName.localeCompare(b.firstName))); // Adding new student to the list in an alphabetical order
      onClose();
    } catch (error) {
      console.log('Fetching error:', error);
    }
  };

  return (
    <div id="newStudentFormContainer">
      <span className="close" onClick={onClose} aria-label="Close">&times;</span>
      <form id="NewStudentForm" className="form" onSubmit={handleSubmit}>
        <label className="formLabel">Name *</label>
        <input className="formInput" type="text" name="firstName" value={formData.firstName || ''} placeholder="Insert first name..." onChange={handleChange}></input>
        <label className="formLabel">Last name *</label>
        <input className="formInput" type="text" name="lastName" value={formData.lastName || ''} placeholder="Insert last name..." onChange={handleChange}></input>
        <label className="formLabel">Morning route</label>
        <input className="formInput" type="text" name="morningRoute" value={formData.morningRoute || ''} placeholder="Insert morning route if used..." onChange={handleChange}></input>
        {formData.morningRoute && (
          <>
            <label className="formLabel">Morning stop</label> 
            <input className="formInput" type="text" name="morningStop" value={formData.morningStop || ''} placeholder="Insert morning route stop..." onChange={handleChange}></input>
          </>
        )}
        <label className="formLabel">Evening route</label>
        <input className="formInput" type="text" name="eveningRoute" value={formData.eveningRoute || ''} placeholder="Insert evening route if used..." onChange={handleChange}></input>
        {formData.eveningRoute && (
          <>
            <label className="formLabel">Evening stop</label>
            <input className="formInput" type="text" name="eveningStop" value={formData.eveningStop || ''} placeholder="Insert evening route stop..." onChange={handleChange}></input>
          </>
        )}
        <label className="formLabel">Contact person*</label>
        <input className="formInput" type="text" name="contactPerson1" value={formData.contactPerson1 || ''} placeholder="Insert contact person complete name..." onChange={handleChange}></input>
        <label className="formLabel">Contact person phone number *</label>
        <input className="formInput" type="text" name="contactPerson1Phone" value={formData.contactPerson1Phone || ''} placeholder="Insert contact person phone number..." onChange={handleChange}></input>
        <button id="SubmitNewStudent" type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default NewStudentForm;