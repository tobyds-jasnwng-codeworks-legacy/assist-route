import styles from './index.module.css';
import CustomButton from '@components/CustomButton';

function SelectProfile () {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>please select your profile</h1>
        <div className={styles.buttonContainer}>
          <CustomButton sxCustom={sxButton} content={"driver"} />
          <CustomButton sxCustom={sxButton} content={"rider"} />
        </div>
      </div>
    </div>
  );
}

const sxButton = {
  width: 200,
  height: 60,
  backgroundColor: '#4dabf7',
  color: '#343a40',
  '&:hover': {
    backgroundColor: '#4dabf7',
    border: 2,
    boxShadow: 0,
    fontWeight: 600,
  }
};

export default SelectProfile;
