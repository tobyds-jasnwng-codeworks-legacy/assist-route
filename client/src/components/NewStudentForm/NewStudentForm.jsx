import './NewStudentForm.css';

function NewStudentForm ({ onClose }) {
  
  function handleSubmit () {
    console.log('Submitted');
  };

  function handleChange () {};

  return (
    <div id="newStudentFormContainer">
      <span className="close" onClick={onClose} aria-label="Close">&times;</span>
      <form id="NewStudentForm" className="form" onSubmit={handleSubmit}>
        <label className="formLabel">Name</label>
        <input className="formInput" type="text" name="name" placeholder="Insert first name..." onChange={handleChange}></input>
        <label className="formLabel">Last name</label>
        <input className="formInput" type="text" name="lastName" placeholder="Insert last name..." onChange={handleChange}></input>
        <label className="formLabel">Morning route</label>
        <input className="formInput" type="text" name="morningRoute" placeholder="Insert morning route if used..." onChange={handleChange}></input>
        {/* Pending: If a route is inserted, indicate that it is mandatory to insert a stop */}
        <label className="formLabel">Morning stop</label> 
        <input className="formInput" type="text" name="morningStop" placeholder="Insert morning route stop..." onChange={handleChange}></input>
        <label className="formLabel">Evening route</label>
        <input className="formInput" type="text" name="eveningRoute" placeholder="Insert evening route if used..." onChange={handleChange}></input>
        <label className="formLabel">Evening stop</label>
        <input className="formInput" type="text" name="eveningRoute" placeholder="Insert evening route stop..." onChange={handleChange}></input>
        <button id="SubmitNewStudent" type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default NewStudentForm;