import styles from './index.module.css';
import MuiButton from '@components/MUI/Button';
import Timeline from '@components/Timeline';

function RoutePage () {
  return (
    <div className={styles.container}>
      
      <div className={styles.header}>
        <h1>route A </h1>
        <MuiButton sxCustom={sxButton} content={"student list"} />
      </div>
      
      <div className={styles.content}>
        <Timeline/>
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
export default RoutePage;
