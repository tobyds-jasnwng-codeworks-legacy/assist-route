import styles from './index.module.css';
import MuiButton from '@components/MUI/Button';

function SelectStudent () {
  return (
    <div className={styles.container}>
      
      <div className={styles.header}>
        <h1></h1>
        <div className={styles.buttonContainer}>
          <MuiButton sxCustom={sxButton2} content={"add rider"} />
          <MuiButton sxCustom={sxButton2} content={"add contact"} />
        </div>
      </div>

      <div className={styles.content}>
        <h1>please select a student</h1>
        <div className={styles.studentListContainer}>
          <div className={styles.button}><MuiButton sxCustom={sxButton} content={"Sunny Anter"} /></div>
          <div className={styles.button}><MuiButton sxCustom={sxButton} content={"Sam Bolge"} /></div>
          <div className={styles.button}><MuiButton sxCustom={sxButton} content={"Gerry Steffan"} /></div>
          <div className={styles.button}><MuiButton sxCustom={sxButton} content={"Tekraj Gurung"} /></div>
          <div className={styles.button}><MuiButton sxCustom={sxButton} content={"Sunny Anter"} /></div>
          <div className={styles.button}><MuiButton sxCustom={sxButton} content={"Sam Bolge"} /></div>
          <div className={styles.button}><MuiButton sxCustom={sxButton} content={"Gerry Steffan"} /></div>
          <div className={styles.button}><MuiButton sxCustom={sxButton} content={"Tekraj Gurung"} /></div>
          <div className={styles.button}><MuiButton sxCustom={sxButton} content={"Sunny Anter"} /></div>
          <div className={styles.button}><MuiButton sxCustom={sxButton} content={"Sam Bolge"} /></div>
          <div className={styles.button}><MuiButton sxCustom={sxButton} content={"Gerry Steffan"} /></div>
          <div className={styles.button}><MuiButton sxCustom={sxButton} content={"Tekraj Gurung"} /></div>
        </div>
      </div>
    </div>
  );
}

const sxButton = {
  width: 250,
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


const sxButton2 = {
  width: 250,
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

export default SelectStudent;
