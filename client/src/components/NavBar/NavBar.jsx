import PropTypes from 'prop-types';
import styles from './NavBar.module.css';

function NavBar ({ toggleStudentsList }) {
  return (
    <nav className={styles.nav}>
      <div>
        <h1 id='projectName' className={`lilita-one-regular ${styles.projectName}`}>
          ASSIST ROUTE
        </h1>
      </div>
      <button onClick={toggleStudentsList}>Manage students</button>
    </nav>
  );
}

NavBar.propTypes = {
  toggleStudentsList: PropTypes.func,
};

export default NavBar;
