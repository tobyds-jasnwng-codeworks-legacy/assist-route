import './NavBar.css';

function NavBar ({ toggleStudentsList }) {

  return (
    <nav>
      <div>
        <h1>ASSIST ROUTE</h1>
      </div>
      <button onClick={toggleStudentsList}>Manage students</button>
    </nav>
  );
}

export default NavBar;