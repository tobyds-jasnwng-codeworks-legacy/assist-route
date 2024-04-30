import { MouseEventHandler } from 'react';
import styles from './index.module.css';

function NavBar ({ toggleStudentsList }: Props) {
  return (
    <nav className={styles.nav}>
      <div>
        <h1
          id='projectName'
          className={`lilita-one-regular ${styles.projectName}`}
        >
          ASSIST ROUTE
        </h1>
      </div>
      <button onClick={toggleStudentsList}>Manage students</button>
    </nav>
  );
}

type Props = {
  toggleStudentsList: MouseEventHandler<HTMLButtonElement>;
};

export default NavBar;
