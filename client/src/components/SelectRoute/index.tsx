import styles from './index.module.css';
import MuiSelect from '@components/MUI/Select';

function SelectRoute () {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>please select your route</h1>
        <div className={styles.buttonContainer}>
          <MuiSelect sxCustom={sxSelect} placeholder={'morning'} />
          <MuiSelect sxCustom={sxSelect} placeholder={'evening'} />
        </div>
      </div>
    </div>
  );
}

const sxSelect = {
  width: 200,
  height: 60,
  backgroundColor: '#4dabf7',
  color: '#343a40',
};

export default SelectRoute;
