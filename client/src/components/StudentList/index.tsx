
import CollapsibleTable from "@components/MUI/Table";
import styles from './index.module.css';

function StudentList () {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.modal}>
          <h2>Student List</h2>
          <CollapsibleTable/>

        </div>
      </div>
    </div>
  );
}


export default StudentList;
