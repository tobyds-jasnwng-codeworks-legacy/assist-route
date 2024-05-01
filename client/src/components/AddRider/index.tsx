
import styles from './index.module.css';
import { Input, FormControl, Select } from '@mui/material';
import MuiSelect from '@components/MUI/Select';

function AddRider () {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.modal}>
          <h2>Add new rider</h2>
          <form noValidate autoComplete="off">
            <FormControl sx={{}}>
              <Input sx={sxInput} placeholder="first name" />
              <Input sx={sxInput} placeholder="last name" />
              <MuiSelect sxCustom={sxSelect} placeholder={'morning route'} />
              <MuiSelect sxCustom={sxSelect} placeholder={'morning stop'} />
              <MuiSelect sxCustom={sxSelect} placeholder={'evening route'} />
              <MuiSelect sxCustom={sxSelect} placeholder={'evening stop'} />
              <MuiSelect sxCustom={sxSelect} placeholder={'primary contact'} />
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  );
}

const sxInput = {
  height: 50,
  width: 300,
  fontFamily: 'Josefin Sans',
  fontSize: 24,
  style: { textAlign: 'center' }
}

const sxSelect = {
  width: 300,
  height: 50,
  backgroundColor: '#4dabf7',
  color: '#343a40',
};

export default AddRider;
