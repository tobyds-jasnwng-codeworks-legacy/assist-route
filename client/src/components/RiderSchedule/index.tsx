import styles from './index.module.css';
import MuiButton from '@components/MUI/Button';
import Schedule from '@components/Schedule';

function RiderSchedule () {
  return (
    <div className={styles.container}>
      
      <div className={styles.header}>
        <h1>Sunny's Upcoming Week</h1>
        <MuiButton sxCustom={sxButton} content={"contacts"} />
      </div>
      
      <div className={styles.content}>
        <div className={styles.selectedDay}></div>
        <div className={styles.timings}>
          <div className={styles.time}>
            <h4>morning</h4>
          </div>
          <div className={styles.time}>
           <h4>evening</h4>
          </div>
        </div>
        <div className={styles.schedule}>
          <Schedule />
        </div>
        <div className={styles.edits}>
          <MuiButton sxCustom={sxButton2} content={"edit"} />
          <MuiButton sxCustom={sxButton2} content={"edit"} />
        </div>
      </div>
    </div>
  );
}

const sxButton = {
  width: 200,
  height: 60,
  backgroundColor: '#eaddd7',
  color: '#343a40',
  '&:hover': {
    backgroundColor: '#eaddd7',
    border: 2,
    boxShadow: 0,
    fontWeight: 600,
  }
};


const sxButton2 = {
  width: 120,
  height: 80,
  backgroundColor: '#eaddd7',
  color: '#343a40',
  '&:hover': {
    backgroundColor: '#eaddd7',
    border: 2,
    boxShadow: 0,
    fontWeight: 600,
  }
};
export default RiderSchedule;
